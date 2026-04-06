const express = require('express');
const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');

const app = express();
const db = new Database(process.env.DB_PATH || 'theia.db');
const JWT_SECRET = process.env.JWT_SECRET || 'theia-secret-cambia-en-produccion-2026';
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    rol TEXT NOT NULL DEFAULT 'vendedor',
    activo INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL DEFAULT (datetime('now','localtime'))
  );
  CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cod TEXT UNIQUE NOT NULL,
    nom TEXT NOT NULL,
    cat TEXT NOT NULL,
    stock REAL NOT NULL DEFAULT 0,
    punto REAL NOT NULL DEFAULT 1
  );
  CREATE TABLE IF NOT EXISTS ventas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cod TEXT UNIQUE NOT NULL,
    fecha TEXT NOT NULL,
    cliente TEXT NOT NULL,
    tel TEXT DEFAULT '',
    canal TEXT DEFAULT '',
    producto TEXT NOT NULL,
    cantidad REAL NOT NULL,
    precio_usd REAL NOT NULL,
    dolar REAL NOT NULL,
    total_usd REAL NOT NULL,
    total_ars REAL NOT NULL,
    pago TEXT DEFAULT '',
    estado TEXT NOT NULL DEFAULT 'Pendiente',
    logistica TEXT DEFAULT '',
    dir TEXT DEFAULT '',
    obs TEXT DEFAULT '',
    colocador TEXT DEFAULT '',
    user_id INTEGER,
    created_at TEXT NOT NULL DEFAULT (datetime('now','localtime')),
    FOREIGN KEY(user_id) REFERENCES users(id)
  );
  CREATE TABLE IF NOT EXISTS ingresos_stock (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fecha TEXT NOT NULL DEFAULT (datetime('now','localtime')),
    producto_cod TEXT NOT NULL,
    contenedor TEXT DEFAULT '',
    cantidad REAL NOT NULL,
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id)
  );
`);

if (!db.prepare('SELECT id FROM users WHERE username = ?').get('admin')) {
  db.prepare('INSERT INTO users (nombre, username, password, rol) VALUES (?,?,?,?)')
    .run('Administrador', 'admin', bcrypt.hashSync('Theia2025', 10), 'admin');
  console.log('✅ Admin creado: admin / Theia2025');
}

if (db.prepare('SELECT COUNT(*) as c FROM productos').get().c === 0) {
  const ins = db.prepare('INSERT OR IGNORE INTO productos (cod,nom,cat,stock,punto) VALUES (?,?,?,?,?)');
  const prods = [
    ['D-0302-2','WALL PANEL WPC | TEAK','WPC',0,50],
    ['D-0302-1','WALL PANEL WPC | TEAK AND BLACK','WPC',0,50],
    ['D-0303-10','PERFIL ESQUINERO WPC','WPC',0,20],
    ['D-0303-11','TERMINACION WPC','WPC',0,20],
    ['D-0303-5','PERFIL WPC | 12X12','WPC',0,20],
    ['D-0303-7','PERFIL WPC | 6X4','WPC',0,20],
    ['D-0303-3','PERFIL WPC | 9X4','WPC',0,20],
    ['D-0303-4','PERFIL WPC | 5X2','WPC',0,20],
    ['D-0301-1','WALL PANEL PREMIUM T1 - FRESNO BETA','INTERIOR',0,100],
    ['D-0301-2','WALL PANEL PREMIUM T2 - FRESNO','INTERIOR',0,100],
    ['D-0301-3','WALL PANEL PREMIUM T3 - HAYA','INTERIOR',0,100],
    ['D-0301-4','WALL PANEL PREMIUM T4 - ROBLE','INTERIOR',0,100],
    ['MD-202-1','WOOD PANEL FB | T1','INTERIOR',0,10],
    ['MD-202-2','WOOD PANEL FB | T2','INTERIOR',0,10],
    ['MD-202-3','WOOD PANEL FB | T3','INTERIOR',0,10],
    ['D-0302-3','PLACA SIMIL MARMOL','INTERIOR',0,10],
    ['D-0304-3','WALL PANEL PVC','INTERIOR',0,100],
    ['D-0304-1','WOOD PANEL PVC','INTERIOR',0,50],
    ['D-0305-1','ACCENT CHAIR','MUEBLES',0,1],
    ['D-0305-2','WEGNER CHAIR','MUEBLES',0,1],
    ['D-0305-3','PIERRE JEAN CHAIR','MUEBLES',0,1],
    ['D-0305-4','EAMES LOUNGE SWIVEL CHAIR','MUEBLES',0,1],
    ['D-0305-6','EAMES LOUNGE CHAIR OTTOMAN','MUEBLES',0,1],
    ['D-0401-1','NORDIC ASH CHAIR','MUEBLES',0,1],
    ['D-0402-1','EAMES PLYWOOD CHAIR','MUEBLES',0,1],
    ['D-0403-1','BIARRITZ CHAIR','MUEBLES',0,1],
    ['D-0402-2','HANSEN LOUNGE CHAIR','MUEBLES',0,1],
    ['D-0402-3','CURVED AUXILIAR TABLE','MUEBLES',0,1],
    ['D-0402-4','BUTERFLY STOOL','MUEBLES',0,1],
    ['D-0404-1','SILLA COVER','MUEBLES',0,1],
    ['D-0405-1','WOOD TABURETE','MUEBLES',0,1],
    ['D-0402-5','MESA REDONDA','MUEBLES',0,1],
    ['D-0402-6','MESA CURVED','MUEBLES',0,1],
  ];
  db.transaction(rows => rows.forEach(r => ins.run(...r)))(prods);
  console.log('✅ Productos cargados (stock en 0)');
}

// ─── Middleware ───────────────────────────────────────────────────────────────

function auth(req, res, next) {
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Sin token' });
  try { req.user = jwt.verify(token, JWT_SECRET); next(); }
  catch { res.status(401).json({ error: 'Token inválido o expirado' }); }
}

function adminOnly(req, res, next) {
  if (req.user.rol !== 'admin') return res.status(403).json({ error: 'Acceso denegado' });
  next();
}

// ─── Auth ─────────────────────────────────────────────────────────────────────

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body || {};
  const user = db.prepare('SELECT * FROM users WHERE username = ? AND activo = 1').get((username||'').trim().toLowerCase());
  if (!user || !bcrypt.compareSync(password||'', user.password))
    return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
  const payload = { id: user.id, nombre: user.nombre, username: user.username, rol: user.rol };
  res.json({ token: jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' }), user: payload });
});

app.post('/api/auth/change-password', auth, (req, res) => {
  const { actual, nueva } = req.body || {};
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
  if (!bcrypt.compareSync(actual||'', user.password)) return res.status(400).json({ error: 'Contraseña actual incorrecta' });
  if (!nueva || nueva.length < 6) return res.status(400).json({ error: 'Mínimo 6 caracteres' });
  db.prepare('UPDATE users SET password = ? WHERE id = ?').run(bcrypt.hashSync(nueva, 10), req.user.id);
  res.json({ ok: true });
});

// ─── Usuarios ─────────────────────────────────────────────────────────────────

app.get('/api/users', auth, adminOnly, (req, res) =>
  res.json(db.prepare('SELECT id,nombre,username,rol,activo,created_at FROM users ORDER BY created_at DESC').all()));

app.post('/api/users', auth, adminOnly, (req, res) => {
  const { nombre, username, password, rol } = req.body || {};
  if (!nombre || !username || !password) return res.status(400).json({ error: 'Faltan campos' });
  if (password.length < 6) return res.status(400).json({ error: 'Contraseña mínima 6 caracteres' });
  try {
    const r = db.prepare('INSERT INTO users (nombre,username,password,rol) VALUES (?,?,?,?)')
      .run(nombre.trim(), username.trim().toLowerCase(), bcrypt.hashSync(password, 10), rol || 'vendedor');
    res.json({ id: r.lastInsertRowid, nombre, username: username.toLowerCase(), rol: rol || 'vendedor', activo: 1 });
  } catch { res.status(400).json({ error: 'El nombre de usuario ya existe' }); }
});

app.put('/api/users/:id', auth, adminOnly, (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, rol, activo, password } = req.body || {};
  if (activo === 0 && id === req.user.id) return res.status(400).json({ error: 'No podés desactivarte' });
  if (password) {
    if (password.length < 6) return res.status(400).json({ error: 'Mínimo 6 caracteres' });
    db.prepare('UPDATE users SET nombre=?,rol=?,activo=?,password=? WHERE id=?').run(nombre, rol, activo, bcrypt.hashSync(password, 10), id);
  } else {
    db.prepare('UPDATE users SET nombre=?,rol=?,activo=? WHERE id=?').run(nombre, rol, activo, id);
  }
  res.json({ ok: true });
});

// ─── Productos ────────────────────────────────────────────────────────────────

app.get('/api/productos', auth, (req, res) =>
  res.json(db.prepare('SELECT * FROM productos ORDER BY cat, nom').all()));

app.post('/api/productos', auth, adminOnly, (req, res) => {
  const { cod, nom, cat, stock, punto } = req.body || {};
  if (!cod || !nom || !cat) return res.status(400).json({ error: 'Faltan campos' });
  try {
    const r = db.prepare('INSERT INTO productos (cod,nom,cat,stock,punto) VALUES (?,?,?,?,?)')
      .run(cod.trim().toUpperCase(), nom.trim().toUpperCase(), cat, stock || 0, punto || 1);
    res.json({ id: r.lastInsertRowid, cod: cod.toUpperCase(), nom: nom.toUpperCase(), cat, stock: stock || 0, punto: punto || 1 });
  } catch { res.status(400).json({ error: 'El código ya existe' }); }
});

app.put('/api/productos/:id', auth, adminOnly, (req, res) => {
  const { nom, cat, punto } = req.body || {};
  db.prepare('UPDATE productos SET nom=?,cat=?,punto=? WHERE id=?').run(nom, cat, punto, req.params.id);
  res.json({ ok: true });
});

// Ingreso de stock (suma cantidad)
app.post('/api/productos/:cod/ingreso', auth, (req, res) => {
  const { cantidad, contenedor } = req.body || {};
  if (!cantidad || cantidad <= 0) return res.status(400).json({ error: 'Cantidad inválida' });
  const prod = db.prepare('SELECT * FROM productos WHERE cod = ?').get(req.params.cod);
  if (!prod) return res.status(404).json({ error: 'Producto no encontrado' });
  db.prepare('UPDATE productos SET stock = stock + ? WHERE cod = ?').run(cantidad, req.params.cod);
  db.prepare('INSERT INTO ingresos_stock (producto_cod,contenedor,cantidad,user_id) VALUES (?,?,?,?)')
    .run(req.params.cod, contenedor || '', cantidad, req.user.id);
  res.json({ ok: true });
});

// Ajuste directo de stock
app.put('/api/productos/:id/stock', auth, (req, res) => {
  const { stock } = req.body || {};
  if (stock === undefined || stock === null || stock === '') return res.status(400).json({ error: 'Stock inválido' });
  db.prepare('UPDATE productos SET stock = ? WHERE id = ?').run(parseFloat(stock), req.params.id);
  res.json({ ok: true });
});

// ─── Ventas ───────────────────────────────────────────────────────────────────

app.get('/api/ventas', auth, (req, res) =>
  res.json(db.prepare(`
    SELECT v.*, u.nombre as vendedor FROM ventas v
    LEFT JOIN users u ON v.user_id = u.id
    ORDER BY v.fecha DESC, v.created_at DESC
  `).all()));

app.post('/api/ventas', auth, (req, res) => {
  const v = req.body || {};
  if (!v.cliente || !v.producto || !v.cantidad || !v.precio_usd)
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  const fecha = v.fecha || new Date().toISOString().split('T')[0];
  const mes = fecha.substring(0, 7).replace('-', '');
  const prefix = `TV-${mes}`;
  const count = db.prepare("SELECT COUNT(*) as c FROM ventas WHERE cod LIKE ?").get(`${prefix}%`).c;
  const cod = `${prefix}-${(count + 1).toString().padStart(3, '0')}`;
  const total_usd = parseFloat((v.cantidad * v.precio_usd).toFixed(2));
  const total_ars = Math.round(total_usd * v.dolar);
  try {
    db.prepare(`INSERT INTO ventas (cod,fecha,cliente,tel,canal,producto,cantidad,precio_usd,dolar,total_usd,total_ars,pago,estado,logistica,dir,obs,colocador,user_id)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`)
      .run(cod, fecha, v.cliente, v.tel||'', v.canal||'', v.producto, v.cantidad, v.precio_usd,
           v.dolar, total_usd, total_ars, v.pago||'', v.estado||'Pendiente',
           v.logistica||'', v.dir||'', v.obs||'', v.colocador||'', req.user.id);
    db.prepare('UPDATE productos SET stock = stock - ? WHERE nom = ?').run(v.cantidad, v.producto);
    res.json({ cod, total_usd, total_ars });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

app.put('/api/ventas/:id', auth, (req, res) => {
  const { estado, logistica, obs, colocador } = req.body || {};
  db.prepare('UPDATE ventas SET estado=?,logistica=?,obs=?,colocador=? WHERE id=?')
    .run(estado, logistica, obs, colocador, req.params.id);
  res.json({ ok: true });
});

// ─── Resumen mensual ──────────────────────────────────────────────────────────

app.get('/api/resumen', auth, (req, res) => {
  const mes = req.query.mes || new Date().toISOString().substring(0, 7);
  const desde = `${mes}-01`;
  const hasta = `${mes}-31`;
  const g = (sql, ...p) => db.prepare(sql).get(...p);
  res.json({
    mes,
    ventas_mes_usd:   g("SELECT COALESCE(SUM(total_usd),0) as v FROM ventas WHERE fecha BETWEEN ? AND ?", desde, hasta).v,
    ventas_mes_ars:   g("SELECT COALESCE(SUM(total_ars),0) as v FROM ventas WHERE fecha BETWEEN ? AND ?", desde, hasta).v,
    cant_ventas_mes:  g("SELECT COUNT(*) as v FROM ventas WHERE fecha BETWEEN ? AND ?", desde, hasta).v,
    pendiente:        g("SELECT COALESCE(SUM(total_ars),0) as v FROM ventas WHERE estado != 'Pagado'").v,
    pendiente_mes:    g("SELECT COALESCE(SUM(total_ars),0) as v FROM ventas WHERE estado != 'Pagado' AND fecha BETWEEN ? AND ?", desde, hasta).v,
    productos_alerta: g("SELECT COUNT(*) as v FROM productos WHERE stock > 0 AND stock <= punto").v,
    productos_sin_stock: g("SELECT COUNT(*) as v FROM productos WHERE stock <= 0").v,
    ventas_recientes: db.prepare(`
      SELECT v.*, u.nombre as vendedor FROM ventas v
      LEFT JOIN users u ON v.user_id = u.id
      WHERE v.fecha BETWEEN ? AND ?
      ORDER BY v.fecha DESC LIMIT 8
    `).all(desde, hasta),
  });
});


// Eliminar producto
app.delete('/api/productos/:id', auth, adminOnly, (req, res) => {
  db.prepare('DELETE FROM productos WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// Borrar TODO el historial de ventas (admin)
app.delete('/api/ventas/all', auth, adminOnly, (req, res) => {
  db.prepare('DELETE FROM ventas').run();
  res.json({ ok: true });
});

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(PORT, () => console.log(`\n🚀 Theia en http://localhost:${PORT}  —  admin / Theia2025\n`));
