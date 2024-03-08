import React from "react";

import ProjectPopupContext from "./ProjectPopupContext";

import Project from "../components/Project";
import ProjectPopup, { ProjectPopupProps } from "../components/ProjectPopup";
import placeholder from "@img/project-placeholder.png";

import "@style/Projects.scss";

function useDelayUnmount(isMounted: boolean, delayTime: number) {
    const [shouldRender, setShouldRender] = React.useState(false);
  
    React.useEffect(() => {
      let timeoutId: number;
      if (isMounted && !shouldRender) {
        setShouldRender(true);
      } else if (!isMounted && shouldRender) {
        timeoutId = setTimeout(() => setShouldRender(false), delayTime) as unknown as number;
      }
      return () => clearTimeout(timeoutId);
    }, [isMounted, delayTime, shouldRender]);
    return shouldRender;
} // thanks deckele on stackoverflow you are epic and awesome and cool


// projects
import { WordCloud } from "../data/projects/WordCloud";
import { CanvaDay1, CanvaMenu } from "../data/projects/Canva";

export default function Projects() {
    const [currentPopup, setCurrentPopup] = React.useState<ProjectPopupProps | null>(null);
    const [popupOpen, setPopupOpen] = React.useState(false);
    const shouldRenderChild = useDelayUnmount(!!popupOpen, 200);

    function closePopup() {
        setPopupOpen(false);
    }

    function openPopup(popup: ProjectPopupProps) {
        setCurrentPopup(popup);
        setPopupOpen(true);
    }

    return <main>
        {
            shouldRenderChild && currentPopup
            && <ProjectPopup {...currentPopup} closePopup={closePopup} closing={!popupOpen} />
        }
        <h1>Projects</h1>
        <div aria-label="project-list" id="project-list">
            <ProjectPopupContext.Provider value={openPopup}>
                <Project {...WordCloud} />
                <Project {...CanvaDay1} />
                <Project {...CanvaMenu} />
            </ProjectPopupContext.Provider>
        </div> 
    </main>
}
