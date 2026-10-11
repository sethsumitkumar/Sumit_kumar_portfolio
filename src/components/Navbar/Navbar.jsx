
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navbar background and active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "about",
        "skills",
        "experience",
        "work",
        "education",
        "certificates",
        "contact",
      ];

      let currentSection = "about";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (
          section &&
          window.scrollY >= section.offsetTop - 150
        ) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scrolling and close mobile menu after selection
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // All navigation sections
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certificates", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  // Social profile links
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sethsumitkumar",
      icon: <FaGithub size={22} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sumit-kumar-881041254/",
      icon: <FaLinkedin size={22} />,
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-[6vw] md:px-[5vw] lg:px-[8vw] ${
        isScrolled
          ? "bg-[#050414]/90 backdrop-blur-md shadow-lg shadow-purple-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleMenuItemClick("about")}
          className="text-lg font-semibold cursor-pointer whitespace-nowrap"
          aria-label="Go to About section"
        >
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Sumit</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Kumar</span>
          <span className="text-[#8245ec]">&gt;</span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-7 text-sm lg:text-base text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleMenuItemClick(item.id)}
                className={`relative whitespace-nowrap transition-colors duration-200 hover:text-[#8245ec] ${
                  activeSection === item.id
                    ? "text-[#8245ec]"
                    : "text-gray-300"
                }`}
              >
                {item.label}

                {activeSection === item.id && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 rounded-full bg-[#8245ec]" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Social Links */}
        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${social.name} profile`}
              title={social.name}
              className="text-gray-300 transition-colors duration-200 hover:text-[#8245ec]"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden text-3xl text-[#8245ec]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90%] max-w-sm rounded-xl border border-white/10 bg-[#100d25]/95 backdrop-blur-xl shadow-xl md:hidden">
          <ul className="flex flex-col items-center gap-5 py-6 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`transition-colors duration-200 hover:text-[#8245ec] ${
                    activeSection === item.id
                      ? "text-[#8245ec]"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}

            {/* Mobile Social Links */}
            <li className="flex items-center gap-6 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.name} profile`}
                  title={social.name}
                  className="text-gray-300 transition-colors hover:text-[#8245ec]"
                >
                  {social.icon}
                </a>
              ))}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
