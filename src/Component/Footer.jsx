import React from "react";
import logo from "../../public/assist/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#1a0939] via-[#2a1563] to-[#3b1e8a] text-white py-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-white/10 to-transparent blur-2xl"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img className="w-10 drop-shadow-lg" src={logo} alt="Hero App" />
            <span className="text-2xl font-bold tracking-wide">
              Hero <span className="text-[#b28fff]">App</span>
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white/90 uppercase tracking-wide">
              Stay Connected
            </h3>
            <div className="flex gap-4">
              {[
                {
                  path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                },
                {
                  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                {
                  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 backdrop-blur-md bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/25 hover:scale-110 transition-all duration-300 border border-white/10"
                >
                  <svg
                    className="w-5 h-5 text-white/90"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-5 text-center">
          <p className="text-white/60 text-sm tracking-wide">
            © 2025{" "}
            <span className="text-white font-semibold ">
              Hero <span className="text-[#b28fff]">App</span>
            </span>{" "}
            — Copyright - All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
