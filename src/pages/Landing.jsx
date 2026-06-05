import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import OurStory from '../components/OurStory';
import SuccessStories from '../components/SuccessStories';

export default function Landing() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Stats />
      <OurStory />
      <SuccessStories />
    </main>
  );
}
