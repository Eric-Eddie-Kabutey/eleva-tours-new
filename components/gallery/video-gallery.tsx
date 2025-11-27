"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

import { videoGalleryData, GalleryVideo } from "@/lib/gallery-data";

// Reusable Video Card sub-component for cleanliness
type VideoCardProps = {
    video: GalleryVideo;
    onClick: () => void;
    className?: string; // Allow passing custom grid classes
};

const VideoCard = ({ video, onClick, className }: VideoCardProps) => (
    <button
        onClick={onClick}
        className={`relative rounded-2xl overflow-hidden group shadow-lg ${className}`}
    >
        <Image
            src={video.thumbnail}
            alt={video.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-white/80 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Play className="h-8 w-8 text-brand-dark fill-brand-dark" />
            </div>
        </div>
    </button>
);


export function VideoGallery() {
    const [ index, setIndex ] = useState(-1);

    // Ensure we have at least 4 videos for this layout
    if (videoGalleryData.length < 4) {
        return <div>Not enough videos for this layout.</div>;
    }

    return (
        <section className="bg-gray-50/70 py-16">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-12">
                    <p className="font-style text-brand-green text-xl">Travel Video</p>
                    <h2 className="font-title text-4xl font-bold text-brand-dark mt-2">Video Gallery</h2>
                </div>

                {/* ====== THE CUSTOM RESPONSIVE GRID ====== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-[250px]">
                    {/* 
            Grid Layout Explanation:
            - A 2-column grid on tablet and up.
            - `auto-rows-[250px]` sets a default height for each grid row.
            - We use `row-span-2` on some items to make them taller.
          */}

                    {/* Video 1 */}
                    <div className="sm:row-span-2">
                        <VideoCard video={videoGalleryData[ 0 ]} onClick={() => setIndex(0)} className="h-full w-full" />
                    </div>

                    {/* Video 2 */}
                    <div className="sm:row-span-1">
                        <VideoCard video={videoGalleryData[ 1 ]} onClick={() => setIndex(1)} className="h-full w-full" />
                    </div>

                    {/* Video 3 */}
                    <div className="sm:row-span-1">
                        <VideoCard video={videoGalleryData[ 2 ]} onClick={() => setIndex(2)} className="h-full w-full" />
                    </div>

                    {/* Video 4 */}
                    <div className="sm:row-span-2">
                        <VideoCard video={videoGalleryData[ 3 ]} onClick={() => setIndex(3)} className="h-full w-full" />
                    </div>
                </div>

                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    // The lightbox needs the full video data, not just thumbnails
                    slides={videoGalleryData.map(v => ({
                        type: 'video',
                        sources: v.sources,
                        poster: v.thumbnail,
                    }))}
                    plugins={[ Video ]}
                />
            </div>
        </section>
    );
}