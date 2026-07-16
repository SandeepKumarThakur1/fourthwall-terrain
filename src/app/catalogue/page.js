"use client";

import { useMemo, useState } from "react";
import CategoryTabs from "@/components/catalogues/CategoryTabs";
import CollectionBanner from "@/components/catalogues/CollectionBanner";
import ProductGrid from "@/components/catalogues/ProductGrid";
import Hero from "@/components/catalogues/Hero";
import IndoorOutdoorToggle from "@/components/catalogues/IndoorOutdoor";
import Pagination from "@/components/catalogues/Pagination";
import products from "@/data/products.js";

export default function CataloguePage() {
    const [environment, setEnvironment] = useState("Indoor");
    const [activeCategory, setActiveCategory] = useState("All Products");
    const [page, setPage] = useState(1);
    const productsPerPage = 9;

    // const filteredProducts = useMemo(() => {
    //     return products.filter((product) => {
    //         const categoryMatch =
    //             activeCategory === "All Products" ||
    //             product.category === activeCategory;

    //         const environmentMatch =
    //             product.environment === environment;

    //         return categoryMatch && environmentMatch;
    //     });
    // }, [activeCategory, environment]);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const categoryMatch =
                activeCategory === "All Products" ||
                product.category === activeCategory;

            const environmentMatch =
                product.environment === environment;

            return categoryMatch && environmentMatch;
        });
    }, [activeCategory, environment]);

    const totalPages = Math.ceil(
        filteredProducts.length / productsPerPage
    );

    const currentProducts = filteredProducts.slice(
        (page - 1) * productsPerPage,
        page * productsPerPage
    );

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
                        <h2 className="text-5xl font-light">
                            Our collection
                        </h2>

                        {/* <IndoorOutdoorToggle
                            value={environment}
                            onChange={setEnvironment}
                        /> */}
                        <IndoorOutdoorToggle
                            value={environment}
                            onChange={(value) => {
                                setEnvironment(value);
                                setPage(1);
                            }}
                        />
                    </div>

                    <ProductGrid products={currentProducts} />

                    <div className="mt-16">
                        <Pagination
                            currentPage={page}
                            totalPages={totalPages}
                            onPageChange={setPage}
                        />
                    </div>
                </div>

            </CollectionBanner>
        </>
    );
}