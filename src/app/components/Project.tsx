import React from "react";
import ProjectPopupContext from "../pages/ProjectPopupContext";

import { ProjectPopupProps } from "./ProjectPopup";

export interface Image {
    src: string;
    alt: string;
}

export interface ProjectProps {
    name: string;
    thumb: Image;
    images?: Image[];
    url?: string;
    type: "image-gallery" | "video";
}

export default function Project(props: ProjectProps) {
    const openPopup = React.useContext(ProjectPopupContext);
    function showPopup() {
        openPopup({
            title: props.name,
            images: props.images,
            videoId: props.url,
            type: props.type
        } as ProjectPopupProps);
    }

    return <div className="project">
        <h2>{props.name}</h2>
        <img src={props.thumb.src} alt={props.thumb.alt} />
        <a href="#projects" onClick={showPopup}>View Project</a>
    </div>
}   