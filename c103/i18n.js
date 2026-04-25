/* ============================================================
   BELLA VISTA C-103 — BILINGUAL ENGINE (EN / ES)
   Usage: every translatable element gets data-i18n="key"
   The engine reads the current lang, swaps innerHTML/placeholder/aria-label
   Language persisted in localStorage as 'bv_lang'
   ============================================================ */

const BV_I18N = {

  /* ---- NAV ---- */
  'nav.forsale'       : { en: 'For Sale',          es: 'En Venta' },
  'nav.property'      : { en: 'Property',           es: 'Propiedad' },
  'nav.smarthome'     : { en: 'Smart Home',         es: 'Casa Inteligente' },
  'nav.community'     : { en: 'Community',          es: 'Comunidad' },
  'nav.pricing'       : { en: 'Pricing',            es: 'Precio' },
  'nav.gallery'       : { en: 'Gallery',            es: 'Galería' },
  'nav.location'      : { en: 'Location',           es: 'Ubicación' },
  'nav.makeoffer'     : { en: 'Make an Offer',      es: 'Hacer Oferta' },

  /* ---- ANNOUNCE BAR ---- */
  'announce.strong'   : { en: 'NOW FOR SALE — SELLER DIRECT FINANCING AVAILABLE',
                          es: 'EN VENTA — FINANCIAMIENTO DIRECTO CON EL VENDEDOR' },
  'announce.detail'   : { en: '$385,000 USD · 50% Down · Possession at Signing',
                          es: '$385,000 USD · 50% de Enganche · Posesión al Firmar' },
  'announce.cta'      : { en: 'Make an Offer',      es: 'Hacer una Oferta' },

  /* ---- HERO BADGES ---- */
  'hero.badge.sale'   : { en: 'For Sale',           es: 'En Venta' },
  'hero.badge.ev'     : { en: 'EV Ready',           es: 'Cargador VE' },
  'hero.badge.smart'  : { en: 'Smart Home',         es: 'Casa Inteligente' },

  /* ---- HERO CONTENT ---- */
  'hero.eyebrow'      : { en: 'Carretera Tijuana–Ensenada #9403 · Real del Mar, Rosarito, B.C.',
                          es: 'Carretera Tijuana–Ensenada #9403 · Real del Mar, Rosarito, B.C.' },
  'hero.unit'         : { en: 'Unit C-103 · Condominio Bella Vista I · Ocean View',
                          es: 'Unidad C-103 · Condominio Bella Vista I · Vista al Mar' },
  'hero.price.label'  : { en: 'Asking Price',       es: 'Precio de Venta' },
  'hero.price.note'   : { en: 'Seller Direct Financing · 50% Down · 3–7 Year Terms',
                          es: 'Financiamiento Directo · 50% de Enganche · Plazo 3–7 Años' },
  'hero.cta.offer'    : { en: 'Make an Offer',      es: 'Hacer una Oferta' },
  'hero.cta.calc'     : { en: 'Financing Calculator', es: 'Calculadora de Pagos' },
  'hero.scroll'       : { en: 'Scroll',             es: 'Ver más' },

  /* ---- STATS BAR ---- */
  'stats.bedrooms'    : { en: 'Bedrooms',           es: 'Recámaras' },
  'stats.bathrooms'   : { en: 'Bathrooms',          es: 'Baños' },
  'stats.interior'    : { en: 'm² Interior',        es: 'm² Interior' },
  'stats.total'       : { en: 'm² Total',           es: 'm² Total' },
  'stats.terrace'     : { en: 'Terrace',            es: 'Terraza' },
  'stats.hottub'      : { en: '+ Hot Tub',          es: '+ Jacuzzi' },
  'stats.ev'          : { en: 'EV',                 es: 'VE' },
  'stats.evlabel'     : { en: 'Charger Incl.',      es: 'Cargador Incl.' },
  'stats.price'       : { en: '$385K',              es: '$385K' },
  'stats.pricelabel'  : { en: 'USD · Seller Direct', es: 'USD · Venta Directa' },

  /* ---- PROPERTY SECTION ---- */
  'prop.eyebrow'      : { en: 'The Property',       es: 'La Propiedad' },
  'prop.title'        : { en: 'Turn-Key Ocean View<br>Condo in Real del Mar',
                          es: 'Departamento Vista al Mar<br>Llave en Mano en Real del Mar' },
  'prop.p1'           : { en: 'Unit C-103 is a <strong>fully furnished, move-in ready</strong> condo inside the gated Condominio Bella Vista I complex in Real del Mar — one of the most sought-after coastal communities in Northern Baja California. <strong>Everything transfers with the sale</strong>: furniture, appliances, décor, and all smart home and energy infrastructure.',
                          es: 'La Unidad C-103 es un departamento <strong>completamente amueblado y listo para habitar</strong> dentro del condominio cerrado Bella Vista I en Real del Mar — una de las comunidades costeras más cotizadas del Norte de Baja California. <strong>Todo se incluye en la venta</strong>: muebles, electrodomésticos, decoración e infraestructura energética inteligente.' },
  'prop.p2'           : { en: 'The property features a curated boho-eclectic interior, a private covered terrace with hot tub and ocean-view bar, and a full energy upgrade package — including EV charging, battery backup, and smart lighting — making this <strong>one of the most technically advanced units in the complex</strong>.',
                          es: 'La propiedad cuenta con un interior boho-ecléctico cuidadosamente diseñado, una terraza privada cubierta con jacuzzi y bar con vista al mar, y un paquete completo de energía — incluyendo cargador para VE, batería de respaldo e iluminación inteligente — lo que la convierte en <strong>una de las unidades más modernas del condominio</strong>.' },
  'spec.unit'         : { en: 'Unit',               es: 'Unidad' },
  'spec.interior'     : { en: 'Interior',           es: 'Interior' },
  'spec.parking'      : { en: 'Parking',            es: 'Estacionamiento' },
  'spec.totalarea'    : { en: 'Total Area',         es: 'Área Total' },
  'spec.bedrooms'     : { en: 'Bedrooms',           es: 'Recámaras' },
  'spec.bathrooms'    : { en: 'Bathrooms',          es: 'Baños' },
  'spec.titletype'    : { en: 'Title Type',         es: 'Tipo de Título' },
  'spec.currency'     : { en: 'Currency',           es: 'Moneda' },
  'check.furniture'   : { en: 'All furniture & décor included',   es: 'Todos los muebles y decoración incluidos' },
  'check.appliances'  : { en: 'All appliances included',          es: 'Todos los electrodomésticos incluidos' },
  'check.terrace'     : { en: 'Private terrace + hot tub',        es: 'Terraza privada + jacuzzi' },
  'check.views'       : { en: '180° Pacific Ocean views',         es: 'Vistas 180° al Océano Pacífico' },
  'check.ev'          : { en: 'EV charger installed & included',  es: 'Cargador VE instalado e incluido' },
  'check.battery'     : { en: 'Battery backup system included',   es: 'Sistema de batería de respaldo incluido' },
  'check.lighting'    : { en: 'Smart lighting throughout',        es: 'Iluminación inteligente en toda la unidad' },
  'check.gated'       : { en: 'Gated community · Assigned parking', es: 'Condominio cerrado · Estacionamiento asignado' },
  'prop.cta.offer'    : { en: 'Make an Offer',      es: 'Hacer una Oferta' },
  'prop.cta.finance'  : { en: 'See Financing',      es: 'Ver Financiamiento' },

  /* ---- SMART HOME SECTION ---- */
  'sh.eyebrow'        : { en: 'High-Value Upgrade — Included in Sale',
                          es: 'Mejoras de Alto Valor — Incluidas en la Venta' },
  'sh.title'          : { en: 'Not Just a Condo.<br>An Energy-Ready Smart Home.',
                          es: 'No es solo un Departamento.<br>Es un Hogar Inteligente y Energético.' },
  'sh.sub'            : { en: 'Three premium upgrades are already installed and transfer with the sale — adding $15,000–$25,000+ in value and positioning this unit for the modern tech-forward buyer.',
                          es: 'Tres mejoras de primera ya están instaladas y se transfieren con la venta — agregando $15,000–$25,000+ USD en valor y posicionando esta unidad para el comprador moderno.' },
  'sh.badge'          : { en: 'Included',           es: 'Incluido' },
  'sh.ev.title'       : { en: 'EV Charger',         es: 'Cargador para VE' },
  'sh.ev.text'        : { en: 'Level 2 EV charging station installed and ready in your assigned parking spot. Compatible with Tesla, Rivian, Ford F-150 Lightning, and all J1772 vehicles.',
                          es: 'Estación de carga Nivel 2 instalada en tu lugar de estacionamiento asignado. Compatible con Tesla, Rivian, Ford F-150 Lightning y todos los vehículos J1772.' },
  'sh.ev.li1'         : { en: 'Ready for immediate use',     es: 'Lista para uso inmediato' },
  'sh.ev.li2'         : { en: 'J1772 standard — all EVs',   es: 'Estándar J1772 — todos los VE' },
  'sh.ev.li3'         : { en: 'Installed in assigned spot',  es: 'Instalada en lugar asignado' },
  'sh.bat.title'      : { en: 'Battery Backup',     es: 'Batería de Respaldo' },
  'sh.bat.text'       : { en: 'Whole-home battery backup protects against power outages. Keeps lights, refrigerator, Wi-Fi, and security online — and is solar-ready for future expansion.',
                          es: 'La batería de respaldo para toda la casa protege contra apagones. Mantiene encendidos luces, refrigerador, Wi-Fi y seguridad — y es compatible con paneles solares.' },
  'sh.bat.li1'        : { en: 'Outage protection',           es: 'Protección contra apagones' },
  'sh.bat.li2'        : { en: 'Solar-ready infrastructure',  es: 'Infraestructura solar lista' },
  'sh.bat.li3'        : { en: 'Expandable capacity',         es: 'Capacidad ampliable' },
  'sh.light.title'    : { en: 'Smart Lighting',     es: 'Iluminación Inteligente' },
  'sh.light.text'     : { en: 'Full-property smart lighting with app control, scene automation, and RGB zones on the terrace. Set moods, schedules, and energy-saving routines from your phone.',
                          es: 'Iluminación inteligente en toda la propiedad con control por app, automatización de escenas y zonas RGB en la terraza. Configura ambientes desde tu celular.' },
  'sh.light.li1'      : { en: 'App + voice control',         es: 'Control por app y voz' },
  'sh.light.li2'      : { en: 'RGB terrace ambiance',        es: 'Ambiente RGB en terraza' },
  'sh.light.li3'      : { en: 'Energy-saving automation',    es: 'Automatización eficiente' },
  'sh.why.title'      : { en: 'Why This Matters for Buyers',
                          es: 'Por Qué Esto Importa a los Compradores' },
  'sh.why.text'       : { en: 'EV adoption is accelerating in both California and Baja California. Battery backup provides energy independence — critical in a region where grid reliability varies. Smart lighting drives STR guest satisfaction and repeat bookings. These aren\'t extras — they\'re infrastructure that increases value every year.',
                          es: 'La adopción de VE está acelerando en California y Baja California. La batería de respaldo da independencia energética — clave en una región con cortes frecuentes. La iluminación inteligente mejora la satisfacción de huéspedes en Airbnb. No son extras — son infraestructura que aumenta el valor cada año.' },
  'tag.ev'            : { en: 'EV Ready',                   es: 'Listo para VE' },
  'tag.battery'       : { en: 'Energy Independent',         es: 'Independencia Energética' },
  'tag.smart'         : { en: 'Smart Home',                 es: 'Casa Inteligente' },
  'tag.solar'         : { en: 'Solar Upgradeable',          es: 'Ampliable con Solar' },
  'tag.str'           : { en: 'STR Optimized',              es: 'Optimizado para Airbnb' },

  /* ---- AMENITIES SECTION ---- */
  'am.eyebrow'        : { en: 'Everything Stays',           es: 'Todo se Queda' },
  'am.title'          : { en: 'Fully Furnished.<br>Day-One Ready.',
                          es: 'Completamente Amueblado.<br>Listo desde el Primer Día.' },
  'am.terrace.title'  : { en: 'Private Terrace',            es: 'Terraza Privada' },
  'am.terrace.text'   : { en: 'Covered terrace with macramé ceiling, swing chairs, wicker seating, outdoor TV, fire pit bowl, ceiling fan, and string lights.',
                          es: 'Terraza cubierta con techo de macramé, sillas colgantes, asientos de mimbre, TV exterior, tazón de fogata, ventilador y luces de cadena.' },
  'am.hottub.title'   : { en: 'Private Hot Tub',            es: 'Jacuzzi Privado' },
  'am.hottub.text'    : { en: 'Covered hot tub on the private terrace with panoramic ocean and city views. Operates day or night.',
                          es: 'Jacuzzi cubierto en la terraza privada con vistas panorámicas al mar y la ciudad. Funciona de día y de noche.' },
  'am.bar.title'      : { en: 'Ocean-View Bar',             es: 'Bar con Vista al Mar' },
  'am.bar.text'       : { en: 'Custom wood bar counter with RGB smart lighting and direct Pacific sightlines. A standout for entertaining and STR appeal.',
                          es: 'Barra de madera con iluminación RGB inteligente y vista directa al Pacífico. Un punto destacado para entretenimiento y Airbnb.' },
  'am.kitchen.title'  : { en: 'Full Kitchen',               es: 'Cocina Completa' },
  'am.kitchen.text'   : { en: 'Gas range, LG microwave, Breville espresso machine, ice maker, dishwasher, full-size fridge — all included.',
                          es: 'Estufa de gas, microondas LG, cafetera Breville, hielera, lavaplatos y refrigerador de tamaño completo — todo incluido.' },
  'am.bed.title'      : { en: '3 Bedrooms',                 es: '3 Recámaras' },
  'am.bed.text'       : { en: 'Master suite with artisan rattan headboard and direct terrace access. Two additional bedrooms fully furnished.',
                          es: 'Suite principal con cabecera artesanal de ratán y acceso directo a la terraza. Dos recámaras adicionales totalmente amuebladas.' },
  'am.wash.title'     : { en: 'LG WashTower',               es: 'Lavadora LG WashTower' },
  'am.wash.text'      : { en: 'Full-size LG smart stacked washer + dryer included. Premium appliance — retails $2,000+.',
                          es: 'Lavadora y secadora LG inteligente apilada incluida. Electrodoméstico premium — precio de lista $2,000+ USD.' },
  'am.list.title'     : { en: 'Complete Included Items',    es: 'Lista Completa de Artículos Incluidos' },
  'am.cat.kitchen'    : { en: 'Kitchen',                    es: 'Cocina' },
  'am.cat.living'     : { en: 'Living & Dining',            es: 'Sala y Comedor' },
  'am.cat.terrace'    : { en: 'Terrace',                    es: 'Terraza' },
  'am.cat.infra'      : { en: 'Infrastructure',             es: 'Infraestructura' },

  /* ---- VIBE BANNER ---- */
  'vibe.quote'        : { en: '"EV-ready. Battery-backed. Ocean-view. <em>Nothing else in Real del Mar compares.</em>"',
                          es: '"Cargador VE. Batería de respaldo. Vista al mar. <em>Nada más en Real del Mar se compara.</em>"' },
  'vibe.sub'          : { en: '~20 min from the US border via the new bridge · ~$2,900/mo USD comparable STR income potential · Seller financing available',
                          es: '~20 min de la frontera por el nuevo puente · ~$2,900/mes USD de ingreso potencial por Airbnb · Financiamiento con el vendedor disponible' },

  /* ---- PRICING SECTION ---- */
  'pr.eyebrow'        : { en: 'Pricing & Financing',        es: 'Precio y Financiamiento' },
  'pr.title'          : { en: 'Seller Direct.<br>Flexible Terms.',
                          es: 'Venta Directa.<br>Condiciones Flexibles.' },
  'pr.subtitle'       : { en: 'No banks. No middlemen. Direct deal with the seller — negotiable terms for qualified buyers.',
                          es: 'Sin bancos. Sin intermediarios. Trato directo con el vendedor — condiciones negociables para compradores calificados.' },
  'pr.tag'            : { en: 'Asking Price',               es: 'Precio de Venta' },
  'pr.includes'       : { en: 'All furniture · All appliances · EV charger · Battery backup · Smart lighting · Hot tub · Assigned parking',
                          es: 'Todos los muebles · Todos los electrodomésticos · Cargador VE · Batería · Iluminación inteligente · Jacuzzi · Estacionamiento asignado' },
  'pr.cash.title'     : { en: 'Cash Purchase',              es: 'Compra de Contado' },
  'pr.cash.badge'     : { en: 'Fastest Close',              es: 'Cierre Más Rápido' },
  'pr.cash.li1'       : { en: 'Full $385,000 at closing',   es: '$385,000 USD completos al cierre' },
  'pr.cash.li2'       : { en: 'Immediate deed transfer',    es: 'Transferencia inmediata de escritura' },
  'pr.cash.li3'       : { en: 'US LLC or Escritura ante Notario', es: 'LLC en EE.UU. o Escritura ante Notario' },
  'pr.cash.li4'       : { en: 'Proof of funds required',   es: 'Se requiere comprobante de fondos' },
  'pr.cash.req'       : { en: '💬 Reach out to start the conversation.', es: '💬 Contáctanos para iniciar la conversación.' },
  'pr.fin.title'      : { en: 'Seller Financing',           es: 'Financiamiento con Vendedor' },
  'pr.fin.badge'      : { en: 'Most Flexible',              es: 'Más Flexible' },
  'pr.fin.li1'        : { en: '50% down (~$192,500 USD)',   es: '50% de enganche (~$192,500 USD)' },
  'pr.fin.li2'        : { en: 'Immediate possession at signing', es: 'Posesión inmediata al firmar' },
  'pr.fin.li3'        : { en: 'Balance over 3–7 years',     es: 'Saldo a 3–7 años' },
  'pr.fin.li4'        : { en: 'Interest rate negotiable',   es: 'Tasa de interés negociable' },
  'pr.fin.li5'        : { en: 'Deed transfers at final payment', es: 'Escritura al pago final' },
  'pr.fin.req'        : { en: '💬 Payment capacity + deposit required to qualify.', es: '💬 Se requiere capacidad de pago + depósito para calificar.' },
  'pr.struct.note'    : { en: 'Transaction structured in USD via <strong>US LLC</strong> or <strong>Escritura ante Notario Público</strong>. Seller retains Reserva de Dominio (contractual title control) until final payment. Buyer takes full possession immediately upon executed contract and down payment.',
                          es: 'Transacción estructurada en USD mediante <strong>LLC en EE.UU.</strong> o <strong>Escritura ante Notario Público</strong>. El vendedor conserva la Reserva de Dominio (control contractual del título) hasta el pago final. El comprador toma posesión inmediata al firmar el contrato y pagar el enganche.' },
  'pr.steps.title'    : { en: 'How the Deal Works',         es: 'Cómo Funciona el Trato' },
  'pr.step1.strong'   : { en: 'Agree on Price',             es: 'Acordar el Precio' },
  'pr.step1.p'        : { en: 'Negotiate directly with the seller. Cash or financing — both welcome.',
                          es: 'Negocia directamente con el vendedor. Contado o financiamiento — ambos son bienvenidos.' },
  'pr.step2.strong'   : { en: 'Deposit & Down Payment',     es: 'Depósito y Enganche' },
  'pr.step2.p'        : { en: 'Secure the unit with a deposit. Minimum 50% down (~$192,500 USD) to enter seller financing.',
                          es: 'Asegura la unidad con un depósito. Mínimo 50% de enganche (~$192,500 USD) para el financiamiento.' },
  'pr.step3.strong'   : { en: 'Take Possession',            es: 'Tomar Posesión' },
  'pr.step3.p'        : { en: 'Buyer takes immediate possession of the unit upon executed contract and down payment.',
                          es: 'El comprador toma posesión inmediata de la unidad al firmar el contrato y pagar el enganche.' },
  'pr.step4.strong'   : { en: 'Payment Plan',               es: 'Plan de Pagos' },
  'pr.step4.p'        : { en: 'Remaining balance paid over 3–7 years. Monthly or annual payments. Interest rate negotiable.',
                          es: 'El saldo restante se paga en 3–7 años. Pagos mensuales o anuales. Tasa negociable.' },
  'pr.step5.strong'   : { en: 'Full Title Transfer',        es: 'Transferencia Total del Título' },
  'pr.step5.p'        : { en: 'Escritura (full deed) or LLC ownership transferred upon final payment.',
                          es: 'Escritura completa o propiedad de LLC transferida al pago final.' },

  /* ---- CALCULATOR ---- */
  'calc.title'        : { en: 'Financing Calculator',       es: 'Calculadora de Financiamiento' },
  'calc.sub'          : { en: 'Estimate your monthly payment based on down payment and term.',
                          es: 'Estima tu pago mensual según el enganche y el plazo.' },
  'calc.lbl.price'    : { en: 'Purchase Price',             es: 'Precio de Compra' },
  'calc.lbl.down'     : { en: 'Down Payment',               es: 'Enganche' },
  'calc.lbl.term'     : { en: 'Loan Term',                  es: 'Plazo del Préstamo' },
  'calc.lbl.rate'     : { en: 'Interest Rate',              es: 'Tasa de Interés' },
  'calc.range.down1'  : { en: '50%',                        es: '50%' },
  'calc.range.down2'  : { en: '75%',                        es: '75%' },
  'calc.range.down3'  : { en: '100%',                       es: '100%' },
  'calc.range.term1'  : { en: '1 yr',                       es: '1 año' },
  'calc.range.term2'  : { en: '4 yrs',                      es: '4 años' },
  'calc.range.term3'  : { en: '7 yrs',                      es: '7 años' },
  'calc.range.rate1'  : { en: '0%',                         es: '0%' },
  'calc.range.rate2'  : { en: '6%',                         es: '6%' },
  'calc.range.rate3'  : { en: '12%',                        es: '12%' },
  'calc.res.down'     : { en: 'Down Payment',               es: 'Enganche' },
  'calc.res.financed' : { en: 'Financed Amount',            es: 'Monto a Financiar' },
  'calc.res.monthly'  : { en: 'Est. Monthly Payment',       es: 'Pago Mensual Est.' },
  'calc.res.total'    : { en: 'Total Cost (incl. interest)', es: 'Costo Total (con intereses)' },
  'calc.disclaimer'   : { en: '* Estimates only. Final terms negotiated directly with the seller.',
                          es: '* Solo estimaciones. Los términos finales se negocian directamente con el vendedor.' },
  'calc.cta'          : { en: 'Discuss These Terms with Seller', es: 'Hablar los Términos con el Vendedor' },

  /* ---- GALLERY ---- */
  'gal.eyebrow'       : { en: 'Photo Gallery',              es: 'Galería de Fotos' },
  'gal.title'         : { en: 'Every Room,<br>Every Detail', es: 'Cada Cuarto,<br>Cada Detalle' },
  'gal.filter.all'    : { en: 'All',                        es: 'Todo' },
  'gal.filter.terrace': { en: 'Terrace',                    es: 'Terraza' },
  'gal.filter.living' : { en: 'Living',                     es: 'Sala' },
  'gal.filter.bedroom': { en: 'Bedrooms',                   es: 'Recámaras' },
  'gal.filter.kitchen': { en: 'Kitchen',                    es: 'Cocina' },
  'gal.filter.exterior':{ en: 'Exterior',                   es: 'Exterior' },

  /* ---- LOCATION SECTION ---- */
  'loc.eyebrow'       : { en: 'Location',                   es: 'Ubicación' },
  'loc.title'         : { en: 'Real del Mar,<br>Baja California',
                          es: 'Real del Mar,<br>Baja California' },
  'loc.text'          : { en: 'Condominio Bella Vista I sits on the Carretera Tijuana–Ensenada in Real del Mar — one of Northern Baja\'s most established coastal gated communities, frequented by US buyers, expats, and coastal lifestyle seekers.',
                          es: 'El Condominio Bella Vista I se encuentra sobre la Carretera Tijuana–Ensenada en Real del Mar — una de las comunidades costeras cerradas más consolidadas del Norte de Baja, frecuentada por compradores estadounidenses, expatriados y buscadores de estilo de vida costero.' },
  'loc.li1'           : { en: 'Carretera Tijuana–Ensenada #9403, Col. Real del Mar, C.P. 22000, Rosarito, B.C.',
                          es: 'Carretera Tijuana–Ensenada #9403, Col. Real del Mar, C.P. 22000, Rosarito, B.C.' },
  'loc.li2'           : { en: '~20 min from the US border via the new bridge — easier than ever',
                          es: '~20 min de la frontera por el nuevo puente — más fácil que nunca' },
  'loc.li3'           : { en: 'Steps from the Pacific — ocean-view unit, 180° sightlines',
                          es: 'A pasos del Pacífico — unidad con vista al mar, panorama de 180°' },
  'loc.li4'           : { en: 'Gated complex · Assigned parking · 24/7 security',
                          es: 'Condominio cerrado · Estacionamiento asignado · Seguridad 24/7' },
  'loc.li5'           : { en: '~50 min from San Diego International Airport (SAN)',
                          es: '~50 min del Aeropuerto Internacional de San Diego (SAN)' },
  'loc.why.title'     : { en: 'Why Real del Mar?',          es: '¿Por Qué Real del Mar?' },
  'loc.why.item1'     : { en: 'Rising property values in North Baja',  es: 'Aumento de valor de propiedades en el Norte de Baja' },
  'loc.why.item2'     : { en: 'USD transactions — no currency risk',   es: 'Transacciones en USD — sin riesgo cambiario' },
  'loc.why.item3'     : { en: 'Strong short-term rental market',       es: 'Mercado sólido de renta vacacional (Airbnb)' },
  'loc.why.item4'     : { en: '~20 min to US border via new bridge — easiest access ever',   es: '~20 min a la frontera por el nuevo puente — acceso más fácil que nunca' },
  'loc.flag1'         : { en: 'US LLC Eligible',            es: 'Elegible para LLC EE.UU.' },
  'loc.flag2'         : { en: 'Escritura Available',        es: 'Escritura Disponible' },
  'loc.flag3'         : { en: 'All USD',                    es: 'Todo en USD' },
  'loc.flag4'         : { en: 'EV Ready',                   es: 'Listo para VE' },

  /* ---- CONTACT / OFFER ---- */
  'con.eyebrow'       : { en: 'Make Your Move',             es: 'Da el Siguiente Paso' },
  'con.title'         : { en: 'Submit an Offer.<br>Ask a Question.<br>Schedule a Tour.',
                          es: 'Envía una Oferta.<br>Haz una Pregunta.<br>Agenda un Recorrido.' },
  'con.sub'           : { en: 'Direct contact with the seller. No agents, no commissions, no middle-men. We respond fast.',
                          es: 'Contacto directo con el vendedor. Sin agentes, sin comisiones, sin intermediarios. Respondemos rápido.' },
  'con.lbl.name'      : { en: 'Full Name',                  es: 'Nombre Completo' },
  'con.lbl.email'     : { en: 'Email',                      es: 'Correo Electrónico' },
  'con.lbl.phone'     : { en: 'Phone / WhatsApp',           es: 'Teléfono / WhatsApp' },
  'con.lbl.intent'    : { en: "I'm Interested In",          es: 'Estoy Interesado En' },
  'con.lbl.offer'     : { en: 'Offer Amount (USD)',         es: 'Monto de Oferta (USD)' },
  'con.lbl.timeline'  : { en: 'Purchase Timeline',         es: 'Plazo de Compra' },
  'con.lbl.message'   : { en: 'Message / Questions',       es: 'Mensaje / Preguntas' },
  'con.ph.name'       : { en: 'Your full name',            es: 'Tu nombre completo' },
  'con.ph.email'      : { en: 'your@email.com',            es: 'tu@correo.com' },
  'con.ph.phone'      : { en: '+1 (619) 000-0000',         es: '+52 (664) 000-0000' },
  'con.ph.offer'      : { en: 'e.g. 370,000',             es: 'ej. 370,000' },
  'con.ph.message'    : { en: 'Tell us about your interest, questions about financing, or request a showing...',
                          es: 'Cuéntanos tu interés, preguntas sobre financiamiento o solicita un recorrido...' },
  'con.opt.select'    : { en: 'Select',                    es: 'Seleccionar' },
  'con.opt.cash'      : { en: 'Purchase — Cash',           es: 'Compra — Contado' },
  'con.opt.financing' : { en: 'Purchase — Seller Financing', es: 'Compra — Financiamiento' },
  'con.opt.tour'      : { en: 'Schedule a Private Tour',   es: 'Agendar Recorrido Privado' },
  'con.opt.info'      : { en: 'Request More Information',  es: 'Solicitar Más Información' },
  'con.opt.formal'    : { en: 'Submit a Formal Offer',     es: 'Enviar Oferta Formal' },
  'con.opt.asap'      : { en: 'ASAP',                      es: 'Lo antes posible' },
  'con.opt.30'        : { en: 'Within 30 days',            es: 'En 30 días' },
  'con.opt.90'        : { en: 'Within 90 days',            es: 'En 90 días' },
  'con.opt.explore'   : { en: 'Just exploring',            es: 'Solo explorando' },
  'con.btn.submit'    : { en: 'Send Inquiry',              es: 'Enviar Consulta' },
  'con.privacy'       : { en: 'Direct seller contact. No agents. Your info stays private.',
                          es: 'Contacto directo con el vendedor. Sin agentes. Tu información es privada.' },
  'con.success'       : { en: 'Got it! The seller will be in touch shortly. ¡Gracias!',
                          es: '¡Recibido! El vendedor se pondrá en contacto pronto. Thank you!' },
  'con.snap.title'    : { en: 'Deal Snapshot',             es: 'Resumen del Trato' },
  'con.snap.price.lbl': { en: 'Price',                     es: 'Precio' },
  'con.snap.down.lbl' : { en: 'Down Payment',              es: 'Enganche' },
  'con.snap.term.lbl' : { en: 'Balance Term',              es: 'Plazo del Saldo' },
  'con.snap.inc.lbl'  : { en: 'Includes',                  es: 'Incluye' },
  'con.snap.inc.val'  : { en: 'All furniture, appliances, EV charger, battery, smart lighting',
                          es: 'Todos los muebles, electrodomésticos, cargador VE, batería, iluminación inteligente' },
  'con.snap.struct.lbl':{ en: 'Structure',                 es: 'Estructura' },
  'con.snap.struct.val':{ en: 'US LLC or Escritura ante Notario', es: 'LLC en EE.UU. o Escritura ante Notario' },
  'con.snap.poss.lbl' : { en: 'Possession',                es: 'Posesión' },
  'con.snap.poss.val' : { en: 'Immediate upon contract + down payment',
                          es: 'Inmediata al firmar contrato + enganche' },
  'con.wa.label'      : { en: 'Reach the Seller Directly', es: 'Contacta Directamente al Vendedor' },
  'con.wa.note'       : { en: 'Fastest response — typically within 1 hour',
                          es: 'Respuesta más rápida — generalmente en menos de 1 hora' },
  'con.tour.title'    : { en: 'Schedule a Private Tour',   es: 'Agenda un Recorrido Privado' },
  'con.tour.text'     : { en: 'In-person tours available by appointment. Virtual tours available for international buyers.',
                          es: 'Recorridos en persona disponibles con cita previa. Recorridos virtuales disponibles para compradores internacionales.' },
  'con.tour.btn'      : { en: 'Book a Tour',               es: 'Agendar Recorrido' },

  'loc.li6'           : { en: 'At the foothills of Real del Mar Golf Resort — walking distance to the course',
                          es: 'A las faldas del Real del Mar Golf Resort — a distancia caminable del campo' },
  'loc.li7'           : { en: 'Supermarkets, restaurants & services minutes away on the Carretera',
                          es: 'Supermercados, restaurantes y servicios a minutos sobre la Carretera' },
  'loc.why.item5'     : { en: 'Voted safest area in Baja California',        es: 'Votada la zona más segura de Baja California' },
  'loc.why.item6'     : { en: 'Real del Mar Golf Resort at your doorstep',   es: 'Real del Mar Golf Resort a tu puerta' },
  'loc.why.item7'     : { en: 'Family & pet-friendly community',             es: 'Comunidad familiar y acepta mascotas' },
  'loc.why.item8'     : { en: 'EV infrastructure already installed',         es: 'Infraestructura VE ya instalada' },

  /* ---- COMMUNITY SECTION ---- */
  'com.eyebrow'        : { en: 'The Community',           es: 'La Comunidad' },
  'com.title'          : { en: 'Bella Vista Is More<br>Than Your Unit.',
                           es: 'Bella Vista Es Más<br>Que Tu Departamento.' },
  'com.sub'            : { en: 'The complex and its surroundings make this one of the most livable, family-friendly, and secure coastal communities in all of Baja California.',
                           es: 'El complejo y sus alrededores lo convierten en una de las comunidades costeras más habitables, familiares y seguras de toda Baja California.' },
  'com.pool.title'     : { en: 'Swimming Pool',           es: 'Alberca Comunitaria' },
  'com.pool.text'      : { en: 'Full-size community pool for residents. Pacific ocean backdrop, maintained year-round.',
                           es: 'Alberca comunitaria de tamaño completo para residentes. Vista al Pacífico, mantenida todo el año.' },
  'com.gym.title'      : { en: 'Fitness Center',          es: 'Gimnasio' },
  'com.gym.text'       : { en: 'On-site gym with equipment for residents. No gym membership needed — it\'s included.',
                           es: 'Gimnasio en las instalaciones con equipo para residentes. No necesitas membresía — está incluido.' },
  'com.play.title'     : { en: 'Large Play Area',         es: 'Área de Juegos' },
  'com.play.text'      : { en: 'Dedicated kids\' playground and open green space. One of the most family-friendly complexes on the Baja coast.',
                           es: 'Área de juegos para niños y espacios verdes abiertos. Uno de los complejos más familiares de la costa de Baja.' },
  'com.pet.title'      : { en: 'Pet Friendly',            es: 'Acepta Mascotas' },
  'com.pet.text'       : { en: 'Pets welcome. Open grounds and walking paths make Bella Vista one of Baja\'s most pet-friendly communities.',
                           es: 'Se aceptan mascotas. Jardines y senderos hacen de Bella Vista una de las comunidades más amigables con mascotas en Baja.' },
  'com.elev.title'     : { en: 'Elevators',               es: 'Elevadores' },
  'com.elev.text'      : { en: 'Full elevator access throughout the building. Move-in, groceries, and daily access made easy on every floor.',
                           es: 'Acceso completo por elevador en todo el edificio. Mudanzas, compras y acceso diario fácil en cada piso.' },
  'com.sec.title'      : { en: '24/7 Security',           es: 'Seguridad 24/7' },
  'com.sec.text'       : { en: 'On-site security guards around the clock. Password-protected key access at all entry points. Gated perimeter.',
                           es: 'Guardias de seguridad en las instalaciones las 24 horas. Acceso con clave en todos los puntos de entrada. Perímetro cerrado.' },
  'com.golf.title'     : { en: 'Golf Next Door',          es: 'Golf a Pasos' },
  'com.golf.text'      : { en: 'At the foothills of Real del Mar Golf Resort — one of Baja\'s finest courses. Walk or drive over in minutes.',
                           es: 'A las faldas del Real del Mar Golf Resort — uno de los mejores campos de Baja. A minutos caminando o en auto.' },
  'com.shops.title'    : { en: 'Shops & Markets',         es: 'Tiendas y Mercados' },
  'com.shops.text'     : { en: 'Supermarkets, restaurants, and services just minutes away on the Carretera. Everything you need, close by.',
                           es: 'Supermercados, restaurantes y servicios a minutos sobre la Carretera. Todo lo que necesitas, cerca.' },
  'com.safe.title'     : { en: 'Safest Area in Baja',     es: 'La Zona Más Segura de Baja' },
  'com.safe.text'      : { en: 'Real del Mar is consistently voted the safest residential area in Tijuana and Baja California. A true resort-zone community — overwhelmingly owner-occupied by US buyers and expats.',
                           es: 'Real del Mar es constantemente votada como la zona residencial más segura de Tijuana y Baja California. Una comunidad de zona turística habitada mayoritariamente por compradores estadounidenses y expatriados.' },
  'com.callout.title'  : { en: 'Secure Highway. Resort Zone. Unmatched Access.',
                           es: 'Carretera Segura. Zona Turística. Acceso Inigualable.' },
  'com.callout.text'   : { en: 'Bella Vista sits directly on the Carretera Tijuana–Ensenada — a well-maintained, heavily patrolled toll highway now just ~20 minutes from the US border thanks to the new bridge. The Real del Mar resort zone is a destination neighborhood, not a transit corridor. It has the infrastructure, the security, and the lifestyle that draws repeat buyers from San Diego, LA, and beyond.',
                           es: 'Bella Vista se encuentra directamente sobre la Carretera Tijuana–Ensenada — una autopista de cuota bien mantenida y con alta vigilancia, ahora a solo ~20 minutos de la frontera gracias al nuevo puente. La zona turística de Real del Mar es un vecindario de destino, no un corredor de tránsito. Tiene la infraestructura, la seguridad y el estilo de vida que atrae compradores recurrentes de San Diego, LA y más allá.' },
  'com.tag.safe'       : { en: 'Voted Safest in Baja',    es: 'La Más Segura de Baja' },
  'com.tag.golf'       : { en: 'Golf Resort Foothill',    es: 'Faldas del Golf Resort' },
  'com.tag.family'     : { en: 'Family & Pet Friendly',   es: 'Familiar y Acepta Mascotas' },
  'com.tag.border'     : { en: '~20 Min to US Border',     es: '~20 Min a la Frontera' },

  /* ---- FOOTER ---- */
  'footer.tagline'    : { en: 'For Sale · Real del Mar, Baja California · $385,000 USD · Seller Direct',
                          es: 'En Venta · Real del Mar, Baja California · $385,000 USD · Venta Directa' },
  'footer.copy'       : { en: '© 2026 Bella Vista C-103 — Real del Mar. All rights reserved. Seller direct — no agents.',
                          es: '© 2026 Bella Vista C-103 — Real del Mar. Todos los derechos reservados. Venta directa — sin agentes.' },

  /* ---- NAV (rentals) ---- */
  'nav.rentals' : { en: 'Rentals', es: 'Rentas' },

  /* ---- CONTACT FORM — new rental options ---- */
  'con.opt.str' : { en: 'Short-Term Rental Inquiry', es: 'Consulta de Renta Corto Plazo' },
  'con.opt.ltr' : { en: 'Long-Term Rental Inquiry',  es: 'Consulta de Renta Largo Plazo' },

  /* ---- RENTALS SECTION ---- */
  'rent.eyebrow'  : { en: 'Flexible Options',          es: 'Opciones Flexibles' },
  'rent.title'    : { en: 'Not Buying Yet?<br>Rent C-103.', es: '¿Aún No Compras?<br>Renta la C-103.' },
  'rent.sub'      : { en: 'Experience Bella Vista before you commit — or generate income while you own. Unit C-103 is available for short-term vacation stays and long-term furnished leases.',
                      es: 'Vive Bella Vista antes de comprometerte — o genera ingresos mientras eres dueño. La Unidad C-103 está disponible para estancias cortas y contratos largos amueblados.' },
  'rent.tab.str'  : { en: 'Short-Term',   es: 'Corto Plazo' },
  'rent.tab.ltr'  : { en: 'Long-Term',    es: 'Largo Plazo' },

  /* STR */
  'rent.str.eyebrow' : { en: 'Short-Term Vacation Rental',  es: 'Renta Vacacional Corto Plazo' },
  'rent.str.title'   : { en: 'From $250 / Night',            es: 'Desde $250 / Noche' },
  'rent.str.text'    : { en: 'Fully styled and move-in ready. Perfect for weekend escapes, family vacations, or remote work retreats. Sleeps up to 6. Check-in via smart lock — no key exchange needed.',
                         es: 'Completamente decorada y lista para ocupar. Ideal para escapadas de fin de semana, vacaciones familiares o trabajo remoto. Capacidad para 6 personas. Check-in con cerradura inteligente, sin necesidad de llaves.' },
  'rent.str.tag.sleeps'  : { en: 'Sleeps 6',          es: 'Capacidad 6' },
  'rent.str.tag.hottub'  : { en: 'Hot Tub',            es: 'Jacuzzi' },
  'rent.str.tag.wifi'    : { en: 'High-Speed Wi-Fi',   es: 'Wi-Fi de Alta Velocidad' },
  'rent.str.tag.ev'      : { en: 'EV Charger',         es: 'Cargador VE' },
  'rent.str.tag.lock'    : { en: 'Smart Lock',         es: 'Cerradura Inteligente' },
  'rent.str.tag.pet'     : { en: 'Pet Friendly',       es: 'Mascotas Bienvenidas' },
  'rent.str.tag.kitchen' : { en: 'Full Kitchen',       es: 'Cocina Completa' },

  'rent.str.income.eyebrow' : { en: 'STR Income Potential',     es: 'Potencial de Ingresos Renta Corta' },
  'rent.str.income.unit'    : { en: '/ mo est.',                 es: '/ mes est.' },
  'rent.str.income.note'    : { en: 'Based on ~60–80% occupancy at current nightly rates. High-demand coastal market with strong US weekend traffic via the new border bridge.',
                                 es: 'Basado en ~60–80% de ocupación a tarifas nocturnas actuales. Mercado costero de alta demanda con fuerte tráfico de fin de semana de EE.UU. por el nuevo puente.' },
  'rent.str.li1' : { en: 'Strong weekend demand from San Diego &amp; LA',      es: 'Alta demanda de fin de semana desde San Diego y Los Ángeles' },
  'rent.str.li2' : { en: 'Unique amenities command premium nightly rates',      es: 'Amenidades únicas justifican tarifas nocturnas premium' },
  'rent.str.li3' : { en: 'Fully furnished — zero setup cost for owner',         es: 'Totalmente amueblada — sin costo de instalación para el propietario' },
  'rent.str.li4' : { en: 'Smart lock enables remote check-in / self-manage',    es: 'Cerradura inteligente permite check-in remoto y autogestión' },
  'rent.str.li5' : { en: 'List on Airbnb, VRBO, or direct-book',               es: 'Publica en Airbnb, VRBO o reserva directa' },
  'rent.str.income.cta' : { en: 'Ask About STR Returns',  es: 'Pregunta Sobre Rendimiento STR' },

  /* LTR */
  'rent.ltr.eyebrow' : { en: 'Long-Term Furnished Lease',   es: 'Contrato Largo Plazo Amueblado' },
  'rent.ltr.title'   : { en: 'From $2,000 / Month',          es: 'Desde $2,000 / Mes' },
  'rent.ltr.text'    : { en: 'Fully furnished lease for 6–12+ months. All appliances, EV charger, smart home features, parking included. Ideal for remote workers, retirees, or families making the move to Baja.',
                         es: 'Contrato amueblado de 6 a 12+ meses. Electrodomésticos, cargador VE, hogar inteligente y estacionamiento incluidos. Ideal para trabajadores remotos, jubilados o familias que se mudan a Baja.' },
  'rent.ltr.rate1' : { en: '/ Month · 6 mo+',   es: '/ Mes · 6+ meses' },
  'rent.ltr.rate2' : { en: '/ Month · 12 mo+',  es: '/ Mes · 12+ meses' },
  'rent.ltr.tag.furnished' : { en: 'Fully Furnished',     es: 'Completamente Amueblada' },
  'rent.ltr.tag.ev'        : { en: 'EV Charger',          es: 'Cargador VE' },
  'rent.ltr.tag.wifi'      : { en: 'Wi-Fi Included',      es: 'Wi-Fi Incluido' },
  'rent.ltr.tag.parking'   : { en: 'Parking Included',    es: 'Estacionamiento Incluido' },
  'rent.ltr.tag.pet'       : { en: 'Pets OK',             es: 'Mascotas Permitidas' },
  'rent.ltr.tag.gated'     : { en: 'Gated Complex',       es: 'Conjunto Cerrado' },

  'rent.ltr.why.eyebrow' : { en: 'Why Live Here?',   es: '¿Por Qué Vivir Aquí?' },
  'rent.ltr.why.stat'    : { en: '~80% Less',         es: '~80% Menos' },
  'rent.ltr.why.note'    : { en: 'Than a comparable 3-bedroom in San Diego. Ocean views, gated security, golf resort next door — at a fraction of the cost.',
                              es: 'Que un departamento comparable de 3 recámaras en San Diego. Vistas al océano, seguridad, campo de golf al lado — a una fracción del costo.' },
  'rent.ltr.li1'         : { en: 'Ideal for remote workers &amp; digital nomads',   es: 'Ideal para trabajadores remotos y nómadas digitales' },
  'rent.ltr.li2'         : { en: 'Great for retirees, snowbirds &amp; families',    es: 'Perfecto para jubilados, snowbirds y familias' },
  'rent.ltr.li3'         : { en: 'USD or MXN lease terms available',                es: 'Contrato disponible en USD o MXN' },
  'rent.ltr.li4'         : { en: '~20 min to US border via new bridge',             es: '~20 min a la frontera EE.UU. por el nuevo puente' },
  'rent.ltr.li5'         : { en: '24/7 gated security — safest area in Baja',       es: 'Seguridad 24/7 — zona más segura de Baja California' },
  'rent.ltr.why.cta'     : { en: 'Ask About Long-Term Terms',  es: 'Pregunta Sobre Contrato Largo Plazo' },

  /* Rate labels */
  'rent.rate.night' : { en: '/ Night',   es: '/ Noche' },
  'rent.rate.week'  : { en: '/ Week',    es: '/ Semana' },
  'rent.rate.month' : { en: '/ Month',   es: '/ Mes' },

  /* CTA labels */
  'rent.cta.wa'     : { en: 'Book via WhatsApp',     es: 'Reservar por WhatsApp' },
  'rent.cta.wa.ltr' : { en: 'Inquire via WhatsApp',  es: 'Consultar por WhatsApp' },
  'rent.cta.email'  : { en: 'Send Inquiry',           es: 'Enviar Consulta' },
};

/* ============================================================
   TRANSLATION ENGINE
   ============================================================ */
(function () {
  'use strict';

  const STORAGE_KEY = 'bv_lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

  /* ---------- Apply all translations ---------- */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);

    /* 1. Swap all [data-i18n] elements */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const entry = BV_I18N[key];
      if (!entry) return;
      const val = entry[lang];
      if (val === undefined) return;

      /* Options & inputs use textContent; everything else uses innerHTML
         so that keys with embedded <strong>, <em>, <br> render correctly */
      if (el.tagName === 'OPTION') {
        el.textContent = val;
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        /* Input / textarea with data-i18n directly on them = placeholder swap */
        el.placeholder = val;
      } else {
        el.innerHTML = val;
      }
    });

    /* 2. Swap [data-i18n-placeholder] — inputs & textareas using a separate key */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const entry = BV_I18N[key];
      if (!entry) return;
      const val = entry[lang];
      if (val !== undefined) el.placeholder = val;
    });

    /* 3. Update toggle button appearance */
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      const isES = lang === 'es';
      btn.setAttribute('aria-label', isES ? 'Switch to English' : 'Cambiar a Español');
      btn.querySelector('.lang-toggle__active').textContent = isES ? 'ES' : 'EN';
      btn.querySelector('.lang-toggle__other').textContent  = isES ? 'EN' : 'ES';
      btn.setAttribute('data-lang', lang);
    }
  }

  /* ---------- Toggle ---------- */
  function toggleLang() {
    applyLang(currentLang === 'en' ? 'es' : 'en');
  }

  /* ---------- Init ---------- */
  function init() {
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.addEventListener('click', toggleLang);
    applyLang(currentLang); // Re-apply on every load (handles saved ES preference)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
