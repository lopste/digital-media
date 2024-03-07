import { createContext } from "react";
import { ProjectPopupProps } from "../components/ProjectPopup";

const ProjectPopupContext = createContext<(popup: ProjectPopupProps) => void>(() => {
    return undefined;
});

export default ProjectPopupContext;