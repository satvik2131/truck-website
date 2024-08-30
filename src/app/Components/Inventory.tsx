"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

// Define an array of card objects
const cards: CardProps[] = [
  {
    imageSrc: "https://picsum.photos/200",
    title: "Card Title 1",
    description: "This is the description for the first card in the carousel.",
  },
  {
    imageSrc: "https://picsum.photos/200",
    title: "Card Title 2",
    description: "This is the description for the second card in the carousel.",
  },
  {
    imageSrc: "https://picsum.photos/200",
    title: "Card Title 3",
    description: "This is the description for the third card in the carousel.",
  },
  {
    imageSrc: "https://picsum.photos/200",
    title: "Card Title 4",
    description: "This is the description for the fourth card in the carousel.",
  },
  {
    imageSrc: "https://picsum.photos/200",
    title: "Card Title 4",
    description: "This is the description for the fourth card in the carousel.",
  },
  {
    imageSrc: "https://picsum.photos/200",
    title: "Card Title 4",
    description: "This is the description for the fourth card in the carousel.",
  },
  {
    imageSrc: "https://picsum.photos/200",
    title: "Card Title 4",
    description: "This is the description for the fourth card in the carousel.",
  },
];

export default function InventoryCarousel() {
  return (
    <div
      id="inventory"
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage: `url('https://cdn.prod.website-files.com/62e3fc9fe0b5d9617e0c85e0/62e442b5ab3726110360b34a_Safety%20Staff%20With%20LV%20(CF%20Driver).JPG.jpg')`,
      }}
    >
      {/* Green Overlay */}
      <div className="absolute inset-0 bg-green-950 opacity-90"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="block pt-8 px-5 text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
          Check Inventory
        </h1>

        <div className="flex justify-center py-12">
          <Carousel opts={{ loop: true }} className="w-screen max-w-full">
            <CarouselContent>
              {cards.map((card, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <Card className="h-full">
                    <Image
                      loader={() => card.imageSrc}
                      src={card.imageSrc}
                      alt={card.title}
                      width={300}
                      height={200}
                      className="object-cover w-full h-48 rounded-t-md"
                    />
                    <CardContent className="p-4 space-y-2">
                      <h3 className="text-lg font-semibold">{card.title}</h3>
                      <p className="text-muted-foreground">
                        {card.description}
                      </p>
                      <Button
                        variant="default"
                        className="px-4 py-3 sm:px-6 sm:py-4 text-base sm:text-lg font-semibold transition-colors"
                      >
                        View
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
