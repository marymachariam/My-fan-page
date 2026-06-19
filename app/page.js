import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";


export default function Home() {
  return (
    <main>
      <Hero
        title="Beyond the Canvas"
        tagline="Art is more than color on a canvas it's emotion, history, imagination, and perspective. These are the pieces that continue to speak long after you've looked away."
      />
      <CardGrid items={items} />
    
    </main>
  );
}