import React, { PropsWithChildren } from "react";

const HeroOrbit = ({ children, size }: PropsWithChildren<{ size: number }>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className=""
        style={{
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div className=" inline-flex ">{children}</div>
      </div>
    </div>
  );
};

export default HeroOrbit;
