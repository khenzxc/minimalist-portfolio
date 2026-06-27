import React from 'react';
import Hero from '../components/Hero';
import { TechCapabilities } from '../components/TechCapabilities';
import ProjectShowcase from '../components/ProjectShowcase';
import GithubActivity from '../components/GithubActivity';

export default function Home() {
  return (
    <>
      <Hero />
      <TechCapabilities />
      <ProjectShowcase />
      
      {/* Github Heatmap sa pinakailalim ng container block */}
      <GithubActivity />
    </>
  );
}