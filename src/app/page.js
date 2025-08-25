import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import UpcomingProjects from "./components/UpcomingProjects"; // ✅ new
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Skillsbar from "./components/Skillsbar";
import Whyus from "./components/Whyus";
import Topbutton from "./components/Topbutton";
import AutoSlidingCarousel from "./components/AutoSlidingCarousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      {/* Changed container to full width */}
      <div className="w-full ">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <AutoSlidingCarousel />
        <UpcomingProjects />
        <Skillsbar />
        <Whyus />
        <Topbutton />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
