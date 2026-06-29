export interface Store {
  id: string;
  name: string;
  area: string;
  address: string;
  lat: number;
  lng: number;
  gmaps: string;
}

export const STORES: Store[] = [
  { 
    id: "1", 
    name: "Paman Besar Wonogiri Kota", 
    area: "Wonogiri", 
    address: "Jl. Jend. Sudirman No. 45", 
    lat: -7.8145, 
    lng: 110.9264, 
    gmaps: "https://maps.google.com" 
  },
  { 
    id: "2", 
    name: "Paman Besar Solo Baru", 
    area: "Sukoharjo", 
    address: "Jl. Ir. Soekarno, Grogol", 
    lat: -7.6042, 
    lng: 110.8123, 
    gmaps: "https://maps.google.com" 
  },
  { 
    id: "3", 
    name: "Paman Besar Kartasura", 
    area: "Sukoharjo", 
    address: "Jl. Adi Soemarmo, Kartasura", 
    lat: -7.5562, 
    lng: 110.7554, 
    gmaps: "https://maps.google.com" 
  },
  { 
    id: "4", 
    name: "Paman Besar Sragen Pusat", 
    area: "Sragen", 
    address: "Jl. Raya Sukowati No. 102", 
    lat: -7.4332, 
    lng: 111.0118, 
    gmaps: "https://maps.google.com" 
  },
  { 
    id: "5", 
    name: "Paman Besar Manahan", 
    area: "Solo", 
    address: "Jl. Menteri Supeno, Manahan", 
    lat: -7.5532, 
    lng: 110.8165, 
    gmaps: "https://maps.google.com" 
  },
];