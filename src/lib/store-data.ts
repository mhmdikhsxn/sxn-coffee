export type Store = {
  id: string;
  name: string;
  address: string;
  city: string;
  hours: string;
  tags: ("24 Jam" | "Ada Mushola" | "Drive Thru")[];
  lat: number;
  lng: number;
};

export const STORES: Store[] = [
  { id: "pb-senopati", name: "Paman Besar Senopati", address: "Jl. Senopati No. 88, Kebayoran Baru", city: "Jakarta Selatan", hours: "07.00 - 23.00", tags: ["Ada Mushola"], lat: -6.234, lng: 106.81 },
  { id: "pb-pik", name: "Paman Besar PIK 2", address: "Ruko Crown Golf, PIK 2", city: "Jakarta Utara", hours: "24 Jam", tags: ["24 Jam", "Drive Thru"], lat: -6.103, lng: 106.74 },
  { id: "pb-bandung", name: "Paman Besar Dago", address: "Jl. Ir. H. Juanda 212", city: "Bandung", hours: "07.00 - 22.00", tags: ["Ada Mushola"], lat: -6.882, lng: 107.613 },
  { id: "pb-jogja", name: "Paman Besar Prawirotaman", address: "Jl. Prawirotaman II No. 12", city: "Yogyakarta", hours: "07.00 - 22.00", tags: ["Ada Mushola"], lat: -7.819, lng: 110.366 },
  { id: "pb-surabaya", name: "Paman Besar Tunjungan", address: "Jl. Tunjungan No. 50", city: "Surabaya", hours: "08.00 - 22.00", tags: [], lat: -7.262, lng: 112.738 },
  { id: "pb-bali", name: "Paman Besar Canggu", address: "Jl. Pantai Batu Bolong 45", city: "Bali", hours: "24 Jam", tags: ["24 Jam"], lat: -8.654, lng: 115.131 },
];
