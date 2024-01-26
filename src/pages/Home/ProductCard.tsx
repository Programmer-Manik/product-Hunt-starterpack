import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type IProduct = {
  product: {
    _id: string;
    price: number;
    description: string;
    brand: string;
    category: string;
    quantity: number;
    rating: number;
    createdAt: string;
    updatedAt: string;
    imageUrl: string;
    isAvailable: boolean;
    productName: string;
  };
};
const ProductCard = ({ product }: IProduct) => {
  
  return (
    <Card>
      <CardHeader className="p-0 ">
        <img src={product.imageUrl} className="w-full rounded-t" alt="" />
      </CardHeader>
      <CardContent className="p-2 space-y-1">
        <CardTitle className="text-xl">{product.productName}</CardTitle>
        <CardDescription>
          {product.description.slice(0, 50)} ...
        </CardDescription>

        <p>Brand:{product.brand}</p>
        <p>category:{product.category}</p>

        <p>quantity: {product.quantity}</p>
        <p>rating: {product.rating}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
