import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, GraduationCap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-12 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              À Propos de Moi
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dans le monde du Developpement Web depuis 2020, j'ai beaucoup
              appris au sein de cet environnement Technique.
            </p>
          </div>

          {/* Informations personnelles et formation */}
          <div className="lg:col-span-4 space-y-6">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">Présentation</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Développeur web spécialisé en JavaScript (React, Node.js), je
                  conçois des applications modernes, performantes et évolutives,
                  en mettant l’accent sur l’expérience utilisateur et la qualité
                  du code.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Je développe des solutions full-stack robustes, de l’interface
                  utilisateur (React, Next.js) jusqu’au serveur et à la base de
                  données (Node.js, Express, PostgreSQL).
                </p>
              </CardContent>
            </Card>

            {/* Informations personnelles */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    Informations Personnelles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-muted">
                    <span className="font-medium">Né le:</span>
                    <span className="text-muted-foreground">14 Mai 1996</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-muted">
                    <span className="font-medium">Né à:</span>
                    <span className="text-muted-foreground">Libreville</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-muted">
                    <span className="font-medium">Résidence:</span>
                    <span className="text-muted-foreground">Owendo, GABON</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Niveau:</span>
                    <span className="text-muted-foreground">BTS</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Mail className="h-5 w-5 mr-2 text-primary" />
                    Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-muted">
                    <span className="font-medium">Email:</span>
                    <span className="text-muted-foreground text-sm">
                      clarckbiboutou@gmail.com
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-muted">
                    <span className="font-medium">Téléphone:</span>
                    <span className="text-muted-foreground">+241 77339590</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Disponibilité:</span>
                    <Badge
                      variant="outline"
                      className="text-green-600 border-green-600"
                    >
                      Disponible
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  Parcours Académique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h5 className="font-semibold">
                      Certificat de formation Développement Web
                    </h5>
                    <p className="text-sm text-muted-foreground">Ecole 241</p>
                    <p className="text-sm text-primary font-medium">
                      2024 - 2025 • Libreville, GABON
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h5 className="font-semibold">
                      BTS Développement Web & Webmastering
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Institut National de la poste des technologies de
                      l'information et de la communication (INPTIC)
                    </p>
                    <p className="text-sm text-primary font-medium">
                      2021 - 2022 • Libreville, GABON
                    </p>
                  </div>
                  <div className="border-l-2 border-muted pl-4">
                    <h5 className="font-semibold">
                      Baccalauréat Technologique - Option Comptabilité Gestion
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lycée Technique National Omar BONGO (LTNOB)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      2017 - 2018 • Owendo, GABON
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
