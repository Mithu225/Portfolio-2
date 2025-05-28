"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

interface ProjectArticleProps {
  title: string;
  description: string;
  imageUrl: string;
  imageCaption: string;
  githubUrl: string;
  liveUrl: string;
}

export default function ProjectArticle({
  title,
  description,
  imageUrl,
  imageCaption,
  githubUrl,
  liveUrl,
}: ProjectArticleProps) {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-[#495461] hover:text-[#f41a4a] transition-all duration-300 bg-gray-50 rounded-lg hover:bg-gray-100"
          aria-label="Go back"
        >
          <i className="ri-arrow-left-line text-xl"></i>
          <span className="font-medium">← Back</span>
        </Link>
      </div>

      {/* Title Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#111a24] mb-6 font-montserrat">
          {title}
        </h1>

        {/* Action Buttons Section */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          {/* Primary Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#111a24] text-white rounded-lg hover:bg-[#f41a4a] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <i className="ri-github-fill text-xl"></i>
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#111a24] text-white rounded-lg hover:bg-[#f41a4a] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <i className="ri-external-link-line text-xl"></i>
              <span className="font-medium">Live Page</span>
            </a>
          </div>

          {/* Secondary Action Buttons */}
          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-4 py-2 text-[#495461] hover:text-[#f41a4a] transition-all duration-300 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <i className="ri-link text-lg"></i>
              <span className="font-medium">
                {copySuccess ? "Link Copied!" : "Copy Link"}
              </span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-[#495461] hover:text-[#f41a4a] transition-all duration-300 bg-gray-50 rounded-lg hover:bg-gray-100">
              <i className="ri-share-line text-lg"></i>
              <span className="font-medium">Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Project Image with Caption */}
      <div className="mb-8">
        <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src={imageUrl}
            alt={title}
            width={1200}
            height={1200}
            className="object-cover"
            priority
          />
        </div>
        <p className="text-sm text-[#495461] mt-3 italic font-medium">
          {imageCaption}
        </p>
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
