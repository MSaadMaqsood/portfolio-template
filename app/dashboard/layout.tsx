import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />

      {children}
    </div>
  );
};

export default layout;
