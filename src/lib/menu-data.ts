export type MenuItem = {
  id: string;
  name: string;
  desc: string;
  price: number;
  kcal: number;
  composition: string;
  badge?: "Best Seller" | "New" | "Promo";
};

export type Category = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const CATEGORIES: Category[] = [
  {
    id: "signature-coffee",
    label: "Signature Coffee",
    items: [
      { id: "kopi-paman", name: "Kopi Paman Besar", desc: "House blend Gayo + Kintamani, full-body & smooth.", price: 28000, kcal: 120, composition: "Espresso double, susu segar, gula aren cair.", badge: "Best Seller" },
      { id: "es-kopi-susu", name: "Es Kopi Susu Aren", desc: "Manis legit khas gula aren, dingin nendang.", price: 25000, kcal: 180, composition: "Espresso, susu UHT, gula aren, es batu.", badge: "Best Seller" },
      { id: "americano", name: "Americano", desc: "Espresso panjang, bold & bersih.", price: 22000, kcal: 5, composition: "Double espresso, hot water." },
      { id: "cappuccino", name: "Cappuccino", desc: "Foam tebal, espresso dominan.", price: 30000, kcal: 110, composition: "Espresso, steamed milk, milk foam." },
      { id: "caramel-macchiato", name: "Caramel Macchiato", desc: "Karamel buatan dapur Paman.", price: 35000, kcal: 220, composition: "Espresso, vanilla, steamed milk, caramel drizzle.", badge: "Best Seller" },
    ],
  },
  {
    id: "non-coffee",
    label: "Non-Coffee",
    items: [
      { id: "matcha-latte", name: "Matcha Latte", desc: "Matcha Uji premium, halus & earthy.", price: 32000, kcal: 190, composition: "Matcha powder, susu segar, gula." },
      { id: "taro-latte", name: "Taro Latte", desc: "Taro asli, manis lembut.", price: 30000, kcal: 210, composition: "Taro paste, susu, gula." },
      { id: "choco-besar", name: "Choco Besar", desc: "Coklat Belgia, pekat.", price: 33000, kcal: 250, composition: "Dark chocolate, susu segar." },
    ],
  },
  {
    id: "artisan-bakery",
    label: "Artisan Bakery",
    items: [
      { id: "butter-croissant", name: "Butter Croissant", desc: "Flaky, garing, butter Perancis.", price: 24000, kcal: 280, composition: "Tepung premium, butter, ragi." },
      { id: "pain-au-chocolat", name: "Pain au Chocolat", desc: "Croissant isi dark chocolate.", price: 28000, kcal: 320, composition: "Croissant dough, dark chocolate batons." },
      { id: "cinnamon-roll", name: "Cinnamon Roll", desc: "Glazed manis, kayu manis hangat.", price: 26000, kcal: 340, composition: "Brioche, cinnamon sugar, cream cheese glaze." },
    ],
  },
  {
    id: "heavy-meals",
    label: "Heavy Meals",
    items: [
      { id: "nasi-paman", name: "Nasi Paman Spesial", desc: "Ayam bumbu paman + sambal matah.", price: 45000, kcal: 620, composition: "Nasi, ayam paha, sambal matah, lalapan." },
      { id: "beef-bowl", name: "Beef Teriyaki Bowl", desc: "Daging slice teriyaki rumahan.", price: 52000, kcal: 580, composition: "Nasi, beef slice, teriyaki sauce, sesame." },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    items: [
      { id: "kentang-paman", name: "Kentang Paman", desc: "Twister fries, bumbu bbq.", price: 22000, kcal: 380, composition: "Kentang, bumbu bbq, mayonnaise." },
      { id: "chicken-pop", name: "Chicken Pop", desc: "Boneless crispy, saus pilihan.", price: 28000, kcal: 410, composition: "Ayam fillet, breadcrumb, saus." },
    ],
  },
];

export const BEST_SELLERS = CATEGORIES[0].items.filter((i) => i.badge === "Best Seller");

export const formatRp = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
