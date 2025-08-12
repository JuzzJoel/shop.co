import BrandsAside from "./directories/brands/Brands";
import Hero from "./directories/brands/hero/Hero";
import BrowseStyle from "./directories/components/BrowseByStyle";
import NewArrivals from "./directories/components/NewArrivals";
import ReviewGallery from "./directories/components/ReviewGallery";
import TopSelling from "./directories/components/TopSelling";

function HomePage() {
  return (
    <>
      <Hero />
      <BrandsAside />
      <NewArrivals />
      <TopSelling />
      <BrowseStyle />
      <ReviewGallery />
    </>
  );
}

export default HomePage;
