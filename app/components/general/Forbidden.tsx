import Link from "next/link";
import React from "react";

function Forbidden() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">503. Forbidden.</h1>
      You are not logged in. Please{" "}
      <Link href="/login" className="text-primary">
        login
      </Link>{" "}
      to continue.
    </div>
  );
}

export default Forbidden;
