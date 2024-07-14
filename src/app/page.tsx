"use client"

import { Carousel } from "@/components/Carousel";
import LinkAsButton from "@/components/LinkAsButton";
import NewsletterForm from "@/components/NewsletterForm";
import WaveDivider from "@/components/WaveDivider";
import siteData from "@/data/siteData";
import Image from "next/image"
import pride_1 from "public/images/photography/pride_1.png"
import pride_2 from "public/images/photography/pride_2.png"
import pride_3 from "public/images/photography/pride_3.png"
import events from "public/images/icons/events.png"
import { Product } from "@/types/type";
import ProductCard from "@/components/productCard";
import { data } from "@/data/products";

const heroCarouselSrcs = [pride_1, pride_2, pride_3]

export default function Home() {
  return (
    <div className="flex flex-col items-center">

      <section id='home-hero' className="relative w-full animate-fade">
        <Carousel id='home-hero-carousel'>
          {heroCarouselSrcs.map((src, i) =>
            <Image
              key={i}
              src={src}
              alt="Pride Photography"
              width={500}
              className="w-full brightness-75	"
            />)}
        </Carousel>
        <div className="prose absolute left-16 sm:left-24 top-1/2 -translate-y-1/2 transform">
          <h1 className="inline-block text-base-100 text-4xl sm:text-6xl backdrop-blur-sm">We are GLYS</h1>
          <h6 className="text-base-100 text-base sm:text-xl backdrop-blur-sm">Growing LGBTQ+ youth support</h6>
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
        <div className="card w-96 shadow-xl">
          <div className="card-body items-center text-center">
            <h1 className="card-title">{`We've got merch!`}</h1>
            <p>blah blah blah merch is cool</p>
            <div className="card-actions">
              <LinkAsButton target="_blank" className="btn-accent" href="https://www.bonfire.com/store/glys-store/">View Merch</LinkAsButton>
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
