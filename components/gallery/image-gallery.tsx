"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { imageGalleryData, GalleryPhoto } from "@/lib/gallery-data";
import { Plus } from "lucide-react";

// Reusable Image Card sub-component for cleanliness
type ImageCardProps = {
    image: GalleryPhoto;
    onClick: () => void;
    className?: string; // Allow passing custom grid classes
};

const ImageCard = ({ image, onClick, className }: ImageCardProps) => (
    <button
        onClick={onClick}
        className={`relative block w-full rounded-2xl overflow-hidden group shadow-lg ${className}`}
    >
        <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-white/80 text-brand-dark hover:text-green-opaque flex items-center justify-center">
                <Plus size={28} className="" />
            </div>
        </div>
    </button>
);

export function ImageGallery() {
    const [ index, setIndex ] = useState(-1);

    // Ensure we have at least 6 images for this layout, or handle gracefully
    if (imageGalleryData.length < 6) {
        return <div className="text-green-opaque text-lg">Not enough images for this layout.</div>;
    }

    return (
        <section className="bg-gray-50/70 py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <p className="font-style text-brand-green text-xl">Travel Image</p>
                    <h2 className="font-title text-4xl font-bold text-green-opaque mt-2">Image Gallery</h2>
                </div>

                {/* ====== THE CUSTOM RESPONSIVE GRID ====== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:grid-rows-3 xl:grid-cols-6 xl:grid-row-3 gap-4">
                    {/* 
            Grid Layout Explanation:
            - Mobile (default): A single column grid (all items stack).
            - Tablet (`sm:`): A two-column grid.
            - Desktop (`lg:`): A complex 5-column, 2-row grid.
          */}

                    {/* Image 1 */}
                    <div className="md:col-span-2 lg:col-span-3">
                        <ImageCard image={imageGalleryData[ 0 ]} onClick={() => setIndex(0)} className="aspect-[16/10] sm:aspect-[11/8]" />
                    </div>

                    {/* Image 2 */}
                    <div className="sm:h-auto md:col-span-2 lg:col-span-3">
                        <ImageCard image={imageGalleryData[ 1 ]} onClick={() => setIndex(1)} className="aspect-[4/5] sm:aspect-square" />
                    </div>

                    {/* Image 3 */}
                    <div className="md:col-span-2 lg:col-span-3 md:-mt-24 lg:-mt-36">
                        <ImageCard image={imageGalleryData[ 2 ]} onClick={() => setIndex(2)} className="aspect-[16/10] sm:aspect-[11/8]" />
                    </div>

                    {/* Image 4 */}
                    <div className="md:col-span-2 lg:col-span-3">
                        <ImageCard image={imageGalleryData[ 3 ]} onClick={() => setIndex(3)} className="aspect-[16/10] " />
                    </div>

                    {/* Image 5 */}
                    <div className="md:col-span-2 lg:col-span-3 md:-mt-14 lg:-mt-[290px]">
                        <ImageCard image={imageGalleryData[ 4 ]} onClick={() => setIndex(4)} className="aspect-[16/10] sm:aspect-[11/8]" />
                    </div>

                    {/* Image 6 */}
                    <div className="sm:h-auto md:col-span-2 xl:col-span-3 lg:-mt-[200px]">
                        <ImageCard image={imageGalleryData[ 5 ]} onClick={() => setIndex(5)} className="aspect-[4/5] sm:aspect-square" />
                    </div>
                </div>

                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={imageGalleryData}
                    plugins={[ Zoom ]}
                />
            </div>
        </section>
    );
}