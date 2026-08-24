import { Hero } from '../components/home/Hero';
import { LearningSharing } from '../components/home/LearningSharing';
import { AboutCareer } from '../components/home/AboutCareer';
import { SkillsTools } from '../components/home/SkillsTools';
import { SelectedWork } from '../components/home/SelectedWork';
import { ThinkingBuilding } from '../components/home/ThinkingBuilding';
import { RecognitionCTA } from '../components/home/RecognitionCTA';
import { ScrollToTopWidget } from '../components/ui/ScrollToTopWidget';

export default function Home({ splashFinished }: { splashFinished?: boolean }) {
  return (
    <>
      <Hero splashFinished={splashFinished} />
      <LearningSharing />
      <AboutCareer />
      <SkillsTools />
      <SelectedWork />
      <ThinkingBuilding />
      <RecognitionCTA />
      <ScrollToTopWidget />
    </>
  );
}
