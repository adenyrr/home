import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProjectsGrid from "../components/ProjectsGrid";
import DiplomaCard from "../components/DiplomaCard";
import CertificationCard from "../components/CertificationCard";
import JobCard from "../components/JobCard";
import ParticleBackground from "../components/ParticleBackground";
import ScrollToTop from "../components/ScrollToTop";
import SectionTitle from "../components/SectionTitle";
import config from "../config/portfolio";

export default function Index() {
  const { sections, projects, diplomas, certifications, jobs } = config;

  return (
    <main id="main" className="min-h-screen flex flex-col relative">
      <ParticleBackground />
      <Header />
      <Hero />

      {/* Projects Section */}
      {sections.projects && projects.length > 0 && (
        <section className="w-full py-8">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle>Projets récents</SectionTitle>
            <ProjectsGrid projects={projects} />
          </div>
        </section>
      )}

      {/* Certifications Section */}
      {sections.certifications && certifications.length > 0 && (
        <section className="w-full py-8">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle>Certifications</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert) => (
                <CertificationCard key={cert.id} cert={cert} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Diplomas Section */}
      {sections.diplomas && diplomas.length > 0 && (
        <section className="w-full py-8">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle>Diplômes</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {diplomas.map((diploma) => (
                <DiplomaCard key={diploma.id} diploma={diploma} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Jobs Section */}
      {sections.jobs && jobs.length > 0 && (
        <section className="w-full py-8">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle>Expériences professionnelles</SectionTitle>
            <div className="space-y-6 max-w-4xl mx-auto">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ScrollToTop />
      <Footer />
    </main>
  );
}
