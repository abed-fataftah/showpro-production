import { Hero } from "../components/Hero/Hero";
import { PortfolioTeaser } from "../components/PortfolioTeaser/PortfolioTeaser";
import { Services } from "../components/Services/Services";
import { EventTypes } from "../components/EventTypes/EventTypes";
import { Credibility } from "../components/Credibility/Credibility";
import { ContactBand } from "../components/ContactBand/ContactBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PortfolioTeaser />
      <Services />
      <EventTypes />
      <Credibility />
      <ContactBand />
    </>
  );
}