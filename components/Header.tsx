"use client";

import { useCallback } from "react";

export default function Header() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <header className="transition-all duration-[0.3s] ease-in-out py-[30px] fixed top-[0] right-[0] left-[0] z-[20] bix-static">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <nav className="navbar navbar-expand-lg bix-navbar transition-all duration-[0.3s] ease-in-out p-[15px] bg-[#f8f6fc] border-[1px] border-solid border-[#111a24] rounded-[30px] relative z-[3] flex items-center justify-between max-[992px]:flex-nowrap">
              <div className="navbar-brand text-[20px] font-bold text-[#1b1c20] transition-all duration-[0.3s] ease-in-out">
                porfolio.thuhuynh.no
              </div>

              <button
                className="navbar-toggler min-[992px]:hidden w-[40px] h-[40px] flex items-center justify-center rounded-[50%] text-[#111a24] border-[1px] border-solid border-[#111a24] text-[1.25rem] bg-transparent"
                type="button"
                title="navbar-toggler"
              >
                <i className="ri-menu-2-line"></i>
              </button>
              <div
                className="bix-main-menu flex relative justify-end max-[991px]:hidden"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav bix-menu m-[0] pl-[0] flex flex-wrap min-[992px]:flex-row">
                  <li className="nav-item transition-all duration-[0.3s] ease-in-out ml-[30px]">
                    <button
                      onClick={() => scrollToSection("home")}
                      className="nav-link transition-all duration-[0.3s] ease-in-out font-montserrat tracking-[0.03rem] p-[0] text-[15px] font-medium leading-[40px] capitalize text-[#1b1c20] flex items-center relative hover:text-[#f41a4a] bg-transparent border-none cursor-pointer"
                    >
                      Home
                    </button>
                  </li>

                  <li className="nav-item transition-all duration-[0.3s] ease-in-out ml-[30px]">
                    <button
                      onClick={() => scrollToSection("about")}
                      className="nav-link transition-all duration-[0.3s] ease-in-out font-montserrat tracking-[0.03rem] p-[0] text-[15px] font-medium leading-[40px] capitalize text-[#1b1c20] flex items-center relative hover:text-[#f41a4a] bg-transparent border-none cursor-pointer"
                    >
                      About
                    </button>
                  </li>

                  <li className="nav-item transition-all duration-[0.3s] ease-in-out ml-[30px]">
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="nav-link transition-all duration-[0.3s] ease-in-out font-montserrat tracking-[0.03rem] p-[0] text-[15px] font-medium leading-[40px] capitalize text-[#1b1c20] flex items-center relative hover:text-[#f41a4a] bg-transparent border-none cursor-pointer"
                    >
                      Projects
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
