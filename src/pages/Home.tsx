import { Hero } from '../components/home/Hero';
import { SkillsTools } from '../components/home/SkillsTools';
import { AboutCareer } from '../components/home/AboutCareer';
import { UXToolsLab } from '../components/home/UXToolsLab';
import { SelectedWork } from '../components/home/SelectedWork';
import { LearningSharing } from '../components/home/LearningSharing';
import { ThinkingBuilding } from '../components/home/ThinkingBuilding';
import { RecognitionCTA } from '../components/home/RecognitionCTA';
import { ScrollToTopWidget } from '../components/ui/ScrollToTopWidget';

export default function Home({ splashFinished }: { splashFinished?: boolean }) {
  return (
    <>
      <Hero splashFinished={splashFinished} />
      <SkillsTools />
      <AboutCareer />
      <UXToolsLab />
      <SelectedWork />
      <LearningSharing />
      <ThinkingBuilding />
      <RecognitionCTA />
      <ScrollToTopWidget />
    </>
  );
}
