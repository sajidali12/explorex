import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  ArrowLeft,
  Shield,
  Users,
  Globe,
  Star,
  Award,
  Building
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1565C0] via-[#0D47A1] to-[#1565C0] z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070')] bg-cover bg-center opacity-20 z-0"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Visit our office or reach out to us - we&apos;re here to help you succeed
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1565C0] mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Office Location */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all transform hover:-translate-y-2 duration-300">
              <div className="bg-[#00E600] p-4 rounded-2xl w-fit mb-6">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1565C0] mb-4">Visit Our Office</h3>
              <p className="text-gray-600 text-lg mb-6">
                Bahria Town Phase 7-8<br />
                Rawalpindi, Pakistan
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#00E600]" />
                  <span className="text-gray-700">Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#00E600]" />
                  <span className="text-gray-700">Sat: 9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#00E600]" />
                  <span className="text-gray-700">Sun: Closed</span>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all transform hover:-translate-y-2 duration-300">
              <div className="bg-[#1565C0] p-4 rounded-2xl w-fit mb-6">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1565C0] mb-4">Call Us</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">Main Office</p>
                  <a href="tel:+923125264289" className="text-xl font-bold text-[#1565C0] hover:text-[#00E600] transition-colors">
                    0312-5264289
                  </a>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">Secondary Line</p>
                  <a href="tel:+923185109922" className="text-xl font-bold text-[#1565C0] hover:text-[#00E600] transition-colors">
                    0318-5109922
                  </a>
                </div>
              </div>
            </div>

            {/* Complaints */}
            <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] rounded-3xl shadow-2xl p-8 text-white hover:shadow-3xl transition-all transform hover:-translate-y-2 duration-300">
              <div className="bg-white/20 p-4 rounded-2xl w-fit mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Complaints</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-100 mb-2">Compliance Officer</p>
                  <a href="tel:+923145533941" className="text-2xl font-bold text-[#00E600] hover:text-[#4AFF4A] transition-colors">
                    0314-5533941
                  </a>
                </div>
                <p className="text-gray-200 text-sm">
                  We take your feedback seriously and ensure prompt resolution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Why Contact Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1565C0] mb-4">
              Why Contact Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert guidance and personalized solutions for your international education and travel needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10" />,
                title: "Expert Consultation",
                description: "Get personalized advice from our experienced consultants"
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Free Assessment",
                description: "Complimentary evaluation of your profile and opportunities"
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Global Network",
                description: "Access to our worldwide partnerships and resources"
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Trusted Guidance",
                description: "15+ years of proven expertise and success stories"
              },
              {
                icon: <Star className="w-10 h-10" />,
                title: "98% Success Rate",
                description: "Proven track record of successful applications"
              },
              {
                icon: <Building className="w-10 h-10" />,
                title: "End-to-End Support",
                description: "Complete assistance from application to settlement"
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1565C0] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does the visa application process take?",
                answer: "Processing times vary by country and visa type. Tourist visas typically take 1-2 weeks, while student visas can take 4-8 weeks. We provide detailed timelines during consultation."
              },
              {
                question: "Do you charge consultation fees?",
                answer: "Initial consultations are completely free. We only charge fees for specific services like document preparation and application processing."
              },
              {
                question: "What documents do I need to prepare?",
                answer: "Document requirements vary by service and destination. We provide a comprehensive checklist during your consultation based on your specific needs."
              },
              {
                question: "Can you help with scholarship applications?",
                answer: "Yes! We assist with scholarship research, application guidance, and documentation for various scholarship programs worldwide."
              },
              {
                question: "What is your success rate?",
                answer: "We maintain a 98% success rate across all our services. Our experienced team ensures proper documentation and follows best practices for each application."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-[#1565C0] mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1565C0] via-[#0D47A1] to-[#1565C0] z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070')] bg-cover bg-center opacity-20 z-0"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto">
            Contact us today for a free consultation and take the first step towards your global dreams
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+923125264289"
              className="inline-flex items-center gap-3 bg-[#00E600] hover:bg-[#4AFF4A] text-white font-bold px-12 py-5 rounded-full transition-all transform hover:scale-110 shadow-2xl text-lg"
            >
              Call Now
              <Phone className="w-6 h-6" />
            </a>
            <Link
              href="/services"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white font-bold px-12 py-5 rounded-full transition-all transform hover:scale-110"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
