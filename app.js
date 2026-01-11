/* =========================
   CONFIG
========================= */
const WHATSAPP_NUMBER = "50236994521"; // Guatemala +502 (sin +)
const CURRENCY = "GTQ"; // para formato
const STORE_NAME = "Parfums Árabes Escuintla GT";

/* Productos de ejemplo (cámbialos a tu catálogo real) */
const PRODUCTS = [
    /*--------------YARAS-------------*/
  {
    id: "yara-rosa-100",
    name: "Yara Rosa 100ml (Sellado)",
    price: 425,
    type: "sellado",
    gender: "mujer",
    img: "./assets/yara.jpg",
    note: "Dulce • Cremoso • Viral"
  },
  {
    id: "yara-Candy-100",
    name: "Yara Cancy 100ml (Sellado)",
    price: 425,
    type: "sellado",
    gender: "mujer",
    img: "./assets/yaracandy.jpg",
    note: "Avainillado • Afrutado • Viral"
  },
    {
    id: "yara-tous-100",
    name: "Yara Tous 100ml (Sellado)",
    price: 425,
    type: "sellado",
    gender: "mujer",
    img: "./assets/yaratous.jpg",
    note: "Dulce • Tropical • Afrutado"
  },
    {
    id: "yara-moi-100",
    name: "Yara Moi 100ml (Sellado)",
    price: 425,
    type: "sellado",
    gender: "mujer",
    img: "./assets/yaramoi.jpg",
    note: "Amaderado • Floral • Viral"
  },
    {
    id: "yara-elixir-100",
    name: "Yara Elixir 100ml (Sellado)",
    price: 500,
    type: "sellado",
    gender: "mujer",
    img: "./assets/yaraelixir.jpg",
    note: "Avainillado • Caramelo • Viral"
  },
  /*--------------Hawas----------*/
  {
    id: "hawas-ice-100",
    name: "Hawas Ice 100ml (Sellado)",
    price: 480,
    type: "sellado",
    gender: "hombre",
    img: "./assets/hawasice.jpg",
    note: "Fresco • Proyección • Verano"
  },
{
    id: "hawas-fire-100",
    name: "Hawas Fire 100ml (Sellado)",
    price: 500,
    type: "sellado",
    gender: "hombre",
    img: "./assets/hawasfire.jpg",
    note: "Ambar • Aromatico • Marino"
  },
  {
    id: "hawas-Kobra-100",
    name: "Hawas Kobra 100ml (Sellado)",
    price: 525,
    type: "sellado",
    gender: "hombre",
    img: "./assets/hawaskobra.jpg",
    note: "Fresco • Citrico • Verano"
  },
  {
    id: "hawas-black-100",
    name: "Hawas Black 100ml (Sellado)",
    price: 500,
    type: "sellado",
    gender: "hombre",
    img: "./assets/hawasblack.jpg",
    note: "Amaderado • Citrico • Fresco"
  },
  {
    id: "hawas-malibu-100",
    name: "Hawas Malibu 100ml (Sellado)",
    price: 550,
    type: "sellado",
    gender: "hombre",
    img: "./assets/hawasmalibu.jpg",
    note: "Dulce • Ambar • Citrico"
  },
  {
    id: "hawas-tropical-100",
    name: "Hawas Tropical 100ml (Sellado)",
    price: 525,
    type: "sellado",
    gender: "hombre",
    img: "./assets/hawastropical.jpg",
    note: "Fresco • Dulce • Verano"
  },
  {
    id: "hawas-viper-100",
    name: "Hawas Viper 100ml (Sellado)",
    price: 525,
    type: "sellado",
    gender: "hombre",
    img: "./assets/hawasviper.jpg",
    note: "Calido • Tabaco • Aromatico"
  },
  {
    id: "hawas-atlantis-100",
    name: "Hawas Atlantis 100ml (Sellado)",
    price: 525,
    type: "sellado",
    gender: "hombre",
    img: "./assets/hawasatlantis.jpg",
    note: "Citrico • Acuatico • Fresco"
  },
  {
    id: "hawas-verde-100",
    name: "Hawas Verde 100ml (Sellado)",
    price: 525,
    type: "sellado",
    gender: "hombre",
    img: "./assets/hawasverde.jpg",
    note: "Amaderado • citrico • Verano"
  },
  {
    id: "hawas-elixir-100",
    name: "Hawas Elixir 100ml (Sellado)",
    price: 525,
    type: "sellado",
    gender: "hombre",
    img: "./assets/hawaselixir.jpg",
    note: "Avainillado • Dulce • aromatico"
  },
/*-----------9 PM----------*/
{
    id: "9pm-rebel-100",
    name: "9PM Rebel 100ml (Sellado)",
    price: 485,
    type: "sellado",
    gender: "hombre",
    img: "./assets/9rebel.jpg",
    note: "Afrutado • Dulce • Amaderado"
  },
{
    id: "9pm-Elixir-100",
    name: "9PM Elixir 100ml (Sellado)",
    price: 500,
    type: "sellado",
    gender: "hombre",
    img: "./assets/9elixir.jpg",
    note: "Calido • avainillado • Amaderado"
  },
  {
    id: "9pm-100",
    name: "9PM 100ml (Sellado solo Bajo pedido)",
    price: 0,
    type: "sellado",
    gender: "hombre",
    img: "./assets/9pm.jpg",
    note: "Avainillado • Calido • Afrutados"
  },

  /*-------------Khamrahs------------*/

  {
    id: "khamrah-100",
    name: "Khamrah 100 ml (Sellado)",
    price: 450,
    type: "sellado",
    gender: "unisex",
    img: "./assets/khamrah.jpg",
    note: "Canela • Vainilla • Nocturno"
  },
  {
    id: "khamrah-qahwa-100",
    name: "Khamrah Qahwa Q100 ml (Sellado)",
    price: 450,
    type: "sellado",
    gender: "unisex",
    img: "./assets/khamrahqa.jpg",
    note: "Canela • Vainilla • Cafe"
  },
  /*----------------Asad------------*/
  {
    id: "asad-100",
    name: "Asad 100ml (Sellado)",
    price: 450,
    type: "Sellado",
    gender: "hombre",
    img: "./assets/asadn.jpg",
    note: "Ambar • Elegante • Noche"
  },
  {
    id: "asad-bourbon-100",
    name: "Asad Bourbon 100ml (Sellado)",
    price: 450,
    type: "Sellado",
    gender: "hombre",
    img: "./assets/asadbourbon.jpg",
    note: "Ambar • Elegante • Noche"
  },
  {
    id: "asad-elixir-100",
    name: "Asad Elixir 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "hombre",
    img: "./assets/asadelixir.jpg",
    note: "Intenso • Elegante • Noche"
  },
  /*----------Bharara King--------*/
  {
    id: "bharara-king-100",
    name: "Bharara king 100ml Eu de parfum (sellado)",
    price: 620,
    type: "sellado",
    gender: "hombre",
    img: "./assets/bhararaking.jpg",
    note: "Intenso • Elegante • Noche"
  },
  {
    id: "set-bharara-5",
    name: "Set Bharara King Eu de parfum 5 Piezas (sellado 3 Bharara king 100ml, 1 Bharara Pharaoh Ramesses I y 1 Bharara Pharaoh Ramesses II)",
    price: 0,
    type: "sellado",
    gender: "hombre",
    img: "./assets/setbharara.jpg",
    note: "Intenso • Elegante • Noche"
  },
  /*-----------Odyssey------------*/
  {
    id: "odyssey-mandarine-sky-100",
    name: "Odyssey Mandarine Sky 100ml (sellado)",
    price: 425,
    type: "sellado",
    gender: "Unisex",
    img: "./assets/odymandarine.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "odyssey-mandarine-elixir-100",
    name: "Odyssey Mandarine Sky Elixir 100ml (sellado)",
    price: 450,
    type: "sellado",
    gender: "Unisex",
    img: "./assets/odyelixir.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "odyssey-aqua-100",
    name: "Odyssey Aqua 100ml (sellado)",
    price: 450,
    type: "sellado",
    gender: "hombre",
    img: "./assets/odyaqua.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "odyssey-artisto-100",
    name: "Odyssey Artisto 100ml (sellado)",
    price: 450,
    type: "sellado",
    gender: "hombre",
    img: "./assets/odyartisto.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "odyssey-bahamas-100",
    name: "Odyssey Bahamas 100ml (sellado)",
    price: 485,
    type: "sellado",
    gender: "hombre",
    img: "./assets/odybahamas.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "odyssey-homme-100",
    name: "Odyssey Homme 100ml (sellado)",
    price: 440,
    type: "sellado",
    gender: "hombre",
    img: "./assets/odyhomme.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "odyssey-homme-white-100",
    name: "Odyssey Homme White 100ml (sellado)",
    price: 440,
    type: "sellado",
    gender: "hombre",
    img: "./assets/odyhommew.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "odyssey-toffe-100",
    name: "Odyssey Toffe Coffe 100ml (sellado)",
    price: 485,
    type: "sellado",
    gender: "Unisex",
    img: "./assets/odytoffe.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "odyssey-limoni-100",
    name: "Odyssey Limoni 100ml (sellado)",
    price: 440,
    type: "sellado",
    gender: "Unisex",
    img: "./assets/odylimoni.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "odyssey-mango-100",
    name: "Odyssey Go Mango 100ml (sellado)",
    price: 485,
    type: "sellado",
    gender: "Unisex",
    img: "./assets/odymango.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
{
    id: "odyssey-candee-100",
    name: "Odyssey Candee 100ml (sellado)",
    price: 450,
    type: "sellado",
    gender: "Mujer",
    img: "./assets/odycandee.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
{
    id: "odyssey-dubai-100",
    name: "Odyssey Chocolate Dubai 100ml (sellado)",
    price: 485,
    type: "sellado",
    gender: "hombre",
    img: "./assets/odydubai.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "odyssey-marshmallow-100",
    name: "Odyssey Marshmmallow 100ml (sellado)",
    price: 485,
    type: "sellado",
    gender: "hombre",
    img: "./assets/odymarsh.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "beach-party-100",
    name: "Beach Party 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "unisex",
    img: "./assets/beach.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  /*-----------Eclaire-----------*/
  {
    id: "eclaire-Pistache-100",
    name: "Eclaire Pistache 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "mujer",
    img: "./assets/pistache.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "eclaire-banoffi-100",
    name: "Eclaire Banoffi 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "Unisex",
    img: "./assets/banoffi.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  /*-----------French Avenue---------*/
   {
    id: "liquid-brun-100",
    name: "Liquid Brun 100ml (sellado)",
    price: 485,
    type: "sellado",
    gender: "Unisex",
    img: "./assets/liquidbrun.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "vulcan-sable-100",
    name: "Vulcan Sable 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "Unisex",
    img: "./assets/vulcansable.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "vulcan-feu-100",
    name: "Vulcan Feu 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "Unisex",
    img: "./assets/vulcanfeu.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "vulcan-baie-100",
    name: "Vulcan Baie 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "Unisex",
    img: "./assets/vulcanbaie.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "veneno-100",
    name: "Veneno 100ml (sellado)",
    price: 555,
    type: "sellado",
    gender: "Unisex",
    img: "./assets/veneno.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "veneno-bianco-100",
    name: "Veneno Bianco 100ml (sellado)",
    price: 555,
    type: "sellado",
    gender: "Unisex",
    img: "./assets/venenob.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
/*---------------Mast Perfume----------------*/
{
    id: "rome-pour-100",
    name: "Rome Pour Homme 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "Unisex",
    img: "./assets/romehomme.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "rome-extradose-100",
    name: "Rome Extradose 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "Unisex",
    img: "./assets/extra.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "rome-imagine-100",
    name: "Rome Imagine 100ml (sellado)",
    price: 450,
    type: "sellado",
    gender: "Unisex",
    img: "./assets/romeimagine.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  /*----------Island----------*/
  {
    id: "island-khadlaj-100",
    name: "Isla Khadlaj 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "Hombre",
    img: "./assets/khadlaj.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "island-khadlaj-vanilla-100",
    name: "Isla Khadlaj Vanilla Dunes 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "Hombre",
    img: "./assets/khadlajva.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  /*------------Nitro-----------*/
  {
    id: "nitro-red-100",
    name: "Nitro Red 100ml (sellado)",
    price: 450,
    type: "sellado",
    gender: "hombre",
    img: "./assets/nitrored.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "nitro-red-intensely-100",
    name: "Nitro Red Intensely 100ml (sellado)",
    price: 485,
    type: "sellado",
    gender: "hombre",
    img: "./assets/nitrointensely.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "nitro-red-elixir-100",
    name: "Nitro Red Elixir 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "hombre",
    img: "./assets/nitroelixir.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  /*-----------linea give me gourdam-----------*/
  {
    id: "berry-top-100",
    name: "Berry On Top 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "mujer",
    img: "./assets/berry.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "mallow-madnees-100",
    name: "Mallow Madnees 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "mujer",
    img: "./assets/mallow.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "whipped-pleasure-100",
    name: "Whipped Pleasure 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "mujer",
    img: "./assets/wipped.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "vanilla-freak-100",
    name: "Vanilla Freak 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "mujer",
    img: "./assets/vanilla.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "choco-overdose-100",
    name: "Choco Overdose 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "mujer",
    img: "./assets/choco.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "cookie-crave-100",
    name: "Cookie Crave 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "mujer",
    img: "./assets/cookie.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  /*------------Dupe Ariana---------------------*/
  {
    id: "creeme-clouds-100",
    name: "Creme Of Clouds 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "mujer",
    img: "./assets/creme.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
    /*------------Layaan-----------*/
  {
    id: "layaan-100",
    name: "Layaan Lataffa 100ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "mujer",
    img: "./assets/layaan.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  /*-------------stallion 53---------------*/
  {
    id: "stallion-100",
    name: "Stallion 53 100ml (sellado)",
    price: 485,
    type: "sellado",
    gender: "hombre",
    img: "./assets/stallion53.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  /*----------Club de Nuit------------*/
  {
    id: "club-nuit-intense-105",
    name: "Club de Nuit Intense Man 105ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "hombre",
    img: "./assets/clubintenseman.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },{
    id: "club-nuit-extrait-70",
    name: "Club de Nuit Extrait de Parfums 70ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "hombre",
    img: "./assets/clubextrait.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "club-nuit-precieux-55",
    name: "Club de Nuit Precieux 55ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "hombre",
    img: "./assets/clubprecieux.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "club-nuit-untold-105",
    name: "Club de Nuit untold 105ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "unisex",
    img: "./assets/clubuntold.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "club-nuit-urban-105",
    name: "Club de Nuit Urban Man Elixir 105ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "hombre",
    img: "./assets/cluburbanmanelixir.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },
  {
    id: "club-nuit-Bling-105",
    name: "Club de Nuit Bling 105ml (sellado)",
    price: 500,
    type: "sellado",
    gender: "hombre",
    img: "./assets/clubbling.jpg",
    note: "Citrico • Caramelo • Afrutado"
  },






  {
    id: "yara-Candy-100",
    name: "Yara Cancy 100ml (Sellado)",
    price: 425,
    type: "sellado",
    gender: "mujer",
    img: "./assets/yaracandy.jpg",
    note: "Dulce • Cremoso • Viral"
  },
  {
    id: "hawas-fire-100",
    name: "Hawas fire 100ml (Sellado)",
    price: 500,
    type: "sellado",
    gender: "hombre",
    img: "./assets/hawasfire.jpg",
    note: "Fresco • Proyección • Verano"
  },
  {
    id: "khamrah-100",
    name: "Khamrah 100ml selado)",
    price: 450,
    type: "sellado",
    gender: "unisex",
    img: "./assets/khamrah.jpg",
    note: "Canela • Vainilla • Nocturno"
  }
  






























































































];

/* =========================
   HELPERS
========================= */
const money = (n) =>
  new Intl.NumberFormat("es-GT", { style: "currency", currency: CURRENCY }).format(n);

const qs = (s, el = document) => el.querySelector(s);
const qsa = (s, el = document) => [...el.querySelectorAll(s)];

function safeText(t) {
  return String(t ?? "").replace(/[<>]/g, "");
}

/* =========================
   STATE (Cart)
========================= */
let cart = loadCart();

function loadCart() {
  try {
    const raw = localStorage.getItem("parfums_cart_v1");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveCart() {
  localStorage.setItem("parfums_cart_v1", JSON.stringify(cart));
}

function cartCount() {
  return Object.values(cart).reduce((acc, it) => acc + it.qty, 0);
}

function cartSubtotal() {
  return Object.values(cart).reduce((acc, it) => acc + it.qty * it.price, 0);
}

/* =========================
   UI: Products
========================= */
function renderProducts(list) {
  const grid = qs("#productGrid");
  if (!grid) return;

  grid.innerHTML = list.map(p => `
    <article class="card" data-id="${p.id}">
      <img class="card__img" src="${p.img}" alt="${safeText(p.name)}" loading="lazy"
        onerror="this.src='https://via.placeholder.com/600x600?text=Producto'"/>
      <div class="card__body">
        <div>
          <h3 class="card__title">${safeText(p.name)}</h3>
          <div class="badges">
            <span class="badge">${p.type === "sellado" ? "Sellado" : "Decant"}</span>
            <span class="badge">${safeText(p.gender)}</span>
            ${p.note ? `<span class="badge">${safeText(p.note)}</span>` : ""}
          </div>
        </div>

        <div class="priceRow">
          <div>
            <div class="price">${money(p.price)}</div>
            <div class="small">Disponible</div>
          </div>

          <div class="qty" aria-label="Cantidad">
            <button type="button" data-action="dec" aria-label="Disminuir">−</button>
            <span data-qty>${getQty(p.id)}</span>
            <button type="button" data-action="inc" aria-label="Aumentar">+</button>
          </div>
        </div>

        <div class="card__actions">
          <button class="btn btn--primary" type="button" data-add>Agregar al carrito</button>
          <button class="btn btn--ghost" type="button" data-quick>WhatsApp</button>
        </div>
      </div>
    </article>
  `).join("");

  // Events
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;

    const id = card.dataset.id;
    const product = PRODUCTS.find(x => x.id === id);
    if (!product) return;

    const inc = e.target.closest('[data-action="inc"]');
    const dec = e.target.closest('[data-action="dec"]');
    const add = e.target.closest("[data-add]");
    const quick = e.target.closest("[data-quick]");

    if (inc) {
      setQty(id, getQty(id) + 1);
      card.querySelector("[data-qty]").textContent = getQty(id);
      return;
    }

    if (dec) {
      setQty(id, Math.max(0, getQty(id) - 1));
      card.querySelector("[data-qty]").textContent = getQty(id);
      return;
    }

    if (add) {
      addToCart(product, Math.max(1, getQty(id)));
      openDrawer();
      return;
    }

    if (quick) {
      const msg = buildWhatsAppMessage([{ ...product, qty: Math.max(1, getQty(id)) }]);
      openWhatsApp(msg);
      return;
    }
  }, { once: true }); // evita duplicar listeners al re-render
}

function getQty(id) {
  return cart[id]?.qty ?? 0;
}

function setQty(id, qty) {
  if (qty <= 0) {
    delete cart[id];
  } else {
    const p = PRODUCTS.find(x => x.id === id);
    cart[id] = { id, name: p?.name ?? id, price: p?.price ?? 0, img: p?.img ?? "", qty };
  }
  saveCart();
  updateCartUI();
}

function addToCart(product, qty) {
  const current = cart[product.id]?.qty ?? 0;
  cart[product.id] = {
    id: product.id,
    name: product.name,
    price: product.price,
    img: product.img,
    qty: current + qty
  };
  saveCart();
  updateCartUI();
}

/* =========================
   UI: Cart Drawer
========================= */
function updateCartUI() {
  qs("#cartCount").textContent = cartCount();
  qs("#cartSubtotal").textContent = money(cartSubtotal());

  const list = qs("#cartList");
  const empty = qs("#cartEmpty");

  const items = Object.values(cart);
  if (items.length === 0) {
    empty.style.display = "block";
    list.innerHTML = "";
  } else {
    empty.style.display = "none";
    list.innerHTML = items.map(it => `
      <div class="cartItem" data-id="${it.id}">
        <img src="${it.img}" alt="${safeText(it.name)}"
          onerror="this.src='https://via.placeholder.com/200x200?text=Producto'"/>
        <div>
          <p class="cartItem__title">${safeText(it.name)}</p>
          <div class="cartItem__meta">${money(it.price)} c/u</div>

          <div class="cartItem__row">
            <div class="qty" aria-label="Cantidad en carrito">
              <button type="button" data-cart="dec" aria-label="Disminuir">−</button>
              <span data-cart-qty>${it.qty}</span>
              <button type="button" data-cart="inc" aria-label="Aumentar">+</button>
            </div>

            <div class="cartItem__right">
              <strong>${money(it.qty * it.price)}</strong>
              <button class="iconBtn" type="button" data-cart="remove" aria-label="Quitar">🗑️</button>
            </div>
          </div>
        </div>
      </div>
    `).join("");
  }
}

function initCartEvents() {
  qs("#openCartBtn").addEventListener("click", openDrawer);
  qs("#closeCartBtn").addEventListener("click", closeDrawer);
  qs("#drawerOverlay").addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });

  qs("#clearCartBtn").addEventListener("click", () => {
    cart = {};
    saveCart();
    updateCartUI();
  });

  qs("#checkoutWhatsBtn").addEventListener("click", () => {
  // abre el modal para elegir transferencia / contra entrega
  openPayModal();
});

  // delegación eventos dentro del carrito
  qs("#cartList").addEventListener("click", (e) => {
    const item = e.target.closest(".cartItem");
    if (!item) return;

    const id = item.dataset.id;
    const inc = e.target.closest('[data-cart="inc"]');
    const dec = e.target.closest('[data-cart="dec"]');
    const remove = e.target.closest('[data-cart="remove"]');

    const qty = cart[id]?.qty ?? 0;

    if (inc) setQty(id, qty + 1);
    if (dec) setQty(id, Math.max(0, qty - 1));
    if (remove) setQty(id, 0);
  });
}

function openDrawer() {
  const drawer = qs("#cartDrawer");
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  const drawer = qs("#cartDrawer");
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
}

/* =========================
   WhatsApp
========================= */

function buildWhatsAppMessage(items, payMethod = "") {
  const lines = [];
  lines.push(`Hola 👋 soy cliente de *${STORE_NAME}*`);
  lines.push(`Quiero hacer este pedido:`);
  lines.push("");

  let total = 0;
  items.forEach((it) => {
    const sub = it.qty * it.price;
    total += sub;
    lines.push(`• ${it.qty} x ${it.name} — ${money(sub)}`);
  });

  lines.push("");
  lines.push(`*Subtotal:* ${money(total)}`);

  if (payMethod) {
    lines.push(`*Método de pago:* ${payMethod}`);
  }

  lines.push("");
  lines.push("Mi nombre es:");
  lines.push("Mi numero es:");
  lines.push("📍 Mi dirección es:");
  lines.push("🕐 ¿Tiempo estimado de entrega?");

  return lines.join("\n");
}

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function openPayModal() {
  const modal = qs("#payModal");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closePayModal() {
  const modal = qs("#payModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function getSelectedPayMethod() {
  const checked = qs('input[name="payMethod"]:checked');
  return checked ? checked.value : "";
}

/* =========================
   Search & Filter
========================= */
function applySearchAndFilter() {
  const q = (qs("#searchInput").value || "").toLowerCase().trim();
  const f = qs("#filterSelect").value;

  let list = [...PRODUCTS];

  if (q) {
    list = list.filter(p =>
      (p.name || "").toLowerCase().includes(q) ||
      (p.note || "").toLowerCase().includes(q)
    );
  }

  if (f !== "all") {
    if (f === "sellado" || f === "decant") list = list.filter(p => p.type === f);
    if (f === "hombre" || f === "mujer" || f === "unisex") list = list.filter(p => p.gender === f);
  }

  renderProducts(list);
}

/* =========================
   Theme
========================= */
function initTheme() {
  const btn = qs("#themeBtn");
  const saved = localStorage.getItem("parfums_theme");
  if (saved === "light") document.documentElement.setAttribute("data-theme", "light");

  const paintIcon = () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    btn.textContent = isLight ? "☀️" : "🌙";
  };

  paintIcon();

  btn.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("parfums_theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("parfums_theme", "light");
    }
    paintIcon();
  });
}

/* =========================
   Init
========================= */
function init() {
  qs("#year").textContent = new Date().getFullYear();

  initTheme();
  initCartEvents();

  // CTA WhatsApp (si carrito vacío, manda saludo)
  qs("#whatsAppBtnHero").addEventListener("click", () => {
    const items = Object.values(cart);
    const msg = items.length ? buildWhatsAppMessage(items) : `Hola 👋 quiero información de perfumes en *${STORE_NAME}*`;
    openWhatsApp(msg);
  });

  qs("#whatsAppBtnFooter").addEventListener("click", (e) => {
    e.preventDefault();
    const items = Object.values(cart);
    const msg = items.length ? buildWhatsAppMessage(items) : `Hola 👋 quiero información de perfumes en *${STORE_NAME}*`;
    openWhatsApp(msg);
  });

  qs("#searchInput").addEventListener("input", applySearchAndFilter);
  qs("#filterSelect").addEventListener("change", applySearchAndFilter);

  // primer render
  renderProducts(PRODUCTS);
  updateCartUI();
}
// Modal pago eventos
qs("#payCancelBtn").addEventListener("click", closePayModal);
qs("#payModalOverlay").addEventListener("click", closePayModal);

qs("#payConfirmBtn").addEventListener("click", () => {
  const items = Object.values(cart);
  const payMethod = getSelectedPayMethod();
  const msg = items.length
    ? buildWhatsAppMessage(items, payMethod)
    : `Hola 👋 quiero información de perfumes en *${STORE_NAME}*`;

  closePayModal();
  openWhatsApp(msg);
});

init();