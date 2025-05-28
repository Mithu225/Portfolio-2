"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectArticleProps {
  title: string;
  description: string;
  imageUrl: string;
  imageCaption: string;
}

export default function ProjectArticle({
  title,
  description,
  imageUrl,
  imageCaption,
}: ProjectArticleProps) {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Title Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#111a24] mb-4 font-montserrat">
          {title}
        </h1>

        {/* Share/Copy Link Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 text-[#495461] hover:text-[#f41a4a] transition-colors"
          >
            <i className="ri-link"></i>
            <span>{copySuccess ? "Link Copied!" : "Copy Link"}</span>
          </button>
          <button className="flex items-center gap-2 text-[#495461] hover:text-[#f41a4a] transition-colors">
            <i className="ri-share-line"></i>
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Project Image with Caption */}
      <div className="mb-8">
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-sm text-[#495461] mt-2 italic">{imageCaption}</p>
      </div>

      {/* Project Description */}
      <div className="prose max-w-none">
        <div className="text-[#495461] leading-relaxed">
          {description.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
