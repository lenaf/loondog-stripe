import { Carousel } from "@/components/Carousel";
import LinkAsButton from "@/components/LinkAsButton";
import WaveDivider from "@/components/WaveDivider";
import Image from "next/image"
import siteData from "@/data/siteData";
import { Stripe } from "stripe";

import { Product } from "@/types/type";
import ProductCard from "@/components/productCard";

export default async function Home() {
  const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY ?? '');

  const { data } = await stripe.products.list({ expand: ['data.default_price'], })
  console.log(data)

  return (
    <div>

      <section id='home-hero' className="relative w-full h-80">
        <Carousel id='home-hero-carousel'>
          {siteData.homeHeroCarouselImages.map((src, i) =>
            <Image
              key={i}
              src={src}
              alt="Ceramics"
              width={500}
              className="w-full brightness-75	h-80"
            />)}
        </Carousel>
        <div className="prose absolute left-16 sm:left-24 top-1/2 -translate-y-1/2 transform">
          <h1 className="inline-block text-base-100 text-4xl sm:text-6xl backdrop-blur-sm">Loondog Ceramics</h1>
          <p className="text-base-100 text-base sm:text-xl backdrop-blur-sm">Mugs, Plates, Bowls, Objects</p>
          <LinkAsButton className="btn-primary" href="/about">Learn More</LinkAsButton>
        </div>
      </section>

      <WaveDivider className="w-full py-8 stroke-primary" />


      <section id='products' className="px-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
