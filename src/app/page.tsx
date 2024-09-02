"use client"

import { Carousel } from "@/components/Carousel";
import LinkAsButton from "@/components/LinkAsButton";
import NewsletterForm from "@/components/NewsletterForm";
import WaveDivider from "@/components/WaveDivider";
import siteData from "@/data/siteData";
import Image from "next/image"
import clay_1 from "public/images/photography/clay_1.jpeg"
import clay_2 from "public/images/photography/clay_2.jpeg"

import { Product } from "@/types/type";
import ProductCard from "@/components/productCard";
import { data } from "@/data/products";

const heroCarouselSrcs = [clay_1, clay_2]

export default function Home() {
  return (
    <div>

      <section id='home-hero' className="relative w-full h-80">
        <Carousel id='home-hero-carousel'>
          {heroCarouselSrcs.map((src, i) =>
            <Image
              key={i}
              src={src}
              alt="Pride Photography"
              width={500}
              className="w-full brightness-75	h-80"
            />)}
        </Carousel>
        <div className="prose absolute left-16 sm:left-24 top-1/2 -translate-y-1/2 transform">
          <h1 className="inline-block text-base-100 text-4xl sm:text-6xl backdrop-blur-sm">Loondog Ceramics</h1>
          <h6 className="text-base-100 text-base sm:text-xl backdrop-blur-sm">Mugs, Plates, Bowls, Objects</h6>
        </div>
      </section>

      <section className="w-full p-12">
        {siteData.homeHeroText.map((text, i) =>
          <p className="mb-4 mx-auto prose" key={i}>{text}</p>
        )
        }
        <LinkAsButton className="btn-secondary" href="/about">Learn More</LinkAsButton>
      </section>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <WaveDivider className="w-full py-8 stroke-primary" />

      <section className="w-full p-12 flex gap-4 flex-wrap">
        <div className="card w-96 shadow-xl">
          <div className="card-body items-center text-center">
            <h1 className="card-title">{`We've got events!`}</h1>
            <p>blah blah blah events are cool</p>
            <div className="card-actions">
              <LinkAsButton className="btn-accent" href="/events">View Events</LinkAsButton>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider className="w-full py-8 stroke-accent" />

      <section className="w-full p-12 ">
        <div className="grid sm:grid-cols-2 gap-12">
          <div className="prose max-w-sm">
            <h1>Subscribe to our newsletter</h1>
            <p>Stay in the know. Our newsletter comes out x times a month and reports on blah blah blah</p>
          </div>
          <NewsletterForm className="max-w-sm" />
        </div>
      </section>




    </div>
  );
}
