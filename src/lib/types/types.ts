

export interface Product {
  id: number;
  name: string;
  rating: number;
  imageUrl: string[];
  price: {
    old: number;
    new: number;
  };
  discount: number;
  description: string;
  colors: {
    name: string;
    hex: string;
  }[];
  sizes: string[];
  keywords: string[];
  category: string;
  section: string;
  style: string;
  type: string;
  clothingType: string;
  arrivalDate: string; // Could also be Date, if parsed
  salesCount: number;
}

export interface CartItem {
  id: number;
  name: string;
  imageUrl: string;
  quantity: number;
  price: { old: number; new: number };
  discount?: number;
  color: string[];
  size: string[];
  keywords?: string[];
  category?: string;
}

export interface PhotoGalleryProps {
  idGallery: string;
  titleGallery: string;
  data: Product[];
  buttonText?: string;
  filterProp?: keyof Product;
  filterValue?: any;
  sortProp?: keyof Product;
  sortOrder?: "asc" | "desc";
  limit?: number;
  random?: boolean;
  viewAll?: () => void;
  border?: string;
}

export interface CartItemProps {
  item: {
    id:  number;
    imageUrl: string;
    title: string;
    name: string;
    size: string;
    color: string;
    price: {
      new: number;
    };
    quantity: number;
  };
}

export interface ProductListProps {
  data: Product[];
  filterProp?: keyof Product;
  filterValue?: any;
  sortProp?: keyof Product;
  sortOrder?: "asc" | "desc";
  limit?: number;
  random?: boolean;
}

export interface RenderStarsProps {
  rating: number;
  size: number;

}

type Variant = 'ProductCard' | 'ProductDetail';


export interface StarRatingProps extends RenderStarsProps {
   variant: Variant;

}

export interface ReviewCardProps {
  id: string | number;
  rating: number;
  name: string;
  comment: string;
}

export interface ProductCardProps {
  product: Product;
}

export interface SearchBarDisplayProps {
  searchItem: (search: string) => void;
  recentSearches: string[];
  searchResults: any[];
}
