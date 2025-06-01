'use client';

import { useState, useTransition } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { Stripe } from "stripe";
import { Product } from "use-shopping-cart/core";
import Button from "../common/Button";

type Props = {
    product: Stripe.Product
    inventoryCount: number;
}

enum Action {
    Increment,
    Decrement
}

export default function AddToCart({ product, inventoryCount }: Props) {

    const [isPending, startTransition] = useTransition();
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useShoppingCart();
    const cartProduct: Product = {
        sku: product.id,
        name: product.name,
        price: (product.default_price as Stripe.Price).unit_amount ?? 0,
        currency: (product.default_price as Stripe.Price).currency
    }

    const handleQuantity = (action: Action) => {
        switch (action) {
            case Action.Increment:
                if (quantity >= 10) return;
                setQuantity(quantity + 1)
                break;
            case Action.Decrement:
                if (quantity <= 1) return;
                setQuantity(quantity - 1)
                break;
        }
    }

    return (
        <>
            {/* QUANTITY */}
            {(inventoryCount !== 1) && <div
                className="w-full flex flex-row justify-center border rounded-lg">
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        handleQuantity(Action.Decrement);
                    }}
                    aria-label={`Add one ${product.name} to your cart`}
                >
                    <span className="m-auto text-base">−</span>
                </Button>
                <input
                    type="number"
                    className="text-center w-full text-base hover md:text-basecursor-default flex items-center outline-none bg-transparent"
                    name="custom-input-number"
                    readOnly
                    value={quantity}
                ></input>
                <button
                    data-action="increment"
                    className="h-full w-20 cursor-pointer py-3"
                    onClick={(e) => {
                        e.preventDefault();
                        handleQuantity(Action.Increment);
                    }}
                    aria-label={`Add one ${product.name} to your cart`}
                >
                    <span className="m-auto text-base">+</span>
                </button>
            </div>}
            {/* ADD TO CART */}
            <button aria-label="Add item to cart" title="Add Item to Cart" disabled={isPending}
                className='w-full border mt-4 py-2 px-8 rounded-lg hover:bg-black hover:text-white'
                onClick={(e) => {
                    e.preventDefault();
                    addItem(cartProduct, { count: quantity })
                }}><span>Add To Cart</span></button>
        </>
    )
}