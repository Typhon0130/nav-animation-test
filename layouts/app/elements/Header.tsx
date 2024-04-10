import React, { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import Image from "next/image";
import * as T from "@app/types";
import * as S from "./styles";

const navData = [
  {
    label: "Product",
  },
  {
    label: "Solutions",
  },
  {
    label: "Pricing",
  },
  {
    label: "Resources",
  },
  {
    label: "Company",
  },
];

export const Header: React.FC<T.AppHeaderProps> = ({ onToggleSidebar }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 0) {
        document.getElementById("app-header")?.classList.add("scrolled");
      } else {
        document.getElementById("app-header")?.classList.remove("scrolled");
      }
    };
    handleScrollEvent();
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);
  return (
    <>
      <S.HeaderWrapper id="app-header">
        <div className="logo-img">
          <Image src="/logo.png" alt="" width={162} height={44} />
        </div>
        <S.HeaderNavWrapper>
          {navData.map((item, key) => (
            <S.NavItemWrapper key={key}>
              <span>{item.label}</span>
              <IoIosArrowDown />
            </S.NavItemWrapper>
          ))}
        </S.HeaderNavWrapper>
        <S.AuthButtonWrapper>
          <span>Log In</span>
          <span className="signup">Sign Up</span>
          <S.HeaderMobileMenuWrapper onClick={() => setToggleSidebar(true)}>
            <CgMenuRight size={20} onClick={onToggleSidebar} />
          </S.HeaderMobileMenuWrapper>
        </S.AuthButtonWrapper>
      </S.HeaderWrapper>
      <S.SidebarWrapper className={toggleSidebar ? "open" : ""}>
        <S.SidebarHeader>
          <Image src="/logo.png" alt="" width={162} height={44} />
          <IoMdClose size={20} onClick={() => setToggleSidebar(false)} />
        </S.SidebarHeader>
        <S.SidebarNavWrapper className="nav-wrapper">
          {navData.map((item, key) => (
            <div key={key}>
              <span>{item.label}</span>
              <IoIosArrowDown />
            </div>
          ))}
        </S.SidebarNavWrapper>
        <S.SidebarFooter className="footer">
          <span>Log In</span>
          <span className="signup">Sign Up</span>
        </S.SidebarFooter>
      </S.SidebarWrapper>
      <S.SidebarOverLay
        className={toggleSidebar ? "open" : ""}
        onClick={() => setToggleSidebar(false)}
      />
    </>
  );
};
