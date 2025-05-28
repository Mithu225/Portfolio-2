import ProjectArticle from "@/components/ProjectArticle";

// This would typically come from a database or CMS
const projectData = {
  "project-one": {
    title: "Semester Project",
    description: `Auction Site A web application where users can add items to be bid on and bid on items that other users have put up for auction. This project is being developed by me.

Built With
- HTML
- Tailwind
- SCSS
- JavaScript
- Design applications: Figma
- Planning applications: GitHub Projects
- Noroff API`,
    imageUrl: "/images/Semester Project - bStorm-project1.png",
    imageCaption: "Semester Project - bStorm",
    githubUrl: "https://github.com/Mithu225/semester-project2-bstorm",
    liveUrl: "https://bstorm.thuhuynh.no/",
  },
  "project-two": {
    title: "Javascript Frameworks",
    description: `This is a e-commerce site. Zipshop is a modern, responsive e-commerce web application built using Next.js, Tailwind CSS, and other cutting-edge technologies. It offers a seamless shopping experience with a user-friendly interface, shopping cart functionality, and secure checkout.

Built With
- HTML
- Tailwind
- SCSS
- Next.js
- Design applications: Figma
- Planning applications: GitHub Projects
- Noroff API`,
    imageUrl: "/images/Javascript Frameworks-project2.png",
    imageCaption: "Javascript Frameworks - Main Interface",
    githubUrl: "https://github.com/Mithu225/zipshop-javascript-frameworks",
    liveUrl: "https://zipshop.thuhuynh.no/",
  },
  "project-three": {
    title: "Project Exam",
    description: `This is a booking site. Holidaze is a modern web application built with Next.js that helps users find and book holiday accommodations. Whether you're looking for a cozy cabin in the woods or a beachfront villa, Holidaze makes it easy to discover and book your perfect holiday stay.

Built With
- HTML
- Tailwind
- SCSS
- Next.js
- TypeScript
- Design applications: Figma
- Planning applications: GitHub Projects
- Noroff API`,
    imageUrl: "/images/Project Exam - Holidaze-project3.jpg",
    imageCaption: "Project Exam - Main Interface",
    githubUrl: "https://github.com/Mithu225/Project-Exam-2---holidaze",
    liveUrl: "https://holidaze.thuhuynh.no/",
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug as keyof typeof projectData];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectArticle
      title={project.title}
      description={project.description}
      imageUrl={project.imageUrl}
      imageCaption={project.imageCaption}
      githubUrl={project.githubUrl}
      liveUrl={project.liveUrl}
    />
  );
}
