import React, { Key, useEffect } from "react";
import { Image } from "./Project";

import "@style/ProjectPopup.scss";

export interface ProjectPopupProps {
    title: string;
    images?: Image[];
    videoId?: string;
    type: "image-gallery" | "video";
    closing?: boolean;
    closePopup?: () => void;
}

export default function ProjectPopup(props: ProjectPopupProps) {
    const content = props.type === "image-gallery" ?
        <ImageGallery images={props.images!} />:
        <Video videoId={props.videoId!} />;

    const parentClass = props.closing ? "project-popup closing" : "project-popup";

    useEffect(() => {
        function onEscape(e: KeyboardEvent) {
            if (e.key === "Escape") {
                props.closePopup?.();
            }
        }

        window.addEventListener("keydown", onEscape);
        return () => window.removeEventListener("keydown", onEscape);
    });

    return <div className={parentClass}>
        <div className="content">
            <h2>{props.title}</h2>
            <div className="project-content">
                {content}
            </div>
            <a href="#projects" onClick={props.closePopup}>Close</a>
        </div>
    </div>
}

interface ImageGalleryProps {
    images: Image[];
}

function clampOffset(offset: number) {
    return offset > 3 ? 3 : offset < -3 ? -3 : offset;
}

export function ImageGallery({ images }: ImageGalleryProps) {
    const [currentImage, setCurrentImage] = React.useState(0);
    function lastImage() {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    }

    function nextImage() {
        setCurrentImage((currentImage + 1) % images.length);
    }

    React.useEffect(() => {
        function scrub(e: KeyboardEvent) {
            if (e.key === "ArrowLeft") {
                lastImage();
            } else if (e.key === "ArrowRight") {
                nextImage();
            }
        }

        window.addEventListener("keydown", scrub);
        return () => window.removeEventListener("keydown", scrub);
    }, [currentImage]);

    return <div className="image-gallery">
        <div className="image-container">
            {
                images.map((image, i) => {
                    return <img key={i} src={image.src} alt={image.alt}
                        data-selected={i === currentImage} data-index={i} data-offset={clampOffset(i - currentImage)}
                        onClick={setCurrentImage.bind(undefined, i)}/>;
                })
            }
        </div>
        <div className="image-description">
            <p>{images[currentImage].alt}</p>
        </div>
        <div className="controls">
            <button className="cursor left" onClick={lastImage}>&lt;-</button>
            <GalleryProgress current={currentImage} total={images.length} setImage={setCurrentImage} />
            <button className="cursor right" onClick={nextImage}>-&gt;</button>
        </div>
    </div>;
}

function GalleryProgress({ current, total, setImage }: { current: number, total: number, setImage: (i: number) => void }) {
    return <div className="current-image" aria-label={`Image ${current} out of ${total}`}>
        {
            Array.from({ length: total }, (_, i) => {
                return <span key={i} data-selected={i === current} data-offset={clampOffset(i - current)} 
                            onClick={setImage.bind(undefined, i)} />;
            })
        }
    </div>;
}

interface VideoProps {
    videoId: string;
}

export function Video({ videoId }: VideoProps) {
    return <div className="video">
        <iframe src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
            height="100%"/>
    </div>;
}