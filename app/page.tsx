import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactSection from "@/components/ContactSection"
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
    title: 'Emiliano González',
    description: 'Emiliano González personal portfolio',
    icons: {
      icon: '/code.png',
    },
  }

export default function Home() {
  return (
   <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
    <Analytics />
   </main>
  )
}
