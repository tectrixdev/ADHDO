import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <Link
      className="select-none no-underline"
      href="https://www.pexels.com/photo/black-car-on-road-between-trees-5095795/"
      title="Image source"
      draggable={false}
    >
      <footer className="w-full bg-black/25 backdrop-blur-lg bottom-0 p-4 text-center font-bold text-white fixed">
        <p>
          Background photo by Mo Eid.
        </p>
      </footer>
    </Link>
  );
};

export default Footer;
