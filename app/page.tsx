import Image from "next/image";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import About from "../components/About";
import Project from "../components/Project";
import PorjectDetail from "../components/ProjectDetail";
import Skill from "../components/Skill";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container justify-center mx-auto px-4">
        <Introduction />
        <About />
      </main>
    </div>
  );
}
