import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustIndicators } from '../components/sections/TrustIndicators';
import { FeaturedCases } from '../components/sections/FeaturedCases';
import { ContactCTA } from '../components/sections/ContactCTA';
import { Layout } from '../components/Layout';

import { Services } from '../components/sections/Services';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col">
        <Hero />
        <Services />
        <TrustIndicators />
        <FeaturedCases />
        <ContactCTA />
      </div>
    </Layout>
  );
}
