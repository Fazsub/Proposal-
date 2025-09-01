'use client';

import { useState, useEffect } from 'react';
import { 
  Brain, 
  Code, 
  Zap, 
  Globe, 
  Award, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  TrendingUp, 
  Shield,
  Clock,
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  Crown,
  Target,
  Lightbulb,
  Rocket,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Palette,
  BarChart3,
  Cpu,
  Network,
  Lock,
  Eye,
  Heart,
  Gem,
  Trophy,
  Diamond,
  Infinity,
  Zap as Lightning,
  Globe as World,
  Shield as Security,
  Target as Aim,
  Users as Team,
  Award as Achievement
} from 'lucide-react';

export default function CompanyProfile() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Advanced AI solutions including predictive analytics, natural language processing, computer vision, and intelligent automation systems that transform business operations."
    },
    {
      title: "Full-Stack Development",
      description: "Enterprise-grade web and mobile applications built with cutting-edge technologies, following industry best practices and security standards."
    },
    {
      title: "Digital Marketing & SEO",
      description: "Data-driven digital marketing strategies and SEO optimization to maximize your online presence and deliver measurable ROI."
    },
    {
      title: "Business Process Automation",
      description: "Streamline operations with intelligent automation solutions that reduce costs and improve efficiency across your organization."
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce AI Platform",
      industry: "Retail",
      metric: "300%",
      description: "AI-powered product recommendation engine that increased revenue by 300% through intelligent personalization and dynamic pricing optimization."
    },
    {
      title: "Healthcare Analytics System",
      industry: "Healthcare",
      metric: "85%",
      description: "Machine learning system that reduced diagnostic time by 85% while improving accuracy through AI-powered medical image analysis."
    },
    {
      title: "FinTech Mobile App",
      industry: "Finance",
      metric: "2.5M+",
      description: "Secure mobile banking application serving 2.5M+ active users with 99.9% uptime and real-time fraud detection."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      expertise: "Machine Learning, Deep Learning, AI Ethics, Research & Development"
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Full-Stack Developer",
      expertise: "React, Node.js, Cloud Architecture, System Design, DevOps"
    },
    {
      name: "Emily Watson",
      role: "Digital Marketing Director",
      expertise: "SEO, Growth Hacking, Analytics, Brand Strategy, Performance Marketing"
    },
    {
      name: "David Kim",
      role: "Solutions Architect",
      expertise: "System Design, DevOps, Security, Cloud Infrastructure, Technical Leadership"
    }
  ];

  const technologies = {
    languages: ["Python", "JavaScript", "TypeScript", "Java", "C#", "Go", "Rust", "Swift", "Kotlin"],
    frameworks: ["React", "Next.js", "Vue.js", "Angular", "Node.js", "Django", "Flask", "Spring Boot", "Laravel"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "Cassandra", "Neo4j"],
    cloud: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Heroku", "Vercel", "Netlify"],
    ai_ml: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face", "LangChain", "Pandas"],
    design: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Framer", "Webflow"]
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Page 1: Company Cover - Landscape Hero */}
      <div className="pdf-page">
        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <div className="company-logo">
                <img src="/orbiscr_logo_white.png" alt="ORBIS CR" />
              </div>
              <h1 className="document-title">ORBIS CR</h1>
              <p className="document-subtitle">AI-Powered Digital Solutions</p>
              <div className="hero-description">
                We help businesses scale faster with AI-powered solutions that deliver measurable results. 
                Our expertise in artificial intelligence, cutting-edge development, and strategic innovation 
                creates measurable impact that transforms industries.
      </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-number">500+</div>
                  <div className="hero-stat-label">Global Clients</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">99.9%</div>
                  <div className="hero-stat-label">Uptime SLA</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">24/7</div>
                  <div className="hero-stat-label">Support</div>
              </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">150+</div>
                  <div className="hero-stat-label">Projects</div>
                </div>
              </div>
            </div>

            <div className="hero-image">
              <img src="/why-choose-us.jpg" alt="AI Technology Innovation" className="hero-img" />
              <div className="hero-image-overlay">
                <div className="overlay-content">
                  <Brain className="w-16 h-16 text-white mb-4" />
                  <h3 className="overlay-title">AI Excellence</h3>
                  <p className="overlay-text">Cutting-edge artificial intelligence solutions</p>
                </div>
              </div>
            </div>
                    </div>
                  </div>

        <div className="profile-section">
          <div className="section-intro">
            <h2 className="subsection-title">Company Overview</h2>
            <p className="body-text">
              ORBIS CR is a leading technology company specializing in AI-powered digital solutions. 
              We partner with businesses across industries to deliver innovative, scalable, and secure 
              technology solutions that drive growth and competitive advantage.
            </p>
                    </div>
                  </div>
                </div>

      {/* Page 2: Services */}
      <div className="pdf-page">
        <div className="profile-section">
          <h2 className="section-title">Our Services</h2>
          <p className="body-text">
            Comprehensive AI-powered solutions designed to accelerate your business growth and deliver 
            measurable results that exceed expectations.
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                    </div>
                  ))}
                </div>

          <div className="section-intro">
            <h3 className="subsection-title">Why Choose ORBIS CR?</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm">Proven track record with 500+ clients</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm">Industry-leading AI expertise</span>
                    </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm">24/7 premium support</span>
                  </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm">ISO 27001 certified security</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 3: Success Stories */}
      <div className="pdf-page">
        <div className="profile-section">
          <h2 className="section-title">Success Stories</h2>
          <p className="body-text">
            Real results from real clients. Our AI-powered solutions have transformed businesses 
            across industries, delivering measurable impact and sustainable competitive advantage.
          </p>

          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-study-item">
                <div className="industry-tag">{study.industry}</div>
                <h3 className="case-study-title">{study.title}</h3>
                <div className="case-study-metric">{study.metric}</div>
                <p className="case-study-description">{study.description}</p>
                    </div>
                  ))}
                </div>

          <div className="section-intro">
            <h3 className="subsection-title">Key Achievements</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">$50M+</div>
                <div className="text-sm text-gray-600">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
                          </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">3.2x</div>
                <div className="text-sm text-gray-600">Average ROI</div>
                        </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 4: Team & Technologies */}
      <div className="pdf-page">
        <div className="profile-section">
          <h2 className="section-title">Our Team & Expertise</h2>
          <p className="body-text">
            Meet the brilliant minds behind our AI-powered solutions and explore our comprehensive 
            technology stack that enables us to deliver world-class results.
          </p>

          <h3 className="subsection-title">Leadership Team</h3>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="team-avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <p className="team-expertise">{member.expertise}</p>
              </div>
            ))}
            </div>
            
          <h3 className="subsection-title">Technology Stack</h3>
                  
                  <div className="space-y-6">
            <div className="tech-category">
              <h4 className="tech-category-title">Programming Languages</h4>
              <div className="tech-tags">
                {technologies.languages.map((lang, index) => (
                  <span key={index} className="tech-tag">{lang}</span>
                ))}
                            </div>
                          </div>

            <div className="tech-category">
              <h4 className="tech-category-title">Frameworks & Libraries</h4>
              <div className="tech-tags">
                {technologies.frameworks.map((framework, index) => (
                  <span key={index} className="tech-tag">{framework}</span>
                ))}
                        </div>
                      </div>

            <div className="tech-category">
              <h4 className="tech-category-title">Databases & Storage</h4>
              <div className="tech-tags">
                {technologies.databases.map((db, index) => (
                  <span key={index} className="tech-tag">{db}</span>
                    ))}
                  </div>
            </div>

            <div className="tech-category">
              <h4 className="tech-category-title">Cloud & DevOps</h4>
              <div className="tech-tags">
                {technologies.cloud.map((cloud, index) => (
                  <span key={index} className="tech-tag">{cloud}</span>
                ))}
                </div>
              </div>
              
            <div className="tech-category">
              <h4 className="tech-category-title">AI & Machine Learning</h4>
              <div className="tech-tags">
                {technologies.ai_ml.map((tool, index) => (
                  <span key={index} className="tech-tag">{tool}</span>
                ))}
                        </div>
                      </div>

            <div className="tech-category">
              <h4 className="tech-category-title">Design & Creative Tools</h4>
              <div className="tech-tags">
                {technologies.design.map((tool, index) => (
                  <span key={index} className="tech-tag">{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

      {/* Page 5: Contact */}
      <div className="pdf-page">
        <div className="profile-section">
          <h2 className="section-title">Get In Touch</h2>
          <p className="body-text">
            Ready to transform your business with AI-powered solutions? Let's discuss your project 
            and explore how we can help you achieve your digital transformation goals.
          </p>

          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="contact-label">Phone</h3>
              <p className="contact-value">+92 304 337 2222</p>
              <p className="text-xs text-gray-500 mt-2">24/7 Support Available</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="contact-label">Email</h3>
              <p className="contact-value">info@orbiscr.com</p>
              <p className="text-xs text-gray-500 mt-2">fsub77@gmail.com</p>
                </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="contact-label">Website</h3>
              <p className="contact-value">orbiscr.com</p>
              <p className="text-xs text-gray-500 mt-2">Visit us online</p>
            </div>
          </div>

          <div className="section-intro">
            <h3 className="subsection-title">Ready to Start Your Journey?</h3>
            <p className="body-text">
              Join hundreds of companies that have transformed their business with our AI-powered solutions. 
              Let's create something extraordinary together.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">No Commitment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-footer">
          <div className="footer-logo">
            <img src="/orbiscr_logo_white.png" alt="ORBIS CR" />
          </div>
          <h4 className="footer-title">ORBIS CR</h4>
          <p className="footer-tagline">Transforming Business Through AI Innovation</p>
          <div className="footer-links">
            <span>© 2024 ORBIS CR. All rights reserved.</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </div>
  );
} 
