import React from "react";

import Navigation from "./Navigation";
import Body from "./Body";

import "@style/App.scss";

export default function App() {
    const pageSection = window.location.hash.slice(1);

    const [section, setSection] = React.useState(pageSection || "home");

    return <>
        <Navigation setSection={setSection} />
        <Body section={section}/>
    </>;
}