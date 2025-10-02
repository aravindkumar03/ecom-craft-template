export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
    productCount: 45,
  },
  {
    id: "2",
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
    productCount: 128,
  },
  {
    id: "3",
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    productCount: 67,
  },
  {
    id: "4",
    name: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
    productCount: 89,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones Pro",
    description: "Premium wireless headphones with noise cancellation, 30-hour battery life, and exceptional sound quality. Perfect for music lovers and professionals.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.8,
    reviews: 256,
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Smart Watch Ultra",
    description: "Advanced fitness tracking, heart rate monitoring, GPS, and smartphone notifications. Water-resistant and long-lasting battery.",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.6,
    reviews: 189,
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Designer Leather Jacket",
    description: "Genuine leather jacket with modern cut and premium finish. Perfect for any occasion, combines style and durability.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    category: "Fashion",
    rating: 4.9,
    reviews: 142,
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "Running Shoes Elite",
    description: "Lightweight running shoes with advanced cushioning technology. Designed for comfort and performance on any terrain.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    category: "Sports",
    rating: 4.7,
    reviews: 312,
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "Modern Coffee Maker",
    description: "Programmable coffee maker with thermal carafe, brew strength control, and auto-shutoff. Makes perfect coffee every time.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop",
    category: "Home & Living",
    rating: 4.5,
    reviews: 98,
    inStock: true,
  },
  {
    id: "6",
    name: "Laptop Pro 15\"",
    description: "High-performance laptop with Intel Core i7, 16GB RAM, 512GB SSD. Perfect for professionals and creatives.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.9,
    reviews: 445,
    inStock: true,
  },
  {
    id: "7",
    name: "Casual Denim Jeans",
    description: "Classic fit denim jeans made from premium cotton. Comfortable, durable, and stylish for everyday wear.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
    category: "Fashion",
    rating: 4.4,
    reviews: 167,
    inStock: true,
  },
  {
    id: "8",
    name: "Yoga Mat Premium",
    description: "Extra thick, non-slip yoga mat with carrying strap. Eco-friendly materials, perfect for all yoga styles.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
    category: "Sports",
    rating: 4.6,
    reviews: 203,
    inStock: true,
  },
  {
    id: "9",
    name: "Smart LED Lamp",
    description: "WiFi-enabled smart lamp with adjustable brightness and color temperature. Control via app or voice commands.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    category: "Home & Living",
    rating: 4.3,
    reviews: 134,
    inStock: true,
  },
  {
    id: "10",
    name: "Wireless Earbuds",
    description: "Compact wireless earbuds with charging case, crystal clear sound, and up to 24 hours of battery life.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.7,
    reviews: 289,
    inStock: true,
  },
  {
    id: "11",
    name: "Cotton T-Shirt Pack",
    description: "Set of 3 premium cotton t-shirts in various colors. Soft, breathable, and perfect for everyday wear.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "Fashion",
    rating: 4.5,
    reviews: 421,
    inStock: true,
  },
  {
    id: "12",
    name: "Dumbbells Set",
    description: "Adjustable dumbbell set (5-25 lbs per hand) with quick-change system. Perfect for home workouts.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1638805981949-be1e9b11c2c0?w=500&h=500&fit=crop",
    category: "Sports",
    rating: 4.8,
    reviews: 176,
    inStock: true,
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    productId: "1",
    userName: "John Doe",
    rating: 5,
    comment: "Excellent sound quality and very comfortable for long listening sessions. Battery life is amazing!",
    date: "2024-01-15",
  },
  {
    id: "2",
    productId: "1",
    userName: "Sarah Smith",
    rating: 4,
    comment: "Great headphones but a bit pricey. The noise cancellation works really well though.",
    date: "2024-01-20",
  },
  {
    id: "3",
    productId: "2",
    userName: "Mike Johnson",
    rating: 5,
    comment: "Perfect fitness companion! Tracks everything I need and the battery lasts for days.",
    date: "2024-01-18",
  },
];
