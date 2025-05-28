"use client";
import Image from "next/image";
import StarfishClipPath from "@/components/StarfishClipPath";
import { useEffect, useState } from "react";

const typingTexts = [
  "a Frontend Developer",
  "a UX-UI designer",
  "living in Norway",
];

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
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white relative w-full"
    >
      <StarfishClipPath />

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto gap-12 md:gap-20 px-4 py-12">
        <div className="w-[320px] h-[320px] relative overflow-hidden flex-shrink-0 flex items-center justify-center">
          <Image
            src="/images/thuhuynh1.png"
            alt="Thu Huynh"
            fill
            className="object-cover w-full h-full"
            style={{
              clipPath: "url(#starfish-shape)",
              transform: "scale(1.2)",
              transformOrigin: "center",
            }}
          />
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-pink-600 text-2xl font-bold mb-2">
            Hi, I am
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-4">
            Thu <span className="block md:inline">Huynh</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
            I am{" "}
            <span className="text-pink-600 font-bold min-w-[220px] inline-block">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://drive.google.com/file/d/1UOxxcMaaJILtmrc-rQVh6Ri2gwoc_3eI/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition"
            >
              My CV
            </a>
            <a
              href="https://www.linkedin.com/in/mithu225/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition flex items-center gap-2"
            >
              Hire Me <span className="text-lg">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
