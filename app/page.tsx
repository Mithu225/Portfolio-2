import Introduction from "@/components/Introduction";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[100px]">
      <Header />
      <Introduction />
      <About />
      <Projects />
    </main>
  );
}
