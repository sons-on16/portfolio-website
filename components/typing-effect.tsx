"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
}

export function TypingEffect({ texts, typingSpeed = 100, deletingSpeed = 50, delayBetween = 2000 }: TypingEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]

    if (isTyping) {
      if (charIndex < currentFullText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, delayBetween)
        return () => clearTimeout(timeout)
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, deletingSpeed)
        return () => clearTimeout(timeout)
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        setIsTyping(true)
      }
    }
  }, [currentTextIndex, charIndex, isTyping, texts, typingSpeed, deletingSpeed, delayBetween])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
