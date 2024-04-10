import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as T from "@app/types";

export const AppLogo: React.FC<T.AppLogoProps> = ({
  width = 48,
  height = 48,
}) => {
  return (
    <Link href={"/"}>
      <Image
        src={"/logo.png"}
        width={width}
        height={height}
        alt="logo"
        priority
      />
    </Link>
  );
};
