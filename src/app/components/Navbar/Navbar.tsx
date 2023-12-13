"use client";

import { useState } from "react";
import "./Navbar.css";
import portfolioLogo from "../../../assets/images/AMA.png";
import downloadLogo from "../../../assets/images/solar_download-line-duotone.png";

export function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  return (
    <nav className="flex items-center justify-between navbar">
      <a href="/">
        <img src={portfolioLogo?.src} alt="gray-star" className="" />
      </a>
      <section className="flex items-center justify-between ">
        <ul className="links flex items-center gap-[18px]">
          <li>
            <a href="#projects" onClick={() => setActiveLink("projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setActiveLink("about")}>
              About Me
            </a>
          </li>
          <li>
            <a href="#resources" onClick={() => setActiveLink("resources")}>
              Resources
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActiveLink("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </section>

      <section className="flex items-center justify-between gap-[18px]">
        <a className="">
          <span className="resume flex items-center gap-[10px]">Resume
          <img src={downloadLogo?.src} alt="gray-star" className="" />
          </span>
        </a>
        <button className="talk-to-me-btn">Talk To Me</button>
      </section>
    </nav>
  );
}
