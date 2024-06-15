"use client";

import Image from "next/image";
import React from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/_ui/carousel";

export function ProjectShowcase({ slides }: { slides: String[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: Math.floor(Math.random() * (10000 - 8000 + 1)) + 8000 })
  );

  return (
    <Carousel plugins={[plugin.current]}>
      <CarouselContent>
        {slides.map((item, index) => (
          <CarouselItem key={index}>
            <Image
              src={item}
              alt="demo"
              width="1280"
              height="720"
              className="w-full lg:w-11/12 h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
