/* =========================================================
   La Cachila · Multiespacio Café Resto
   ---------------------------------------------------------
   TODO LO QUE SE CAMBIA SEGUIDO ESTÁ EN ESTE BLOQUE (CONFIG)
   y en la CARTA de más abajo. El resto del archivo no hace
   falta tocarlo.
   ========================================================= */

const CONFIG = {
  // WhatsApp que recibe reservas, pedidos y consultas.
  // Formato internacional, solo números: 598 + número sin el 0.
  // Prototipo: 59898100017 (Metheris Studios).
  // Al publicar para el local: 59896651131.
  whatsapp: '59898100017',

  // Teléfono para llamar (se muestra en la web tal cual).
  telefonoVisible: '096 651 131',
  telefonoLlamar: '+59896651131',

  // Clave de Web3Forms (decide a qué mail llegan los formularios).
  web3formsKey: '31bd8c3d-df41-4206-a1cd-f258cb680201',
  asuntoFormulario: 'Nueva consulta desde la web - La Cachila',

  // Mostrar u ocultar los precios de la carta (true / false).
  mostrarPrecios: true,

  // Horarios. 0 = domingo ... 6 = sábado. Formato 'HH:MM'.
  // '00:00' como cierre quiere decir medianoche.
  // null = cerrado ese día.
  horarios: {
    0: ['10:00', '00:00'], // domingo
    1: ['10:00', '20:00'], // lunes
    2: ['10:00', '20:00'], // martes
    3: ['10:00', '20:00'], // miércoles
    4: ['10:00', '00:00'], // jueves
    5: ['10:00', '00:00'], // viernes
    6: ['10:00', '00:00']  // sábado
  },
  zonaHoraria: 'America/Montevideo'
};

/* ---------------------------------------------------------
   CARTA
   Cada producto: [nombre, descripción, precio en pesos]
   Para sacar un producto, borrá su línea.
   --------------------------------------------------------- */
const CARTA = [
  {
    id: 'cafeteria', nombre: 'Cafetería', momento: 'Mañana y tarde',
    items: [
      ['Expresso', 'Café concentrado', 100],
      ['Expresso doble', 'El doble de intensidad', 120],
      ['Café americano', 'Expresso con dosis de agua', 130],
      ['Cortado', 'Expresso con leche vaporizada', 165],
      ['Capuchino', 'Expresso con leche texturada y vaporizada', 190],
      ['Macchiato', 'Expresso con gota de leche vaporizada', 140],
      ['Caffe latte', 'Expresso con leche vaporizada', 190],
      ['Chocolatada', '', 100],
      ['Chocolate caliente', '', 200],
      ['Submarino', '', 190],
      ['Té', '', 120],
      ['Exprimido de naranja', '', 160]
    ]
  },
  {
    id: 'dulces', nombre: 'Dulces', momento: 'Mañana y tarde',
    items: [
      ['Medialuna rellena de membrillo', '', 130],
      ['Medialuna rellena de chocolate', '', 170],
      ['Medialuna rellena de nutella', '', 190],
      ['Medialuna rellena de crema de pistacho', '', 200],
      ['Medialuna rellena de crema pastelera', '', 170],
      ['Roll de canela', '', 170],
      ['Roll de canela relleno', '', 200],
      ['New roll relleno', '', 220],
      ['Cookies rellenas', '', 130],
      ['Alfajor de chocolate', '', 140],
      ['Alfajor salchichón', '', 150],
      ['Alfajores de maicena', '', 110],
      ['Brownie', '', 160],
      ['Danesas', '', 170],
      ['Margaritas', '', 70],
      ['Vigilantes', '', 30],
      ['Budines', '', 120]
    ]
  },
  {
    id: 'salados', nombre: 'Salados', momento: 'Mañana y tarde',
    items: [
      ['Medialuna', '', 170], // así figura en la carta del local: confirmar
      ['Medialuna rellena de queso', '', 130],
      ['Medialuna de jamón y queso', '', 180],
      ['Medialuna rellena', 'Bondiola, rúcula y huevo', 220],
      ['Medialuna rellena', 'Jamón crudo, rúcula y queso philadelphia', 240],
      ['Scones', '', 70],
      ['Tostón de pan de campo · Opción 1', 'Queso crema, palta y huevo', 280],
      ['Tostón de pan de campo · Opción 2', 'Palta, tomate cherry y brotes', 280],
      ['Tostón de pan de campo · Opción 3', 'Palta, bondiola, rúcula y brotes', 300],
      ['Tostón de pan de campo · Opción 4', 'Muzza, huevo y lomito', 300],
      ['Sándwich caliente', 'Con pan de campo', 220],
      ['Chipá de queso azul', '', 80],
      ['Chipá relleno', 'Lomito, rúcula, tomate, huevo y queso philadelphia', 220]
    ]
  },
  {
    id: 'postres', nombre: 'Postres', momento: 'Mañana y tarde',
    items: [
      ['Flan casero', '', 180],
      ['Cheesecake', '', 280],
      ['Tortas del día', '', 280],
      ['Arroz con leche', '', 160],
      ['Panqueques', 'De nutella o de pistacho', 210]
    ]
  },
  {
    id: 'pizzas', nombre: 'Pizzas', momento: 'Mediodía y noche',
    nota: 'Cada gusto extra: $50.',
    items: [
      ['La Cachila', 'Muzzarella', 520],
      ['La Cachila Especial', 'Muzza y panceta', 560],
      ['La Cachila Premium', 'Muzza, panceta y huevo frito', 690],
      ['La Ruta km 40', 'Muzza, chorizo, provolone y morrón', 740],
      ['El Motorcito', 'Muzza, roquefort, provolone y parmesano', 620],
      ['La Viajera', 'Rúcula, bondiola, aceitunas negras y aceite de oliva', 590],
      ['La Recorre Caminos', 'Muzza, cheddar y panceta', 580],
      ['La Coupé', 'Muzza y aceitunas', 540],
      ['La Ranchera', 'Muzza, aceitunas y panceta', 560],
      ['La Camionera', 'Muzza y anchoas', 740],
      ['La Furgón', 'Muzza, papas pay, panceta y cheddar', 610],
      ['La Primera Marcha', 'Muzza y jamón', 560],
      ['La Dominguera', 'Muzza, entraña fina, provolone y morrón', 890],
      ['La Ford A', 'Figazza', 420],
      ['La Ford T', 'Fugazzeta', 480],
      ['La Baquet', 'Tomate, albahaca, morrón, jamón y aceite de oliva', 590],
      ['Cachila Clásica', 'Muzza y peperoni', 560],
      ['La Studebaker', 'Muzza, ajo y perejil con aceite de oliva', 540],
      ['La Pick Up', 'Muzza, cebolla caramelizada y morrón', 560],
      ['La Chata', 'Muzza, tomate y albahaca', 540],
      ['Hot Rod', 'Muzza y champiñones a la provenzal', 580],
      ['La Pionera', 'Salsa de tomate y orégano', 390]
    ]
  },
  {
    id: 'parrilla', nombre: 'Parrilla', momento: 'Mediodía y noche',
    items: [
      ['Parrilla para 2', '', 2150],
      ['Parrilla para 3', '', 2850],
      ['Asado 4 costillas', 'Vila · 3 tiras de 4 costillas', 950],
      ['Bife de vacío', 'Vila', 980],
      ['Pulpón de vacío', 'Vila', 920],
      ['Entraña fina', 'Vila', 1050],
      ['Entraña americana', 'Vila', 990],
      ['Picaña', 'Vila', 920],
      ['Entrecot', '', 890],
      ['Matambrito de cerdo', '', 890],
      ['Suprema de pollo', '', 690],
      ['Muslo de pollo', '', 490],
      ['Pamplonas de pollo', '', 420],
      ['Mollejas', 'Vila', 490],
      ['Chinchulines', 'Vila', 380],
      ['Riñón', 'Vila', 290],
      ['Chorizo', 'Extra Centenario', 240],
      ['Morcilla dulce o salada', '', 210],
      ['Provolone', '', 350],
      ['Provolone La Cachila', 'Morrón, panceta, cebolla y aceitunas negras', 550],
      ['Morrón relleno', '', 450],
      ['Papa al plomo', '', 220],
      ['Boniato glaseado', '', 270]
    ]
  },
  {
    id: 'guarniciones', nombre: 'Guarniciones', momento: 'Mediodía y noche',
    items: [
      ['Papas fritas', 'Finas', 240],
      ['Papas noisette', '', 250],
      ['Papas rústicas', '', 260],
      ['Puré de papas', '', 230],
      ['Ensalada mixta', '', 260],
      ['Ensalada verde', 'Lechuga, rúcula, albahaca y parmesano', 320],
      ['Ensalada rusa', '', 310]
    ]
  },
  {
    id: 'bebidas', nombre: 'Bebidas', momento: 'Para tomar',
    items: [
      ['Pepsi, Pomelo o Mirinda', '500 ml', 140],
      ['Pepsi Black, Pomelo Light o 7up', '500 ml', 140],
      ['Pepsi, Pepsi Black o Pomelo', '1,5 L', 290],
      ['Agua saborizada Salus', '1,5 L', 220],
      ['Agua saborizada Salus', '500 ml', 120],
      ['Agua Salus con o sin gas', '1,5 L', 190],
      ['Agua Salus con o sin gas', '500 ml', 100],
      ['Jarra de limonada con menta', '1,5 L', 280],
      ['Jugo de naranja natural', 'Vaso', 160],
      ['Cerveza Stella Artois', '1 L', 360],
      ['Cerveza Zillertal', '1 L', 350],
      ['Cerveza Corona', '330 ml', 220],
      ['Cerveza Patagonia', '730 ml', 310],
      ['Copa de vino', '', 140]
    ]
  }
];


/* =========================================================
   A PARTIR DE ACÁ, EL FUNCIONAMIENTO DE LA WEB
   (no hace falta tocarlo para cambiar datos)
   ========================================================= */
(function () {
  'use strict';

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const pesos = n => '$' + n.toLocaleString('es-UY');
  const mayus = t => t.charAt(0).toUpperCase() + t.slice(1);
  const waLink = texto => 'https://wa.me/' + CONFIG.whatsapp + (texto ? '?text=' + encodeURIComponent(texto) : '');

  /* ---------- Hora de Uruguay, esté donde esté el visitante ---------- */
  function ahoraUY() {
    const p = {};
    new Intl.DateTimeFormat('en-US', {
      timeZone: CONFIG.zonaHoraria, weekday: 'short', hour: '2-digit', minute: '2-digit',
      year: 'numeric', month: '2-digit', day: '2-digit', hourCycle: 'h23'
    }).formatToParts(new Date()).forEach(x => { p[x.type] = x.value; });
    return {
      dia: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday),
      minutos: parseInt(p.hour, 10) * 60 + parseInt(p.minute, 10),
      fecha: new Date(Date.UTC(+p.year, +p.month - 1, +p.day))
    };
  }
  const aMin = h => { const [a, b] = h.split(':').map(Number); return a * 60 + b; };
  const aHHMM = m => String(Math.floor(m / 60) % 24).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
  const cierreTxt = h => (h === '00:00' ? '00:00' : h);
  function rango(dia) {
    const h = CONFIG.horarios[dia];
    if (!h) return null;
    const a = aMin(h[0]); let c = aMin(h[1]);
    if (c <= a) c += 1440;
    return [a, c];
  }
  function horasDelDia(dia, esHoy, margen) {
    const r = rango(dia);
    if (!r) return [];
    const ahora = ahoraUY().minutos;
    const lista = [];
    for (let m = r[0]; m <= r[1] - 60; m += 30) {
      if (esHoy && m < ahora + margen) continue;
      lista.push(aHHMM(m));
    }
    return lista;
  }

  /* ---------- La chapa: horario de hoy, sin semáforos ---------- */
  function estadoHoy() {
    const { dia, minutos } = ahoraUY();
    const h = CONFIG.horarios[dia];
    const ayer = rango((dia + 6) % 7);
    const hoy = rango(dia);
    let abierto = false;
    if (ayer && ayer[1] > 1440 && minutos < ayer[1] - 1440) abierto = true;
    if (hoy && minutos >= hoy[0] && minutos < hoy[1]) abierto = true;
    let estado;
    if (abierto) estado = 'Abierto ahora';
    else if (hoy && minutos < hoy[0]) estado = 'Abrimos a las ' + h[0];
    else {
      let i = 1; while (i < 7 && !CONFIG.horarios[(dia + i) % 7]) i++;
      const d = (dia + i) % 7;
      estado = CONFIG.horarios[d] ? 'Volvemos ' + (i === 1 ? 'mañana' : 'el ' + DIAS[d]) + ' ' + CONFIG.horarios[d][0] : 'Cerrado';
    }
    return {
      dia: 'Hoy ' + DIAS[dia] + ':',
      horario: h ? 'de ' + h[0] + ' a ' + cierreTxt(h[1]) + ' h' : 'cerrado',
      estado,
      footer: h ? 'Abierto de ' + h[0] + ' a ' + cierreTxt(h[1]) + ' h' : 'Hoy no abrimos'
    };
  }
  function pintarChapa() {
    const e = estadoHoy();
    $$('[data-chapa-dia]').forEach(x => { x.textContent = e.dia; });
    $$('[data-chapa-horario]').forEach(x => { x.textContent = e.horario; });
    $$('[data-chapa-estado]').forEach(x => { x.textContent = e.estado; });
    $$('[data-hoy-footer]').forEach(x => { x.textContent = e.footer; });
  }

  function pintarHorarios() {
    const ul = $('#tabla-horarios');
    if (!ul) return;
    const hoy = ahoraUY().dia;
    ul.innerHTML = [1, 2, 3, 4, 5, 6, 0].map(d => {
      const h = CONFIG.horarios[d];
      return '<li class="' + (d === hoy ? 'is-hoy' : '') + '"><span>' + mayus(DIAS[d]) + (d === hoy ? ' <small>hoy</small>' : '') +
        '</span><span>' + (h ? h[0] + ' a ' + cierreTxt(h[1]) : 'Cerrado') + '</span></li>';
    }).join('');
  }

  /* ---------- Links de WhatsApp y teléfono (salen de CONFIG) ---------- */
  function prepararLinks() {
    $$('[data-wa]').forEach(a => { a.href = waLink(a.getAttribute('data-wa')); a.target = '_blank'; a.rel = 'noopener'; });
    $$('[data-tel]').forEach(a => { a.href = 'tel:' + CONFIG.telefonoLlamar; if (!a.children.length) a.textContent = CONFIG.telefonoVisible; });
    $$('[data-tel-texto]').forEach(el => { el.textContent = CONFIG.telefonoVisible; });
  }

  /* ---------- Header: menú en celular, sección activa y el auto en la ruta ---------- */
  function header() {
    const btn = $('.menu-btn');
    const nav = $('.nav');
    const cerrarMenu = () => { nav.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-abierto'); };
    btn.addEventListener('click', () => {
      const abierto = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', abierto);
      document.body.classList.toggle('menu-abierto', abierto);
    });
    $$('.nav a').forEach(a => a.addEventListener('click', cerrarMenu));

    const auto = $('.ruta-auto');
    let pendiente = false;
    const mover = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      auto.style.setProperty('--avance', max > 0 ? Math.min(1, scrollY / max).toFixed(4) : 0);
      pendiente = false;
    };
    if (auto) {
      addEventListener('scroll', () => { if (!pendiente) { pendiente = true; requestAnimationFrame(mover); } }, { passive: true });
      addEventListener('resize', mover);
      mover();
    }

    const links = $$('.nav a[href^="#"]:not(.btn)');
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(es => es.forEach(en => {
        if (en.isIntersecting) links.forEach(l => l.classList.toggle('is-activo', l.getAttribute('href') === '#' + en.target.id));
      }), { rootMargin: '-45% 0px -50% 0px' });
      links.forEach(l => { const s = $(l.getAttribute('href')); if (s) obs.observe(s); });
    }
  }

  function revelar() {
    // Bloques que suben suavemente
    const bloques = $$('.cab-seccion, .pizarra, .reserva-caja, .visita-info, .cartel, .form, .contacto-in > div:first-child');
    bloques.forEach(e => e.classList.add('revelar'));
    // Listas que aparecen de a una (escalonado)
    [['.canales li', .08], ['.horarios li', .05]].forEach(([sel, paso]) => {
      $$(sel).forEach((e, i) => { e.classList.add('revelar'); e.style.setProperty('--d', (i * paso).toFixed(2) + 's'); });
    });
    // Imágenes que se descubren de arriba hacia abajo
    $$('.reservas-foto, .mapa').forEach(e => e.classList.add('revelar-img'));
    $$('.fotos .foto').forEach((e, i) => { e.classList.add('revelar-img'); e.style.setProperty('--d', (i * .12).toFixed(2) + 's'); });

    const todos = $$('.revelar, .revelar-img');
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      todos.forEach(e => e.classList.add('is-visible')); return;
    }
    const obs = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); obs.unobserve(en.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    todos.forEach(e => obs.observe(e));
  }

  /* =========================================================
     LA CARTA (pizarra) Y EL PEDIDO PARA LLEVAR
     ========================================================= */
  const pedido = new Map();
  const ICONO_MAS = '+';
  let mostrarRubro = () => {};

  function pintarCarta() {
    const cMomentos = $('#momentos');
    const cRubros = $('#rubros');
    const panel = $('#carta-panel');
    if (!panel) return;
    document.body.classList.toggle('sin-precios', !CONFIG.mostrarPrecios);
    const momentos = [...new Set(CARTA.map(c => c.momento))];
    let momentoActual = momentos[0];

    cMomentos.innerHTML = momentos.map((m, i) =>
      '<button type="button" role="tab" class="momento" aria-selected="' + (i === 0) + '" data-momento="' + m + '">' + m + '</button>').join('');

    function elegirMomento(m, rubroId) {
      momentoActual = m;
      $$('.momento', cMomentos).forEach(b => b.setAttribute('aria-selected', b.dataset.momento === m));
      const rubros = CARTA.filter(c => c.momento === m);
      cRubros.innerHTML = rubros.length > 1
        ? rubros.map(r => '<button type="button" class="rubro" aria-pressed="false" data-rubro="' + r.id + '">' + r.nombre + '</button>').join('')
        : '';
      mostrarRubro(rubroId || rubros[0].id);
    }

    mostrarRubro = function (id) {
      const c = CARTA.find(x => x.id === id);
      if (c.momento !== momentoActual) { elegirMomento(c.momento, id); return; }
      $$('.rubro', cRubros).forEach(b => b.setAttribute('aria-pressed', b.dataset.rubro === id));
      panel.classList.remove('is-cambio'); void panel.offsetWidth; panel.classList.add('is-cambio');
      panel.innerHTML = '<ul class="platos">' + c.items.map((it, i) => {
        const clave = c.id + '|' + i;
        const cant = pedido.get(clave)?.cant || 0;
        return '<li class="plato"><div class="plato-linea"><span class="plato-nombre">' + it[0] + '</span><span class="puntos"></span>' +
          '<span class="plato-precio">' + pesos(it[2]) + '</span></div>' +
          (it[1] ? '<span class="plato-desc">' + it[1] + '</span>' : '') +
          controlHTML(clave, it[0] + (it[1] ? ', ' + it[1] : ''), cant) + '</li>';
      }).join('') + '</ul>' + (c.nota ? '<p class="pizarra-nota">' + c.nota + '</p>' : '');
    };

    cMomentos.addEventListener('click', e => { const b = e.target.closest('.momento'); if (b) elegirMomento(b.dataset.momento); });
    cRubros.addEventListener('click', e => { const b = e.target.closest('.rubro'); if (b) mostrarRubro(b.dataset.rubro); });
    panel.addEventListener('click', e => {
      const b = e.target.closest('[data-accion]');
      if (!b) return;
      const clave = b.closest('.plato-control').dataset.clave;
      const [cat, idx] = clave.split('|');
      const c = CARTA.find(x => x.id === cat);
      const it = c.items[+idx];
      const x = pedido.get(clave);
      if (b.dataset.accion === 'mas') {
        if (x) x.cant++; else pedido.set(clave, { nombre: it[0], detalle: it[1], cat: c.nombre, precio: it[2], cant: 1 });
      } else if (x) {
        x.cant--;
        if (x.cant <= 0) pedido.delete(clave);
      }
      refrescarBotonCarta(clave, true);
      actualizarPedido();
    });
    elegirMomento(momentoActual);
  }

  /* Botones de cada plato: "+" si no está en el pedido; "− cantidad +" si ya está */
  function controlHTML(clave, nombre, cant) {
    if (!cant) {
      return '<div class="plato-control" data-clave="' + clave + '" data-nombre="' + nombre + '">' +
        '<button type="button" data-accion="mas" aria-label="Sumar ' + nombre + ' al pedido">' + ICONO_MAS + '</button></div>';
    }
    return '<div class="plato-control tiene" data-clave="' + clave + '" data-nombre="' + nombre + '">' +
      '<button type="button" data-accion="menos" aria-label="Sacar uno de ' + nombre + '">−</button>' +
      '<span aria-live="polite">' + cant + '</span>' +
      '<button type="button" data-accion="mas" aria-label="Sumar otro de ' + nombre + '">+</button></div>';
  }
  function refrescarBotonCarta(clave, mantenerFoco) {
    const ctrl = $('.plato-control[data-clave="' + clave + '"]');
    if (!ctrl) return;
    const enfocado = mantenerFoco && ctrl.contains(document.activeElement) ? document.activeElement.dataset.accion : null;
    const nuevo = document.createElement('div');
    nuevo.innerHTML = controlHTML(clave, ctrl.dataset.nombre, pedido.get(clave)?.cant || 0);
    const reemplazo = nuevo.firstChild;
    ctrl.replaceWith(reemplazo);
    if (enfocado) ($('[data-accion="' + enfocado + '"]', reemplazo) || $('[data-accion="mas"]', reemplazo)).focus();
  }

  function actualizarPedido() {
    const total = Array.from(pedido.values()).reduce((a, x) => a + x.cant, 0);
    $('#pedido-cant').textContent = total;
    $('#pedido-barra').classList.toggle('is-visible', total > 0);
    document.body.classList.toggle('con-pedido', total > 0);
    $('#pedido-lista').innerHTML = total
      ? Array.from(pedido.entries()).map(([k, x]) =>
        '<li><div><span class="tl-nombre">' + x.nombre + '</span><span class="tl-desc">' + x.cat + (x.detalle ? ' · ' + x.detalle : '') + '</span></div>' +
        '<div class="cantidad"><button type="button" data-menos="' + k + '" aria-label="Uno menos de ' + x.nombre + '">−</button><span>' + x.cant + '</span>' +
        '<button type="button" data-mas="' + k + '" aria-label="Uno más de ' + x.nombre + '">+</button></div></li>').join('')
      : '<li class="ticket-vacio">Todavía no sumaste nada. Usá el + de la carta.</li>';
    const ref = Array.from(pedido.values()).reduce((a, x) => a + x.cant * x.precio, 0);
    $('#pedido-ref').textContent = total ? 'Según la carta: ' + pesos(ref) + '. El total te lo confirman por WhatsApp.' : '';
  }

  function prepararPedido() {
    const panel = $('#pedido');
    const abrir = () => {
      panel.hidden = false;
      requestAnimationFrame(() => panel.classList.add('is-open'));
      document.body.classList.add('panel-abierto');
      setTimeout(() => $('#pedido-nombre').focus(), 60);
    };
    const cerrar = () => {
      panel.classList.remove('is-open');
      document.body.classList.remove('panel-abierto');
      setTimeout(() => { panel.hidden = true; }, 320);
      $('#pedido-ver').focus();
    };
    $('#pedido-ver').addEventListener('click', abrir);
    $('#pedido-cerrar').addEventListener('click', cerrar);
    $('.pedido-fondo').addEventListener('click', cerrar);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && panel.classList.contains('is-open')) cerrar(); });

    $('#pedido-lista').addEventListener('click', e => {
      const b = e.target.closest('[data-mas],[data-menos]');
      if (!b) return;
      const k = b.dataset.mas || b.dataset.menos;
      const x = pedido.get(k);
      x.cant += b.dataset.mas ? 1 : -1;
      if (x.cant <= 0) pedido.delete(k);
      actualizarPedido(); refrescarBotonCarta(k);
      if (!pedido.size) cerrar();
    });
    $('#pedido-vaciar').addEventListener('click', () => {
      const claves = Array.from(pedido.keys());
      pedido.clear(); actualizarPedido(); claves.forEach(refrescarBotonCarta); cerrar();
    });
    $('#pedido-form').addEventListener('submit', e => {
      e.preventDefault();
      const nom = $('#pedido-nombre');
      const n = nom.value.trim();
      if (!validarNombre(n)) {
        $('#pedido-nombre-error').textContent = 'Escribí tu nombre (solo letras) para saber de quién es el pedido.';
        nom.setAttribute('aria-invalid', 'true'); nom.focus(); return;
      }
      $('#pedido-nombre-error').textContent = ''; nom.removeAttribute('aria-invalid');
      if (!pedido.size) return;
      const lineas = Array.from(pedido.values()).map(x => '• ' + x.cant + ' × ' + x.nombre + (x.detalle ? ' (' + x.detalle + ')' : '') + ' — ' + x.cat);
      const nota = $('#pedido-nota').value.trim();
      window.open(waLink('Hola La Cachila, quiero hacer un pedido para retirar:\n\n' + lineas.join('\n') +
        '\n\nLo paso a retirar por el local, a nombre de ' + n + '.' +
        (nota ? '\nAclaración: ' + nota : '') +
        '\n\n¿Me confirman el total, a qué hora lo puedo pasar a buscar y cómo pago? Gracias.'), '_blank', 'noopener');
    });
    actualizarPedido();
  }

  /* =========================================================
     RESERVA: la comanda
     ========================================================= */
  function prepararComanda() {
    const form = $('#reserva-form');
    if (!form) return;
    const sPers = $('#r-personas'), sDia = $('#r-dia'), sHora = $('#r-hora'), iNom = $('#r-nombre');

    let op = '';
    for (let i = 1; i <= 20; i++) op += '<option value="' + i + '"' + (i === 2 ? ' selected' : '') + '>' + (i === 1 ? '1 persona' : i + ' personas') + '</option>';
    op += '<option value="más de 20">más de 20</option>';
    sPers.innerHTML = op;

    const base = ahoraUY();
    const fechas = [];
    for (let i = 0; i < 14 && fechas.length < 10; i++) {
      const f = new Date(base.fecha.getTime() + i * 86400000);
      const ds = f.getUTCDay();
      if (!horasDelDia(ds, i === 0, 60).length) continue;
      const fecha = DIAS[ds] + ' ' + f.getUTCDate() + '/' + (f.getUTCMonth() + 1);
      fechas.push({ ds, hoy: i === 0, txt: i === 0 ? 'hoy' : i === 1 ? 'mañana' : 'el ' + DIAS[ds] + ' ' + f.getUTCDate(), completo: (i === 0 ? 'hoy ' : i === 1 ? 'mañana ' : '') + fecha });
    }
    sDia.innerHTML = fechas.map((f, i) => '<option value="' + i + '">' + mayus(f.txt.replace(/^el /, '')) + '</option>').join('');

    function llenarHoras() {
      const f = fechas[+sDia.value];
      if (!f) { sHora.innerHTML = '<option value="">—</option>'; return; }
      const anterior = sHora.value;
      const horas = horasDelDia(f.ds, f.hoy, 60);
      sHora.innerHTML = horas.map(h => '<option>' + h + '</option>').join('');
      const preferida = horas.includes(anterior) ? anterior
        : (horas.find(h => h === '21:00') || horas.find(h => h === '13:00') || horas[horas.length - 1]);
      sHora.value = preferida;
    }


    sDia.addEventListener('change', () => { llenarHoras(); });
    iNom.addEventListener('input', () => { if (iNom.hasAttribute('aria-invalid') && validarNombre(iNom.value.trim())) { iNom.removeAttribute('aria-invalid'); $('#r-error').textContent = ''; } });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const n = iNom.value.trim();
      if (!fechas.length || !sHora.value) { $('#r-error').textContent = 'No hay horarios disponibles en los próximos días. Escribinos por WhatsApp.'; return; }
      if (!validarNombre(n)) {
        $('#r-error').textContent = 'Falta tu nombre (solo letras) para anotar la reserva.';
        iNom.setAttribute('aria-invalid', 'true'); iNom.focus(); return;
      }
      $('#r-error').textContent = '';
      const f = fechas[+sDia.value];
      const coment = $('#r-comentario').value.trim();
      const personas = sPers.value === 'más de 20' ? 'más de 20 personas' : sPers.options[sPers.selectedIndex].text;
      window.open(waLink('Hola La Cachila, quiero reservar una mesa:\n\n' +
        '• Somos ' + personas + '\n• Día: ' + f.completo + '\n• Hora: ' + sHora.value + ' h' +
        '\n• A nombre de ' + n + (coment ? '\n• ' + coment : '') + '\n\n¿Me confirman si hay lugar? Gracias.'), '_blank', 'noopener');
    });

    llenarHoras();
  }

  /* =========================================================
     FORMULARIO DE CONTACTO (Web3Forms)
     ========================================================= */
  function validarNombre(v) {
    return /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]{2,40}$/.test(v) && (v.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/g) || []).length >= 2 && !/(.)\1\1/i.test(v);
  }
  function validarTelefono(v) {
    let d = v.replace(/[\s\-().]/g, '');
    if (!/^\+?\d+$/.test(d)) return false;
    d = d.replace(/^\+/, '');
    if (d.startsWith('598')) { d = d.slice(3); return /^9[1-9]\d{6}$/.test(d) || /^[24]\d{7}$/.test(d); }
    return /^09[1-9]\d{6}$/.test(d) || /^[24]\d{7}$/.test(d);
  }
  const validarCorreo = v => /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v) && v.length <= 80;
  function validarMensaje(v) {
    const palabras = v.split(/\s+/).filter(p => /[a-záéíóúñ]{2,}/i.test(p));
    return v.length >= 15 && v.length <= 1000 && palabras.length >= 3 && /[aeiouáéíóú]/i.test(v) && !/(.)\1{4,}/.test(v);
  }

  function prepararContacto() {
    const form = $('#form-contacto');
    if (!form) return;
    const reglas = {
      Nombre: [validarNombre, 'Escribí tu nombre, solo con letras.'],
      Apellido: [validarNombre, 'Escribí tu apellido, solo con letras.'],
      'Correo electrónico': [validarCorreo, 'Revisá el correo: tiene que ser del tipo nombre@correo.com.'],
      'Teléfono': [validarTelefono, 'Escribí un teléfono uruguayo válido, por ejemplo 099 123 456.'],
      'Tipo de consulta': [v => !!v, 'Elegí el tipo de consulta.'],
      Mensaje: [validarMensaje, 'Contanos un poco más (mínimo 15 caracteres, con palabras).']
    };
    const campo = n => form.elements[n];
    const validar = n => {
      const el = campo(n);
      const ok = reglas[n][0](el.value.trim());
      $('[data-error-de="' + n + '"]', form).textContent = ok ? '' : reglas[n][1];
      el.toggleAttribute('aria-invalid', !ok);
      return ok;
    };
    Object.keys(reglas).forEach(n => {
      const el = campo(n);
      el.addEventListener('blur', () => { if (el.value.trim()) validar(n); });
      el.addEventListener('input', () => { if (el.hasAttribute('aria-invalid')) validar(n); });
      el.addEventListener('change', () => { if (el.tagName === 'SELECT') validar(n); });
    });
    campo('Teléfono').addEventListener('input', e => { e.target.value = e.target.value.replace(/[^\d+\s\-()]/g, ''); });
    campo('Mensaje').addEventListener('input', e => { $('#contador-mensaje').textContent = e.target.value.length + ' / 1000'; });

    form.addEventListener('submit', async e => {
      e.preventDefault();
      const estado = $('#form-estado');
      let primero = null;
      Object.keys(reglas).forEach(n => { if (!validar(n) && !primero) primero = campo(n); });
      if (primero) { primero.focus(); estado.className = 'form-estado is-error'; estado.textContent = 'Revisá los campos marcados.'; return; }
      if (form.elements.botcheck.checked) return;
      const btn = $('button[type="submit"]', form);
      btn.disabled = true; estado.className = 'form-estado'; estado.textContent = 'Enviando…';
      const datos = {
        access_key: CONFIG.web3formsKey,
        subject: CONFIG.asuntoFormulario,
        from_name: 'Web de La Cachila',
        replyto: campo('Correo electrónico').value.trim()
      };
      Object.keys(reglas).forEach(n => { datos[n] = campo(n).value.trim(); });
      try {
        const r = await fetch('https://api.web3forms.com/submit', {
          method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(datos)
        });
        const j = await r.json();
        if (!j.success) throw new Error(j.message || 'error');
        form.reset(); $('#contador-mensaje').textContent = '0 / 1000';
        estado.className = 'form-estado is-ok'; estado.textContent = '¡Listo! Recibimos tu consulta y te respondemos a la brevedad.';
      } catch (err) {
        estado.className = 'form-estado is-error';
        estado.innerHTML = 'No se pudo enviar. Probá de nuevo o escribinos por <a data-wa="Hola La Cachila, tengo una consulta.">WhatsApp</a>.';
        prepararLinks();
      } finally { btn.disabled = false; }
    });
  }

  /* ---------- Fotos: verlas grandes ---------- */
  function galeria() {
    const visor = $('#visor');
    const fotos = $$('.foto');
    if (!visor || !fotos.length) return;
    let actual = 0;
    const mostrar = i => {
      actual = (i + fotos.length) % fotos.length;
      $('img', visor).src = fotos[actual].dataset.src;
      $('img', visor).alt = $('img', fotos[actual]).alt;
      $('figcaption', visor).textContent = fotos[actual].dataset.pie || '';
    };
    fotos.forEach((f, i) => f.addEventListener('click', () => { mostrar(i); visor.showModal(); }));
    $('.visor-cerrar', visor).addEventListener('click', () => visor.close());
    $('.visor-ant', visor).addEventListener('click', () => mostrar(actual - 1));
    $('.visor-sig', visor).addEventListener('click', () => mostrar(actual + 1));
    visor.addEventListener('click', e => { if (e.target === visor) visor.close(); });
    visor.addEventListener('keydown', e => { if (e.key === 'ArrowRight') mostrar(actual + 1); if (e.key === 'ArrowLeft') mostrar(actual - 1); });
  }

  document.addEventListener('DOMContentLoaded', () => {
    prepararLinks();
    pintarChapa();
    setInterval(pintarChapa, 60000);
    pintarHorarios();
    header();
    pintarCarta();
    prepararPedido();
    prepararComanda();
    prepararContacto();
    galeria();
    revelar();
    const anio = $('#anio'); if (anio) anio.textContent = new Date().getFullYear();
  });
})();
