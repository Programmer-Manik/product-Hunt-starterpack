/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Star } from "lucide-react";
import { useState } from "react";
import Brand from "./Brand";
import Category from "./Category";
import ProductCard from "./ProductCard";
import ProductPagination from "./ProductPagination";
const Home = () => {
  const brands: string[] = ["apple", "samsung", "nokia", "redmi"];
  const categories: string[] = ["mobile", "bike", "tv", "redmi"];
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0]);
  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prevSelected) =>
      prevSelected.includes(brand)
        ? prevSelected.filter((selectedBrand) => selectedBrand !== brand)
        : [...prevSelected, brand]
    );
  };
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter(
            (selectedCategory) => selectedCategory !== category
          )
        : [...prevSelected, category]
    );
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setproducts] = useState([
    {
      _id: "65b228251eb990ba7bfcda62",
      price: 658.57,
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. ...", // (The complete product description)
      brand: "PetSmart",
      category: "clothing",
      quantity: 615,
      rating: 1.8,
      createdAt: "2024-01-25T10:11:12.037Z",
      updatedAt: "2024-01-25T10:11:12.037Z",
      imageUrl: "http://dummyimage.com/112x100.png/dddddd/000000",
      isAvailable: true,
      productName: "Pandora Charm Bracelet",
    },
  ]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    if (page > 0) {
      setCurrentPage(page);
    }
    // Implement your logic for handling page changes
    console.log(`Page changed to: ${page}`);
  };

  const mockMeta = {
    page: currentPage,
    limit: 10,
    total: 5002,
    totalPage: 501,
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (e:any) => {
    e.preventDefault();

    // Add your search logic here using the 'searchQuery' state
    console.log("Searching for:", searchQuery);
  };

  return (
    <Container>
      <div className="mt-28 flex relative">
        <div className="basis-1/4 bg-slate-100 h-[700px] w-full shadow rounded px-2">
          <h3 className="text-2xl font-bold my-3  ">Filters</h3>
          <hr className="border border-black" />
          <div className="">
            <p className="font-bold my-3">Brand</p>
            <hr className="border-b-0 border-gray-400" />
            {brands.map((brand) => (
              <Brand
                key={brand}
                brand={brand}
                onBrandChange={handleBrandChange}
              />
            ))}
            <p className="font-bold my-3">Category</p>
            <hr className="border-b-0 border-gray-400" />
            {categories.map((category) => (
              <Category
                key={category}
                category={category}
                onCategoryChange={handleCategoryChange}
              />
            ))}
            <p className="font-bold my-3">Price</p>
            <hr className="border-b-0 border-gray-400" />
            <div className="my-3">
              <p className="mb-3 font-bold">Price range {priceRange}</p>
              <Slider
                className="border rounded border-black"
                onValueChange={(value) => setPriceRange(value)}
                defaultValue={[0]}
                max={1000}
                step={1}
              />
              <p className="font-bold my-3">Rating</p>
              <hr className="border border-black" />
              <span className="flex space-x-3 mt-3">
                <Star color="gold" />
                <Star color="gold" />
                <Star color="gold" />
                <Star color="gold" />
                <Star color="gold" />
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-20">
            <Button variant="outline">Clear Filter</Button>
            <Button>Apply Filter</Button>
          </div>
        </div>
        <div className="basis-full ">
          <div>
            <form
              onSubmit={handleSearch}
              className="max-w-4xl  mx-auto my-4 relative"
            >
              <Input
                className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md"
                type="text"
                name="search"
                placeholder="Search Product"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                variant="ghost"
                type="submit"
                className="absolute top-0 right-0 "
              >
                Search
              </Button>
            </form>
          </div>
          <div className="grid grid-cols-4 gap-2 ml-2 mt-12">
            {products.map((product) => (
              <ProductCard product={product} key={product._id}></ProductCard>
            ))}
          </div>
          <ProductPagination
            onPageChange={handlePageChange}
            meta={mockMeta}
          ></ProductPagination>
        </div>
      </div>
    </Container>
  );
};

export default Home;
