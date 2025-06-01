import Image from 'next/image'
import AddToCart from "@/components/cart/add-to-cart";
import { Stripe } from 'stripe';

type Props = {
    product: Stripe.Product
}

export default function ProductCard({ product }: Props) {
    const inventoryCount = Number(product.metadata.inventoryCount);
    const isPreOrder = inventoryCount < 1;
    return (
        <a key={product.id} href={`/products/${product.id}`} className="group ">
            <div className="aspect-square w-full">
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            {isPreOrder ? 'Pre-order' : 'In Stock'}
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
                {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(((product.default_price as Stripe.Price).unit_amount ?? 0) / 100)}
            </p>
        </a>
    )
}