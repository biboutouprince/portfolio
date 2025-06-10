import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-12">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
            <p className="text-lg text-muted-foreground">N'hésitez pas à me contacter pour discuter de vos projets</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Adresse</h3>
                      <p className="text-muted-foreground">Owendo, GABON</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">clarckbiboutou@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Téléphone</h3>
                      <p className="text-muted-foreground">+241 77339590</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Envoyez-moi un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Votre nom" />
                    <Input type="email" placeholder="Votre email" />
                  </div>
                  <Input placeholder="Sujet" />
                  <Textarea placeholder="Votre message" rows={5} />
                  <Button type="submit" className="w-full">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
