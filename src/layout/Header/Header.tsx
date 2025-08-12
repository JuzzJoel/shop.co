import DesktopHeader from "./components/DesktopHeader/DesktopHeader";
import MobileHeader from "./components/MobileHeader/MobileHeader";

function Header() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full md:hidden">
        <MobileHeader />
      </div>
      <div className="hidden w-auto h-auto md:block">
        <DesktopHeader />
      </div>
    </>
  );
}

export default Header;
