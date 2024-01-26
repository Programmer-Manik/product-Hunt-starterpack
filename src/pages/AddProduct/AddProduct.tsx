import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const AddProduct = () => {
  const [isAvailable, setIsAvailable] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const product = {
      productName: e.target.productName.value,
      price: e.target.price.value,
      description: e.target.description.value,
      brand: e.target.brand.value,
      category: e.target.category.value,
      quantity: e.target.quantity.value,
      rating: e.target.rating.value,
      imageUrl: e.target.imageUrl.value,
      isAvailable: isAvailable,
    };
    console.log(product);
  };
  return (
    <div>
      <Card className="w-[400px] mx-auto mt-28 ">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent className="pb-0">
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label>product Name</Label>
                <Input
                  required
                  name="productName"
                  placeholder="Name of your product"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>description</Label>
                <Input required name="description" placeholder="description" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>price</Label>
                <Input required name="price" placeholder="price" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>brand</Label>
                <Input required name="brand" placeholder="brand" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>category</Label>
                <Input required name="category" placeholder="category" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>quantity</Label>
                <Input
                  required
                  name="quantity"
                  type="number"
                  placeholder="quantity"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>rating</Label>
                <Input
                  required
                  type="number"
                  name="rating"
                  placeholder="rating"
                />
              </div>
              <div className="space-x-1.5 flex ">
                <Label>Available</Label>
                <Checkbox
                  defaultChecked={isAvailable}
                  onCheckedChange={() => setIsAvailable(!isAvailable)}
                  name="isAvailable"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>imageUrl</Label>
                <Input
                  required
                  type="url"
                  name="imageUrl"
                  placeholder="image Url"
                />
              </div>
            </div>
            <CardFooter className="flex justify-end mt-12">
              <Button type="submit">add Product</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProduct;
