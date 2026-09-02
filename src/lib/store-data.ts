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
    name: "SXN Caffe Senopati", 
    area: "Jakarta Selatan", 
    address: "Jl. Senopati No. 12, Kebayoran Baru", 
    lat: -6.2295, 
    lng: 106.8091, 
    gmaps: "https://maps.google.com" 
  },
  { 
    id: "2", 
    name: "SXN Caffe Menteng", 
    area: "Jakarta Pusat", 
    address: "Jl. HOS Cokroaminoto No. 42", 
    lat: -6.1944, 
    lng: 106.8322, 
    gmaps: "https://maps.google.com" 
  },
  { 
    id: "3", 
    name: "SXN Caffe Kemang", 
    area: "Jakarta Selatan", 
    address: "Jl. Kemang Raya No. 18", 
    lat: -6.2615, 
    lng: 106.8106, 
    gmaps: "https://maps.google.com" 
  },
  { 
    id: "4", 
    name: "SXN Caffe Pantai Indah Kapuk", 
    area: "Jakarta Utara", 
    address: "Ruko Crown Golf, Blok D No. 5", 
    lat: -6.1152, 
    lng: 106.7423, 
    gmaps: "https://maps.google.com" 
  },
  { 
    id: "5", 
    name: "SXN Caffe Kelapa Gading", 
    area: "Jakarta Utara", 
    address: "Jl. Boulevard Raya Blok QA 1", 
    lat: -6.1612, 
    lng: 106.9056, 
    gmaps: "https://maps.google.com" 
  },
];