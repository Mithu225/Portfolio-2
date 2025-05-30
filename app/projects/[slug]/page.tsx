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
- Noroff API

Self-assessment
This project helped me deepen my understanding of JavaScript and front-end development. I demonstrated strong use of HTML, JavaScript, and Tailwind CSS to build a responsive interface. I successfully met all technical requirements. For future improvements, I aim to enhance form handling, introduce reusable utilities, and adopt more scalable state management patterns.`,
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
- Noroff API

Self-assessment
This project deepened my understanding of Next.js and TypeScript. I successfully built a responsive, professional web app with server-side rendering and strong type safety. I applied best practices in routing, API handling, and component design. While the core features were implemented effectively, I recognized the need to improve form validation, global error handling, and add loading states for better user experience. In future projects, I plan to explore state management tools and automated testing.`,
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
- Noroff API

Self-assessment
This is the last school project, I improved my front-end skills using JavaScript, TypeScript, Next.js, and Tailwind CSS. I built responsive and professional web apps, mastering core concepts like server-side rendering, type safety, routing, and API handling.

I met all technical requirements but saw room for improvement in form validation, error handling, and state management. In future projects, I plan to focus on reusable code, better UX with loading states, and automated testing.`,
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
