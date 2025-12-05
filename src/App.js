import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown, Menu, X, Award, Briefcase, Code, GraduationCap, TrendingUp } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const experiences = [
    {
        company: "Willis Towers Watson (WTW)",
        role: "Assistant Manager - Technology Consultant",
        duration: "Feb 2025 - Present",
        location: "Gurugram",
        client: "Banking Sector",
        highlights: [
          "Led IFRS17 implementation for major banking and insurance clients, ensuring compliance with international financial reporting standards.",
          "Configured and managed Windows Server environments, supporting seamless integration of Unify with client infrastructure.",
          "Developing automation scripts for server configuration and infrastructure management",
          "Provided technical consulting and client support throughout the implementation lifecycle, from requirement gathering to post-deployment optimization.",
          "Built strong client relationships by translating regulatory needs into practical technology solutions, driving trust and long-term partnerships."
        ]
      },
    {
      company: "Ernst & Young (EY)",
      role: "Senior Consultant",
      duration: "May 2024 - Feb 2025",
      location: "Gurugram",
      client: "Adobe",
      highlights: [
        "Working as Site Reliability Engineer maintaining on-premises infrastructure",
        "Integrating monitoring tools like Prometheus and Grafana for system health",
        "Developing automation scripts for server configuration and infrastructure management",
        "Managing hybrid infrastructure with AWS EC2 integration",
        "Proactively identifying security vulnerabilities and implementing remedial measures"
      ]
    },
    {
      company: "EPAM Systems",
      role: "System Engineer",
      duration: "Nov 2023 - Apr 2024",
      location: "Remote",
      highlights: [
        "Resolved critical system integration issues ensuring seamless transitions",
        "Designed secure infrastructure with enhanced network security",
        "Spearheaded security audits improving client trust",
        "Delivered security training to development and operations teams"
      ]
    },
    {
      company: "Algoworks",
      role: "DevOps & DevSecOps Engineer",
      duration: "Sep 2022 - May 2023",
      location: "Noida",
      client: "Good Beat Poker Game (Azure)",
      highlights: [
        "Designed production-level infrastructure in Azure with high-availability",
        "Led creation of DevOps culture driving increased agility",
        "Automated deployment processes using CI/CD pipelines",
        "Integrated security automation throughout SDLC",
        "Set up continuous security monitoring for real-time threat detection"
      ]
    },
    {
      company: "Infinite Computer Solutions",
      role: "Cloud DevOps Engineer",
      duration: "Sep 2019 - Jul 2022",
      location: "Bengaluru",
      client: "Zyter Healthcare (AWS)",
      highlights: [
        "Managed version control systems ensuring seamless collaboration",
        "Designed infrastructure using AWS integrating on-premises systems",
        "Developed CI/CD pipelines using Jenkins reducing time to market",
        "Leveraged AWS Auto Scaling and IaC reducing deployment time by 30%",
        "Provided 24/7 on-call support ensuring high availability"
      ]
    }
  ];

  const skills = {
    "Cloud Platforms": ["AWS", "Microsoft Azure"],
    "IaaS & IaC": ["Terraform", "AWS CloudFormation", "Ansible"],
    "Containerization": ["Kubernetes", "Docker", "EKS", "AKS", "ECS"],
    "CI/CD Tools": ["Jenkins", "AWS CodePipeline", "Azure DevOps"],
    "Version Control": ["GitHub", "GitLab", "Bitbucket", "Azure Repos"],
    "Monitoring": ["Prometheus", "Grafana", "Datadog", "New Relic", "CloudWatch"],
    "Security": ["OWASP", "Black Duck", "SonarQube", "BDSA"],
    "Scripting": ["Python", "Shell", "Bash"]
  };

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Security Excellence",
      description: "Implemented security practices using OWASP and SonarQube, reducing vulnerabilities and enhancing project compliance"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "Achieved significant cost savings through AWS Cost Explorer, auto-scaling, and reserved instances"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Deployment Acceleration",
      description: "Accelerated deployments using Jenkins and Azure DevOps, boosting productivity by 40%"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Infrastructure Automation",
      description: "Automated workflows with Python and Shell scripts, cutting manual tasks and improving efficiency"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              SR
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-cyan-400 transition-colors ${activeSection === item ? 'text-cyan-400' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-4 py-3 space-y-3">
              {['home', 'about', 'experience', 'skills', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize hover:text-cyan-400 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <div className="inline-block p-2 bg-cyan-500/10 rounded-full mb-4">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold">
                SR
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            Soham Ruj
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-6 animate-fade-in">
            Senior Cloud DevOps & DevSecOps Engineer
          </p>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            Assistant Manager at Willis Towers and Watson (WTW) with 5+ years expertise in Cloud Infrastructure, Site Reliability Engineering, and Security Compliance
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
            <a href="https://github.com/sohamruj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="https://in.linkedin.com/in/soham-ruj-791551129" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="mailto:sohamruz1998@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors">
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
          <button onClick={() => scrollToSection('about')} className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Profile Summary</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Dynamic and results-driven Cloud DevOps and DevSecOps Engineer with over 5 years of expertise delivering secure and scalable solutions at Ernst & Young.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Proficient in managing hybrid cloud infrastructures, integrating on-premises systems with AWS and Azure for optimized performance. Strong focus on security compliance with regulatory standards.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Experienced in fostering DevOps culture, mentoring teams, and streamlining workflows for enhanced collaboration and agility.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Education & Location</h3>
              <div className="flex items-start gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <p className="font-semibold">B.Tech in Electrical, Electronics & Communications Engineering</p>
                  <p className="text-slate-400">Gandhi Institute For Technology (BPUT)</p>
                  <p className="text-slate-400">Bhubaneshwar - 2020</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-slate-400">Delhi, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <p className="font-semibold">Contact</p>
                  <p className="text-slate-400">+91-8826509788</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">{exp.role}</h3>
                    <p className="text-xl text-white mb-1">{exp.company}</p>
                    {exp.client && <p className="text-slate-400 mb-2">Client: {exp.client}</p>}
                  </div>
                  <div className="text-slate-400 md:text-right">
                    <p>{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300 border border-slate-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                    <p className="text-slate-300">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Interested in collaboration or have an opportunity? Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:sohamruz1998@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-all transform hover:scale-105">
              <Mail className="w-6 h-6" />
              <span className="font-semibold">Email Me</span>
            </a>
            <a href="https://in.linkedin.com/in/soham-ruj-791551129" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all transform hover:scale-105">
              <Linkedin className="w-6 h-6" />
              <span className="font-semibold">Connect on LinkedIn</span>
            </a>
            <a href="https://github.com/sohamruj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all transform hover:scale-105">
              <Github className="w-6 h-6" />
              <span className="font-semibold">View GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2025 Soham Ruj. Built with React & Tailwind CSS</p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}