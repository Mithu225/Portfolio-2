"use client";
import Image from "next/image";
import StarfishClipPath from "@/components/StarfishClipPath";
import { useEffect, useState } from "react";

const typingTexts = [
  "a Frontend Developer",
  "a UX-UI designer",
  "living in Norway",
];

const socialLinks = [
  {
    href: "https://drive.google.com/file/d/1UOxxcMaaJILtmrc-rQVh6Ri2gwoc_3eI/view",
    text: "My CV",
    icon: null,
  },
  {
    href: "https://github.com/Mithu225",
    text: "GitHub",
    icon: null,
  },
  {
    href: "https://www.linkedin.com/in/mithu225/",
    text: "LinkedIn",
    icon: "ri-linkedin-box-fill",
  },
];

// Common button styles
const buttonStyles =
  "px-6 py-2 border-2 border-gray-900 rounded-full font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white flex items-center gap-2";

export default function Introduction() {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout | undefined;
    const fullText = typingTexts[textIndex];

    if (!isDeleting && charIndex < fullText.length) {
      typingTimeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (isDeleting && charIndex > 0) {
      typingTimeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (!isDeleting && charIndex === fullText.length) {
      typingTimeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typingTexts.length);
    }
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section
      id="home"
      className="relative w-full bg-white flex items-center min-h-[calc(100vh-100px)] py-[50px] md:py-[40px] sm:py-[35px] justify-center"
    >
      <StarfishClipPath />

      <div className="container mx-auto flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Profile Image */}
          <div className="relative w-[320px] h-[320px] flex-shrink-0">
            <Image
              src="/images/thuhuynh1-min.png"
              alt="Thu Huynh"
              fill
              className="object-cover"
              style={{
                clipPath: "url(#starfish-shape)",
                transform: "scale(1.4)",
                transformOrigin: "center",
                borderRadius: "70%",
                margin: "0 auto",
                padding: "30px",
              }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-center justify-center md:items-start text-center md:text-left">
            <span className="text-2xl font-bold text-pink-600 mb-2">
              Hi, I am
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-4">
              Thu <span className="block md:inline">Huynh</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
              I am{" "}
              <span className="inline-block min-w-[220px] font-bold text-pink-600">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles}
                >
                  {link.text}
                  {link.icon && <i className={`${link.icon} text-xl`}></i>}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
