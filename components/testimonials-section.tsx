"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Stephane MBA NDONG",
    role: "Developpeur Frontend",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Prince a su démontrer ses compétences créatives exceptionnelles dans la réalisation de projets audiovisuels.",
  },
  {
    name: "Dhenne TSANGA",
    role: "Developpeur Fullstack",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Prince maîtrise parfaitement l'art du design graphique et sait transmettre efficacement les messages visuels.",
  },
  {
    name: "Naomie MAROUNDOU",
    role: "Integrateur Web",
    image: "/demoiselle.jpeg?height=60&width=60",
    content:
      "Prince a une approche méthodique et rigoureuse du développement, avec une excellente maîtrise technique.",
  },
  {
    name: "Olsen MBOUMBA",
    role: "Community Manager",
    image: "/brel.jpeg?height=60&width=60",
    content:
      "Prince excelle dans la gestion de communautés et comprend parfaitement les enjeux du marketing digital.",
  },
  {
    name: "Elysée MBENGUE",
    role: "Referent Digital",
    image: "/dame.jpeg?height=60&width=60",
    content:
      "Prince a l'esprit entrepreneurial nécessaire et sait mobiliser les ressources pour mener à bien ses projets.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 3) % testimonials.length);
  };

  const prevTestimonials = () => {
    setCurrentIndex(
      (prev) => (prev - 3 + testimonials.length) % testimonials.length
    );
  };

  const getCurrentTestimonials = () => {
    const current = [];
    for (let i = 0; i < 3; i++) {
      current.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return current;
  };

  const currentTestimonials = getCurrentTestimonials();

  return (
    <section id="testimonials" className="py-12 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Collaborateurs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {currentTestimonials.map((testimonial, index) => (
              <Card
                key={`${testimonial.name}-${currentIndex}-${index}`}
                className="h-full"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />

                  <blockquote className="text-sm leading-relaxed mb-6 flex-grow">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center space-x-3 mt-auto">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                      />
                      <AvatarFallback className="text-xs">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonials}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * 3)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      Math.floor(currentIndex / 3) === index
                        ? "bg-primary"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                )
              )}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonials}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
