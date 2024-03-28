import { Links } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="container py-10 bg-black text-white text-xs panel">
      <div className="grid grid-cols-3 ">
        <div className="flex flex-col justify-between gap-5">
          <Image src="/logo.png" alt="logo" priority width={100} height={100} />
          <h1 className="w-2/3">
            l'agence conseil en communication orientee business centric
          </h1>
          <div className="flex flex-col gap-y-1">
            {Links.map((item, i) => (
              <Link className="uppercase" href={item.href} key={i}>
                {item.label}
              </Link>
            ))}
          </div>
          copyright&#64;2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
