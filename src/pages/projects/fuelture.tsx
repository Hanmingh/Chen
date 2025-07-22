import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: 'Hoa Nguyen',
    role: 'AI Optimization & Strategy & Management',
    img: '/teams/current/hoa.jpg',
  },
  {
    name: 'Hanming Hu',
    role: 'Software Engineer',
    img: '/teams/current/hanming.jpg',
  },
];

const supervisors = [
  {
    name: 'Ralf Borndörfer',
    role: 'FU Berlin & Zuse Institute Berlin',
    focus: 'Scheduling & Multi-Objective Optimization',
    img: 'https://blog.nus.edu.sg/matcheny/files/2024/11/Portrait_Borndoerfer-e1731492206404.jpg',
  },
  {
    name: 'Ying Chen',
    role: 'National University of Singapore',
    focus: 'AI Forecasting & Quantum Computing',
    img: 'https://blog.nus.edu.sg/matcheny/files/2024/02/Ying-Chen-51578cb9213593e0.jpg',
  },
  {
    name: 'Thorsten Koch',
    role: 'TU Berlin & Zuse Institute Berlin',
    focus: 'Industry Optimization and Software & Quantum Computing',
    img: 'https://blog.nus.edu.sg/matcheny/files/2024/02/Thorsten-Koch-d143f98cc02e87ff.png',
  },
];

const stats = [
  {
    value: '$185.7B',
    label: 'Projected Global Bunker Market Size by 2033',
  },
  {
    value: '216.4M',
    label: 'Metric Tons of Annual Fuel Consumption',
  },
  {
    value: '$257K',
    label: 'Average Annual Savings Per Fleet',
  },
  {
    value: '98.5%',
    label: 'Prediction Accuracy in Price Forecasting',
  },
];

const features = [
  {
    title: 'Real-Time AI Forecasting',
    description: '• 99% accuracy (1-day forecast)\n• 93% accuracy (30-day forecast)',
    icon: '🔮'
  },
  {
    title: 'Automated Bunker Optimization',
    description: '• Best timing for fuel procurement\n• Hedging strategies to minimize fuel price risks\n• Optimal bunker port selection\n• Optimal fuel order quantity',
    icon: '⚡'
  },
  {
    title: 'Cloud-Based, SaaS Model',
    description: '• No need for in-house expertise\n• Easily scalable and accessible to the users',
    icon: '☁️'
  },
  {
    title: 'Quantum Ready Algorithms',
    description: '• Designed to handle large-scale, complex, and multi-objective optimization problems under uncertainties\n• Quantum-safe solutions, ensuring our technology remains secure and future-proof in an evolving computational landscape',
    icon: '🚀'
  }
];

const Fuelture = () => {
  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, sans-serif', background: '#f8fafc', color: '#1e293b' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)', 
        color: '#fff', 
        textAlign: 'center', 
        padding: '8rem 2rem', 
        backgroundImage: 'url(https://blog.nus.edu.sg/matcheny/files/2024/11/venture_02.png)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#60a5fa', marginBottom: '1rem', letterSpacing: '0.05em' }}>
            FUELTURE TECHNOLOGIES
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Next-Generation Bunker Procurement Platform
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: 1.6, color: '#e2e8f0' }}>
            Revolutionizing maritime fuel procurement through AI-powered forecasting, quantum-ready optimization, and real-time market intelligence
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" style={{ 
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', 
              color: '#fff', 
              padding: '1rem 2.5rem', 
              borderRadius: '0.5rem', 
              textDecoration: 'none', 
              fontWeight: 700,
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
            }}>
              Request Demo
            </a>
            <a href="#" style={{ 
              border: '2px solid #fff', 
              color: '#fff', 
              padding: '1rem 2.5rem', 
              borderRadius: '0.5rem', 
              textDecoration: 'none', 
              fontWeight: 700,
              fontSize: '1.1rem',
              transition: 'all 0.3s ease'
            }}>
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* What We Do, Our Approach, Our Mission */}
      <section style={{ background: '#f8fafc', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: 900, 
                color: '#3b82f6', 
                lineHeight: 1,
                minWidth: '80px'
              }}>01</div>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '1.5rem' }}>
                  What We Do
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#64748b' }}>
                  The shipping industry faces volatile fuel markets and the urgent need for efficient, sustainable fuel procurement. Our AI-driven solution empowers decision-makers with accurate forecasting, optimization strategies, and transparent insights to manage costs, reduce risks, and achieve a competitive advantage in an increasingly complex maritime environment.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '2rem' }}>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: 900, 
                color: '#10b981', 
                lineHeight: 1,
                minWidth: '80px'
              }}>02</div>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '1.5rem' }}>
                  Our Approach
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#64748b' }}>
                  Our Fuelture platform delivers precise bunker fuel price forecasts to optimize bunker port selection, nomination timing, and refueling locations. Engineered for scalability and quantum-readiness, our advanced algorithms support multi-period and multi-objective planning while adapting to real-time market conditions.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '2rem' }}>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: 900, 
                color: '#f59e0b', 
                lineHeight: 1,
                minWidth: '80px'
              }}>03</div>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '1.5rem' }}>
                  Our Mission
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#64748b' }}>
                  We provide real-time, explainable insights into the complex factors affecting fuel pricing and procurement decisions. Our mission is to secure significant cost savings and improved operational efficiency while enabling sustainable maritime operations through intelligent, data-driven fuel procurement strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ background: '#fff', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem' }}>
              Advanced AI Solutions for Maritime Fuel Management
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Leverage cutting-edge technology to optimize your bunker procurement strategy and achieve unprecedented cost savings
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {features.map((feature, index) => (
              <Card key={index} style={{ padding: '2rem', textAlign: 'center', border: '1px solid #e2e8f0', borderRadius: '1rem', transition: 'all 0.3s ease' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1e293b', marginBottom: '1rem' }}>{feature.title}</h3>
                <div style={{ color: '#64748b', lineHeight: 1.6, textAlign: 'left', whiteSpace: 'pre-line' }}>{feature.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Team */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 text-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We are the Fuelture, a dedicated global team focused on revolutionizing bunker procurement.
            </p>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12">Team Members</h3>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {teamMembers.map((m) => (
                <Card key={m.name} className="flex flex-col items-center py-8 px-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Avatar className="mb-6 size-32 md:size-36 ring-4 ring-blue-100">
                    <AvatarImage src={m.img} alt={m.name + ' photo'} />
                    <AvatarFallback className="text-2xl font-bold">{m.name[0]}</AvatarFallback>
                  </Avatar>
                  <CardContent className="flex flex-col items-center text-center">
                    <p className="font-bold text-xl mb-2">{m.name}</p>
                    <p className="text-sm text-slate-600 font-medium">{m.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center mb-12">Academic Supervisors & Advisors</h3>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {supervisors.map((s) => (
                <Card key={s.name} className="flex flex-col items-center py-8 px-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Avatar className="mb-6 size-32 md:size-36 ring-4 ring-indigo-100">
                    <AvatarImage src={s.img} alt={s.name + ' photo'} />
                    <AvatarFallback className="text-2xl font-bold">{s.name[0]}</AvatarFallback>
                  </Avatar>
                  <CardContent className="flex flex-col items-center text-center">
                    <p className="font-bold text-xl mb-2">{s.name}</p>
                    <p className="text-sm text-slate-600 mb-2">{s.role}</p>
                    <p className="text-sm text-blue-600 font-semibold">{s.focus}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ background: '#f8fafc', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem' }}>Market Impact & Performance</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Proven results that demonstrate the transformative power of our AI-driven bunker procurement platform
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {stats.map((stat) => (
              <Card key={stat.label} style={{ 
                background: 'linear-gradient(135deg, #fff 0%, #f8fafc 100%)', 
                borderRadius: '1rem', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)', 
                padding: '3rem 2rem', 
                textAlign: 'center',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: '#3b82f6', marginBottom: '1rem' }}>{stat.value}</div>
                <div style={{ fontSize: '1rem', color: '#64748b', fontWeight: 600 }}>{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ background: '#0f172a', color: '#fff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Get In Touch</h2>
            <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto' }}>
              Ready to revolutionize your bunker procurement strategy? Contact our team to schedule a demonstration.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', color: '#60a5fa' }}>Global Headquarters</h4>
              <div style={{ color: '#cbd5e1', lineHeight: 1.6 }}>
                <div>Innovation District</div>
                <div>Singapore & Berlin</div>
                <div>Research Facilities Worldwide</div>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', color: '#60a5fa' }}>Business Inquiries</h4>
              <div style={{ color: '#cbd5e1', lineHeight: 1.6 }}>
                <div>+65 XXXX XXXX (APAC)</div>
                <div>+49 XXX XXX XXXX (Europe)</div>
                <a href="mailto:business@fuelture.ai" style={{ color: '#60a5fa', textDecoration: 'none' }}>business@fuelture.ai</a>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', color: '#60a5fa' }}>Research & Development</h4>
              <div style={{ color: '#cbd5e1', lineHeight: 1.6 }}>
                <div>Mon-Fri: 9:00 AM – 6:00 PM</div>
                <div>24/7 Technical Support</div>
                <a href="mailto:research@fuelture.ai" style={{ color: '#60a5fa', textDecoration: 'none' }}>research@fuelture.ai</a>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', color: '#60a5fa' }}>Connect With Us</h4>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <a href="#" aria-label="LinkedIn" style={{ 
                  width: 48, 
                  height: 48, 
                  background: 'linear-gradient(135deg, #0077b5 0%, #005885 100%)', 
                  borderRadius: '0.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}>in</a>
                <a href="#" aria-label="Twitter" style={{ 
                  width: 48, 
                  height: 48, 
                  background: 'linear-gradient(135deg, #1da1f2 0%, #0d8bd9 100%)', 
                  borderRadius: '0.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}>𝕏</a>
                <a href="#" aria-label="Research Gate" style={{ 
                  width: 48, 
                  height: 48, 
                  background: 'linear-gradient(135deg, #00d4aa 0%, #00b494 100%)', 
                  borderRadius: '0.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}>RG</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#020617', color: '#64748b', padding: '2rem', textAlign: 'center', borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            © 2024 Fuelture Technologies. All rights reserved. | 
            <span style={{ color: '#60a5fa' }}> Revolutionizing Maritime Fuel Procurement Through AI</span>
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Fuelture;