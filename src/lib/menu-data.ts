export type MenuItem = {
  id: string;
  name: string;
  desc: string;
  price: number;
  kcal: number;
  composition: string;
  badge?: "Best Seller" | "New" | "Promo";
  img?: string; // Ditambahkan agar support gambar
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
      {
        id: "kopi-paman",
        name: "Kopi Paman Besar",
        desc: "House blend Gayo + Kintamani, full-body & smooth.",
        price: 28000,
        kcal: 120,
        composition: "Espresso double, susu segar, gula aren cair.",
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "es-kopi-susu",
        name: "Es Kopi Susu Aren",
        desc: "Manis legit khas gula aren, dingin nendang.",
        price: 25000,
        kcal: 180,
        composition: "Espresso, susu UHT, gula aren, es batu.",
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "americano",
        name: "Americano",
        desc: "Espresso panjang, bold & bersih.",
        price: 22000,
        kcal: 5,
        composition: "Double espresso, hot water.",
        img: "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        desc: "Foam tebal, espresso dominan.",
        price: 30000,
        kcal: 110,
        composition: "Espresso, steamed milk, milk foam.",
        img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "caramel-macchiato",
        name: "Caramel Macchiato",
        desc: "Karamel buatan dapur Paman.",
        price: 35000,
        kcal: 220,
        composition: "Espresso, vanilla, steamed milk, caramel drizzle.",
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "butterscotch-sea-salt",
        name: "Butterscotch Sea Salt",
        desc: "Perpaduan manis gurih butterscotch dengan sentuhan sea salt yang creamy.",
        price: 36000,
        kcal: 240,
        composition: "Espresso, fresh milk, butterscotch syrup, sea salt cream.",
        badge: "New",
        img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "cafe-latte",
        name: "Café Latte",
        desc: "Lebih banyak susu, lembut dan nyaman di lambung.",
        price: 29000,
        kcal: 130,
        composition: "Single espresso, steamed fresh milk, thin foam.",
        img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    id: "non-coffee",
    label: "Non-Coffee",
    items: [
      {
        id: "matcha-latte",
        name: "Matcha Latte",
        desc: "Matcha Uji premium, halus & earthy.",
        price: 32000,
        kcal: 190,
        composition: "Matcha powder, susu segar, gula.",
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "taro-latte",
        name: "Taro Latte",
        desc: "Taro asli, manis lembut.",
        price: 30000,
        kcal: 210,
        composition: "Taro paste, susu, gula.",
        img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "choco-besar",
        name: "Choco Besar",
        desc: "Coklat Belgia, pekat.",
        price: 33000,
        kcal: 250,
        composition: "Dark chocolate, susu segar.",
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "earl-grey-milk-tea",
        name: "Earl Grey Milk Tea",
        desc: "Teh hitam beraroma bergamot dengan susu yang ringan dan wangi.",
        price: 28000,
        kcal: 150,
        composition: "Earl grey brewed tea, evaporated milk, simple syrup.",
        badge: "New",
        img: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "yuzu-citrus-fizz",
        name: "Yuzu Citrus Fizz",
        desc: "Soda lemon yuzu jepang yang sangat menyegarkan untuk cuaca panas.",
        price: 30000,
        kcal: 110,
        composition: "Yuzu purée, sparkling water, mint leaves, sliced lemon.",
        badge: "Promo",
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    id: "artisan-bakery",
    label: "Artisan Bakery",
    items: [
      {
        id: "butter-croissant",
        name: "Butter Croissant",
        desc: "Flaky, garing, butter Perancis.",
        price: 24000,
        kcal: 280,
        composition: "Tepung premium, butter, ragi.",
        img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "pain-au-chocolat",
        name: "Pain au Chocolat",
        desc: "Croissant isi dark chocolate.",
        price: 28000,
        kcal: 320,
        composition: "Croissant dough, dark chocolate batons.",
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "cinnamon-roll",
        name: "Cinnamon Roll",
        desc: "Glazed manis, kayu manis hangat.",
        price: 26000,
        kcal: 340,
        composition: "Brioche, cinnamon sugar, cream cheese glaze.",
        img: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "almond-croissant",
        name: "Almond Croissant",
        desc: "Croissant panggang ulang dengan krim almond frangipane dan taburan almond slice.",
        price: 32000,
        kcal: 380,
        composition: "Croissant, almond cream, sliced almonds, powdered sugar.",
        badge: "New",
        img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "cheese-danish",
        name: "Classic Cheese Danish",
        desc: "Pastry renyah dengan isian cream cheese manis yang lumer di mulut.",
        price: 27000,
        kcal: 310,
        composition: "Danish pastry dough, sweet cream cheese filling, vanilla glaze.",
        img: "https://images.unsplash.com/photo-1626803775151-61d756612f97?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    id: "heavy-meals",
    label: "Heavy Meals",
    items: [
      {
        id: "nasi-paman",
        name: "Nasi Paman Spesial",
        desc: "Ayam bumbu paman + sambal matah.",
        price: 45000,
        kcal: 620,
        composition: "Nasi, ayam paha, sambal matah, lalapan.",
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "beef-bowl",
        name: "Beef Teriyaki Bowl",
        desc: "Daging slice teriyaki rumahan.",
        price: 52000,
        kcal: 580,
        composition: "Nasi, beef slice, teriyaki sauce, sesame.",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "spaghetti-aglio-olio",
        name: "Smoked Beef Aglio Olio",
        desc: "Pasta klasik italia yang gurih, pedas cabai kering, dan kaya aroma bawang putih.",
        price: 42000,
        kcal: 480,
        composition: "Spaghetti, olive oil, garlic, chili flakes, smoked beef, parmesan.",
        badge: "New",
        img: "https://images.unsplash.com/photo-1633337474595-6b21648a04df?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "katsu-curry-rice",
        name: "Japanese Katsu Curry",
        desc: "Nasi hangat dengan ayam katsu renyah dan kuah kari jepang yang kental.",
        price: 48000,
        kcal: 650,
        composition: "Nasi putih, chicken katsu, japanese curry roux, wortel, kentang.",
        badge: "Promo",
        img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    items: [
      {
        id: "kentang-paman",
        name: "Kentang Paman",
        desc: "Twister fries, bumbu bbq.",
        price: 22000,
        kcal: 380,
        composition: "Kentang, bumbu bbq, mayonnaise.",
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "chicken-pop",
        name: "Chicken Pop",
        desc: "Boneless crispy, saus pilihan.",
        price: 28000,
        kcal: 410,
        composition: "Ayam fillet, breadcrumb, saus.",
        img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "truffle-parmesan-fries",
        name: "Truffle Parmesan Fries",
        desc: "Kentang goreng renyah dengan aroma truffle oil mewah dan keju parmesan parut.",
        price: 32000,
        kcal: 420,
        composition: "Shoestring fries, white truffle oil, grated parmesan, parsley.",
        badge: "New",
        img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "crispy-mushroom",
        name: "Crispy Enoki Mushroom",
        desc: "Jamur enoki goreng tepung renyah yang disajikan dengan saus tartar asam segar.",
        price: 24000,
        kcal: 290,
        composition: "Enoki mushroom, seasoned flour, homemade tartar sauce.",
        img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
];

export const BEST_SELLERS = CATEGORIES[0].items.filter((i) => i.badge === "Best Seller");

export const formatRp = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);