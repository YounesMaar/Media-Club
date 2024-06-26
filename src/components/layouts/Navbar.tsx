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
import { FC } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps extends Partial<HTMLDivElement> {}
const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "nav-bar container fixed top-0 backdrop-blur-sm bg-transparent shadow-sm shadow-black w-full z-[9999]",
        className
      )}
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="https://i.ibb.co/pbV66f4/logo.png"
            alt="logo"
            width={140}
            style={{
              height: "auto",
              width: "auto",
            }}
            height={50}
            priority
          />
        </Link>
        <div className="md:flex hidden gap-8 items-center">
          {Links.map((link, i) => (
            <Link
              className="text-white ont-normal uppercase text-shadow-md"
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
