"use client";

import { useMemo, useState } from "react";

import Hero from "@/components/catalogue/Hero";
import CategoryTabs from "@/components/catalogue/CategoryTabs";
import FilterToggle from "@/components/catalogue/FilterToggle";
import ProductGrid from "@/components/catalogue/ProductGrid";

import products from "@/lib/products";

export default function CataloguePage() {
    const [activeCategory, setActiveCategory] =
        useState("All Products");

    const [activeType, setActiveType] =
        useState("All");

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const categoryMatch =
                activeCategory === "All Products" ||
                product.category === activeCategory;

            const typeMatch =
                activeType === "All" ||
                product.type === activeType;

            return categoryMatch && typeMatch;
        });
    }, [activeCategory, activeType]);

    return (
        <main className="min-h-screen bg-[#071B08]">
            <Hero />

            <CategoryTabs
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            <FilterToggle
                activeType={activeType}
                setActiveType={setActiveType}
            />

            <ProductGrid products={filteredProducts} />

            {/* Temporary Debug */}
            <div className="mx-auto max-w-7xl px-6 pb-20 text-white">
                <p className="text-lg">
                    Showing{" "}
                    <span className="text-[#C9A46B] font-semibold">
                        {filteredProducts.length}
                    </span>{" "}
                    products
                </p>
            </div>
        </main>
    );
}