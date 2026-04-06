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

// ─── Base de datos ────────────────────────────────────────────────────────────

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

// Seed: admin
if (!db.prepare('SELECT id FROM users WHERE username = ?').get('admin')) {
  db.prepare('INSERT INTO users (nombre, username, password, rol) VALUES (?,?,?,?)')
    .run('Administrador', 'admin', bcrypt.hashSync('Admin123!', 10), 'admin');
  console.log('✅ Admin creado: admin / Admin123!');
}

// Seed: productos
if (db.prepare('SELECT COUNT(*) as c FROM productos').get().c === 0) {
  const ins = db.prepare('INSERT OR IGNORE INTO productos (cod,nom,cat,stock,punto) VALUES (?,?,?,?,?)');
  const prods = [
    ['D-0301-1','Wall Panel Premium T1 - Color Fresno beta','Wall panel Int',500,200],
    ['D-0301-2','Wall Panel Premium T2 - Color Fresno','Wall panel Int',481,200],
    ['D-0301-3','Wall Panel Premium T3 - Color Haya','Wall panel Int',500,200],
    ['D-0301-4','Wall Panel Premium T4 - Color Roble','Wall panel Int',464,200],
    ['MD-202-1','WOOD PANEL FB | T1','Wood panel',46,1],
    ['MD-202-2','WOOD PANEL FB | T2','Wood panel',86,1],
    ['MD-202-3','WOOD PANEL FB | T3','Wood panel',67,1],
    ['D-0302-3','PLACA SIMIL MARMOL','Marmol series',-102,1],
    ['D-0304-3','WALL PANEL PVC','Wall panel Int',572,200],
    ['D-0304-1','WOOD PANEL PVC','Wood panel',205,50],
    ['D-0302-2','WALL PANEL WPC | TEAK','Revestimiento Ext',491,200],
    ['D-0302-1','WALL PANEL WPC | TEAK AND BLACK','Revestimiento Ext',331,200],
    ['D-0303-10','PERFIL ESQUINERO WPC','Revestimiento Ext',100,50],
    ['D-0303-11','TERMINACION WPC','Revestimiento Ext',100,50],
    ['D-0303-5','PERFIL WPC | 12X12','Revestimiento Ext',50,50],
    ['D-0303-7','PERFIL WPC | 6X4','Revestimiento Ext',290,50],
    ['D-0303-3','PERFIL WPC | 9X4','Revestimiento Ext',100,50],
    ['D-0303-4','PERFIL WPC | 5X2','Revestimiento Ext',100,50],
    ['D-0305-1','ACCENT CHAIR','Muebles',3,1],
    ['D-0305-2','WEGNER CHAIR','Muebles',9,1],
    ['D-0305-3','PIERRE JEAN CHAIR','Muebles',30,1],
    ['D-0305-4','EAMES LOUNGE SWIVEL CHAIR','Muebles',8,1],
    ['D-0305-6','EAMES LOUNGE CHAIR OTTOMAN','Muebles',3,1],
    ['D-0401-1','NORDIC ASH CHAIR','Muebles',4,1],
    ['D-0402-1','Eames Plywood Chair','Muebles',19,1],
    ['D-0403-1','Biarritz Chair','Muebles',21,1],
    ['D-0402-2','Hansen Lounge Chair','Muebles',9,1],
    ['D-0402-3','Curved Auxiliar Table','Muebles',10,1],
    ['D-0402-4','Buterfly Stool','Muebles',9,1],
    ['D-0404-1','Silla Cover','Muebles',23,1],
    ['D-0405-1','Wood Taburete','Muebles',11,1],
    ['D-0402-5','MESA REDONDA','Muebles',4,1],
    ['D-0402-6','Mesa Curved','Muebles',4,1],
  ];
  const seedMany = db.transaction(rows => rows.forEach(r => ins.run(...r)));
  seedMany(prods);
  console.log('✅ Productos cargados');
}

// Seed: ventas históricas
if (db.prepare('SELECT COUNT(*) as c FROM ventas').get().c === 0) {
  const insV = db.prepare(`INSERT OR IGNORE INTO ventas (cod,fecha,cliente,tel,canal,producto,cantidad,precio_usd,dolar,total_usd,total_ars,pago,estado,logistica,dir,obs,user_id)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);
  const ventasInit = [
    ['TH-001','2026-02-02','CRISTIAN','1162988080','cliente recurrente','WALL PANEL PVC',34,28.27,1450,961.38,1394000,'Dolares','Pagado','Retiro','','',1],
    ['TH-002a','2026-02-04','MARIA LUISA CARLESSI','1130362301','recomendacion','WALL PANEL PVC',15,10.97,1450,164.48,238500,'Dolares','Pagado','Flete envio','GASCON 552 1K','',1],
    ['TH-002b','2026-02-04','MARIA LUISA CARLESSI','1130362301','recomendacion','PLACA SIMIL MARMOL',6,34.48,1450,206.9,300000,'Dolares','Pagado','Flete envio','GASCON 552 1K','',1],
    ['TH-003','2026-02-06','OMAR','','recomendacion','PLACA SIMIL MARMOL',100,34.48,1450,3448.28,5000000,'Transferencia','Pagado','Flete envio','SAN JUSTO | FABRICA','',1],
    ['TH-004','2026-02-06','ADRIANA CROSETTO','','recomendacion','WALL PANEL PVC',13,9.65,1450,125.52,182000,'Efectivo','Pagado','Flete envio','AVIADOR UDET 2451','',1],
    ['TH-005a','2026-02-09','ALEJANDROS BASTOS','1157608556','Instagram','Wall Panel Premium T4 - Color Roble',36,18.21,1450,655.45,950400,'Efectivo','Pagado','En Depósito','PARAGUAY 198','PAGO SEÑA $800,000',1],
    ['TD-001','2026-03-27','Fernando - Metro','','recomendacion','WALL PANEL WPC | TEAK',115,37.99,1410,4368.79,6160000,'Efectivo','Pagado','Flete envio','','',1],
    ['TD-002','2026-03-27','Agustin','','recomendacion','PLACA SIMIL MARMOL',15,28.57,1400,428.57,600000,'Efectivo','Pagado','Retiro','','',1],
    ['TM-001','2026-03-12','Marina Doallo','','recomendacion','Wall Panel Premium T2 - Color Fresno',7,24.14,1410,169,238290,'Transferencia','Pagado','Flete envio','','',1],
    ['TM-002','2026-03-13','Marina Doallo','','recomendacion','Wall Panel Premium T2 - Color Fresno',12,24.17,1410,290,408900,'Transferencia','Pagado','Flete envio','','',1],
    ['TS-001','2026-03-24','TIMS','','recomendacion','WALL PANEL PVC',31,34.09,1400,1056.88,1479630,'Transferencia','Pagado','Enviado','','',1],
    ['TS-002','2026-03-24','DELEGLIESE MARIANA','','recomendacion','WALL PANEL WPC | TEAK',16,60.5,1400,968,1355200,'Transferencia','Pagado','Entregado','','',1],
    ['TS-003','2026-03-23','WALTER LOMBARDO','','recomendacion','PLACA SIMIL MARMOL',1,47.53,1400,47.53,66500,'Transferencia','Pagado','Entregado','','',1],
  ];
  const seedVentas = db.transaction(rows => rows.forEach(r => insV.run(...r)));
  seedVentas(ventasInit);
  console.log('✅ Ventas históricas cargadas');
}

// ─── Middleware ───────────────────────────────────────────────────────────────

function auth(req, res, next) {
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Sin token' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Token inválido o expirado' });
  }
}

function adminOnly(req, res, next) {
  if (req.user.rol !== 'admin') return res.status(403).json({ error: 'Acceso denegado' });
  next();
}

// ─── Auth ─────────────────────────────────────────────────────────────────────

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: 'Faltan datos' });
  const user = db.prepare('SELECT * FROM users WHERE username = ? AND activo = 1').get(username.trim().toLowerCase());
  if (!user || !bcrypt.compareSync(password, user.password))
    return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
  const payload = { id: user.id, nombre: user.nombre, username: user.username, rol: user.rol };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: payload });
});

app.post('/api/auth/change-password', auth, (req, res) => {
  const { actual, nueva } = req.body || {};
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
  if (!bcrypt.compareSync(actual, user.password)) return res.status(400).json({ error: 'Contraseña actual incorrecta' });
  if (!nueva || nueva.length < 6) return res.status(400).json({ error: 'La nueva contraseña debe tener al menos 6 caracteres' });
  db.prepare('UPDATE users SET password = ? WHERE id = ?').run(bcrypt.hashSync(nueva, 10), req.user.id);
  res.json({ ok: true });
});

// ─── Usuarios (admin) ─────────────────────────────────────────────────────────

app.get('/api/users', auth, adminOnly, (req, res) => {
  res.json(db.prepare('SELECT id,nombre,username,rol,activo,created_at FROM users ORDER BY created_at DESC').all());
});

app.post('/api/users', auth, adminOnly, (req, res) => {
  const { nombre, username, password, rol } = req.body || {};
  if (!nombre || !username || !password) return res.status(400).json({ error: 'Faltan campos obligatorios' });
  if (password.length < 6) return res.status(400).json({ error: 'Contraseña mínima 6 caracteres' });
  try {
    const r = db.prepare('INSERT INTO users (nombre,username,password,rol) VALUES (?,?,?,?)')
      .run(nombre.trim(), username.trim().toLowerCase(), bcrypt.hashSync(password, 10), rol || 'vendedor');
    res.json({ id: r.lastInsertRowid, nombre, username: username.toLowerCase(), rol: rol || 'vendedor', activo: 1 });
  } catch {
    res.status(400).json({ error: 'El nombre de usuario ya existe' });
  }
});

app.put('/api/users/:id', auth, adminOnly, (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, rol, activo, password } = req.body || {};
  if (activo === 0 && id === req.user.id) return res.status(400).json({ error: 'No podés desactivarte a vos mismo' });
  if (password) {
    if (password.length < 6) return res.status(400).json({ error: 'Contraseña mínima 6 caracteres' });
    db.prepare('UPDATE users SET nombre=?,rol=?,activo=?,password=? WHERE id=?')
      .run(nombre, rol, activo, bcrypt.hashSync(password, 10), id);
  } else {
    db.prepare('UPDATE users SET nombre=?,rol=?,activo=? WHERE id=?').run(nombre, rol, activo, id);
  }
  res.json({ ok: true });
});

// ─── Productos ────────────────────────────────────────────────────────────────

app.get('/api/productos', auth, (req, res) => {
  res.json(db.prepare('SELECT * FROM productos ORDER BY cat, nom').all());
});

app.post('/api/productos', auth, adminOnly, (req, res) => {
  const { cod, nom, cat, stock, punto } = req.body || {};
  if (!cod || !nom || !cat) return res.status(400).json({ error: 'Faltan campos' });
  try {
    const r = db.prepare('INSERT INTO productos (cod,nom,cat,stock,punto) VALUES (?,?,?,?,?)')
      .run(cod.trim(), nom.trim(), cat.trim(), stock || 0, punto || 1);
    res.json({ id: r.lastInsertRowid, cod, nom, cat, stock: stock || 0, punto: punto || 1 });
  } catch {
    res.status(400).json({ error: 'El código ya existe' });
  }
});

app.put('/api/productos/:id', auth, adminOnly, (req, res) => {
  const { nom, cat, punto } = req.body || {};
  db.prepare('UPDATE productos SET nom=?,cat=?,punto=? WHERE id=?').run(nom, cat, punto, req.params.id);
  res.json({ ok: true });
});

app.post('/api/productos/:cod/ingreso', auth, (req, res) => {
  const { cantidad, contenedor } = req.body || {};
  if (!cantidad || cantidad <= 0) return res.status(400).json({ error: 'Cantidad inválida' });
  const prod = db.prepare('SELECT * FROM productos WHERE cod = ?').get(req.params.cod);
  if (!prod) return res.status(404).json({ error: 'Producto no encontrado' });
  db.prepare('UPDATE productos SET stock = stock + ? WHERE cod = ?').run(cantidad, req.params.cod);
  db.prepare('INSERT INTO ingresos_stock (producto_cod,contenedor,cantidad,user_id) VALUES (?,?,?,?)')
    .run(req.params.cod, contenedor || '', cantidad, req.user.id);
  res.json({ ok: true, stock_nuevo: prod.stock + cantidad });
});

// ─── Ventas ───────────────────────────────────────────────────────────────────

app.get('/api/ventas', auth, (req, res) => {
  const rows = db.prepare(`
    SELECT v.*, u.nombre as vendedor 
    FROM ventas v 
    LEFT JOIN users u ON v.user_id = u.id 
    ORDER BY v.fecha DESC, v.created_at DESC
  `).all();
  res.json(rows);
});

app.post('/api/ventas', auth, (req, res) => {
  const v = req.body || {};
  if (!v.cliente || !v.producto || !v.cantidad || !v.precio_usd)
    return res.status(400).json({ error: 'Faltan campos obligatorios' });

  const now = new Date();
  const mes = (now.getMonth() + 1).toString().padStart(2, '0');
  const prefix = `TV-${mes}`;
  const count = db.prepare("SELECT COUNT(*) as c FROM ventas WHERE cod LIKE ?").get(`${prefix}%`).c;
  const cod = `${prefix}-${(count + 1).toString().padStart(3, '0')}`;

  const total_usd = parseFloat((v.cantidad * v.precio_usd).toFixed(2));
  const total_ars = Math.round(total_usd * v.dolar);

  try {
    db.prepare(`INSERT INTO ventas (cod,fecha,cliente,tel,canal,producto,cantidad,precio_usd,dolar,total_usd,total_ars,pago,estado,logistica,dir,obs,colocador,user_id)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`)
      .run(cod, v.fecha, v.cliente, v.tel||'', v.canal||'', v.producto, v.cantidad, v.precio_usd, v.dolar, total_usd, total_ars,
           v.pago||'', v.estado||'Pendiente', v.logistica||'', v.dir||'', v.obs||'', v.colocador||'', req.user.id);
    db.prepare('UPDATE productos SET stock = stock - ? WHERE nom = ?').run(v.cantidad, v.producto);
    res.json({ cod, total_usd, total_ars });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.put('/api/ventas/:id', auth, (req, res) => {
  const { estado, logistica, obs, colocador } = req.body || {};
  db.prepare('UPDATE ventas SET estado=?,logistica=?,obs=?,colocador=? WHERE id=?')
    .run(estado, logistica, obs, colocador, req.params.id);
  res.json({ ok: true });
});

// ─── Resumen ──────────────────────────────────────────────────────────────────

app.get('/api/resumen', auth, (req, res) => {
  const ventas_total_usd = db.prepare('SELECT COALESCE(SUM(total_usd),0) as v FROM ventas').get().v;
  const ventas_total_ars = db.prepare('SELECT COALESCE(SUM(total_ars),0) as v FROM ventas').get().v;
  const pendiente = db.prepare("SELECT COALESCE(SUM(total_ars),0) as v FROM ventas WHERE estado != 'Pagado'").get().v;
  const cant_ventas = db.prepare('SELECT COUNT(*) as v FROM ventas').get().v;
  const productos_alerta = db.prepare('SELECT COUNT(*) as v FROM productos WHERE stock <= punto').get().v;
  const productos_sin_stock = db.prepare('SELECT COUNT(*) as v FROM productos WHERE stock <= 0').get().v;
  res.json({ ventas_total_usd, ventas_total_ars, pendiente, cant_ventas, productos_alerta, productos_sin_stock });
});

// ─── Ingresos de stock ────────────────────────────────────────────────────────

app.get('/api/ingresos-stock', auth, (req, res) => {
  res.json(db.prepare(`
    SELECT i.*, p.nom as producto_nom, u.nombre as usuario
    FROM ingresos_stock i
    LEFT JOIN productos p ON i.producto_cod = p.cod
    LEFT JOIN users u ON i.user_id = u.id
    ORDER BY i.fecha DESC
    LIMIT 100
  `).all());
});

// ─── Catch all ────────────────────────────────────────────────────────────────

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🚀 Theia Gestión corriendo en http://localhost:${PORT}`);
  console.log(`   Admin inicial: admin / Admin123!\n`);
});
