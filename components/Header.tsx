import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="header">
      <Link href="/" className="md:flex-1">
        <Image
          src="/assets/icons/logo.svg"
          width={200}
          height={50}
          alt="logo"
          className="hidden md:block"
        />
        <Image
          src="/assets/icons/logo-icon.svg"
          width={160}
          height={36}
          alt="logo"
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
