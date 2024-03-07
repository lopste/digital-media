import { ProjectProps } from "@app/components/Project";

import aboutme from "@img/wordcloud/aboutme.png";
import cart from "@img/wordcloud/c.png";
import digitalmedia from "@img/wordcloud/digitalmedia.png";

export const WordCloud: ProjectProps = {
    name: "Word Cloud",
    thumb: { src: cart, alt: "Word Cloud of C-Styled Programming Languages" },
    images: [
        { src: aboutme, alt: "Word Cloud of the things I like" },
        { src: cart, alt: "Word Cloud of C-Styled Programming Languages" },
        { src: digitalmedia, alt: "What I think digital media is about" }
    ],
    type: "image-gallery"
};
