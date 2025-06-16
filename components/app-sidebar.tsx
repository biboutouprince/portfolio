"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/biboutouprince", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/prince-ivan-clarck-biboutou-670064193/",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/clarckbling.branislav/",
    label: "Facebook",
  },
];

const navigationItems = [
  { icon: Home, href: "#home", title: "Acceuil" },
  { icon: User, href: "#about", title: "A Propos" },
  { icon: Code, href: "#portfolio", title: "Projets" },
  { icon: Briefcase, href: "#skills", title: "Compétences" },
  { icon: Mail, href: "#contact", title: "Contact" },
];

export function AppSidebar() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="h-24 w-24">
            <AvatarImage
              src="/profil.png?height=96&width=96"
              alt="Prince BIBOUTOU"
            />
            <AvatarFallback>PB</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h2 className="text-xl font-bold">Prince BIBOUTOU</h2>
            <p className="text-sm text-muted-foreground">Développeur Web</p>
          </div>
          <div className="flex space-x-2">
            {socialLinks.map((social, index) => (
              <Button key={index} variant="ghost" size="icon" asChild>
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-4">
        <SidebarMenu>
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                onClick={() => scrollToSection(item.href)}
                className="w-full justify-start"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
