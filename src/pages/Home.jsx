import React from 'react'
import Hero from '../components/ui/Hero'
import { ThemeProvider } from '../contexts/ThemeContext'
import SmoothScroll from '../components/SmoothScroll'
import About from '../components/ui/About'
import Skills from '../components/ui/projects/Skills'
import Education from '../components/ui/Education'
import Projects from '../components/ui/projects/Projects'
import Contact from '../components/ui/Contact'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
      <ThemeProvider>
          <SmoothScroll>
              
              <div className="min-h-screen relative">
                  {/* Background */}
                  <div className="fixed inset-0 -z-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900" />
                      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
                      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
                      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-400/20 dark:bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
                      <div className="absolute inset-0 bg-white/30 dark:bg-black/20 backdrop-blur-3xl" />
                      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
                  </div>
                  {/* Page Content */}
                  <div className="relative z-10">
                      {/* Hero */}
                      <div className="relative">
                          <div className="absolute inset-0 bg-white/20 dark:bg-black/10 backdrop-blur-sm" />
                          <Hero />
                      </div>

                      {/* About */}
                      <div className="relative">
                          <div className="absolute inset-0 bg-white/30 dark:bg-black/15 backdrop-blur-md" />
                          <About />
                      </div>

                      {/* Skills */}
                      <div className="relative">
                          <div className="absolute inset-0 bg-white/25 dark:bg-black/12 backdrop-blur-lg" />
                          <Skills />
                      </div>

                      {/* Education */}
                      <div className="relative">
                          <div className="absolute inset-0 bg-white/35 dark:bg-black/18 backdrop-blur-xl" />
                          <Education />
                      </div>

                      {/* Projects */}
                      <div className="relative">
                          <div className="absolute inset-0 bg-white/28 dark:bg-black/14 backdrop-blur-lg" />
                          <Projects />
                      </div>

                      {/* Contact */}
                      <div className="relative">
                          <div className="absolute inset-0 bg-white/32 dark:bg-black/16 backdrop-blur-xl" />
                          <Contact />
                      </div>

                      <Toaster />
                  </div>
              
          </div> 
          </SmoothScroll>
          
    </ThemeProvider>
  )
}
