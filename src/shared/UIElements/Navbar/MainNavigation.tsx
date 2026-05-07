import { useState } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

function MainNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div>
      <Desktop setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <Mobile
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </div>
  );
}

export default MainNavigation;
