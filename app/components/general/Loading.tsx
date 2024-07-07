import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="min-h-[calc(100vh-72px)] bg-gray-50 overflow-hidden">
      <div className="container flex items-center justify-center min-h-[calc(100vh-72px)]">
        <Image
          src="/logo.svg"
          alt="loading"
          width={36}
          height={36}
          className="animate-spin"
        />
      </div>
    </div>
  );
}

export default Loading;
