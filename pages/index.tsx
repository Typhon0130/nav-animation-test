import React from "react";
import { NextPage } from "next";
import * as L from "@app/layouts";

const HomePage: NextPage = () => {
  return (
    <L.AppLayout name="home">
      <div className="h-[2000px] border">Content</div>
    </L.AppLayout>
  );
};

export default HomePage;
