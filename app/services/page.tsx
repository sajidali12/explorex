import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Plane,
  Users,
  Briefcase,
  MapPin,
  Globe,
  CheckCircle2,
  Award,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Shield,
  Clock,
  ArrowLeft,
  Users2,
  Building,
  FileText
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1565C0] via-[#0D47A1] to-[#1565C0] z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070')] bg-cover bg-center opacity-20 z-0"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Comprehensive solutions for all your international education, travel, and immigration needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1565C0] mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From educational guidance to visa assistance, we provide end-to-end support for your global journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <GraduationCap className="w-12 h-12" />,
                title: "Education Consulting",
                description: "Study abroad guidance and university selection",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Plane className="w-12 h-12" />,
                title: "Visit Visas",
                description: "Travel visa assistance for tourism and business",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Immigration",
                description: "Permanent residency and citizenship support",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <Briefcase className="w-12 h-12" />,
                title: "Work Visas",
                description: "Employment opportunities in Middle East",
                color: "from-orange-500 to-orange-600"
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
                <div className={`bg-gradient-to-r ${service.color} text-white p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Consultant Service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-[#00E600] p-4 rounded-2xl mr-4">
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-[#1565C0]">Educational Consultant Service</h3>
                    <p className="text-gray-600 text-xl mt-2">Study abroad in top destinations worldwide</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#00E600]" />
                    <span className="text-lg text-gray-700">University selection and application guidance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#00E600]" />
                    <span className="text-lg text-gray-700">Scholarship and financial aid assistance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#00E600]" />
                    <span className="text-lg text-gray-700">Visa application support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#00E600]" />
                    <span className="text-lg text-gray-700">Pre-departure orientation</span>
                  </div>
                </div>

                <button className="bg-[#1565C0] hover:bg-[#0D47A1] text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2 w-fit transform hover:scale-105 shadow-lg">
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: 'Australia', flag: 'AU' },
                  { name: 'Austria', flag: 'AT' },
                  { name: 'Belgium', flag: 'BE' },
                  { name: 'Canada', flag: 'CA' },
                  { name: 'China', flag: 'CN' },
                  { name: 'Denmark', flag: 'DK' },
                  { name: 'Finland', flag: 'FI' },
                  { name: 'Germany', flag: 'DE' },
                  { name: 'Italy', flag: 'IT' },
                  { name: 'Luxembourg', flag: 'LU' },
                  { name: 'Norway', flag: 'NO' },
                  { name: 'Russia', flag: 'RU' },
                  { name: 'Sweden', flag: 'SE' },
                  { name: 'UK', flag: 'GB' },
                  { name: 'USA', flag: 'US' }
                ].map((country) => (
                  <div key={country.name} className="group flex items-center bg-white hover:bg-[#1565C0] rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100">
                    <Image
                      src={`https://flagcdn.com/w40/${country.flag.toLowerCase()}.png`}
                      alt={`${country.name} flag`}
                      width={24}
                      height={16}
                      className="mr-2 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-white transition-colors">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Visa Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Australia', flag: 'AU' },
                    { name: 'Canada', flag: 'CA' },
                    { name: 'China', flag: 'CN' },
                    { name: 'Dubai', flag: 'AE' },
                    { name: 'Indonesia', flag: 'ID' },
                    { name: 'Japan', flag: 'JP' },
                    { name: 'Malaysia', flag: 'MY' },
                    { name: 'Russia', flag: 'RU' },
                    { name: 'Schengen Visa', flag: 'EU' },
                    { name: 'Singapore', flag: 'SG' },
                    { name: 'South Korea', flag: 'KR' },
                    { name: 'Qatar', flag: 'QA' },
                    { name: 'Thailand', flag: 'TH' },
                    { name: 'UK', flag: 'GB' },
                    { name: 'Ukraine', flag: 'UA' },
                    { name: 'USA', flag: 'US' }
                  ].map((destination) => (
                    <div key={destination.name} className="group flex items-center bg-white hover:bg-[#00E600] rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100">
                      <Image
                        src={`https://flagcdn.com/w40/${destination.flag.toLowerCase()}.png`}
                        alt={`${destination.name} flag`}
                        width={24}
                        height={16}
                        className="mr-2 rounded"
                      />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-white transition-colors">{destination.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-[#1565C0] p-4 rounded-2xl mr-4">
                    <Plane className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-[#1565C0]">Visit Visa Services</h3>
                    <p className="text-gray-600 text-xl mt-2">Travel the world with our expert visa assistance</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#00E600]" />
                    <span className="text-lg text-gray-700">Tourist and business visa applications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#00E600]" />
                    <span className="text-lg text-gray-700">Document preparation and verification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#00E600]" />
                    <span className="text-lg text-gray-700">Interview preparation and guidance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#00E600]" />
                    <span className="text-lg text-gray-700">Fast-track processing options</span>
                  </div>
                </div>

                <button className="bg-[#00E600] hover:bg-[#4AFF4A] text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2 w-fit transform hover:scale-105 shadow-lg">
                  Apply Now <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immigration & Work Visa Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Immigration Services */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl shadow-2xl p-10 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="bg-[#00E600] p-4 rounded-2xl mr-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#1565C0]">Immigration Services</h3>
                  <p className="text-gray-600 text-lg mt-1">Permanent residency solutions</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00E600]" />
                  <span className="text-lg text-gray-700">Express Entry and Provincial Nominee Programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00E600]" />
                  <span className="text-lg text-gray-700">Skills assessment and documentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00E600]" />
                  <span className="text-lg text-gray-700">IELTS and language test preparation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00E600]" />
                  <span className="text-lg text-gray-700">Post-landing settlement support</span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'Australia', flag: 'AU' },
                  { name: 'Canada', flag: 'CA' }
                ].map((country) => (
                  <div key={country.name} className="group flex items-center bg-white hover:bg-[#1565C0] rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100">
                    <Image
                      src={`https://flagcdn.com/w40/${country.flag.toLowerCase()}.png`}
                      alt={`${country.name} flag`}
                      width={32}
                      height={24}
                      className="mr-3 rounded"
                    />
                    <span className="text-lg font-semibold text-gray-700 group-hover:text-white transition-colors">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Visa Services */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl shadow-2xl p-10 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="bg-[#1565C0] p-4 rounded-2xl mr-4">
                  <Briefcase className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#1565C0]">Work Visa Services</h3>
                  <p className="text-gray-600 text-lg mt-1">Middle East employment opportunities</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00E600]" />
                  <span className="text-lg text-gray-700">Job placement and recruitment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00E600]" />
                  <span className="text-lg text-gray-700">Employment contract assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00E600]" />
                  <span className="text-lg text-gray-700">Medical examination coordination</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00E600]" />
                  <span className="text-lg text-gray-700">Pre-departure briefing and support</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Bahrain', flag: 'BH' },
                  { name: 'Dubai', flag: 'AE' },
                  { name: 'Kuwait', flag: 'KW' },
                  { name: 'Oman', flag: 'OM' },
                  { name: 'Qatar', flag: 'QA' },
                  { name: 'Saudi Arabia', flag: 'SA' }
                ].map((country) => (
                  <div key={country.name} className="group flex items-center bg-white hover:bg-[#00E600] rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100">
                    <Image
                      src={`https://flagcdn.com/w40/${country.flag.toLowerCase()}.png`}
                      alt={`${country.name} flag`}
                      width={24}
                      height={16}
                      className="mr-2 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-white transition-colors">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1565C0] mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support with a proven track record of success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-10 h-10" />,
                title: "15+ Years Experience",
                description: "Extensive expertise in international education and immigration"
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "98% Success Rate",
                description: "Proven track record of successful applications and approvals"
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "100% Transparency",
                description: "Clear processes, honest advice, and no hidden fees"
              },
              {
                icon: <Clock className="w-10 h-10" />,
                title: "Fast Processing",
                description: "Streamlined procedures to get you results quickly"
              },
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "End-to-End Support",
                description: "Complete guidance from application to settlement"
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Global Network",
                description: "Partnerships with universities and employers worldwide"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-t-4 border-[#00E600]">
                <div className="text-[#1565C0] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1565C0] mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and efficient - here&apos;s how we help you achieve your goals
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Free assessment of your profile and goals",
                icon: <Users2 className="w-8 h-8" />
              },
              {
                step: "02",
                title: "Documentation",
                description: "Complete guidance on required documents",
                icon: <FileText className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Application Submission",
                description: "Expert handling of your application",
                icon: <Building className="w-8 h-8" />
              },
              {
                step: "04",
                title: "Follow-up & Support",
                description: "Ongoing assistance until success",
                icon: <Users2 className="w-8 h-8" />
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-[#1565C0] to-[#0D47A1] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <div className="bg-[#00E600] text-white p-4 rounded-2xl w-fit mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1565C0] via-[#0D47A1] to-[#1565C0] z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070')] bg-cover bg-center opacity-20 z-0"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto">
            Book a free consultation with our expert advisors today and take the first step towards your global dreams
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#00E600] hover:bg-[#4AFF4A] text-white font-bold px-12 py-5 rounded-full transition-all transform hover:scale-110 shadow-2xl text-lg"
            >
              Book Free Consultation
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              href="/about"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white font-bold px-12 py-5 rounded-full transition-all transform hover:scale-110"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
