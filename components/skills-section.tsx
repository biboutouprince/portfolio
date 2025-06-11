"use client";

import { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  { name: "ExpressJS&NodeJS", level: 60, color: "bg-orange-500" },
  { name: "Next.js15+", level: 50, color: "bg-blue-500" },
  { name: "API rest, JWT, bcryptjs", level: 45, color: "bg-yellow-500" },
  { name: "Git", level: 70, color: "bg-purple-500" },
  { name: "Laravel", level: 65, color: "bg-cyan-500" },
  { name: "ADOBE(Illustrator, Photoshop)", level: 65, color: "bg-blue-600" },
];

export function SkillsSection() {
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    new Array(skills.length).fill(0)
  );
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateSkills();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateSkills = () => {
    skills.forEach((skill, index) => {
      let currentValue = 0;
      const increment = skill.level / 100; // Divise l'animation en 100 étapes
      const duration = 2000; // 2 secondes
      const stepTime = duration / 100;

      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= skill.level) {
          currentValue = skill.level;
          clearInterval(timer);
        }

        setAnimatedValues((prev) => {
          const newValues = [...prev];
          newValues[index] = Math.round(currentValue);
          return newValues;
        });
      }, stepTime);
    });
  };

  const resetAnimation = () => {
    setAnimatedValues(new Array(skills.length).fill(0));
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
      animateSkills();
    }, 100);
  };

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Mes compétences techniques acquises au fil des projets
            </p>
            <button
              onClick={resetAnimation}
              className="text-sm text-primary hover:underline"
            >
              Relancer l'animation
            </button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Technologies & Outils</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-lg">{skill.name}</span>
                      <span className="text-lg font-semibold text-primary">
                        {animatedValues[index]}%
                      </span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-muted rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full transition-all duration-100 ease-out"
                          style={{ width: `${animatedValues[index]}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-3 h-3 rounded-full bg-primary/60" />
                      <span>{getSkillDescription(skill.name)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function getSkillDescription(skillName: string): string {
  const descriptions: { [key: string]: string } = {
    HTML: "Structure et sémantique web",
    CSS: "Styles et animations",
    JavaScript: "Interactivité et logique",
    Laravel: "Développement fullstack php",
    Git: "versionning",
    Photoshop: "Retouche et création graphique",
  };
  return descriptions[skillName] || "Compétence technique";
}
