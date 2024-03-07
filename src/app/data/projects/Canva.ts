import { ProjectProps } from "@/app/components/Project";

import act1 from "@img/canva/day1/act1.png";
import act2 from "@img/canva/day1/act2.png";
import act3 from "@img/canva/day1/act3.png";
import act4 from "@img/canva/day1/act4.png";
import act5 from "@img/canva/day1/act5.png";
import act6 from "@img/canva/day1/act6.png";
import act7 from "@img/canva/day1/act7.png";
import act8 from "@img/canva/day1/act8.png";

export const CanvaDay1: ProjectProps = {
    name: "Canva Day 1",
    thumb: { src: act1, alt: "Actvity 1: Categorizing Logos" },
    images: [
        { src: act1, alt: "Activity 1: Categorizing Logos" },
        { src: act2, alt: "Activity 2: Logo Templates" },
        { src: act3, alt: "Activity 3: Making it Simple" },
        { src: act4, alt: "Activity 4: Designing Wordmarks" },
        { src: act5, alt: "Activity 5: Designing Pictograms" },
        { src: act6, alt: "Activity 6: Designing Monograms" },
        { src: act7, alt: "Activity 7: Locking It Up" },
        { src: act8, alt: "Activity 8: Mocking It Up" }
    ],
    type: "image-gallery"
};


