
import type { Category, Product, TrustBadge } from './types';
import { PainReliefIcon, VitaminsIcon, FirstAidIcon, DigestiveHealthIcon, BabyCareIcon } from './components/icons/CategoryIcons';
import { SecureCheckoutIcon, DataProtectionIcon, CertifiedPharmacyIcon } from './components/icons/TrustBadgeIcons';

export const CATEGORIES: Category[] = [
  { name: 'Pain Relief', icon: PainReliefIcon },
  { name: 'Vitamins & Supplements', icon: VitaminsIcon },
  { name: 'Skincare First Aid', icon: FirstAidIcon },
  { name: 'Skincare & Digestive Health', icon: DigestiveHealthIcon },
  { name: 'Baby Care', icon: BabyCareIcon },
];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'VitaBoost D3', price: 113.00, imageUrl: 'https://picsum.photos/seed/vita/200' },
  { id: 2, name: 'CalmEase Tablets', price: 19.00, imageUrl: 'https://picsum.photos/seed/calm/200' },
  { id: 3, name: 'RapidRelif Cream', price: 110.00, imageUrl: 'https://picsum.photos/seed/rapid/200' },
  { id: 4, name: 'Omega-3 Supreme', price: 22.50, imageUrl: 'https://picsum.photos/seed/omega/200' },
  { id: 5, name: 'CarbBlocker Kit', price: 35.00, imageUrl: 'https://picsum.photos/seed/carb/200' },
  { id: 6, name: 'FocusMode Pills', price: 28.00, imageUrl: 'https://picsum.photos/seed/focus/200' },
];

export const TRUST_BADGES: TrustBadge[] = [
    { name: 'Secure Checkout', icon: SecureCheckoutIcon },
    { name: 'Data Protection', icon: DataProtectionIcon },
    { name: 'Certified Pharmacy', icon: CertifiedPharmacyIcon },
];
