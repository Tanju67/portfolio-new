import { Outlet } from "react-router-dom";
import MainNavigation from "../shared/UIElements/Navbar/MainNavigation";
import Footer from "../shared/UIElements/footer/Footer";
import ScrollToTop from "../shared/UIElements/scroll/ScrollToTop";
import ScrollToTopButton from "../shared/UIElements/scroll/ScrollToTopButton";

function RootLayout() {
  return (
    <div>
      <main>
        <MainNavigation />
        <div className="min-h-screen">
          <Outlet />
        </div>

        <Footer />
      </main>
      <ScrollToTop />
      <ScrollToTopButton />
    </div>
  );
}

export default RootLayout;
