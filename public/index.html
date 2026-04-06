<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Theia · Gestión</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap">
<style>
:root {
  --bg: #F5F4F1;
  --bg-card: #FFFFFF;
  --sidebar-bg: #141410;
  --sidebar-text: #E8E5DC;
  --sidebar-muted: #6B6860;
  --sidebar-hover: rgba(255,255,255,0.06);
  --sidebar-active: rgba(255,255,255,0.1);
  --accent: #C8A96E;
  --accent-dim: rgba(200,169,110,0.12);
  --text: #1A1916;
  --text-2: #5C5A54;
  --text-3: #9C9A94;
  --border: rgba(0,0,0,0.08);
  --border-strong: rgba(0,0,0,0.15);
  --green-bg: #EBF5EC; --green: #2D7A3A;
  --amber-bg: #FDF3E1; --amber: #9A6B1A;
  --red-bg: #FDECEA; --red: #C0392B;
  --blue-bg: #EBF2FD; --blue: #2355A0;
  --radius: 10px;
  --shadow: 0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04);
  --sidebar-w: 240px;
  --font-head: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'DM Mono', monospace;
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%;font-family:var(--font-body);background:var(--bg);color:var(--text);font-size:15px;-webkit-font-smoothing:antialiased}

/* ── Login ── */
#login-screen{display:flex;align-items:center;justify-content:center;min-height:100vh;padding:1rem;background:var(--sidebar-bg)}
.login-box{background:var(--bg-card);border-radius:16px;padding:2.5rem 2rem;width:100%;max-width:380px;box-shadow:0 24px 64px rgba(0,0,0,0.3)}
.login-logo{font-family:var(--font-head);font-size:28px;font-weight:700;color:var(--accent);letter-spacing:0.04em;margin-bottom:0.25rem}
.login-sub{font-size:13px;color:var(--text-3);margin-bottom:2rem}
.login-box label{display:block;font-size:12px;font-weight:500;color:var(--text-2);margin-bottom:5px;text-transform:uppercase;letter-spacing:.04em}
.login-box input{width:100%;padding:11px 14px;border:1px solid var(--border-strong);border-radius:8px;font-family:var(--font-body);font-size:15px;background:var(--bg);color:var(--text);margin-bottom:14px;outline:none;transition:border-color .15s}
.login-box input:focus{border-color:var(--accent)}
.btn-login{width:100%;padding:12px;background:var(--accent);color:#1A1410;border:none;border-radius:8px;font-family:var(--font-head);font-size:15px;font-weight:600;cursor:pointer;letter-spacing:.03em;transition:opacity .15s;margin-top:4px}
.btn-login:hover{opacity:.88}
.login-err{color:var(--red);font-size:13px;margin-top:10px;text-align:center}

/* ── App layout ── */
#app{display:flex;height:100vh;overflow:hidden}
#sidebar{width:var(--sidebar-w);background:var(--sidebar-bg);display:flex;flex-direction:column;flex-shrink:0;overflow-y:auto;position:relative;z-index:100}
.sidebar-logo{padding:1.75rem 1.25rem 1rem;font-family:var(--font-head);font-size:22px;font-weight:700;color:var(--accent);letter-spacing:.05em}
.sidebar-logo span{display:block;font-size:11px;color:var(--sidebar-muted);font-weight:400;letter-spacing:.08em;margin-top:1px;font-family:var(--font-body)}
nav{flex:1;padding:0 .75rem}
.nav-section{font-size:10px;letter-spacing:.12em;color:var(--sidebar-muted);padding:.75rem .5rem .4rem;text-transform:uppercase;font-family:var(--font-body)}
.nav-item{display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:8px;color:var(--sidebar-text);font-size:14px;cursor:pointer;transition:background .12s;margin-bottom:2px;user-select:none}
.nav-item:hover{background:var(--sidebar-hover)}
.nav-item.active{background:var(--sidebar-active);color:#FFFFFF}
.nav-item .icon{width:18px;height:18px;opacity:.7;flex-shrink:0}
.nav-item.active .icon{opacity:1}
.sidebar-user{padding:1rem 1.25rem;border-top:1px solid rgba(255,255,255,.07);margin-top:auto}
.sidebar-user .uname{font-size:13px;color:var(--sidebar-text);font-weight:500}
.sidebar-user .urole{font-size:11px;color:var(--sidebar-muted)}
.sidebar-user .logout-btn{font-size:12px;color:var(--sidebar-muted);cursor:pointer;margin-top:6px;display:inline-block;transition:color .12s}
.sidebar-user .logout-btn:hover{color:var(--sidebar-text)}

#main{flex:1;overflow-y:auto;display:flex;flex-direction:column}
#topbar{display:none;background:var(--sidebar-bg);padding:1rem 1.25rem;align-items:center;justify-content:space-between;flex-shrink:0}
.topbar-logo{font-family:var(--font-head);font-size:18px;font-weight:700;color:var(--accent)}
.hamburger{background:none;border:none;cursor:pointer;color:var(--sidebar-text);padding:4px;display:flex;flex-direction:column;gap:5px}
.hamburger span{display:block;width:22px;height:1.5px;background:currentColor}

#content{flex:1;padding:2rem}

/* ── Drawer mobile ── */
#drawer-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:200}
#drawer-overlay.open{display:block}
#sidebar.drawer{position:fixed;top:0;bottom:0;left:0;z-index:201;transform:translateX(-100%);transition:transform .25s ease}
#sidebar.drawer.open{transform:translateX(0)}

/* ── Sections ── */
.section{display:none}
.section.active{display:block}
.page-head{margin-bottom:1.75rem}
.page-head h1{font-family:var(--font-head);font-size:24px;font-weight:600;color:var(--text);letter-spacing:-.01em}
.page-head p{font-size:14px;color:var(--text-3);margin-top:4px}

/* ── Metrics grid ── */
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:1.75rem}
.metric{background:var(--bg-card);border-radius:var(--radius);padding:1.25rem;box-shadow:var(--shadow);border:1px solid var(--border)}
.metric .m-label{font-size:11px;font-weight:500;color:var(--text-3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px}
.metric .m-val{font-family:var(--font-head);font-size:26px;font-weight:600;color:var(--text)}
.metric .m-sub{font-size:12px;color:var(--text-3);margin-top:4px}
.metric.warn .m-val{color:var(--amber)}
.metric.danger .m-val{color:var(--red)}

/* ── Cards ── */
.card{background:var(--bg-card);border-radius:var(--radius);padding:1.5rem;box-shadow:var(--shadow);border:1px solid var(--border);margin-bottom:1.25rem}
.card-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem}
.card-head h2{font-family:var(--font-head);font-size:15px;font-weight:600;color:var(--text);letter-spacing:-.01em}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem}

/* ── Tables ── */
.tbl-wrap{overflow-x:auto;border-radius:var(--radius);background:var(--bg-card);box-shadow:var(--shadow);border:1px solid var(--border)}
table{width:100%;border-collapse:collapse;font-size:13px}
thead th{text-align:left;padding:11px 14px;font-size:11px;font-weight:500;color:var(--text-3);text-transform:uppercase;letter-spacing:.06em;border-bottom:1px solid var(--border);white-space:nowrap;background:var(--bg-card)}
tbody td{padding:11px 14px;border-bottom:1px solid var(--border);color:var(--text);vertical-align:middle}
tbody tr:last-child td{border-bottom:none}
tbody tr:hover td{background:var(--bg)}
.mono{font-family:var(--font-mono);font-size:12px;color:var(--text-2)}

/* ── Badges ── */
.badge{display:inline-flex;align-items:center;padding:3px 9px;border-radius:20px;font-size:11px;font-weight:500;white-space:nowrap}
.badge-ok{background:var(--green-bg);color:var(--green)}
.badge-warn{background:var(--amber-bg);color:var(--amber)}
.badge-danger{background:var(--red-bg);color:var(--red)}
.badge-pagado{background:var(--green-bg);color:var(--green)}
.badge-sena{background:var(--amber-bg);color:var(--amber)}
.badge-pendiente{background:var(--red-bg);color:var(--red)}
.badge-admin{background:#EDE9FE;color:#5B21B6}
.badge-vendedor{background:var(--blue-bg);color:var(--blue)}
.badge-gray{background:rgba(0,0,0,0.06);color:var(--text-2)}

/* ── Forms ── */
.form-grid{display:grid;gap:14px}
.form-grid.g2{grid-template-columns:1fr 1fr}
.form-grid.g3{grid-template-columns:1fr 1fr 1fr}
.form-group{display:flex;flex-direction:column;gap:5px}
.form-group label{font-size:11px;font-weight:500;color:var(--text-2);text-transform:uppercase;letter-spacing:.05em}
input,select,textarea{font-family:var(--font-body);font-size:14px;padding:10px 12px;border:1px solid var(--border-strong);border-radius:8px;background:var(--bg);color:var(--text);outline:none;width:100%;transition:border-color .15s}
input:focus,select:focus,textarea:focus{border-color:var(--accent);background:var(--bg-card)}
textarea{height:72px;resize:vertical}
.btn{display:inline-flex;align-items:center;gap:6px;padding:9px 16px;border-radius:8px;font-family:var(--font-body);font-size:14px;font-weight:500;cursor:pointer;border:1px solid var(--border-strong);background:var(--bg-card);color:var(--text);transition:all .12s;white-space:nowrap}
.btn:hover{background:var(--bg);border-color:var(--accent)}
.btn-primary{background:var(--accent);color:#1A1410;border-color:var(--accent);font-weight:600}
.btn-primary:hover{opacity:.88;background:var(--accent)}
.btn-sm{padding:6px 12px;font-size:12px}
.btn-danger{border-color:var(--red);color:var(--red)}
.btn-danger:hover{background:var(--red-bg)}
.btn-full{width:100%;justify-content:center;margin-top:4px}
.form-actions{display:flex;gap:10px;justify-content:flex-end;margin-top:6px;flex-wrap:wrap}

/* ── Preview box ── */
.preview{background:linear-gradient(135deg,var(--accent-dim),transparent);border:1px solid rgba(200,169,110,.25);border-radius:10px;padding:1rem 1.25rem;margin-top:10px}
.preview-row{display:flex;justify-content:space-between;font-size:13px;color:var(--text-2);padding:3px 0}
.preview-total{display:flex;justify-content:space-between;font-size:15px;font-weight:600;color:var(--text);padding:8px 0 0;border-top:1px solid rgba(200,169,110,.2);margin-top:6px}

/* ── Stock bar ── */
.stock-bar-bg{background:var(--border);border-radius:4px;height:5px;overflow:hidden;width:80px;flex-shrink:0}
.stock-bar-fill{height:5px;border-radius:4px}

/* ── Search bar ── */
.search-bar{display:flex;gap:10px;margin-bottom:1.25rem;flex-wrap:wrap;align-items:center}
.search-bar input{max-width:300px;flex:1}
.filter-chips{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:1rem}
.chip{padding:5px 13px;border-radius:20px;font-size:12px;cursor:pointer;border:1px solid var(--border-strong);background:var(--bg-card);color:var(--text-2);transition:all .12s;font-family:var(--font-body)}
.chip:hover{border-color:var(--accent)}
.chip.active{background:var(--sidebar-bg);color:#fff;border-color:var(--sidebar-bg)}

/* ── Modal ── */
.modal-mask{display:none;position:fixed;inset:0;background:rgba(10,10,8,.45);z-index:300;align-items:center;justify-content:center;padding:1rem}
.modal-mask.open{display:flex}
.modal{background:var(--bg-card);border-radius:16px;padding:1.75rem;width:100%;max-width:440px;box-shadow:0 24px 64px rgba(0,0,0,.25);max-height:90vh;overflow-y:auto}
.modal h3{font-family:var(--font-head);font-size:18px;font-weight:600;margin-bottom:1.25rem}
.modal-btns{display:flex;gap:10px;margin-top:1.25rem;justify-content:flex-end}

/* ── Alerts list ── */
.alert-row{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border)}
.alert-row:last-child{border-bottom:none}
.alert-name{flex:1;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.alert-cat{font-size:11px;color:var(--text-3)}

/* ── Ventas recientes ── */
.venta-row{display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)}
.venta-row:last-child{border-bottom:none}
.venta-info{flex:1;min-width:0}
.venta-cliente{font-size:13px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.venta-prod{font-size:11px;color:var(--text-3)}
.venta-monto{text-align:right;flex-shrink:0}
.venta-ars{font-size:13px;font-weight:500;font-family:var(--font-mono)}
.empty-state{text-align:center;padding:3rem;color:var(--text-3);font-size:14px}

/* ── User avatar ── */
.avatar{width:34px;height:34px;border-radius:50%;background:var(--accent-dim);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;color:var(--amber);flex-shrink:0;font-family:var(--font-head)}

/* ── Historial footer ── */
#hist-footer{font-size:12px;color:var(--text-3);margin-top:10px;text-align:right;font-family:var(--font-mono)}

/* ── Toggle ── */
.toggle-wrap{display:flex;align-items:center;gap:8px;cursor:pointer}
.toggle{width:38px;height:21px;border-radius:11px;background:var(--border-strong);position:relative;transition:background .2s;flex-shrink:0}
.toggle.on{background:var(--accent)}
.toggle::after{content:'';position:absolute;width:17px;height:17px;border-radius:50%;background:#fff;top:2px;left:2px;transition:transform .2s}
.toggle.on::after{transform:translateX(17px)}

/* ── Responsive ── */
@media(max-width:900px){
  .metrics{grid-template-columns:repeat(2,1fr)}
  .grid2{grid-template-columns:1fr}
  .form-grid.g3{grid-template-columns:1fr 1fr}
}
@media(max-width:700px){
  #sidebar{display:none}
  #topbar{display:flex}
  #sidebar.drawer{display:flex}
  #content{padding:1.25rem}
  .metrics{grid-template-columns:1fr 1fr}
  .form-grid.g2,.form-grid.g3{grid-template-columns:1fr}
  .metric .m-val{font-size:20px}
  .page-head h1{font-size:20px}
}
@media(max-width:440px){
  .metrics{grid-template-columns:1fr 1fr}
  .metric{padding:.875rem}
}
</style>
</head>
<body>

<!-- ── LOGIN ────────────────────────────────────── -->
<div id="login-screen">
  <div class="login-box">
    <div class="login-logo">THEIA</div>
    <div class="login-sub">Sistema de gestión · Ingresá para continuar</div>
    <label>Usuario</label>
    <input id="l-user" type="text" placeholder="tu usuario" autocomplete="username">
    <label>Contraseña</label>
    <input id="l-pass" type="password" placeholder="••••••••" autocomplete="current-password">
    <button class="btn-login" onclick="doLogin()">Ingresar</button>
    <div class="login-err" id="login-err"></div>
  </div>
</div>

<!-- ── APP ──────────────────────────────────────── -->
<div id="app" style="display:none">

  <!-- Sidebar -->
  <div id="sidebar">
    <div class="sidebar-logo">THEIA<span>GESTIÓN</span></div>
    <nav>
      <div class="nav-section">Principal</div>
      <div class="nav-item active" onclick="go('dash')">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
        Panel
      </div>
      <div class="nav-item" onclick="go('nueva-venta')">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
        Nueva venta
      </div>
      <div class="nav-section">Inventario</div>
      <div class="nav-item" onclick="go('stock')">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 7l-8-4-8 4m16 0v10l-8 4-8-4V7m8 4v10"/></svg>
        Stock
      </div>
      <div class="nav-section">Registro</div>
      <div class="nav-item" onclick="go('ventas')">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 17H5a2 2 0 00-2 2v0a2 2 0 002 2h14a2 2 0 002-2v0a2 2 0 00-2-2h-4M9 17V5a2 2 0 012-2h2a2 2 0 012 2v12M9 17h6"/></svg>
        Historial ventas
      </div>
      <div class="nav-item admin-only" onclick="go('admin')" style="display:none">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
        Usuarios
      </div>
      <div class="nav-item" onclick="go('mi-cuenta')">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        Mi cuenta
      </div>
    </nav>
    <div class="sidebar-user">
      <div class="uname" id="sb-nombre">—</div>
      <div class="urole" id="sb-rol">—</div>
      <div class="logout-btn" onclick="logout()">Cerrar sesión →</div>
    </div>
  </div>

  <!-- Overlay + topbar -->
  <div id="drawer-overlay" onclick="closeSidebar()"></div>
  <div id="main">
    <div id="topbar">
      <div class="topbar-logo">THEIA</div>
      <button class="hamburger" onclick="openSidebar()"><span></span><span></span><span></span></button>
    </div>

    <div id="content">

      <!-- PANEL ────────────────── -->
      <div class="section active" id="sec-dash">
        <div class="page-head"><h1>Panel</h1><p>Resumen general del negocio</p></div>
        <div class="metrics" id="metrics-dash"></div>
        <div class="grid2">
          <div class="card">
            <div class="card-head"><h2>Alertas de stock</h2><span id="alerta-count" class="badge badge-danger"></span></div>
            <div id="alertas-list"></div>
          </div>
          <div class="card">
            <div class="card-head"><h2>Últimas ventas</h2></div>
            <div id="recent-ventas"></div>
          </div>
        </div>
      </div>

      <!-- NUEVA VENTA ───────────── -->
      <div class="section" id="sec-nueva-venta">
        <div class="page-head"><h1>Nueva venta</h1><p>Registrá una venta y el stock se descuenta automáticamente</p></div>
        <div class="card">
          <div class="form-grid g2">
            <div class="form-group">
              <label>Cliente *</label>
              <input id="v-cliente" placeholder="Nombre o razón social">
            </div>
            <div class="form-group">
              <label>Teléfono</label>
              <input id="v-tel" placeholder="Opcional">
            </div>
          </div>
          <div class="form-grid g2" style="margin-top:14px">
            <div class="form-group">
              <label>Canal de origen</label>
              <select id="v-canal">
                <option>Instagram</option><option>Whatsapp</option><option>Showroom</option>
                <option>recomendacion</option><option>cliente recurrente</option>
              </select>
            </div>
            <div class="form-group">
              <label>Fecha *</label>
              <input type="date" id="v-fecha">
            </div>
          </div>
          <div class="form-grid g3" style="margin-top:14px">
            <div class="form-group" style="grid-column:1 / -1">
              <label>Producto *</label>
              <select id="v-prod" onchange="calcPreview()"><option value="">— Seleccionar producto —</option></select>
            </div>
          </div>
          <div class="form-grid g3" style="margin-top:14px">
            <div class="form-group">
              <label>Cantidad *</label>
              <input type="number" id="v-cant" min="1" placeholder="0" oninput="calcPreview()">
            </div>
            <div class="form-group">
              <label>Precio USD unitario *</label>
              <input type="number" id="v-precio" step="0.01" placeholder="0.00" oninput="calcPreview()">
            </div>
            <div class="form-group">
              <label>Dólar del día</label>
              <input type="number" id="v-dolar" value="1400" oninput="calcPreview()">
            </div>
          </div>
          <div class="form-grid g3" style="margin-top:14px">
            <div class="form-group">
              <label>Medio de pago</label>
              <select id="v-pago">
                <option>Efectivo</option><option>Transferencia</option><option>Dolares</option>
                <option>Mercado pago</option><option>Cheque</option>
              </select>
            </div>
            <div class="form-group">
              <label>Estado de pago</label>
              <select id="v-estado">
                <option>Pagado</option><option>Seña</option><option>Pendiente</option>
              </select>
            </div>
            <div class="form-group">
              <label>Logística</label>
              <select id="v-logistica">
                <option>Retiro</option><option>Flete envio</option><option>Flete externo</option><option>Expreso</option><option>En Depósito</option>
              </select>
            </div>
          </div>
          <div class="form-grid g2" style="margin-top:14px">
            <div class="form-group">
              <label>Dirección de obra</label>
              <input id="v-dir" placeholder="Opcional">
            </div>
            <div class="form-group">
              <label>Colocador</label>
              <input id="v-colocador" placeholder="Opcional">
            </div>
          </div>
          <div class="form-group" style="margin-top:14px">
            <label>Observaciones</label>
            <textarea id="v-obs" placeholder="Notas adicionales..."></textarea>
          </div>
          <div id="venta-preview" style="display:none"></div>
          <div class="form-actions">
            <button class="btn" onclick="resetVenta()">Limpiar</button>
            <button class="btn btn-primary" onclick="guardarVenta()">Registrar venta</button>
          </div>
        </div>
      </div>

      <!-- STOCK ────────────────── -->
      <div class="section" id="sec-stock">
        <div class="page-head">
          <h1>Inventario</h1><p>Control de stock en tiempo real</p>
        </div>
        <div class="search-bar">
          <input id="s-search" placeholder="Buscar producto..." oninput="renderStock()" style="max-width:300px">
          <button class="btn btn-primary" onclick="openModal('ingreso')">+ Ingresar stock</button>
          <button class="btn admin-only" onclick="openModal('nuevo-prod')" style="display:none">+ Producto</button>
        </div>
        <div class="filter-chips" id="s-chips"></div>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Código</th><th>Producto</th><th>Categoría</th><th>Stock</th><th>Punto pedido</th><th>Estado</th></tr></thead>
            <tbody id="stock-tbody"></tbody>
          </table>
        </div>
      </div>

      <!-- VENTAS ───────────────── -->
      <div class="section" id="sec-ventas">
        <div class="page-head"><h1>Historial de ventas</h1></div>
        <div class="search-bar">
          <input id="h-search" placeholder="Buscar cliente, producto o código..." oninput="renderVentas()" style="max-width:300px;flex:1">
          <select id="h-estado" onchange="renderVentas()" style="max-width:160px">
            <option value="">Todos los estados</option>
            <option>Pagado</option><option>Seña</option><option>Pendiente</option>
          </select>
        </div>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Código</th><th>Fecha</th><th>Cliente</th><th>Producto</th><th>Cant.</th><th>USD</th><th>Total $</th><th>Pago</th><th>Estado</th><th>Envío</th><th>Vendedor</th></tr></thead>
            <tbody id="ventas-tbody"></tbody>
          </table>
        </div>
        <div id="hist-footer"></div>
      </div>

      <!-- ADMIN ────────────────── -->
      <div class="section" id="sec-admin">
        <div class="page-head"><h1>Gestión de usuarios</h1><p>Creá y administrá los accesos al sistema</p></div>
        <div class="search-bar">
          <input id="a-search" placeholder="Buscar usuario..." oninput="renderUsers()" style="max-width:280px">
          <button class="btn btn-primary" onclick="openModal('nuevo-user')">+ Nuevo usuario</button>
        </div>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Usuario</th><th>Nombre</th><th>Rol</th><th>Estado</th><th>Alta</th><th></th></tr></thead>
            <tbody id="users-tbody"></tbody>
          </table>
        </div>
      </div>

      <!-- MI CUENTA ────────────── -->
      <div class="section" id="sec-mi-cuenta">
        <div class="page-head"><h1>Mi cuenta</h1></div>
        <div class="card" style="max-width:440px">
          <h2 style="font-family:var(--font-head);font-size:16px;margin-bottom:1.25rem">Cambiar contraseña</h2>
          <div class="form-grid">
            <div class="form-group"><label>Contraseña actual</label><input type="password" id="cp-actual"></div>
            <div class="form-group"><label>Nueva contraseña</label><input type="password" id="cp-nueva"></div>
            <div class="form-group"><label>Repetir nueva</label><input type="password" id="cp-rep"></div>
          </div>
          <div class="form-actions">
            <button class="btn btn-primary" onclick="cambiarPass()">Actualizar contraseña</button>
          </div>
          <div id="cp-msg" style="font-size:13px;margin-top:10px"></div>
        </div>
      </div>

    </div><!-- /content -->
  </div><!-- /main -->
</div><!-- /app -->

<!-- ── MODALES ───────────────────────────────────── -->

<!-- Ingreso stock -->
<div class="modal-mask" id="modal-ingreso">
  <div class="modal">
    <h3>Ingresar stock</h3>
    <div class="form-grid">
      <div class="form-group"><label>Producto *</label><select id="m-i-prod"></select></div>
      <div class="form-group"><label>Cantidad a ingresar *</label><input type="number" id="m-i-cant" min="1" value="1"></div>
      <div class="form-group"><label>Contenedor / Referencia</label><input id="m-i-cont" placeholder="Ej: D4"></div>
    </div>
    <div class="modal-btns">
      <button class="btn" onclick="closeModal('ingreso')">Cancelar</button>
      <button class="btn btn-primary" onclick="confirmarIngreso()">Confirmar ingreso</button>
    </div>
  </div>
</div>

<!-- Nuevo usuario -->
<div class="modal-mask" id="modal-nuevo-user">
  <div class="modal">
    <h3 id="mnu-title">Nuevo usuario</h3>
    <div class="form-grid">
      <div class="form-group"><label>Nombre completo *</label><input id="mnu-nombre" placeholder="Ej: Juan Pérez"></div>
      <div class="form-group"><label>Nombre de usuario *</label><input id="mnu-username" placeholder="sin espacios, minúsculas"></div>
      <div class="form-group"><label>Contraseña *</label><input type="password" id="mnu-pass" placeholder="Mínimo 6 caracteres"></div>
      <div class="form-group"><label>Rol</label>
        <select id="mnu-rol"><option value="vendedor">Vendedor</option><option value="admin">Administrador</option></select>
      </div>
      <div class="form-group" id="mnu-activo-row" style="display:none">
        <label>Estado</label>
        <div class="toggle-wrap" onclick="toggleUser()">
          <div class="toggle on" id="mnu-toggle"></div>
          <span id="mnu-toggle-lbl" style="font-size:14px;color:var(--text-2)">Activo</span>
        </div>
      </div>
    </div>
    <div class="modal-btns">
      <button class="btn" onclick="closeModal('nuevo-user')">Cancelar</button>
      <button class="btn btn-primary" id="mnu-btn" onclick="saveUser()">Crear usuario</button>
    </div>
    <div id="mnu-err" style="font-size:13px;color:var(--red);margin-top:8px"></div>
  </div>
</div>

<!-- Nuevo producto -->
<div class="modal-mask" id="modal-nuevo-prod">
  <div class="modal">
    <h3>Nuevo producto</h3>
    <div class="form-grid">
      <div class="form-group"><label>Código *</label><input id="mp-cod" placeholder="Ej: D-0301-5"></div>
      <div class="form-group"><label>Nombre *</label><input id="mp-nom" placeholder="Nombre del producto"></div>
      <div class="form-group"><label>Categoría *</label>
        <select id="mp-cat">
          <option>Wall panel Int</option><option>Revestimiento Ext</option><option>Wood panel</option>
          <option>Marmol series</option><option>Muebles</option><option>Bazar</option><option>Otros</option>
        </select>
      </div>
      <div class="form-grid g2">
        <div class="form-group"><label>Stock inicial</label><input type="number" id="mp-stock" value="0"></div>
        <div class="form-group"><label>Punto de pedido</label><input type="number" id="mp-punto" value="1"></div>
      </div>
    </div>
    <div class="modal-btns">
      <button class="btn" onclick="closeModal('nuevo-prod')">Cancelar</button>
      <button class="btn btn-primary" onclick="saveProducto()">Agregar producto</button>
    </div>
    <div id="mp-err" style="font-size:13px;color:var(--red);margin-top:8px"></div>
  </div>
</div>

<!-- Toast -->
<div id="toast" style="display:none;position:fixed;bottom:24px;right:24px;z-index:500;background:var(--sidebar-bg);color:#E8E5DC;padding:12px 20px;border-radius:10px;font-size:14px;box-shadow:0 8px 32px rgba(0,0,0,.25);max-width:320px"></div>

<script>
const BASE = '';
let SESSION = null;
let DATA = { productos: [], ventas: [], users: [] };
let editUserId = null;
let stockCatFilter = 'Todos';

// ─── Utils ───────────────────────────────────────────────

function fmtArs(n){ return '$' + Math.round(n).toLocaleString('es-AR') }
function fmtUsd(n){ return 'USD ' + parseFloat(n).toFixed(2) }
function fmtDate(s){ if(!s||s==='--') return '—'; try{ const d=new Date(s+'T00:00'); return d.toLocaleDateString('es-AR',{day:'2-digit',month:'2-digit',year:'2-digit'})} catch{return s} }
function initials(n){ return (n||'?').split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase() }
function toast(msg, ok=true){
  const t=document.getElementById('toast');
  t.textContent=msg; t.style.display='block';
  t.style.background=ok?'#1D4228':'#8B1A1A';
  clearTimeout(t._t); t._t=setTimeout(()=>t.style.display='none',3000);
}

async function api(method, path, body){
  const opts = { method, headers: { 'Content-Type': 'application/json' } };
  if(SESSION?.token) opts.headers['Authorization'] = 'Bearer ' + SESSION.token;
  if(body) opts.body = JSON.stringify(body);
  const r = await fetch(BASE + path, opts);
  const json = await r.json();
  if(!r.ok) throw new Error(json.error || 'Error del servidor');
  return json;
}

// ─── Auth ────────────────────────────────────────────────

async function doLogin(){
  const u=document.getElementById('l-user').value.trim();
  const p=document.getElementById('l-pass').value;
  document.getElementById('login-err').textContent='';
  try{
    SESSION = await api('POST','/api/auth/login',{username:u,password:p});
    localStorage.setItem('theia_session',JSON.stringify(SESSION));
    startApp();
  }catch(e){
    document.getElementById('login-err').textContent=e.message;
  }
}

document.getElementById('l-pass').addEventListener('keydown',e=>e.key==='Enter'&&doLogin());
document.getElementById('l-user').addEventListener('keydown',e=>e.key==='Enter'&&document.getElementById('l-pass').focus());

function logout(){
  SESSION=null; localStorage.removeItem('theia_session');
  document.getElementById('app').style.display='none';
  document.getElementById('login-screen').style.display='flex';
  document.getElementById('l-pass').value='';
  document.getElementById('l-user').value='';
}

// ─── App init ────────────────────────────────────────────

async function startApp(){
  document.getElementById('login-screen').style.display='none';
  document.getElementById('app').style.display='flex';
  document.getElementById('sb-nombre').textContent=SESSION.user.nombre;
  document.getElementById('sb-rol').textContent=SESSION.user.rol==='admin'?'Administrador':'Vendedor';
  const isAdmin = SESSION.user.rol==='admin';
  document.querySelectorAll('.admin-only').forEach(el=>el.style.display=isAdmin?'':'none');

  document.getElementById('v-fecha').value=new Date().toISOString().split('T')[0];
  await Promise.all([loadProductos(), loadVentas()]);
  if(isAdmin) loadUsers();
  renderDash();
  renderStock();
  buildProdSelect();
  buildStockChips();
}

async function loadProductos(){ DATA.productos = await api('GET','/api/productos') }
async function loadVentas(){ DATA.ventas = await api('GET','/api/ventas') }
async function loadUsers(){ DATA.users = await api('GET','/api/users'); renderUsers() }

// Try restore session
(()=>{
  const saved=localStorage.getItem('theia_session');
  if(saved){ SESSION=JSON.parse(saved); startApp().catch(()=>logout()); }
})();

// ─── Navigation ──────────────────────────────────────────

function go(sec){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('sec-'+sec).classList.add('active');
  const items=[...document.querySelectorAll('.nav-item')];
  const map={dash:0,'nueva-venta':1,stock:2,ventas:3,admin:4,'mi-cuenta':5};
  if(items[map[sec]]) items[map[sec]].classList.add('active');
  closeSidebar();
  if(sec==='ventas') renderVentas();
  if(sec==='stock') renderStock();
  if(sec==='dash') renderDash();
  if(sec==='admin') loadUsers();
}

function openSidebar(){
  document.getElementById('sidebar').classList.add('drawer','open');
  document.getElementById('drawer-overlay').classList.add('open');
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('open');
}

// ─── Dashboard ───────────────────────────────────────────

async function renderDash(){
  let res;
  try{ res = await api('GET','/api/resumen') }catch{ return }
  document.getElementById('metrics-dash').innerHTML=`
    <div class="metric"><div class="m-label">Ventas totales USD</div><div class="m-val">${fmtUsd(res.ventas_total_usd)}</div><div class="m-sub">${res.cant_ventas} operaciones</div></div>
    <div class="metric"><div class="m-label">Ventas totales $</div><div class="m-val">${fmtArs(res.ventas_total_ars)}</div></div>
    <div class="metric warn"><div class="m-label">Pendiente de cobro</div><div class="m-val">${fmtArs(res.pendiente)}</div></div>
    <div class="metric danger"><div class="m-label">Productos en alerta</div><div class="m-val">${res.productos_alerta}</div><div class="m-sub">${res.productos_sin_stock} sin stock</div></div>`;

  const alertas=DATA.productos.filter(p=>p.stock<=p.punto).sort((a,b)=>a.stock-b.stock);
  document.getElementById('alerta-count').textContent=alertas.length||'';
  document.getElementById('alerta-count').style.display=alertas.length?'':'none';
  document.getElementById('alertas-list').innerHTML=alertas.length?alertas.map(p=>{
    const pct=Math.max(0,Math.min(100,p.stock>0?(p.stock/p.punto)*60:0));
    const col=p.stock<=0?'var(--red)':p.stock<=p.punto?'var(--amber)':'var(--green)';
    return`<div class="alert-row">
      <div style="flex:1;min-width:0"><div class="alert-name">${p.nom}</div><div class="alert-cat">${p.cat}</div></div>
      <div class="stock-bar-bg"><div class="stock-bar-fill" style="width:${pct}%;background:${col}"></div></div>
      <span style="min-width:32px;text-align:right;font-family:var(--font-mono);font-size:13px;font-weight:500;color:${col}">${p.stock}</span>
    </div>`;
  }).join(''):`<div class="empty-state">Sin alertas de stock ✓</div>`;

  const recientes=DATA.ventas.slice(0,6);
  document.getElementById('recent-ventas').innerHTML=recientes.length?recientes.map(v=>`
    <div class="venta-row">
      <div class="venta-info">
        <div class="venta-cliente">${v.cliente}</div>
        <div class="venta-prod">${v.producto} × ${v.cantidad}</div>
      </div>
      <div class="venta-monto">
        <div class="venta-ars">${fmtArs(v.total_ars)}</div>
        <span class="badge badge-${(v.estado||'').toLowerCase().replace('ñ','n').replace('é','e')}">${v.estado}</span>
      </div>
    </div>`).join(''):`<div class="empty-state">Sin ventas registradas</div>`;
}

// ─── Stock ───────────────────────────────────────────────

function buildStockChips(){
  const cats=['Todos',...new Set(DATA.productos.map(p=>p.cat))];
  document.getElementById('s-chips').innerHTML=cats.map(c=>
    `<div class="chip${c==='Todos'?' active':''}" onclick="setStockCat('${c}',this)">${c}</div>`
  ).join('');
}

function setStockCat(cat,el){
  stockCatFilter=cat;
  document.querySelectorAll('#s-chips .chip').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  renderStock();
}

function renderStock(){
  const q=(document.getElementById('s-search')?.value||'').toLowerCase();
  const lista=DATA.productos.filter(p=>(stockCatFilter==='Todos'||p.cat===stockCatFilter)&&(!q||p.nom.toLowerCase().includes(q)||p.cod.toLowerCase().includes(q)));
  document.getElementById('stock-tbody').innerHTML=lista.length?lista.map(p=>{
    const estado=p.stock<=0?'<span class="badge badge-danger">Recomprar</span>':p.stock<=p.punto?'<span class="badge badge-warn">Stock bajo</span>':'<span class="badge badge-ok">OK</span>';
    const col=p.stock<=0?'var(--red)':p.stock<=p.punto?'var(--amber)':'var(--text)';
    return`<tr>
      <td class="mono">${p.cod}</td>
      <td style="font-weight:500;max-width:280px">${p.nom}</td>
      <td><span class="badge badge-gray">${p.cat}</span></td>
      <td style="font-family:var(--font-mono);font-weight:600;color:${col}">${p.stock}</td>
      <td style="color:var(--text-3);font-family:var(--font-mono)">${p.punto}</td>
      <td>${estado}</td>
    </tr>`;
  }).join(''):`<tr><td colspan="6" class="empty-state">Sin resultados</td></tr>`;
}

// ─── Ventas ──────────────────────────────────────────────

function renderVentas(){
  const q=(document.getElementById('h-search')?.value||'').toLowerCase();
  const est=document.getElementById('h-estado')?.value||'';
  const lista=DATA.ventas.filter(v=>
    (!q||v.cliente.toLowerCase().includes(q)||v.producto.toLowerCase().includes(q)||v.cod.toLowerCase().includes(q))&&
    (!est||v.estado===est));
  const statMap={Pagado:'pagado',Seña:'sena',Pendiente:'pendiente'};
  document.getElementById('ventas-tbody').innerHTML=lista.length?lista.map(v=>`<tr>
    <td class="mono">${v.cod}</td>
    <td style="white-space:nowrap">${fmtDate(v.fecha)}</td>
    <td style="font-weight:500">${v.cliente}</td>
    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--text-2)">${v.producto}</td>
    <td style="text-align:center;font-family:var(--font-mono)">${v.cantidad}</td>
    <td style="font-family:var(--font-mono);white-space:nowrap">${fmtUsd(v.total_usd)}</td>
    <td style="font-family:var(--font-mono);white-space:nowrap">${fmtArs(v.total_ars)}</td>
    <td style="color:var(--text-2)">${v.pago||'—'}</td>
    <td><span class="badge badge-${statMap[v.estado]||'gray'}">${v.estado||'—'}</span></td>
    <td style="color:var(--text-2)">${v.logistica||'—'}</td>
    <td style="color:var(--text-3);font-size:12px">${v.vendedor||'—'}</td>
  </tr>`).join(''):`<tr><td colspan="11" class="empty-state">Sin ventas encontradas</td></tr>`;
  const tUsd=lista.reduce((s,v)=>s+v.total_usd,0);
  const tArs=lista.reduce((s,v)=>s+v.total_ars,0);
  document.getElementById('hist-footer').textContent=lista.length?`${lista.length} operaciones · ${fmtUsd(tUsd)} · ${fmtArs(tArs)}`:'';
}

// ─── Usuarios ────────────────────────────────────────────

function renderUsers(){
  const q=(document.getElementById('a-search')?.value||'').toLowerCase();
  const lista=DATA.users.filter(u=>!q||u.nombre.toLowerCase().includes(q)||u.username.toLowerCase().includes(q));
  document.getElementById('users-tbody').innerHTML=lista.length?lista.map(u=>`<tr>
    <td>
      <div style="display:flex;align-items:center;gap:10px">
        <div class="avatar">${initials(u.nombre)}</div>
        <span class="mono">@${u.username}</span>
      </div>
    </td>
    <td style="font-weight:500">${u.nombre}</td>
    <td><span class="badge badge-${u.rol}">${u.rol==='admin'?'Administrador':'Vendedor'}</span></td>
    <td><span class="badge ${u.activo?'badge-ok':'badge-danger'}">${u.activo?'Activo':'Inactivo'}</span></td>
    <td style="color:var(--text-3);font-size:12px">${(u.created_at||'').split(' ')[0]}</td>
    <td><button class="btn btn-sm" onclick='editUser(${JSON.stringify(u)})'>Editar</button></td>
  </tr>`).join(''):`<tr><td colspan="6" class="empty-state">Sin usuarios</td></tr>`;
}

function editUser(u){
  editUserId=u.id;
  document.getElementById('mnu-title').textContent='Editar usuario';
  document.getElementById('mnu-btn').textContent='Guardar cambios';
  document.getElementById('mnu-nombre').value=u.nombre;
  document.getElementById('mnu-username').value=u.username;
  document.getElementById('mnu-pass').value='';
  document.getElementById('mnu-pass').placeholder='Dejar vacío para no cambiar';
  document.getElementById('mnu-rol').value=u.rol;
  const toggle=document.getElementById('mnu-toggle');
  toggle.classList.toggle('on',!!u.activo);
  document.getElementById('mnu-toggle-lbl').textContent=u.activo?'Activo':'Inactivo';
  document.getElementById('mnu-activo-row').style.display='';
  document.getElementById('mnu-err').textContent='';
  openModal('nuevo-user');
}

async function saveUser(){
  const nombre=document.getElementById('mnu-nombre').value.trim();
  const username=document.getElementById('mnu-username').value.trim();
  const pass=document.getElementById('mnu-pass').value;
  const rol=document.getElementById('mnu-rol').value;
  const activo=document.getElementById('mnu-toggle').classList.contains('on')?1:0;
  document.getElementById('mnu-err').textContent='';
  try{
    if(editUserId){
      const body={nombre,rol,activo};
      if(pass) body.password=pass;
      await api('PUT',`/api/users/${editUserId}`,body);
      toast('Usuario actualizado');
    } else {
      await api('POST','/api/users',{nombre,username,password:pass,rol});
      toast('Usuario creado. Contraseña: '+pass);
    }
    await loadUsers();
    closeModal('nuevo-user');
  }catch(e){ document.getElementById('mnu-err').textContent=e.message }
}

function toggleUser(){
  const t=document.getElementById('mnu-toggle');
  t.classList.toggle('on');
  document.getElementById('mnu-toggle-lbl').textContent=t.classList.contains('on')?'Activo':'Inactivo';
}

// ─── Modales ─────────────────────────────────────────────

function openModal(name){
  if(name==='nuevo-user'&&!editUserId){
    document.getElementById('mnu-title').textContent='Nuevo usuario';
    document.getElementById('mnu-btn').textContent='Crear usuario';
    document.getElementById('mnu-nombre').value='';
    document.getElementById('mnu-username').value='';
    document.getElementById('mnu-pass').value='';
    document.getElementById('mnu-pass').placeholder='Mínimo 6 caracteres';
    document.getElementById('mnu-rol').value='vendedor';
    document.getElementById('mnu-activo-row').style.display='none';
    document.getElementById('mnu-err').textContent='';
  }
  if(name==='ingreso'){
    const sel=document.getElementById('m-i-prod');
    sel.innerHTML=DATA.productos.map(p=>`<option value="${p.cod}">${p.nom} (stock: ${p.stock})</option>`).join('');
    document.getElementById('m-i-cant').value='1';
    document.getElementById('m-i-cont').value='';
  }
  if(name==='nuevo-prod'){
    ['mp-cod','mp-nom'].forEach(id=>document.getElementById(id).value='');
    document.getElementById('mp-stock').value='0';
    document.getElementById('mp-punto').value='1';
    document.getElementById('mp-err').textContent='';
  }
  document.getElementById('modal-'+name).classList.add('open');
}

function closeModal(name){
  document.getElementById('modal-'+name).classList.remove('open');
  if(name==='nuevo-user') editUserId=null;
}

document.querySelectorAll('.modal-mask').forEach(m=>m.addEventListener('click',function(e){if(e.target===this) this.classList.remove('open')}));

// ─── Ingreso stock ────────────────────────────────────────

async function confirmarIngreso(){
  const cod=document.getElementById('m-i-prod').value;
  const cant=parseFloat(document.getElementById('m-i-cant').value);
  const cont=document.getElementById('m-i-cont').value;
  if(!cant||cant<=0){toast('Ingresá una cantidad válida',false);return}
  try{
    await api('POST',`/api/productos/${cod}/ingreso`,{cantidad:cant,contenedor:cont});
    await loadProductos();
    renderDash(); renderStock();
    buildStockChips();
    const sel=document.getElementById('m-i-prod');
    sel.innerHTML=DATA.productos.map(p=>`<option value="${p.cod}">${p.nom} (stock: ${p.stock})</option>`).join('');
    closeModal('ingreso');
    toast('Stock actualizado correctamente');
  }catch(e){toast(e.message,false)}
}

// ─── Nuevo producto ───────────────────────────────────────

async function saveProducto(){
  const cod=document.getElementById('mp-cod').value.trim();
  const nom=document.getElementById('mp-nom').value.trim();
  const cat=document.getElementById('mp-cat').value;
  const stock=parseFloat(document.getElementById('mp-stock').value)||0;
  const punto=parseFloat(document.getElementById('mp-punto').value)||1;
  document.getElementById('mp-err').textContent='';
  if(!cod||!nom){document.getElementById('mp-err').textContent='Código y nombre son obligatorios';return}
  try{
    await api('POST','/api/productos',{cod,nom,cat,stock,punto});
    await loadProductos(); buildProdSelect(); buildStockChips(); renderStock();
    closeModal('nuevo-prod');
    toast('Producto agregado');
  }catch(e){document.getElementById('mp-err').textContent=e.message}
}

// ─── Nueva venta ─────────────────────────────────────────

function buildProdSelect(){
  const sel=document.getElementById('v-prod');
  const val=sel.value;
  sel.innerHTML='<option value="">— Seleccionar producto —</option>';
  const cats=[...new Set(DATA.productos.map(p=>p.cat))];
  cats.forEach(c=>{
    const og=document.createElement('optgroup'); og.label=c;
    DATA.productos.filter(p=>p.cat===c).forEach(p=>{
      const o=document.createElement('option'); o.value=p.nom;
      o.textContent=p.nom+(p.stock<=0?' ⚠ sin stock':'');
      og.appendChild(o);
    });
    sel.appendChild(og);
  });
  if(val) sel.value=val;
}

function calcPreview(){
  const prod=document.getElementById('v-prod').value;
  const cant=parseFloat(document.getElementById('v-cant').value)||0;
  const precio=parseFloat(document.getElementById('v-precio').value)||0;
  const dolar=parseFloat(document.getElementById('v-dolar').value)||0;
  const box=document.getElementById('venta-preview');
  if(!prod||!cant||!precio){box.style.display='none';return}
  const p=DATA.productos.find(x=>x.nom===prod);
  const tUsd=cant*precio; const tArs=tUsd*dolar;
  const nuevoStock=p?p.stock-cant:null;
  const stockColor=nuevoStock!==null&&nuevoStock<0?'var(--red)':nuevoStock!==null&&nuevoStock<=(p?.punto||0)?'var(--amber)':'var(--text)';
  box.style.display='block';
  box.innerHTML=`<div class="preview">
    <div class="preview-row"><span>Subtotal USD</span><span style="font-family:var(--font-mono)">${fmtUsd(tUsd)}</span></div>
    <div class="preview-row"><span>Total en pesos</span><span style="font-family:var(--font-mono)">${fmtArs(tArs)}</span></div>
    ${p?`<div class="preview-row"><span>Stock actual</span><span style="font-family:var(--font-mono)">${p.stock}</span></div>`:'' }
    <div class="preview-total"><span>Stock después de la venta</span><span style="color:${stockColor};font-family:var(--font-mono)">${nuevoStock!==null?nuevoStock:'—'}</span></div>
  </div>`;
}

async function guardarVenta(){
  const cliente=document.getElementById('v-cliente').value.trim();
  const prod=document.getElementById('v-prod').value;
  const cant=parseFloat(document.getElementById('v-cant').value);
  const precio=parseFloat(document.getElementById('v-precio').value);
  if(!cliente||!prod||!cant||!precio){toast('Completá los campos obligatorios (*)',false);return}
  const body={
    fecha:document.getElementById('v-fecha').value,
    cliente, tel:document.getElementById('v-tel').value,
    canal:document.getElementById('v-canal').value,
    producto:prod, cantidad:cant, precio_usd:precio,
    dolar:parseFloat(document.getElementById('v-dolar').value)||1400,
    pago:document.getElementById('v-pago').value,
    estado:document.getElementById('v-estado').value,
    logistica:document.getElementById('v-logistica').value,
    dir:document.getElementById('v-dir').value,
    colocador:document.getElementById('v-colocador').value,
    obs:document.getElementById('v-obs').value,
  };
  try{
    const r=await api('POST','/api/ventas',body);
    await Promise.all([loadProductos(),loadVentas()]);
    buildProdSelect(); renderDash(); renderStock();
    resetVenta();
    toast(`Venta registrada: ${r.cod} · ${fmtArs(r.total_ars)}`);
  }catch(e){toast(e.message,false)}
}

function resetVenta(){
  ['v-cliente','v-tel','v-dir','v-obs','v-colocador','v-cant','v-precio'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('v-prod').value='';
  document.getElementById('v-dolar').value='1400';
  document.getElementById('venta-preview').style.display='none';
}

// ─── Mi cuenta ───────────────────────────────────────────

async function cambiarPass(){
  const actual=document.getElementById('cp-actual').value;
  const nueva=document.getElementById('cp-nueva').value;
  const rep=document.getElementById('cp-rep').value;
  const msg=document.getElementById('cp-msg');
  if(nueva!==rep){msg.style.color='var(--red)';msg.textContent='Las contraseñas no coinciden';return}
  try{
    await api('POST','/api/auth/change-password',{actual,nueva});
    msg.style.color='var(--green)'; msg.textContent='Contraseña actualizada correctamente';
    ['cp-actual','cp-nueva','cp-rep'].forEach(id=>document.getElementById(id).value='');
  }catch(e){msg.style.color='var(--red)';msg.textContent=e.message}
}
</script>
</body>
</html>
