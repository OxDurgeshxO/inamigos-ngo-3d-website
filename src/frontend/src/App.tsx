import Layout from "@/components/Layout";
import GetInvolved from "@/pages/GetInvolved";
import HeroSection from "@/pages/HeroSection";
import ProjectsSection from "@/pages/ProjectsSection";
import SuccessStory from "@/pages/SuccessStory";
import TrustBar from "@/pages/TrustBar";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <TrustBar />
      <ProjectsSection />
      <GetInvolved />
      <SuccessStory />
    </Layout>
  );
}
