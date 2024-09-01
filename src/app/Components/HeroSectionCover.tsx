import Image from "next/image";

export function HeroSectionCover() {
  const src =
    "https://cdn.prod.website-files.com/62e3fc9fe0b5d9617e0c85e0/632dee28f1208cf96c013909_Entrance%20%202023International_%20%20Corporate%20Office.png";

  return (
    <>
      <Image
        alt="Truck background"
        loader={() => src}
        src={src}
        className="absolute inset-0 object-cover w-full h-full bg-repeat bg-no-repeat"
        width={1413}
        height={768}
        style={{
          aspectRatio: "1413/768",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black opacity-95 to-transparent"></div>
    </>
  );
}
