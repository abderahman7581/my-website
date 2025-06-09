import Image from "../components/Image";
import "./AppHead.css";
import MainLogo from "../assets/profile.jpg";
import GithubLogo from "../assets/github-logo-light.png";
import DiscordLogo from "../assets/discord-logo.png";
import YoutubeLogo from "../assets/youtube.png";

import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useResponsive } from "../hooks";
import { Responsive } from "../Root";
import { Else, If, Then } from "react-if";

/**
 * @typedef {{ displayName: string, href: string, discription: string }} PageInfo
 */

/** @type {PageInfo[]} */
const pages = [
    {
        displayName: "مهارات",
        href: "skills/",
    },
    {
        displayName: "أعمالي",
        href: "works/",
    },
    {
        displayName: "من أنا؟",
        href: "about/",
    },
];

export function _NavLink({ name, href }) {
    return (
        <li className="nav-link">
            <NavLink
                to={href}
                className={({ isActive }) =>
                    isActive ? "nav-link-item active" : "nav-link-item"
                }
            >
                {name}
            </NavLink>
        </li>
    );
}

function LinkThing({ logo, href }) {
    return (
        <li className="nav-social">
            <a href={href}>
                <img src={logo} />
            </a>
        </li>
    );
}

export default function AppHead({ active }) {
    const currentBreakPoint = useResponsive(Responsive);
    /** @type {React.MutableRefObject<HTMLDivElement>} */
    const drawerRef = useRef();
    const [tabOpen, setTabOpen] = useState(false);

    document.addEventListener("click", (ev) => {
        if (currentBreakPoint === "sm") {
            /** @type {HTMLElement} */
            const target = ev.target;
            if (target.tagName === "NAV") {
                if (tabOpen) setTabOpen(!tabOpen);
            }
        }
    });

    const routes = (
        <ul className={"routes" + " " + currentBreakPoint}>
            {pages.map(({ displayName, href }, key) => (
                <_NavLink
                    name={displayName}
                    href={href}
                    key={key}
                />
            ))}
        </ul>
    );

    const links = (
        <ul className="links">
            <LinkThing href="https://x.com/abderahman7581?t=Zu1LM6lgVT7fgjLe36WDBA&s=09" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1245px-Logo_of_Twitter.svg.png"></LinkThing>
            <LinkThing href="https://www.facebook.com/share/1CgXKzroRz/" logo="https://img.icons8.com/m_rounded/512/facebook-new.png"></LinkThing>
            <LinkThing logo={DiscordLogo} href="https://discord.gg/RHS7ygGx5j" />
            <LinkThing logo={YoutubeLogo} href="https://www.youtube.com/@abderahman7581"/>
            <LinkThing href="https://www.instagram.com/abderahman7581/" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"></LinkThing>
            <LinkThing href="" logo="" ></LinkThing>
        </ul>
    );

    const logo = (
        <Link to="/" style={{ height: "100%" }}>
            <Image className="nav-logo" src={MainLogo} />
        </Link>
    );

    const toggleNavOpen = (_ev) => {
        setTabOpen(!tabOpen);
    }

    return (
        <header className={active ? "active" : ""}>
            <nav>
                <If condition={currentBreakPoint === "sm"}>
                    <Then>
                        <button onClick={toggleNavOpen} className="nav-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className={"nav-drawer" + " " + (tabOpen ? "active" : "")} ref={drawerRef}>
                            <div className="head">{logo}</div>
                            <div className="links--">
                                {routes}
                            </div>
                        </div>
                    </Then>
                    <Else>
                        {logo}
                        {routes}
                    </Else>
                </If>
                {links}
            </nav>
        </header>
    );
}
