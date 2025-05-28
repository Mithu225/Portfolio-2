import ProjectArticle from "@/components/ProjectArticle";

// This would typically come from a database or CMS
const projectData = {
  "project-one": {
    title: "Project One",
    description: `This is a detailed description of Project One. It can span multiple paragraphs.

The project was developed using modern web technologies and follows best practices in software development.

Key features include:
- Feature 1
- Feature 2
- Feature 3`,
    imageUrl: "/images/Semester Project - bStorm-project1.png",
    imageCaption: "Project One - Main Interface",
  },
  "project-two": {
    title: "Project Two",
    description: `This is a detailed description of Project Two. It can span multiple paragraphs.

The project was developed using modern web technologies and follows best practices in software development.

Key features include:
- Feature 1
- Feature 2
- Feature 3`,
    imageUrl: "/images/project2.jpg",
    imageCaption: "Project Two - Mobile App Screenshot",
  },
  "project-three": {
    title: "Project Three",
    description: `This is a detailed description of Project Three. It can span multiple paragraphs.

The project was developed using modern web technologies and follows best practices in software development.

Key features include:
- Feature 1
- Feature 2
- Feature 3`,
    imageUrl: "/images/project3.jpg",
    imageCaption: "Project Three - UI/UX Design",
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
    />
  );
}
