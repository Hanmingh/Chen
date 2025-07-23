import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Settings, Cloud, Cpu, CheckCircle } from "lucide-react";

const teamMembers = [
  {
    name: 'Hoa Nguyen',
    role: 'AI Optimization & Strategy',
    img: '/teams/current/hoa.jpg',
  },
  {
    name: 'Hanming Hu',
    role: 'AI Software Engineer',
    img: '/teams/current/hanming.jpg',
  },
];

const advisors = [
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
    value: '99%',
    label: 'Prediction Accuracy in Price Forecasting',
  },
];

const features = [
  {
    title: 'Real-Time AI Forecasting',
    description: ['99% accuracy (1-day forecast)', '93% accuracy (30-day forecast)'],
    icon: Brain
  },
  {
    title: 'Automated Bunker Optimization',
    description: ['Best timing for fuel procurement', 'Hedging strategies to minimize fuel price risks', 'Optimal bunker port selection', 'Optimal fuel order quantity'],
    icon: Settings
  },
  {
    title: 'Cloud-Based, SaaS Model',
    description: ['No need for in-house expertise', 'Easily scalable and accessible to the users'],
    icon: Cloud
  },
  {
    title: 'Quantum Ready Algorithms',
    description: ['Designed to handle large-scale, complex, and multi-objective optimization problems under uncertainties', 'Quantum-safe solutions, ensuring our technology remains secure and future-proof in an evolving computational landscape'],
    icon: Cpu
  }
];

const Fuelture = () => {
  return (
    <main className="font-sans bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative text-white text-center py-40 px-8 bg-cover bg-center" style={{ backgroundImage: 'url(/projects/container_1.jpg)' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-700/50"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="font-semibold text-blue-400 mb-4 tracking-wider">
            FUELTURE TECHNOLOGIES
          </div>
          <h1 className="font-extrabold mb-6 leading-tight">
            Next-Generation Bunker Procurement Platform
          </h1>
          <p className="mb-12 max-w-4xl mx-auto leading-relaxed text-slate-200">
            Revolutionizing maritime fuel procurement through AI-powered forecasting, quantum-ready optimization, and real-time market intelligence
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-lg no-underline font-bold transition-all duration-300 shadow-lg shadow-blue-600/40 hover:shadow-xl hover:shadow-blue-600/50 hover:scale-105">
              Request Demo
            </a>
          </div>
        </div>
      </section>

      {/* What We Do, Our Approach, Our Mission */}
      <section className="bg-slate-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-black text-blue-600 leading-none">01</div>
                <h3 className="text-xl font-extrabold text-slate-800">
                  What We Do
                </h3>
              </div>
              <p className="leading-relaxed text-slate-600">
                The shipping industry faces volatile fuel markets and the urgent need for efficient, sustainable fuel procurement. Our AI-driven solution empowers decision-makers with accurate forecasting, optimization strategies, and transparent insights to manage costs, reduce risks, and achieve a competitive advantage in an increasingly complex maritime environment.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-black text-emerald-600 leading-none">02</div>
                <h3 className="text-xl font-extrabold text-slate-800">
                  Our Approach
                </h3>
              </div>
              <p className="leading-relaxed text-slate-600">
                Our Fuelture platform delivers precise bunker fuel price forecasts to optimize bunker port selection, nomination timing, and refueling locations. Engineered for scalability and quantum-readiness, our advanced algorithms support multi-period and multi-objective planning while adapting to real-time market conditions.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-black text-amber-600 leading-none">03</div>
                <h3 className="text-xl font-extrabold text-slate-800">
                  Our Mission
                </h3>
              </div>
              <p className="leading-relaxed text-slate-600">
                We provide real-time, explainable insights into the complex factors affecting fuel pricing and procurement decisions. Our mission is to secure significant cost savings and improved operational efficiency while enabling sustainable maritime operations through intelligent, data-driven fuel procurement strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2">
              Advanced AI Solutions for Maritime Fuel Management
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="p-6 border border-slate-200 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-100">
                  <div className="flex items-center gap-4 mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <h4 className="font-bold text-slate-800 text-lg">{feature.title}</h4>
                  </div>
                  <div className="text-slate-600 leading-relaxed text-left space-y-2">
                    {feature.description.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Our Team */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 text-slate-800 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-3">About Our Team</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Fuelture is a dedicated global team of experts focused on revolutionizing bunker procurement through cutting-edge technology and innovation.
            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">Team Members</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {teamMembers.map((m) => (
                <Card key={m.name} className="flex flex-col items-center py-6 px-4 shadow-lg hover:shadow-xl transition-shadow w-72 bg-white">
                  <Avatar className="mb-4 size-28 ring-4 ring-blue-100">
                    <AvatarImage src={m.img} alt={m.name + ' photo'} />
                    <AvatarFallback className="font-bold text-lg">{m.name[0]}</AvatarFallback>
                  </Avatar>
                  <CardContent className="flex flex-col items-center text-center p-0">
                    <p className="font-bold mb-1 text-lg">{m.name}</p>
                    <p className="text-slate-600 font-medium">{m.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">Advisors</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {advisors.map((s) => (
                <Card key={s.name} className="flex flex-col items-center py-6 px-4 shadow-lg hover:shadow-xl transition-shadow w-72 bg-white">
                  <Avatar className="mb-4 size-28 ring-4 ring-indigo-100">
                    <AvatarImage src={s.img} alt={s.name + ' photo'} />
                    <AvatarFallback className="font-bold text-lg">{s.name[0]}</AvatarFallback>
                  </Avatar>
                  <CardContent className="flex flex-col items-center text-center p-0">
                    <p className="font-bold mb-1 text-lg">{s.name}</p>
                    <p className="text-slate-600 mb-1">{s.role}</p>
                    <p className="text-blue-600 font-semibold text-sm">{s.focus}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-3">Market Impact & Statistics</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Real-world data demonstrating the significant impact of optimized bunker procurement strategies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const colors = [
                'text-blue-600',     // $185.7B - Blue
                'text-emerald-600',  // 216.4M - Green
                'text-purple-600',   // $257K - Purple
                'text-orange-600'    // 99% - Orange
              ];
              return (
                <Card key={stat.label} className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg p-6 text-center border border-slate-200 hover:shadow-xl transition-shadow">
                  <div className={`text-4xl md:text-5xl font-black mb-3 ${colors[index]}`}>{stat.value}</div>
                  <div className="text-slate-600 font-semibold text-sm">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-900 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Get In Touch</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              Ready to revolutionize your bunker procurement strategy? Contact our team to schedule a demonstration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-3 text-blue-400 text-lg">Global Headquarters</h4>
              <div className="text-slate-300 leading-relaxed">
                <div>21 Lower Kent Ridge Rd,</div>
                <div>Singapore 119077</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-blue-400 text-lg">Business Inquiries</h4>
              <div className="text-slate-300 leading-relaxed">
                <a href="mailto:nguyenthihoa610@gmail.com" className="text-blue-400 no-underline hover:underline transition-colors duration-300">nguyenthihoa610@gmail.com</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-blue-400 text-lg">Research & Development</h4>
              <div className="text-slate-300 leading-relaxed">
                <div>Mon-Fri: 9:00 AM – 6:00 PM</div>
                <div className="text-slate-400 text-sm mt-1">Singapore Time (SGT)</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-blue-400 text-lg">Connect With Us</h4>
              <div className="flex gap-4 mt-3">
                <a href="https://www.linkedin.com" aria-label="LinkedIn" className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white no-underline font-bold transition-all duration-300 hover:shadow-lg hover:scale-110">in</a>
                <a href="https://www.X.com" aria-label="Twitter" className="w-12 h-12 bg-gradient-to-br from-black to-slate-800 rounded-lg flex items-center justify-center text-white no-underline font-bold transition-all duration-300 hover:shadow-lg hover:scale-110">𝕏</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-6 text-center border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-8">
          <p className="m-0">
            © 2025 Fuelture Technologies. All rights reserved. | 
            <span className="text-blue-400"> Revolutionizing Maritime Fuel Procurement Through AI</span>
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Fuelture;