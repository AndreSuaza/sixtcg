export interface Card {
    _id: string;
    id: number;
    name: string;
    code: string;
    cost: string;
    force: string;
    defence: string;
    effect: string;
    img: string;
    limit: string;
    deleteAt?: any;
    copys?: number;
    types: string[];
    products: Product[];
    archetypes: string[];
    keywords: string[];
  }
  
export interface Product {
    id: number;
    url: string;
    name: string;
    code: string;
    price: string;
    discount?: any;
    releaseDate: string;
    numberCards: string;
    logo?: any;
    description: string;
    deleteAt?: any;
    images: any[];
    show: string;
}

export interface Properties {
  types: Other[];
  products: Other[];
  archetypes: Other[];
  keywords: Other[];
  others: Other[];
  rarities?: Other[];
  limits?: Other[];
}

export interface Other {
  label: string;
  value: string;
}


export interface PropertiesFilter {
  types?: string[];
  products?: string[];
  archetypes?: string[];
  keywords?: string[];
  others?: string[];
}