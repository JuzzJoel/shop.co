"use client";
import { useState } from "react";
import PhotoGallery from "@/ui/layout/PhotoGallery";
import random_data from "@/data/randomized_products.json";

function NewArrivals() {
  const [limit, setLimit] = useState(4);
  const [buttonText, setButtonText] = useState("View All");

  const handleViewAll = () => {
    if (limit === 4) {
      setLimit(random_data.products.length);
      setButtonText("View Less");
    } else {
      setLimit(4);
      setButtonText("View All");
    }
  };

  return (
    <div>
      <PhotoGallery
        idGallery="new-arrivals"
        titleGallery="new arrivals"
        data={random_data.products}
        buttonText={buttonText}
        sortProp="arrivalDate"
        limit={limit}
        filterProp={undefined} // or some other valid property of Product
        filterValue={undefined}
        viewAll={handleViewAll}
        border="border-b border-black/10"
      />
    </div>
  );
}

export default NewArrivals;
