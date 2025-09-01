'use client';

import { useMemo } from 'react';
import {
  Plane,
  Smartphone,
  Code,
  Database,
  CheckCircle,
  Globe,
  Mail,
  Phone,
} from 'lucide-react';

export default function TripBasisProposal() {
  const projectPhases = [
    {
      phase: 'Phase 1: Discovery & Planning',
      duration: '2 weeks',
      tasks: ['Requirements analysis', 'UI/UX wireframing', 'Technical architecture', 'API research'],
    },
    {
      phase: 'Phase 2: Design & Development',
      duration: '8 weeks',
      tasks: ['UI/UX design', 'Frontend development', 'Backend development', 'Database setup'],
    },
    {
      phase: 'Phase 3: Integration & Testing',
      duration: '4 weeks',
      tasks: ['API integrations', 'Payment gateway', 'Testing & QA', 'Performance optimization'],
    },
    {
      phase: 'Phase 4: Launch & Marketing',
      duration: '2 weeks',
      tasks: ['Deployment', 'Marketing setup', 'SEO optimization', 'Go-live support'],
    },
  ];

  const technicalStack = {
    frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
    backend: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'JWT'],
    apis: ['Amadeus API', 'Sabre API', 'Stripe', 'PayPal', 'Google Maps'],
    hosting: ['AWS', 'CloudFront', 'RDS', 'ElastiCache', 'S3'],
    mobile: ['React Native', 'Expo', 'iOS', 'Android'],
  };

  const orbisHighlights = [
    { label: 'Trusted by 500+ Companies', value: '500+' },
    { label: '99.9% Uptime SLA', value: '99.9%' },
    { label: '24/7 Support', value: '24/7' },
  ];

  const portfolioProjects = [
    {
      title: 'MindfulFlow.io',
      description:
        'Mindfulness and content platform with guided courses, modern UX, and conversion-focused design.',
    },
    {
      title: 'Diyans.com',
      description:
        'Full eCommerce website with sleek design and optimized checkout experience for higher conversions.',
    },
    {
      title: 'Orbdeep.com',
      description:
        'Corporate website showcasing digital ventures with modular design and SEO-friendly architecture.',
    },
    {
      title: 'PHTCC.ae',
      description:
        'UAE-based contracting company site with professional service presentation and responsive design.',
    },
    {
      title: 'FDRB.ae',
      description:
        'Corporate contracting website optimized for clarity, performance, and fast navigation.',
    },
    {
      title: 'Exelora (SaaS)',
      description:
        'Modular SaaS platform with AI-driven content creation, SEO automation, lead gen, and email campaigns.',
    },
    {
      title: 'Gloex (Ongoing)',
      description:
        'Construction company website in development with premium UI/UX and sector-specific branding.',
    },
    {
      title: 'n8n Automations',
      description:
        'Lead gen, CRM workflows, social scheduling, outreach flows, and third‑party API integrations.',
    },
  ];

  const webCosts = [
    { label: 'Web Backend Development', amount: 12000, className: 'alloc-dev' },
    { label: 'UI/UX Polish', amount: 2000, className: 'alloc-design' },
    { label: 'Testing & QA', amount: 2000, className: 'alloc-qa' },
  ];

  const operatingCosts = [
    { label: 'Hosting & Infrastructure', amount: 2400, className: 'alloc-hosting' },
    { label: 'API Subscriptions', amount: 3000, className: 'alloc-apis' },
    { label: 'Marketing & Advertising', amount: 12000, className: 'alloc-marketing' },
    { label: 'Maintenance & Support', amount: 6000, className: 'alloc-maintenance' },
  ];

  const webTotal = useMemo(() => webCosts.reduce((sum, c) => sum + c.amount, 0), []);
  const operatingTotal = useMemo(() => operatingCosts.reduce((sum, c) => sum + c.amount, 0), []);
  const projectTotal = webTotal + operatingTotal; // dynamic total

  const heroDevLabel = useMemo(() => {
    const thousands = webTotal / 1000;
    const rounded = Math.round(thousands * 10) / 10; // one decimal
    return `$${rounded.toString()}K`;
  }, [webTotal]);

  const maintenanceAnnual = useMemo(() => {
    const m = operatingCosts.find((c) => c.label === 'Maintenance & Support');
    return m ? m.amount : 0;
  }, []);
  const maintenanceMonthly = useMemo(() => Math.round(maintenanceAnnual / 12), [maintenanceAnnual]);

  const allocationSegments = useMemo(() => {
    const all = [...webCosts, ...operatingCosts];
    return all.map((c) => ({
      width: `${(c.amount / projectTotal) * 100}%`,
      className: c.className,
      label: c.label,
      amount: c.amount,
    }));
  }, [projectTotal]);

  const androidCosts = [
    { label: 'Android App Development', amount: 8000 },
    { label: 'QA & Publishing', amount: 500 },
  ];
  const androidStoreFee = 25; // one-time
  const androidSubtotal = androidCosts.reduce((s, c) => s + c.amount, 0);
  const androidTotalYear1 = androidSubtotal + androidStoreFee;

  const iosCosts = [
    { label: 'iOS App Development', amount: 8000 },
    { label: 'QA & Publishing', amount: 500 },
  ];
  const iosStoreFee = 99; // per year
  const iosSubtotal = iosCosts.reduce((s, c) => s + c.amount, 0);
  const iosTotalYear1 = iosSubtotal + iosStoreFee;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Page 1: Cover & Executive Summary */}
      <div className="pdf-page">
        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <div className="company-logo">
                <img src="/orbiscr_logo_white.png" alt="ORBIS CR" />
              </div>
              <h1 className="document-title">TripBasis.com MVP Proposal</h1>
              <p className="document-subtitle">Proposed by ORBIS CR</p>
              <div className="hero-description">
                Comprehensive airline ticket booking platform development with technical architecture, pricing, and timeline.
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-number">16</div>
                  <div className="hero-stat-label">Weeks Timeline</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">Web MVP</div>
                  <div className="hero-stat-label">Scope: Backend</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">4</div>
                  <div className="hero-stat-label">Development Phases</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">24/7</div>
                  <div className="hero-stat-label">Support</div>
                </div>
              </div>
            </div>

            <div className="hero-image">
              <img src="/hero-illustration.jpg" alt="MVP Concept" className="hero-img" />
            </div>
          </div>
        </div>

        <div className="profile-section">
          <div className="section-intro">
            <h2 className="subsection-title">Executive Summary</h2>
            <p className="body-text">
              ORBIS CR proposes to develop TripBasis.com, a comprehensive airline ticket booking platform that mirrors industry leaders like
              Booking.com and Skyscanner. This proposal outlines the purpose, requirements, technical approach, delivery plan, and pricing
              in dedicated sections. The cover page intentionally shows no pricing.
            </p>
          </div>
        </div>
      </div>

      {/* Page 2: ORBIS CR Introduction */}
      <div className="pdf-page">
        <div className="profile-section">
          <h2 className="section-title">Introducing ORBIS CR</h2>
          <p className="body-text">
            ORBIS CR transforms businesses with AI‑powered solutions and modern engineering. From web and mobile apps to automation,
            analytics, and digital marketing, we deliver results with security‑first architecture and lightning‑fast delivery.
          </p>
          <div className="stats-grid">
            {orbisHighlights.map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-number">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="section-intro">
            <h3 className="subsection-title">Core Services</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'AI Integration & Automation',
                'Full‑Stack Web Development (Next.js, Node.js)',
                'Mobile Apps (React Native)',
                'Digital Marketing & SEO',
                'UI/UX Design',
                'Data Analytics & BI',
              ].map((svc) => (
                <div key={svc} className="list-row-premium">
                  <div className="list-row-icon"><CheckCircle className="w-4 h-4" /></div>
                  <div className="list-row-text">{svc}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Source: ORBIS CR company website. Read more at <a className="text-blue-700 underline" href="https://www.orbiscr.com/">orbiscr.com</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Page 3: Completed Projects & Portfolio */}
      <div className="pdf-page">
        <div className="profile-section">
          <h2 className="section-title">Completed Projects & Portfolio</h2>
          <p className="body-text">Selected work highlighting premium web development and automation/AI delivery.</p>
          <div className="case-studies-grid">
            {portfolioProjects.map((p) => (
              <div key={p.title} className="case-study-item">
                <h3 className="case-study-title">{p.title}</h3>
                <p className="case-study-description">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Page 4: Client Requirements Overview */}
      <div className="pdf-page">
        <div className="profile-section">
          <h2 className="section-title">Client Requirements: TripBasis.com</h2>
          <p className="body-text">
            The client requires an airline ticket booking platform comparable to Booking.com, Skyscanner, and Trip.com. Key areas include
            development budget, hosting recommendations and annual costs, required APIs with pricing, pre/post‑launch marketing, and
            mobile apps (iOS/Android). Initial scope prioritizes backend development for the web app (frontend already completed).
          </p>
          <div className="services-grid">
            {[
              'Mirror leading UX for flight search/booking with real‑time pricing',
              'Recommend cloud hosting with annual cost estimate',
              'Integrate flight aggregation APIs (Amadeus/Sabre/Travelport)',
              'Integrate payment gateways (Stripe/PayPal/local)',
              'Support APIs: Maps, SMS/Email notifications',
              'Provide marketing strategy and budget (pre & post launch)',
              'Provide mobile app estimates (optional, later phases)'
            ].map((req) => (
              <div key={req} className="service-item">
                <div className="service-description">{req}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500">Summary derived from the client inquiry document.</p>
        </div>
      </div>

      {/* Page 5: Project Overview & Technical Architecture */}
      <div className="pdf-page">
        <div className="profile-section">
          <h2 className="section-title">Project Overview</h2>
          <p className="body-text">
            TripBasis.com will be a full-featured airline ticket booking platform with real-time flight data, secure payment processing, and
            native mobile applications for maximum reach and performance.
          </p>

          <h3 className="subsection-title">Technical Architecture</h3>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="card-premium card-gradient-blue">
              <h4 className="font-bold text-xl text-blue-800 mb-4 flex items-center gap-2">
                <Code className="w-6 h-6" /> Frontend Stack
              </h4>
              <div className="space-y-3">
                {technicalStack.frontend.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 premium-list-item">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-premium card-gradient-blue">
              <h4 className="font-bold text-xl text-blue-800 mb-4 flex items-center gap-2">
                <Database className="w-6 h-6" /> Backend Stack
              </h4>
              <div className="space-y-3">
                {technicalStack.backend.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 premium-list-item">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="subsection-title">Core Integrations</h3>
          <div className="grid grid-cols-3 gap-4">
            {technicalStack.apis.map((api, i) => (
              <div key={i} className="card-premium">
                <h4 className="font-semibold text-blue-700 mb-2">{api}</h4>
                <div className="badge badge-primary">Essential</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Page 6: Development Timeline & Phases */}
      <div className="pdf-page">
        <div className="profile-section">
          <h2 className="section-title">Development Timeline</h2>
          <p className="body-text">Our 16-week timeline ensures quality delivery with iterative feedback.</p>

          <div className="space-y-6">
            {projectPhases.map((phase, index) => (
              <div key={index} className="card-premium ribbon" data-label={phase.duration}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-blue-700">{phase.phase}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {phase.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="list-row-premium">
                      <div className="list-row-icon"><CheckCircle className="w-4 h-4" /></div>
                      <div className="list-row-text">{task}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="section-intro mt-8">
            <h3 className="subsection-title">Key Milestones</h3>
            <div className="grid grid-cols-4 gap-4">
              {['Week 2', 'Week 6', 'Week 12', 'Week 16'].map((w, i) => (
                <div key={i} className="text-center card-premium">
                  <div className="text-xl font-bold text-blue-700 mb-1">{w}</div>
                  <div className="text-sm text-gray-600">{['Requirements Finalized', 'Design Approval', 'Development Complete', 'Launch Ready'][i]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Page 7: Investment Breakdown */}
      <div className="pdf-page">
        <div className="profile-section">
          <h2 className="section-title">Investment Breakdown</h2>
          <p className="body-text">Comprehensive cost analysis for development, hosting, APIs, marketing, and mobile applications.</p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="card-premium card-gradient-blue">
              <h3 className="font-bold text-xl text-blue-800 mb-4">Web App (MVP) – Developer Fee</h3>
              <div className="space-y-3">
                {webCosts.map((c) => (
                  <div key={c.label} className="flex justify-between">
                    <span className="text-gray-700">{c.label}</span>
                    <span className="font-semibold">${c.amount.toLocaleString()}</span>
                  </div>
                ))}
                <div className="gold-divider my-3" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total (Web MVP)</span>
                  <span>${webTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="card-premium card-gradient-green">
              <h3 className="font-bold text-xl text-green-800 mb-4">Annual Operating Costs</h3>
              <div className="space-y-3">
                {operatingCosts.map((c) => (
                  <div key={c.label} className="flex justify-between">
                    <span className="text-gray-700">{c.label}</span>
                    <span className="font-semibold">${c.amount.toLocaleString()}</span>
                  </div>
                ))}
                <div className="gold-divider my-3" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Annual Operating</span>
                  <span>${operatingTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-premium card-gradient-purple mb-6">
            <h3 className="font-bold text-xl text-purple-800 mb-4 text-center">MVP Development (Developer Fee Only)</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-700 mb-2">${webTotal.toLocaleString()}</div>
              <p className="text-gray-600">APIs, hosting, and marketing shown separately</p>
            </div>
          </div>

          <div className="card-premium">
            <h4 className="font-semibold text-blue-700 mb-2">Allocation Overview</h4>
            <div className="allocation-bar mb-3">
              {allocationSegments.map((seg) => (
                <span key={seg.label} className={`allocation-segment ${seg.className}`} style={{ width: seg.width }} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              {webCosts.map((c) => (
                <div key={c.label} className="flex items-center justify-between">
                  <span>{c.label}</span>
                  <span>${c.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="gold-divider my-4" />

            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              {operatingCosts.map((c) => (
                <div key={c.label} className="flex items-center justify-between">
                  <span>{c.label}</span>
                  <span>${c.amount.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex items-center justify-between font-semibold">
                <span>Maintenance Monthly</span>
                <span>${maintenanceMonthly.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 8: API Integration & Infrastructure */}
      <div className="pdf-page">
        <div className="profile-section">
          <h2 className="section-title">API Integration & Infrastructure</h2>
          <p className="body-text">Strategy for real-time flight data, payments, and reliable cloud hosting.</p>

          <h3 className="subsection-title">Flight Data APIs</h3>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="card-premium">
              <h4 className="font-bold text-lg text-blue-700 mb-4">Amadeus API</h4>
              <div className="space-y-2">
                <div className="flex justify-between"><span className="text-sm text-gray-600">Setup Cost</span><span className="font-semibold">$500</span></div>
                <div className="flex justify-between"><span className="text-sm text-gray-600">Annual Subscription</span><span className="font-semibold">$1,200</span></div>
                <div className="flex justify-between"><span className="text-sm text-gray-600">Features</span><span className="font-semibold">Flight Search, Booking</span></div>
              </div>
            </div>
            <div className="card-premium">
              <h4 className="font-bold text-lg text-blue-700 mb-4">Sabre API</h4>
              <div className="space-y-2">
                <div className="flex justify-between"><span className="text-sm text-gray-600">Setup Cost</span><span className="font-semibold">$800</span></div>
                <div className="flex justify-between"><span className="text-sm text-gray-600">Annual Subscription</span><span className="font-semibold">$1,800</span></div>
                <div className="flex justify-between"><span className="text-sm text-gray-600">Features</span><span className="font-semibold">Real-time Pricing</span></div>
              </div>
            </div>
          </div>

          <h3 className="subsection-title">Payment & Support APIs</h3>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {['Stripe', 'PayPal', 'Google Maps'].map((api) => (
              <div key={api} className="card-premium">
                <h4 className="font-semibold text-blue-700 mb-2">{api}</h4>
                <p className="text-sm text-gray-600">Industry-standard integration</p>
              </div>
            ))}
          </div>

          <div className="section-intro">
            <h3 className="subsection-title">Hosting & Infrastructure</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center card-premium"><div className="text-2xl font-bold text-blue-600 mb-2">AWS</div><div className="text-sm text-gray-600">Cloud Infrastructure</div></div>
              <div className="text-center card-premium"><div className="text-2xl font-bold text-blue-600 mb-2">$200</div><div className="text-sm text-gray-600">Monthly Hosting</div></div>
              <div className="text-center card-premium"><div className="text-2xl font-bold text-blue-600 mb-2">99.9%</div><div className="text-sm text-gray-600">Uptime SLA</div></div>
              <div className="text-center card-premium"><div className="text-2xl font-bold text-blue-600 mb-2">24/7</div><div className="text-sm text-gray-600">Monitoring</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 9: Marketing Strategy & Mobile Apps (Optional Mobile Add-ons) */}
      <div className="pdf-page">
        <div className="profile-section">
          <h2 className="section-title">Marketing Strategy & Mobile Applications</h2>
          <p className="body-text">Comprehensive marketing approach and native mobile applications for market reach.</p>

          <h3 className="subsection-title">Pre-Launch Marketing</h3>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="card-premium">
              <h4 className="font-bold text-lg text-blue-700 mb-4">Digital Marketing</h4>
              <div className="list-rows">
                {['SEO Optimization', 'Social Media Campaigns', 'Influencer Marketing', 'Content Marketing'].map((i) => (
                  <div key={i} className="list-row-premium"><div className="list-row-icon"><CheckCircle className="w-4 h-4" /></div><div className="list-row-text">{i}</div></div>
                ))}
              </div>
            </div>
            <div className="card-premium">
              <h4 className="font-bold text-lg text-blue-700 mb-4">Post-Launch Marketing</h4>
              <div className="list-rows">
                {['Google Ads Campaign', 'Retargeting Ads', 'Email Automation', 'Performance Analytics'].map((i) => (
                  <div key={i} className="list-row-premium"><div className="list-row-icon"><CheckCircle className="w-4 h-4" /></div><div className="list-row-text">{i}</div></div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="subsection-title">Mobile Applications (Optional Add-ons)</h3>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="card-premium card-gradient-blue ribbon" data-label="Optional - Not in MVP total">
              <h4 className="font-bold text-lg text-blue-800 mb-4 flex items-center gap-2"><Smartphone className="w-5 h-5" /> iOS Application</h4>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="text-gray-700">Development Cost</span><span className="font-semibold">$8,000</span></div>
                <div className="flex justify-between"><span className="text-gray-700">App Store Fee</span><span className="font-semibold">$99/year</span></div>
                <div className="flex justify-between"><span className="text-gray-700">Features</span><span className="font-semibold">Native iOS</span></div>
              </div>
            </div>
            <div className="card-premium card-gradient-green ribbon" data-label="Optional - Not in MVP total">
              <h4 className="font-bold text-lg text-green-800 mb-4 flex items-center gap-2"><Smartphone className="w-5 h-5" /> Android Application</h4>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="text-gray-700">Development Cost</span><span className="font-semibold">$8,000</span></div>
                <div className="flex justify-between"><span className="text-gray-700">Play Store Fee</span><span className="font-semibold">$25</span></div>
                <div className="flex justify-between"><span className="text-gray-700">Features</span><span className="font-semibold">Native Android</span></div>
              </div>
            </div>
          </div>

          <div className="section-intro">
            <h3 className="subsection-title">Marketing Budget Breakdown</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { v: '$2,500', l: 'Pre-Launch Marketing' },
                { v: '$3,500', l: 'Post-Launch Marketing' },
                { v: '$6,000', l: 'First-Year Marketing Total' },
              ].map((x) => (
                <div key={x.l} className="text-center card-premium">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{x.v}</div>
                  <div className="text-sm text-gray-600">{x.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Page 10: Web App – Complete Cost */}
      <div className="pdf-page">
        <div className="profile-section">
          <h2 className="section-title">Web App – Complete Cost</h2>
          <p className="body-text">One-time developer fee plus first-year operating costs shown separately.</p>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="card-premium card-gradient-blue">
              <h3 className="font-bold text-xl text-blue-800 mb-4">Developer Fee (Web MVP)</h3>
              <div className="space-y-3">
                {webCosts.map((c) => (
                  <div key={c.label} className="flex justify-between"><span className="text-gray-700">{c.label}</span><span className="font-semibold">${c.amount.toLocaleString()}</span></div>
                ))}
                <div className="gold-divider my-3" />
                <div className="flex justify-between font-bold text-lg"><span>Total (Web MVP)</span><span>${webTotal.toLocaleString()}</span></div>
              </div>
            </div>
            <div className="card-premium card-gradient-green">
              <h3 className="font-bold text-xl text-green-800 mb-4">Operating (Year 1)</h3>
              <div className="space-y-3">
                {operatingCosts.map((c) => (
                  <div key={c.label} className="flex justify-between"><span className="text-gray-700">{c.label}</span><span className="font-semibold">${c.amount.toLocaleString()}</span></div>
                ))}
                <div className="gold-divider my-3" />
                <div className="flex justify-between font-bold text-lg"><span>Annual Operating</span><span>${operatingTotal.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-gray-700">Maintenance (Monthly)</span><span className="font-semibold">${maintenanceMonthly.toLocaleString()}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 11: Android App – Complete Cost */}
      <div className="pdf-page">
        <div className="profile-section">
          <h2 className="section-title">Android App – Complete Cost</h2>
          <p className="body-text">Optional add-on priced separately from the MVP web app.</p>
          <div className="card-premium">
            <div className="space-y-2">
              {androidCosts.map((c) => (
                <div key={c.label} className="flex justify-between"><span className="text-gray-700">{c.label}</span><span className="font-semibold">${c.amount.toLocaleString()}</span></div>
              ))}
              <div className="flex justify-between"><span className="text-gray-700">Play Store Fee (one-time)</span><span className="font-semibold">${androidStoreFee}</span></div>
            </div>
            <div className="gold-divider my-3" />
            <div className="flex justify-between font-bold text-lg"><span>Total (Android Year 1)</span><span>${androidTotalYear1.toLocaleString()}</span></div>
          </div>
        </div>
      </div>

      {/* Page 12: iOS App – Complete Cost */}
      <div className="pdf-page">
        <div className="profile-section">
          <h2 className="section-title">iOS App – Complete Cost</h2>
          <p className="body-text">Optional add-on priced separately from the MVP web app.</p>
          <div className="card-premium">
            <div className="space-y-2">
              {iosCosts.map((c) => (
                <div key={c.label} className="flex justify-between"><span className="text-gray-700">{c.label}</span><span className="font-semibold">${c.amount.toLocaleString()}</span></div>
              ))}
              <div className="flex justify-between"><span className="text-gray-700">App Store Fee (yearly)</span><span className="font-semibold">${iosStoreFee}</span></div>
            </div>
            <div className="gold-divider my-3" />
            <div className="flex justify-between font-bold text-lg"><span>Total (iOS Year 1)</span><span>${iosTotalYear1.toLocaleString()}</span></div>
          </div>
        </div>
      </div>

      {/* Page 10: Company Credentials & Contact */}
      <div className="pdf-page">
        <div className="profile-section">
          <h2 className="section-title">Why Choose ORBIS CR?</h2>
          <p className="body-text">
            Our proven track record in developing scalable e-commerce platforms and our expertise in travel industry solutions make us the
            ideal partner for TripBasis.com.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="card-premium">
              <h4 className="font-bold text-lg text-blue-700 mb-4">Our Expertise</h4>
              <div className="space-y-3">
                {['E-commerce & Booking Platforms', 'API Integration Specialists', 'Mobile App Development', '24/7 Technical Support'].map(
                  (x) => (
                    <div key={x} className="list-row-premium">
                      <div className="list-row-icon"><CheckCircle className="w-4 h-4" /></div>
                      <div className="list-row-text">{x}</div>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="card-premium">
              <h4 className="font-bold text-lg text-blue-700 mb-4">Project Guarantees</h4>
              <div className="space-y-3">
                {['On-time Delivery', 'Quality Assurance', 'Post-launch Support', 'Performance Optimization'].map((x) => (
                  <div key={x} className="list-row-premium">
                    <div className="list-row-icon"><CheckCircle className="w-4 h-4" /></div>
                    <div className="list-row-text">{x}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card-premium">
            <h3 className="subsection-title mb-4">Ready to Start Your Project?</h3>
            <p className="body-text mb-6">
              Let's transform TripBasis.com into a leading airline ticket booking platform. Our team is ready to deliver a world-class
              solution that drives growth.
            </p>

            <div className="contact-rows">
              <div className="contact-row-premium">
                <div className="contact-row-icon"><Phone className="w-6 h-6" /></div>
                <div className="contact-row-title">Contact Us</div>
                <div className="contact-row-value">+92 304 337 2222</div>
              </div>
              <div className="contact-row-premium">
                <div className="contact-row-icon" style={{background: 'linear-gradient(135deg,#10B981,#059669)'}}><Mail className="w-6 h-6" /></div>
                <div className="contact-row-title">Email Us</div>
                <div className="contact-row-value">info@orbiscr.com</div>
              </div>
              <div className="contact-row-premium">
                <div className="contact-row-icon" style={{background: 'linear-gradient(135deg,#8B5CF6,#6D28D9)'}}><Globe className="w-6 h-6" /></div>
                <div className="contact-row-title">Visit Us</div>
                <div className="contact-row-value">orbiscr.com</div>
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
            <span>TripBasis.com MVP Proposal</span>
            <span>•</span>
            <span>Confidential Document</span>
          </div>
        </div>
      </div>
    </div>
  );
}


