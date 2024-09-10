interface IProduct {
  name: string;
  category: string;
  unitPrice: number;
  imgs: {
    desktop: string;
    tablet: string;
    mobile: string;
    thumbnail: string;
  };
}
