"use client"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"

export default function Portfolio() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <PortfolioSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
      </div>
    </SidebarProvider>
  )
}
