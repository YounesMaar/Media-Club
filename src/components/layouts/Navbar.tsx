import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Links } from "@/constants";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const Navbar = () => {
  return (
    <div className="container fixed top-0 backdrop-blur-sm bg-transparent shadow-sm shadow-black w-full z-[9999]">
      <div className="flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={140}
          style={{
            height: "auto",
            width: "auto",
          }}
          height={50}
          priority
        />
        <div className="md:flex hidden gap-8 items-center">
          {Links.map((link, i) => (
            <Link
              className="font-normal uppercase text-shadow-md"
              key={i}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={buttonVariants({
              variant: "default",
              size: "customized",
              className: "font-bold uppercase",
            })}
          >
            Contact
          </Link>
        </div>
        <div className="flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {Links.map((link, i) => (
                <DropdownMenuItem key={i}>
                  <Link className="font-normal uppercase px-6" href={link.href}>
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
