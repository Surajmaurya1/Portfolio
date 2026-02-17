
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { StaggeredMenu } from "./StaggeredMenu";
import { motion } from "framer-motion";

export function Header() {
  const menuItems = [
    { label: "Home", link: "/", ariaLabel: "Home" },
    { label: "About", link: "#about", ariaLabel: "About" },
    { label: "Experience", link: "#experience", ariaLabel: "Experience" },
    { label: "Projects", link: "#projects", ariaLabel: "Projects" },
    { label: "Contact", link: "#contact", ariaLabel: "Contact" },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com/surajm" },
    { label: "LinkedIn", link: "https://linkedin.com/in/surajm" },
    { label: "Email", link: "mailto:suraj@example.com" },
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
        colors={["#0070f3", "#e6e6e6ff"]} 
        logoUrl="" 
        changeMenuColorOnOpen={true}
      />
    </div>
  );
}
