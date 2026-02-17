
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { StaggeredMenu } from "./StaggeredMenu";
import { motion } from "framer-motion";


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", link: "/", ariaLabel: "Home" },
    { label: "About", link: "#about", ariaLabel: "About" },
    { label: "Experience", link: "#experience", ariaLabel: "Experience" },
    { label: "Projects", link: "#projects", ariaLabel: "Projects" },
    { label: "Contact", link: "#contact", ariaLabel: "Contact" },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com/Surajmaurya1" },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/suraj-maurya-33a91325a" },
    { label: "Email", link: "mailto:surajmaurya.pvt@gmail.com" },
  ];

  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50 pointer-events-none")}>
      <StaggeredMenu
        items={menuItems}
        socialItems={socialItems}
        isFixed={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        accentColor="#0070f3" 
        colors={["#cecece", "#f0f0f0"]} 
        logoUrl="" 
        changeMenuColorOnOpen={true}
        onMenuOpen={() => setIsMenuOpen(true)}
        onMenuClose={() => setIsMenuOpen(false)}
      />
      

    </div>
  );
}
