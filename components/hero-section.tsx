"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const roles = ["Développeur Web", "Webmaster"];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentWord.length) {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToAbout = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20"
    >
      <div className="container px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Prince Ivan-Clarck BIBOUTOU
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground min-h-[2em]">
            Je suis{" "}
            <span className="text-primary font-semibold">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Je suis Développeur Web spécialisé en Backend JavaScript
            (Express.js, Node.js). Passionné par le développement web, je crée
            des solutions applicative modernes et intuitives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToAbout}>
              Découvrir mon travail
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Me contacter</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
