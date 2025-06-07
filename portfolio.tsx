"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Users, FileCheck, Mail, Linkedin, Code, Brain, Menu, X, ChevronDown, ExternalLink } from "lucide-react"
import Image from "next/image"

const roles = ["Entry-Level GRC Analyst", "Security Compliance Associate", "Junior Risk Analyst"]

const navigationItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
]

export default function GRCPortfolio() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    education: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    certifications: useRef(null),
    contact: useRef(null),
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const currentRoleText = roles[currentRole]

    if (isTyping) {
      if (charIndex < currentRoleText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRoleText.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, 80)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRoleText.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, 40)
        return () => clearTimeout(timeout)
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }
    }
  }, [currentRole, charIndex, isTyping])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      const sections = navigationItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id)
          break
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const getScrollProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight
    return (scrollY / totalHeight) * 100
  }

  const getAnimationDelay = (baseDelay: number, index = 0) => {
    return baseDelay + index * 150
  }

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-x-hidden">
      {/* Saudi Arabian Landmarks Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Kingdom Centre Tower (Riyadh) */}
        <svg
          className="absolute opacity-[0.03] w-96 h-auto"
          style={{
            top: "5%",
            right: "5%",
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
          viewBox="0 0 100 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 0L40 250L30 260L30 290L70 290L70 260L60 250L50 0Z" stroke="currentColor" strokeWidth="1" />
          <path d="M30 290L70 290" stroke="currentColor" strokeWidth="2" />
          <path d="M35 260L65 260" stroke="currentColor" strokeWidth="1" />
          <path d="M40 250L60 250" stroke="currentColor" strokeWidth="1" />
          <path d="M45 200L55 200" stroke="currentColor" strokeWidth="1" />
          <path d="M45 150L55 150" stroke="currentColor" strokeWidth="1" />
          <path d="M45 100L55 100" stroke="currentColor" strokeWidth="1" />
          <path d="M45 50L55 50" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Abraj Al-Bait (Mecca Clock Tower) */}
        <svg
          className="absolute opacity-[0.03] w-80 h-auto"
          style={{
            bottom: "10%",
            left: "5%",
            transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px)`,
          }}
          viewBox="0 0 120 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="30" y="50" width="60" height="250" stroke="currentColor" strokeWidth="1" />
          <rect x="40" y="20" width="40" height="30" stroke="currentColor" strokeWidth="1" />
          <rect x="45" y="0" width="30" height="20" stroke="currentColor" strokeWidth="1" />
          <circle cx="60" cy="120" r="20" stroke="currentColor" strokeWidth="1" />
          <path d="M60 105L60 120L75 120" stroke="currentColor" strokeWidth="1" />
          <line x1="30" y1="160" x2="90" y2="160" stroke="currentColor" strokeWidth="1" />
          <line x1="30" y1="200" x2="90" y2="200" stroke="currentColor" strokeWidth="1" />
          <line x1="30" y1="240" x2="90" y2="240" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Al-Faisaliyah Center */}
        <svg
          className="absolute opacity-[0.03] w-64 h-auto"
          style={{
            top: "40%",
            left: "15%",
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
          }}
          viewBox="0 0 100 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 0L30 200L20 220L20 250L80 250L80 220L70 200L50 0Z" stroke="currentColor" strokeWidth="1" />
          <path d="M35 100L65 100" stroke="currentColor" strokeWidth="1" />
          <path d="M30 150L70 150" stroke="currentColor" strokeWidth="1" />
          <path d="M25 200L75 200" stroke="currentColor" strokeWidth="1" />
          <path d="M20 250L80 250" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Riyadh Skyline */}
        <svg
          className="absolute opacity-[0.03] w-full h-32"
          style={{
            bottom: "0",
            left: "0",
            transform: `translate(${mousePosition.x * 0.003}px, ${mousePosition.y * 0.003}px)`,
          }}
          viewBox="0 0 1000 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 L50,100 L50,70 L70,70 L70,40 L90,40 L90,60 L110,60 L110,30 L130,30 L130,50 L150,50 L150,80 L170,80 L170,60 L190,60 L190,40 L210,40 L210,70 L230,70 L230,50 L250,50 L250,30 L270,30 L270,60 L290,60 L290,80 L310,80 L310,50 L330,50 L330,70 L350,70 L350,40 L370,40 L370,60 L390,60 L390,20 L410,20 L410,50 L430,50 L430,70 L450,70 L450,40 L470,40 L470,60 L490,60 L490,80 L510,80 L510,60 L530,60 L530,30 L550,30 L550,50 L570,50 L570,70 L590,70 L590,40 L610,40 L610,60 L630,60 L630,80 L650,80 L650,50 L670,50 L670,30 L690,30 L690,60 L710,60 L710,40 L730,40 L730,70 L750,70 L750,50 L770,50 L770,80 L790,80 L790,60 L810,60 L810,40 L830,40 L830,70 L850,70 L850,50 L870,50 L870,30 L890,30 L890,60 L910,60 L910,80 L930,80 L930,50 L950,50 L950,70 L970,70 L970,40 L990,40 L990,60 L1000,60 L1000,100 Z"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>

        {/* Minimal Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(71, 85, 105, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(71, 85, 105, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.05}px)`,
          }}
        />
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${getScrollProgress()}%` }}
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`fixed top-6 right-6 z-50 p-3 rounded-full bg-white/95 backdrop-blur-sm text-slate-700 md:hidden shadow-lg border border-slate-200/50 transition-all duration-300 hover:scale-110 hover:shadow-xl ${
          mobileMenuOpen ? "rotate-90" : ""
        }`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm" />
        <div className="relative h-full flex items-center justify-center">
          <nav className="w-full max-w-sm p-8">
            <ul className="space-y-8">
              {navigationItems.map((item, index) => (
                <li
                  key={item.id}
                  className="text-center transform transition-all duration-500"
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 100}ms` : "0ms",
                    transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                    opacity: mobileMenuOpen ? 1 : 0,
                  }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-xl font-medium transition-all duration-300 py-3 px-6 rounded-full w-full relative overflow-hidden group ${
                      activeSection === item.id ? "bg-indigo-600 text-white shadow-lg" : "text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Enhanced Right Side Navigation */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 hidden md:block">
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-300/50 rounded-full">
            <div
              className="w-full bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full transition-all duration-500 ease-out"
              style={{ height: `${getScrollProgress()}%` }}
            />
          </div>

          <nav className="relative py-6">
            <ul className="space-y-8">
              {navigationItems.map((item, index) => {
                const isActive = activeSection === item.id
                return (
                  <li key={item.id} className="relative flex items-center justify-center">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="group relative flex items-center transition-all duration-300 hover:scale-110"
                    >
                      {/* Dot */}
                      <div
                        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 relative z-10 ${
                          isActive
                            ? "bg-indigo-600 border-indigo-600 scale-125 shadow-lg shadow-indigo-500/50"
                            : "bg-white border-slate-300 group-hover:border-indigo-400 group-hover:bg-indigo-50"
                        }`}
                      >
                        {isActive && (
                          <div className="absolute inset-0 rounded-full bg-indigo-600 animate-ping opacity-75" />
                        )}
                      </div>

                      {/* Label */}
                      <span
                        className={`absolute right-full mr-6 whitespace-nowrap text-sm font-medium px-3 py-2 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
                          isActive
                            ? "bg-indigo-600 text-white border-indigo-600 opacity-100 translate-x-0 shadow-lg"
                            : "bg-white/95 text-slate-600 border-slate-200/50 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                        }`}
                      >
                        {item.label}
                        <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-l-current border-t-transparent border-b-transparent" />
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center px-4 relative"
          ref={sectionRefs.hero}
        >
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div
              className={`transition-all duration-1000 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-indigo-700 bg-clip-text text-transparent mb-6 animate-gradient">
                Hi There,
              </h1>
              <h2
                className={`text-4xl md:text-6xl font-bold text-slate-600 mb-8 transition-all duration-1000 ease-out ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                I'm{" "}
                <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                  Abdulmohsen Alnowayhi
                </span>
              </h2>
              <div
                className={`h-20 flex items-center justify-center mb-8 transition-all duration-1000 ease-out ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <span className="text-2xl md:text-4xl font-medium">
                  I am a{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                    {displayText}
                  </span>
                  <span className="animate-pulse text-indigo-600">|</span>
                </span>
              </div>
              <p
                className={`text-xl text-slate-600 max-w-3xl mx-auto mb-12 transition-all duration-1000 ease-out ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "900ms" }}
              >
                Passionate about building secure, compliant, and resilient organizations through effective governance,
                risk management, and compliance practices.
              </p>
              <div
                className={`transition-all duration-1000 ease-out ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "1200ms" }}
              >
                <button
                  onClick={() => scrollToSection("about")}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25"
                >
                  Explore My Journey
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 px-4 relative" ref={sectionRefs.about}>
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent transition-all duration-700 ease-out ${
                scrollY > 400 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              About Me
            </h2>
            <Card
              className={`shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 ease-out hover:scale-[1.02] ${
                scrollY > 500 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-slate-700 first-letter:text-5xl first-letter:font-bold first-letter:text-indigo-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                    I am passionate about establishing strong security foundations and ensuring organizational
                    compliance. My focus lies in understanding and implementing governance frameworks that protect
                    businesses while enabling growth and innovation.
                  </p>
                  <p className="text-slate-600">
                    With a keen analytical mindset and meticulous attention to detail, I am eager to learn and apply
                    knowledge in real-world scenarios, contributing to the development of robust risk management
                    strategies and compliance programs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="py-20 px-4 bg-gradient-to-br from-indigo-50/30 to-blue-50/30 relative"
          ref={sectionRefs.education}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent transition-all duration-700 ease-out ${
                scrollY > 900 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Education
            </h2>
            <Card
              className={`shadow-xl border-0 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 ease-out hover:scale-[1.02] ${
                scrollY > 1000 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <CardContent className="p-8 md:p-12">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                    BSc Computer Science with Cybersecurity
                  </h3>
                  <p className="text-xl text-indigo-600 font-semibold mb-2">University of Liverpool</p>
                  <p className="text-slate-500 text-lg">September 2025</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-indigo-600" />
                    Final Year Project: Cyber Resilience Training Platform
                  </h4>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    A comprehensive platform designed to enhance organizational cyber resilience through integrated
                    training and assessment modules, directly connecting to core GRC principles.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Shield,
                      title: "Risk Management",
                      items: [
                        "Phishing attack simulations",
                        "Human-factor security risks",
                        "Risk mitigation strategies",
                      ],
                    },
                    {
                      icon: Users,
                      title: "Governance",
                      items: [
                        "Performance tracking systems",
                        "Security awareness training",
                        "Organizational oversight",
                      ],
                    },
                    {
                      icon: FileCheck,
                      title: "Compliance",
                      items: [
                        "Security awareness alignment",
                        "Framework-compliant resources",
                        "Regulatory standard adherence",
                      ],
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className={`bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-500 hover:scale-[1.02] ${
                        scrollY > 1100 + index * 100 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${getAnimationDelay(400, index)}ms` }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-slate-50 rounded-xl">
                          <item.icon className="w-6 h-6 text-slate-700" />
                        </div>
                        <h5 className="text-xl font-bold text-slate-800">{item.title}</h5>
                      </div>
                      <ul className="space-y-3">
                        {item.items.map((listItem, i) => (
                          <li key={i} className="text-slate-600 leading-relaxed">
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 relative" ref={sectionRefs.skills}>
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent transition-all duration-700 ease-out ${
                scrollY > 1500 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Skills & Expertise
            </h2>

            <div className="space-y-8">
              {/* Technical Skills */}
              <Card
                className={`shadow-xl border-0 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 ease-out hover:scale-[1.02] ${
                  scrollY > 1600 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <Code className="w-6 h-6 text-indigo-600" />
                    </div>
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Cyber Security",
                      "Risk Management",
                      "Compliance Monitoring",
                      "Security Policy Documentation",
                      "Microsoft Office",
                      "Reporting & Documentation",
                      "Project Management",
                      "Quality Management",
                    ].map((skill, index) => (
                      <Badge
                        key={skill}
                        className={`bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 hover:from-indigo-200 hover:to-indigo-300 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default ${
                          scrollY > 1700 + index * 50 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                        style={{ transitionDelay: `${getAnimationDelay(300, index)}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Soft Skills */}
              <Card
                className={`shadow-xl border-0 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 ease-out hover:scale-[1.02] ${
                  scrollY > 1800 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="p-2 bg-slate-100 rounded-lg">
                      <Brain className="w-6 h-6 text-slate-600" />
                    </div>
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Creative Thinking",
                      "Leadership Skills",
                      "Communication Skills",
                      "Client Relationship Management",
                      "Team Management",
                      "Ability to Work Under Pressure",
                      "Strategic Thinking",
                      "Task Distribution",
                      "Estimation",
                    ].map((skill, index) => (
                      <Badge
                        key={skill}
                        className={`bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 hover:from-slate-200 hover:to-slate-300 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default ${
                          scrollY > 1900 + index * 50 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                        style={{ transitionDelay: `${getAnimationDelay(500, index)}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="py-20 px-4 bg-gradient-to-br from-slate-50/30 to-indigo-50/30 relative"
          ref={sectionRefs.experience}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent transition-all duration-700 ease-out ${
                scrollY > 2300 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Professional Experience
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "IT Specialist and Administration",
                  company: "3points Crowd Management SA, Riyadh",
                  period: "July 2023 – September 2023",
                  achievements: [
                    "Coordinated and led attendance monitoring operations at the world's largest real estate exhibition, ensuring smooth entry and data accuracy for over 1000 staff.",
                    "Designed and deployed a WhatsApp automation system to contact over 9000 individuals for interview scheduling, demonstrating strong communication and digital outreach skills.",
                    "Maintained accurate attendance records and collaborated with payroll and HR teams to align compensation with verified participation.",
                    "Supported on-site staff with technical issues, ensuring efficient operational continuity during a high-pressure event.",
                  ],
                },
                {
                  title: "Visitor Registration Coordinator",
                  company: "Shine – Event Staffing SA, Jeddah",
                  period: "August 2022 - September 2022",
                  achievements: [
                    "Served as the first point of contact for attendees, offering clear and courteous guidance and skills directly applicable to supporting students during university enrolment.",
                    "Collected and processed visitor data quickly and accurately under time constraints, mirroring the responsiveness needed for student transition periods.",
                    "Worked closely with event management and security teams to resolve entry issues and ensure smooth flow at access points.",
                    "Maintained confidentiality when handling visitor's personal information.",
                  ],
                },
              ].map((job, index) => (
                <Card
                  key={job.title}
                  className={`shadow-xl border-0 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 ease-out hover:scale-[1.02] ${
                    scrollY > 2400 + index * 200 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${getAnimationDelay(200, index)}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">{job.title}</h3>
                        <p className="text-lg text-indigo-600 font-semibold">{job.company}</p>
                      </div>
                      <span className="text-slate-500 font-medium mt-2 md:mt-0">{job.period}</span>
                    </div>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-600 flex items-start gap-3 leading-relaxed">
                          <span className="w-2 h-2 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 px-4 relative" ref={sectionRefs.certifications}>
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent transition-all duration-700 ease-out ${
                scrollY > 2900 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Professional Certifications
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "CompTIA Security+",
                  issueDate: "May 31, 2025",
                  expirationDate: "May 31, 2028",
                  image: "/comptia-security-plus.png",
                  link: "https://www.certmetrics.com/comptia/public/verification.aspx/",
                  description: "Industry-standard certification validating foundational cybersecurity skills",
                },
                {
                  title: "Google Project Management",
                  issueDate: "May 25, 2025",
                  expirationDate: null,
                  image: "/google-project-management.png",
                  link: "https://www.coursera.org/account/accomplishments/specialization/certificate/NHNAFSKNH1AP",
                  description: "Comprehensive project management specialization covering modern methodologies",
                },
              ].map((cert, index) => (
                <Card
                  key={cert.title}
                  className={`shadow-xl border-0 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 ease-out hover:scale-[1.02] overflow-hidden group cursor-pointer ${
                    scrollY > 3000 + index * 200 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${getAnimationDelay(200, index)}ms` }}
                  onClick={() => window.open(cert.link, "_blank")}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={`${cert.title} Certificate`}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <ExternalLink className="w-4 h-4 text-slate-600" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm">{cert.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-slate-600">
                        <span className="font-semibold w-28">Issue Date:</span>
                        <span>{cert.issueDate}</span>
                      </div>
                      {cert.expirationDate && (
                        <div className="flex items-center text-slate-600">
                          <span className="font-semibold w-28">Expiration:</span>
                          <span>{cert.expirationDate}</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-4 text-sm text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to verify certificate →
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 px-4 bg-gradient-to-br from-indigo-50/30 to-blue-50/30 relative"
          ref={sectionRefs.contact}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent transition-all duration-700 ease-out ${
                scrollY > 3500 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Let's Connect
            </h2>
            <p
              className={`text-xl text-slate-600 mb-12 transition-all duration-700 ease-out ${
                scrollY > 3500 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Ready to discuss opportunities in GRC and cybersecurity
            </p>

            <Card
              className={`shadow-xl border-0 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 ease-out hover:scale-[1.02] ${
                scrollY > 3600 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <Button
                    asChild
                    className="w-full md:w-auto bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25 group"
                  >
                    <a href="mailto:abdulmohsenalnowayhi@gmail.com" className="flex items-center gap-3">
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      Email Me
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full md:w-auto border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  >
                    <a
                      href="https://www.linkedin.com/in/abdulmohsen-alnowayhi-b01b21255/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      LinkedIn Profile
                    </a>
                  </Button>
                </div>

                <div
                  className={`mt-8 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl transition-all duration-700 ease-out ${
                    scrollY > 3700 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <p className="text-slate-600 leading-relaxed">
                    I'm actively seeking entry-level opportunities in GRC, compliance, and cybersecurity. Feel free to
                    reach out to discuss how my skills and passion can contribute to your organization.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(0.5deg); }
          66% { transform: translateY(4px) rotate(-0.5deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}
