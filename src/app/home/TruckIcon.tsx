import React from "react";
import Image from "next/image";

type IconProps = {
  className?: string;
};

export const TruckIcon: React.FC<IconProps> = ({ className }) => {
  const src = "/logo.png";
  const alt = "truckicon";

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={120}
        height={120}
        priority
        className="w-20 h-20 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
      />
    </div>
  );
};
