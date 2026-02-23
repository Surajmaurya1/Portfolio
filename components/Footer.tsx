
"use client";

import { RESUME_DATA } from "@/data/resume";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-surface/30">
      <div className="container mx-auto px-6 text-center">
        {/* <div className="flex justify-center gap-6 mb-8">
          <a href={RESUME_DATA.contacts.email} className="text-neutral-400 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href={RESUME_DATA.contacts.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={RESUME_DATA.contacts.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div> */}
        <p className="text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} {RESUME_DATA.name}
        </p>
      </div>
    </footer>
  );
}
