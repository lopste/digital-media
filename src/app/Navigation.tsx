import React from "react";

import "@style/Navigation.scss";

interface HeaderProps {
    setSection: React.Dispatch<React.SetStateAction<string>>;
}

export default function Navigation(props: HeaderProps) {
    const sections = [
        "home",
        "about",
        "projects"
    ];

    return <aside>
        <h1>digital media portfolio</h1>
        <nav>
            <ul>
                {
                    sections.map((section) => {
                        const capitalized = section.charAt(0).toUpperCase() + section.slice(1);
                        return  <li key={section} onClick={props.setSection.bind(undefined, section)}>
                                    <a href={`#${section}`}>{capitalized}</a>
                                </li>;
                    })
                }
            </ul>
        </nav>
        <div className="socials"></div>
    </aside>;
}