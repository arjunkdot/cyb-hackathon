import { BannerType } from "@/types/types";
import React from "react";

function Banner({ title, subtitle }: BannerType) {
  return (
    <div className="bg-background min-h-[250px] flex items-center ">
      <div className="container">
        <h1 className="text-4xl font-bold tracking-tight mb-3">{title}</h1>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}

export default Banner;
