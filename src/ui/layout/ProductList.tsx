import ProductCard from "../cards/ProductCard";
import type { ProductListProps } from "@/lib/types/types";

function ProductList({ data, filterProp, filterValue, sortProp, sortOrder, limit, random }: ProductListProps) {
  let products = Array.from(data ?? []);

  // Filter products
  if (filterProp && filterValue !== undefined) {
    products = products.filter((product) => product[filterProp] === filterValue);
  }

  // Sort products
  if (random) {
    products = products.sort(() => 0.5 - Math.random());
  } else if (sortProp && sortOrder) {
    products = products.sort((a, b) => {
      const aValue = sortProp === "price" ? a.price.new : a[sortProp];
      const bValue = sortProp === "price" ? b.price.new : b[sortProp];

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
      } else if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "desc" ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
      } else {
        return 0;
      }
    });
  }

  // Limit products
  if (limit) {
    products = products.slice(0, limit);
  }

  // Render products
  if (!products.length) {
    return (
      <div>
        <h1>No products found</h1>
      </div>
    );
  }

  return (
    <section className="w-screen ">
      <div className=" mx-auto w-[95/100] max-w-[77.5rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-10 justify-items-center ">
        {products.map((product) => (
          <div className="" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
