import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

const pages: { [key: string]: React.ComponentType<any> } = {
    home: Home,
    about: About,
    projects: Projects
}

interface BodyProps {
    section: string;
}

export default function Body(props: BodyProps) {
    let Page = pages[props.section];
    if(!Page) Page = pages["home"];
    return <Page />;
}