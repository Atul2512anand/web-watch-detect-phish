
import React from 'react';
import { AlgorithmComparison } from '@/components/AlgorithmComparison';
import { FeatureExplanation } from '@/components/FeatureExplanation';
import { AlgorithmDetails } from '@/components/AlgorithmDetails';
import { Hero } from '@/components/Hero';
import { Layout } from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AlgorithmComparison />
      <FeatureExplanation />
      <AlgorithmDetails />
    </Layout>
  );
};

export default Index;
