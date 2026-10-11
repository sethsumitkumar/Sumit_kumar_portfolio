
import React, { useState, useEffect } from "react";

import az900Logo from "../../assets/Certificate_logo/az900.png";
import dp900Logo from "../../assets/Certificate_logo/dp900.png";
import aiLogo from "../../assets/Certificate_logo/Generative AI Neon Brain Interface.png";
import webDevLogo from "../../assets/Certificate_logo/Full Stack Web Development Hero Banner.png";
import pythonLogo from "../../assets/Certificate_logo/Python.png";

const certificates = [
  {
    id: 1,
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "9 September 2026",
    image: az900Logo,
    link: "https://learn.microsoft.com/en-gb/users/sumitkumar-3491/credentials/e7fe01854f31edaf?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    category: "Cloud Computing",
  },
  {
    id: 2,
    title: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "21 September 2026",
    image: dp900Logo,
    link: "https://learn.microsoft.com/en-gb/users/sumitkumar-8011/credentials/bfe446c033da6c3b?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    category: "Data Fundamentals",
  },
  {
    id: 3,
    title: "All of AI: ChatGPT, Midjourney, Stable Diffusion & App Dev",
    issuer: "Udemy",
    date: "2 February 2026",
    image: aiLogo,
    link: "https://www.udemy.com/certificate/UC-aa49a104-c839-4c89-8b61-362853031c82/",
    category: "Artificial Intelligence",
  },
  {
    id: 4,
    title: "Complete Web Development Course",
    issuer: "Udemy",
    date: "14 August 2025",
    image: webDevLogo,
    link: "https://www.udemy.com/certificate/UC-1c1addd3-dcb9-4f23-9f34-00da007ac1c7/",
    category: "Web Development",
  },
  {
    id: 5,
    title: "Python Programming: Beginner to Advanced",
    issuer: "GUVI",
    date: "19 August 2023",
    image: pythonLogo,
    link: "https://www.guvi.in/verify-certificate?id=JR59283mV9KF4ke116&course=pythonHin",
    category: "Programming",
  },
];

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const closeModal = () => setSelectedCertificate(null);

  // Close the modal with Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="certificates"
      className="relative py-24 px-[6vw] md:px-[8vw] lg:px-[10vw] bg-[#050414] font-sans"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-3">
          Learning & Development
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Certifications
        </h2>

        <div className="w-28 h-1 bg-purple-500 mx-auto mt-5 rounded-full" />

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-base md:text-lg">
          Professional certifications and courses demonstrating my
          continuous learning in cloud computing, data, AI, and
          software development.
        </p>
      </div>

      {/* Certificate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {certificates.map((certificate) => (
          <article
            key={certificate.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#100d25] transition-all duration-300 hover:border-purple-500/60 hover:-translate-y-1"
          >
            {/* Clickable certificate preview */}
            <button
              type="button"
              onClick={() => setSelectedCertificate(certificate)}
              className="block w-full overflow-hidden bg-white aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label={`Preview ${certificate.title}`}
            >
              <img
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                loading="lazy"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>

            {/* Certificate Details */}
            <div className="p-6">
              <span className="inline-block rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                {certificate.category}
              </span>

              <h3 className="mt-4 text-lg font-semibold leading-snug text-white">
                {certificate.title}
              </h3>

              <div className="mt-4">
                <p className="text-sm text-gray-300">
                  {certificate.issuer}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {certificate.date}
                </p>
              </div>

              {/* Open official verification link */}
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-lg border border-purple-400/50 px-4 py-2 text-sm font-medium text-purple-200 transition hover:bg-purple-600 hover:text-white"
              >
                Verify Certificate ↗
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Full Certificate Preview Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 sm:p-6"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCertificate.title}
        >
          <div
            className="relative flex max-h-[95vh] w-full max-w-7xl flex-col overflow-hidden rounded-xl border border-white/15 bg-[#100d25] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-white sm:text-lg">
                  {selectedCertificate.title}
                </h3>
                <p className="mt-1 text-xs text-gray-400">
                  {selectedCertificate.issuer} · {selectedCertificate.date}
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="shrink-0 rounded-full border border-white/20 px-3 py-2 text-white transition hover:bg-white/10"
                aria-label="Close certificate preview"
              >
                ✕
              </button>
            </div>

            {/* Large Certificate Image */}
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-[#080611] p-2 sm:p-5">
              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} full preview`}
                className="block h-auto max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap justify-end gap-3 border-t border-white/10 px-4 py-3">
              <a
                href={selectedCertificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-500"
              >
                Verify Certificate ↗
              </a>

              <a
                href={selectedCertificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Open Image ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
