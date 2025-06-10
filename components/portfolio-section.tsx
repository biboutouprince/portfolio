"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "OLO'Store",
    description:
      "Plateforme de vente en ligne moderne avec panier et paiement sécurisé",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "Prisma", "Stripe"],
    category: "web",
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/prince-biboutou/ecommerce-site",
  },
  {
    title: "OLO'Task",
    description: "App pour la gestion de tâches avec filtre, drag and drop",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "Prisma", "SQLite"],
    category: "mobile",
    liveUrl: "https://play.google.com/store/apps/details?id=com.taskmanager",
    githubUrl: "https://github.com/prince-biboutou/task-manager-app",
  },
  {
    title: "Anniversaire-App",
    description:
      "plateforme d'anniversaire permettant de mettre en ligne son anniversaire",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "Prisma", "SQLite"],
    category: "web",
    liveUrl: "https://behance.net/prince-biboutou/startup-branding",
    githubUrl: null, // Pas de GitHub pour un projet de design
  },
  {
    title: "Pizza-Casa",
    description: "plateforme e-commerce regroupant toutes les pizzerias de Lbv",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "Prisma", "E-Billing"],
    category: "web",
    liveUrl: "https://entreprise-locale.netlify.app",
    githubUrl: "https://github.com/prince-biboutou/site-vitrine",
  },
  {
    title: "K-Venture",
    description: "Site Vitrine de presentation du Coach Sylvere BOUSSAMBA",
    image: "/kventure.jpeg?height=200&width=300",
    tags: ["HTML", "CSS", "JS", "TailwindCss"],
    category: "web",
    liveUrl: "https://k-venture.netlify.app/",
    githubUrl: "https://github.com/biboutouprince/k-venture",
  },
  {
    title: "OLO'Travel",
    description:
      "plateforme e-commerce regroupant toutes les agences de transport de Lbv",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "Prisma", "E-Billing"],
    category: "web",
    liveUrl: "https://photographe-portfolio.com",
    githubUrl: "https://github.com/prince-biboutou/photographer-portfolio",
  },
];

export function PortfolioSection() {
  const handleExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="portfolio" className="py-12 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
            <p className="text-lg text-muted-foreground">
              Découvrez mes projets récents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video bg-muted relative group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleExternalLink(project.liveUrl)}
                        className="bg-white/90 text-black hover:bg-white"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Voir
                      </Button>
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => handleExternalLink(project.githubUrl)}
                          className="bg-white/90 text-black hover:bg-white"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => handleExternalLink(project.liveUrl)}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Voir le projet
                    </Button>
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleExternalLink(project.githubUrl)}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                handleExternalLink("https://github.com/biboutouprince")
              }
            >
              <Github className="h-5 w-5 mr-2" />
              Voir tous mes projets sur GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
