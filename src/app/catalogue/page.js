"use client";

import { useMemo, useState } from "react";
import CategoryTabs from "@/components/catalogues/CategoryTabs";
import CollectionBanner from "@/components/catalogues/CollectionBanner";
import ProductGrid from "@/components/catalogues/ProductGrid";
import Hero from "@/components/catalogues/Hero";
import IndoorOutdoorToggle from "@/components/catalogues/IndoorOutdoor";
import products from "@/data/products";
import Pagination from "@/components/catalogues/Pagination";

export default function CataloguePage() {
    const [environment, setEnvironment] = useState("Indoor");
    const [activeCategory, setActiveCategory] = useState("All Products");
    const [page, setPage] = useState(1);

    const productsPerPage = 9;

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            // Show all products when "All Products" is selected
            if (activeCategory === "All Products") {
                return true;
            }

            // Otherwise filter by category + environment
            return (
                product.category === activeCategory &&
                product.environment === environment
            );
        });
    }, [activeCategory, environment]);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const currentProducts = useMemo(() => {
        const start = (page - 1) * productsPerPage;
        return filteredProducts.slice(start, start + productsPerPage);
    }, [filteredProducts, page]);

    return (
        <>
            <Hero category={activeCategory} />

            <CollectionBanner activeCategory={activeCategory}>
                <CategoryTabs
                    activeCategory={activeCategory}
                    setActiveCategory={(category) => {
                        setActiveCategory(category);
                        setPage(1);
                    }}
                />

                <div className="mx-auto max-w-[70%] py-16">
                    <div className="flex items-center justify-between">
                        <h2 className="text-5xl font-light">Our Collection</h2>

                        <IndoorOutdoorToggle
                            value={environment}
                            onChange={(value) => {
                                setEnvironment(value);
                                setPage(1);
                            }}
                        />
                    </div>

                    <ProductGrid products={currentProducts} />

                    {totalPages > 1 && (
                        <div className="mt-16">
                            <Pagination
                                currentPage={page}
                                totalPages={totalPages}
                                onPageChange={setPage}
                            />
                        </div>
                    )}
                </div>
            </CollectionBanner>
        </>
    );
}