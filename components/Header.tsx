
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import StaggeredMenu from "./StaggeredMenu";
import { RESUME_DATA } from "@/data/resume";
import { motion } from "framer-motion";

export function Header() {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "#about" },
    { label: "Experience", link: "#experience" },
    { label: "Projects", link: "#projects" },
    { label: "Skills", link: "#skills" },
    { label: "Contact", link: "#contact" },
  ];

  const socialItems = [
    { label: "GitHub", link: RESUME_DATA.contacts.github },
    { label: "LinkedIn", link: RESUME_DATA.contacts.linkedin },
    { label: "Email", link: RESUME_DATA.contacts.email },
  ];

  return (
    <StaggeredMenu
      items={menuItems}
      socialItems={socialItems}
      isFixed={true}
      menuButtonColor="#fff"
      openMenuButtonColor="#fff"
      accentColor="#0070f3" // Changed generic blue to a specific accent color or use CSS var
      colors={["#171717", "#262626"]} // Dark theme colors
      logoUrl="" // Empty string to trigger text logo fallback we added
    />
  );
}
