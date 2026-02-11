
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
}

export interface NavItem {
  label: string;
  href: string;
}
