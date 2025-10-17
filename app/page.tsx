import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Plane,
  Users,
  Briefcase,
  MapPin,
  Phone,
  Globe,
  CheckCircle2,
  Award,
  TrendingUp,
  Star,
  ArrowRight,
  BookOpen,
  Shield,
  Clock
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1565C0]/95 via-[#0D47A1]/90 to-[#1565C0]/95 z-10"></div>
        <div className="absolute inset-0 bg-[url('/img/pic1.jpg')] bg-cover bg-center z-0"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00E600]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00E600]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-white space-y-8">
              <div className="inline-block">
                <span className="bg-[#00E600] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 w-fit">
                  <Star className="w-4 h-4 fill-white" />
                  Trusted by 1,000+ Students
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Your Gateway to
                <span className="block text-[#00E600]">Global Success</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
                Expert guidance for international education, visas, and immigration. Transform your dreams into reality with ExploreX.
              </p>
              <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="group bg-[#00E600] hover:bg-[#4AFF4A] text-white font-bold px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white font-bold px-10 py-4 rounded-full transition-all transform hover:scale-105"
                >
                  Book Consultation
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-[#00E600]">25+</div>
                  <div className="text-sm text-gray-200 mt-1">Countries</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-[#00E600]">98%</div>
                  <div className="text-sm text-gray-200 mt-1">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-[#00E600]">5+</div>
                  <div className="text-sm text-gray-200 mt-1">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right content - Hero Image */}
            <div className="hidden md:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
                  alt="Your Gateway to Global Success"
                  width={600}
                  height={700}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1565C0]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Join Thousands of Successful Students</h3>
                  <p className="text-lg text-gray-100">Your dream education is just a step away</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1565C0] mb-4">
              Why Choose ExploreX?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re more than consultants - we&apos;re your partners in achieving global success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: "Expert Guidance",
                description: "5+ years of experience helping students achieve their international education dreams"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "100% Transparency",
                description: "No hidden fees, clear processes, and honest advice at every step"
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "98% Success Rate",
                description: "Our proven track record speaks for itself - your success is our priority"
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Fast Processing",
                description: "Streamlined application processes to get you on your journey faster"
              },
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: "End-to-End Support",
                description: "From initial consultation to visa approval, we're with you every step"
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Global Network",
                description: "Partnerships with top universities and institutions across 25+ countries"
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1565C0] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all your international education and travel needs
            </p>
          </div>

          {/* Educational Consultant Service */}
          <div className="mb-12 bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-[#00E600] p-4 rounded-2xl mr-4">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#1565C0]">Educational Consultant Service</h3>
                  <p className="text-gray-600 text-lg mt-1">Study abroad in top destinations worldwide</p>
                </div>
              </div>
              <Link href="/services" className="bg-[#1565C0] hover:bg-[#0D47A1] text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 w-fit">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
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
                <div key={country.name} className="group flex items-center bg-white hover:bg-[#1565C0] rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all cursor-pointer">
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

          {/* Visit Visa */}
          <div className="mb-12 bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-[#1565C0] p-4 rounded-2xl mr-4">
                  <Plane className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#1565C0]">Visit Visa Services</h3>
                  <p className="text-gray-600 text-lg mt-1">Travel the world with our expert visa assistance</p>
                </div>
              </div>
              <Link href="/services" className="bg-[#00E600] hover:bg-[#4AFF4A] text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 w-fit">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
                <div key={destination.name} className="group flex items-center bg-white hover:bg-[#00E600] rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all cursor-pointer">
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

          <div className="grid md:grid-cols-2 gap-8">
            {/* Immigration Services */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-[#00E600] p-4 rounded-2xl mr-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1565C0]">Immigration Services</h3>
                  <p className="text-gray-600 mt-1">Permanent residency solutions</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Australia', flag: 'AU' },
                  { name: 'Canada', flag: 'CA' }
                ].map((country) => (
                  <div key={country.name} className="group flex items-center bg-white hover:bg-[#1565C0] rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
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
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-[#1565C0] p-4 rounded-2xl mr-4">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1565C0]">Work Visa Services</h3>
                  <p className="text-gray-600 mt-1">Middle East employment opportunities</p>
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
                  <div key={country.name} className="group flex items-center bg-white hover:bg-[#00E600] rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all cursor-pointer">
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

      {/* CTA Section with Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1565C0] via-[#0D47A1] to-[#1565C0] z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070')] bg-cover bg-center opacity-20 z-0"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto">
            Book a free consultation with our expert advisors today and take the first step towards your global dreams
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#00E600] hover:bg-[#4AFF4A] text-white font-bold px-12 py-5 rounded-full transition-all transform hover:scale-110 shadow-2xl text-lg"
          >
            Book Free Consultation
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1565C0] mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our office or reach out to us - we&apos;re here to help you succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="bg-[#00E600] p-4 rounded-xl mr-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#1565C0] mb-2">Visit Our Office</h3>
                    <p className="text-gray-600 text-lg">Bahria Town Phase 7-8<br />Rawalpindi, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="bg-[#1565C0] p-4 rounded-xl mr-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#1565C0] mb-2">Call Us</h3>
                    <p className="text-gray-600 text-lg space-y-1">
                      <a href="tel:+923125264289" className="block hover:text-[#00E600] transition-colors font-medium">0312-5264289</a>
                      <a href="tel:+923185109922" className="block hover:text-[#00E600] transition-colors font-medium">0318-5109922</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] rounded-2xl p-8 shadow-lg text-white">
                <div className="flex items-start">
                  <div className="bg-white/20 p-4 rounded-xl mr-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">For Complaints</h3>
                    <p className="text-gray-100 mb-1">Compliance Officer</p>
                    <a href="tel:+923145533941" className="text-[#00E600] hover:text-[#4AFF4A] transition-colors font-bold text-lg">0314-5533941</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-full min-h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200"
                alt="Contact us - Educational consultancy"
                width={800}
                height={600}
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
