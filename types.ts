
import type React from 'react';

export interface Category {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface TrustBadge {
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
