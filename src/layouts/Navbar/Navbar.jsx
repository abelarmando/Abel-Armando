import React, { useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  const navContainerRef = useRef(null);
  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-4 md:top-8 z-15 border-none translate-all duration-700 sm:inset-x-[170px] bg-black rounded-2xl top-2"
    >
      <header className="">
        <nav className="flex size-full items-center justify-between p-4">
          <div>
            <h1 className="text-5xl">Aa</h1>
          </div>
          <div className="flex gap-4">
            <FaGithub
              className="text-5xl"
              onClick={() =>
                window.open("https://github.com/abelarmando", "_blank")
              }
            />
            <FaLinkedin
              className="text-5xl"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/abel-armando/",
                  "_blank"
                )
              }
            />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
