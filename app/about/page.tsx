import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Award,
  Users,
  Shield,
  Heart,
  CheckCircle2,
  ArrowLeft
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1565C0] via-[#0D47A1] to-[#1565C0] z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070')] bg-cover bg-center opacity-20 z-0"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About ExploreX
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Empowering dreams, building futures - Your trusted partner in global education and immigration
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1565C0] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded with a vision to make global education accessible to everyone, ExploreX Travel & Educational Consultant has been serving students and professionals for over 15 years.
                </p>
                <p>
                  What started as a small consultancy in Rawalpindi has grown into a trusted name, helping thousands of students achieve their dreams of studying and working abroad.
                </p>
                <p>
                  Our success is built on three pillars: <span className="font-semibold text-[#1565C0]">expertise</span>, <span className="font-semibold text-[#1565C0]">transparency</span>, and <span className="font-semibold text-[#1565C0]">dedication</span> to our clients&apos; success.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200"
                alt="Our Story"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl p-10 border-t-4 border-[#1565C0]">
              <div className="bg-[#1565C0] p-4 rounded-2xl w-fit mb-6">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#1565C0] mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide comprehensive, transparent, and personalized consultancy services that empower individuals to achieve their international education and career goals. We are committed to guiding our clients through every step of their journey with integrity and expertise.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-xl p-10 border-t-4 border-[#00E600]">
              <div className="bg-[#00E600] p-4 rounded-2xl w-fit mb-6">
                <Eye className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#1565C0] mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the most trusted and preferred educational consultancy in Pakistan, recognized for our commitment to excellence, innovation, and the success of every client we serve. We envision a world where quality education is accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1565C0] mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Integrity",
                description: "Honest, transparent advice at every step of your journey"
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Commitment",
                description: "Dedicated to your success from start to finish"
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Excellence",
                description: "Delivering the highest quality service and results"
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Client-Centric",
                description: "Your goals and dreams are our priority"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border border-gray-100">
                <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] text-white p-4 rounded-xl w-fit mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200"
                alt="Why Choose Us"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1565C0] mb-8">
                Why Students Choose Us
              </h2>
              <div className="space-y-6">
                {[
                  "15+ years of proven expertise in international education",
                  "98% visa success rate across all destinations",
                  "Partnerships with 200+ universities worldwide",
                  "Free counselling and university selection guidance",
                  "End-to-end support from application to visa approval",
                  "Post-arrival assistance and ongoing support",
                  "Transparent process with no hidden charges",
                  "Dedicated team of experienced counsellors"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-[#00E600] p-2 rounded-full mt-1">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#1565C0] via-[#0D47A1] to-[#1565C0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-100">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Students Guided" },
              { number: "25+", label: "Countries" },
              { number: "98%", label: "Success Rate" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#00E600] mb-2">{stat.number}</div>
                <div className="text-lg text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1565C0] mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let us help you achieve your dreams of studying or working abroad
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#00E600] hover:bg-[#4AFF4A] text-white font-bold px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="bg-[#1565C0] hover:bg-[#0D47A1] text-white font-bold px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
