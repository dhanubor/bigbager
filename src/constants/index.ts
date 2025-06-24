

export const navigation = [
  {title: "Home", href: "/"},
  {title: "Products", href: "/products"},
  {title: "Categories", href: "/categories"},
  {title: "Offers", href: "/offers"},
  {title: "Blog", href: "/blog"},
  {title: "Contant", href: "/contant"},
];

// constants/sliderData.ts
export interface SlideItem {
  id: number;
  title: string;
  subtitle: string;
  offer: string;
  img: string;
}

export const sliderData: SlideItem[] = [
  {
    id: 1,
    title: "Starting at $999.90",
    subtitle: "The best tablet Collection 2024",
    offer: "Exclusive offer -30% off this week",
    img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Only $499 for Smartwatch",
    subtitle: "Trendy wearables for every generation",
    offer: "Limited offer -20% off today only",
    img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Mega Sale $299.99",
    subtitle: "Noise Cancelling Headphones",
    offer: "Special deal -15% off for students",
    img: "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=1000&q=80"
  }
];

