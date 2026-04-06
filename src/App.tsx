/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  PawPrint, 
  Dog, 
  Cat, 
  Moon, 
  Star, 
  ShieldCheck, 
  Heart, 
  Calendar, 
  ChevronRight, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Twitter,
  Award,
  Bird
} from 'lucide-react';
import Beebo from "./beebo.png";
import { motion } from 'motion/react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-charcoal bg-cream overflow-x-hidden">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-primary text-white p-2 rounded-xl">
              <PawPrint size={24} />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-charcoal">
              Amanda's Critter Care
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-charcoal/80 hover:text-primary font-medium transition-colors">Services</a>
            <a href="#testimonials" className="text-charcoal/80 hover:text-primary font-medium transition-colors">Testimonials</a>
            <a href="#about" className="text-charcoal/80 hover:text-primary font-medium transition-colors">About</a>
          </nav>

          <div className="hidden md:block">
            <a 
              href="#book" 
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm"
            >
              Book a Sitter
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-charcoal p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-cream border-b border-charcoal/10 shadow-lg py-4 px-4 flex flex-col gap-4">
            <a href="#services" className="text-charcoal/80 font-medium p-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#testimonials" className="text-charcoal/80 font-medium p-2" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="#about" className="text-charcoal/80 font-medium p-2" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a 
              href="#book" 
              className="bg-primary text-white px-6 py-3 rounded-full font-medium text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Sitter
            </a>
          </div>
        )}
      </header>

      <main className="flex-grow pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <Heart size={16} className="fill-primary" />
                <span>Trusted by 500+ Pet Parents</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight mb-6">
                Expert Care When You Can't Be There.
              </h1>

              {/* Mobile Hero Image - Only visible on mobile, placed between title and subtext */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:hidden relative h-[350px] sm:h-[450px] w-full flex justify-center items-center mb-10"
              >
                <div className="absolute inset-0 bg-primary/10 rounded-[60px] rotate-3 -z-10 translate-x-2"></div>
                <img 
                  src={Beebo} 
                  alt="Beebo the Shiba Inu" 
                  className="w-full h-full object-cover rounded-[50px] shadow-xl border-4 border-white"
                  style={{ objectPosition: 'center 20%' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 -right-2 bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="bg-primary/20 p-2 rounded-full text-primary">
                    <ShieldCheck size={18} />
                  </div>
                  <p className="font-bold font-serif text-charcoal text-xs leading-tight">Insured &<br/>Bonded</p>
                </div>
              </motion.div>

              <p className="text-lg sm:text-xl text-charcoal/70 mb-8 leading-relaxed max-w-lg">
                Professional, loving pet sitting and dog walking services tailored to your furry family members across the Space Coast and Brevard County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#book" 
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg text-center transition-colors shadow-md hover:shadow-lg"
                >
                  Book a Sitter
                </a>
                <a 
                  href="#services" 
                  className="bg-transparent border-2 border-charcoal/20 hover:border-charcoal text-charcoal px-8 py-4 rounded-full font-semibold text-lg text-center transition-colors"
                >
                  View Rates
                </a>
              </div>
            </motion.div>

          {/* Updated Hero Image Section - Desktop only */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex relative h-[450px] sm:h-[550px] lg:h-[650px] w-full justify-center items-center"
          >
            {/* Decorative background element shifted slightly for better framing */}
            <div className="absolute inset-0 bg-primary/10 rounded-[80px] rotate-3 -z-10 translate-x-4"></div>
            
            <img 
              src={Beebo} 
              alt="Portrait of Beebo the Shiba Inu" 
              className="w-full h-full object-cover rounded-[60px] shadow-2xl border-4 border-white"
              style={{ objectPosition: 'center 20%' }} // Adjusts the vertical focus on the face
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Badge - repositioned slightly so it doesn't cover his chest/bandana */}
            <div className="absolute bottom-6 -right-4 sm:right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-primary/20 p-3 rounded-full text-primary">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="font-bold font-serif text-charcoal leading-tight">Insured &<br/>Bonded</p>
              </div>
            </div>
          </motion.div>
          </div>
        </section>

        {/* Trust Marquee */}
        <section className="bg-primary py-8 overflow-hidden relative">
          <div className="marquee-container flex items-center gap-16 text-white/90 font-medium text-lg whitespace-nowrap">
            <div className="flex items-center gap-16">
              <span className="flex items-center gap-2"><Star className="fill-white" size={20}/> 5-Star Rated on Google</span>
              <span className="flex items-center gap-2"><ShieldCheck size={20}/> Fully Insured & Bonded</span>
              <span className="flex items-center gap-2"><Award size={20}/> Pet CPR Certified</span>
              <span className="flex items-center gap-2"><Heart size={20}/> Loving & Reliable</span>
            </div>
            <div className="flex items-center gap-16">
              <span className="flex items-center gap-2"><Star className="fill-white" size={20}/> 5-Star Rated on Google</span>
              <span className="flex items-center gap-2"><ShieldCheck size={20}/> Fully Insured & Bonded</span>
              <span className="flex items-center gap-2"><Award size={20}/> Pet CPR Certified</span>
              <span className="flex items-center gap-2"><Heart size={20}/> Loving & Reliable</span>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h2>
              <p className="text-charcoal/70 text-lg mb-4">Tailored care plans to keep your pets happy, healthy, and safe in their own environment.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 - Dogs */}
              <div className="bg-cream rounded-[32px] p-8 sm:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group flex flex-col">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <Dog size={32} />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-2">Dogs</h3>
                <p className="text-charcoal/70 mb-6 text-sm italic">
                  including feeding/water • going outside or walk/play • medications (if needed)
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex flex-col border-b border-charcoal/5 pb-2">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">30 min check-in <span className="text-[10px] text-charcoal/50 uppercase font-sans font-normal ml-2">once a day</span></div>
                      <span className="text-primary font-bold text-lg">$20</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="font-medium"><span className="text-[10px] text-charcoal/50 uppercase font-sans font-normal">2-4x a day</span></div>
                      <span className="text-primary font-bold text-lg">$30</span>
                    </div>
                  </div>
                  <div className="flex flex-col border-b border-charcoal/5 pb-2">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">60 min check-in <span className="text-[10px] text-charcoal/50 uppercase font-sans font-normal ml-2">once a day</span></div>
                      <span className="text-primary font-bold text-lg">$40</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="font-medium"><span className="text-[10px] text-charcoal/50 uppercase font-sans font-normal">2-4x a day</span></div>
                      <span className="text-primary font-bold text-lg">$50</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Overnight stay</span>
                    <span className="text-primary font-bold text-lg">$70</span>
                  </div>
                </div>
                <a href="#book" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors mt-auto">
                  Book Dogs <ChevronRight size={20} />
                </a>
              </div>

              {/* Service 2 - Cats */}
              <div className="bg-primary text-white rounded-[32px] p-8 sm:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-lg relative overflow-hidden group flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform">
                  <Cat size={32} />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-2">Cats</h3>
                <p className="text-white/80 mb-6 text-sm italic">
                  including feeding/water • medications (if needed)
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <div className="font-medium text-white/90">15 min check-in <span className="text-[10px] text-white/60 uppercase font-sans font-normal ml-2">1-2x a day</span></div>
                    <span className="text-white font-bold text-lg">$15</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <div className="font-medium text-white/90">15-30 min check-in <span className="text-[10px] text-white/60 uppercase font-sans font-normal ml-2">multiple visits</span></div>
                    <span className="text-white font-bold text-lg">$30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white/90">Overnight stay</span>
                    <span className="text-white font-bold text-lg">$50</span>
                  </div>
                </div>
                <a href="#book" className="inline-flex items-center gap-2 text-white font-bold hover:text-white/80 transition-colors mt-auto">
                  Book Cats <ChevronRight size={20} />
                </a>
              </div>

              {/* Service 3 - Birds & Exotics */}
              <div className="bg-cream rounded-[32px] p-8 sm:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group flex flex-col">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <Bird size={32} />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-2 text-balance">Birds & Exotics</h3>
                <p className="text-charcoal/70 mb-6 text-sm italic">
                  including feeding/water • cage cleaning • medication • or other needs
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center border-b border-charcoal/5 pb-2">
                    <div className="font-medium">15-30 min check-in <span className="text-[10px] text-charcoal/50 uppercase font-sans font-normal ml-2">1-2x a day</span></div>
                    <span className="text-primary font-bold text-lg">$25</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Overnight stay</span>
                    <span className="text-primary font-bold text-lg">$50</span>
                  </div>
                </div>
                <a href="#book" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors mt-auto">
                  Book Birds <ChevronRight size={20} />
                </a>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-primary">
                <span className="bg-primary/10 px-4 py-2 rounded-full">+$5 per additional pet</span>
                <span className="bg-primary/10 px-4 py-2 rounded-full">+$4 medication fee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Happy Pets, Happy Parents</h2>
              <p className="text-charcoal/70 text-lg">Don't just take our word for it. Here's what our Space Coast clients have to say.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-[32px] p-8 shadow-sm border border-charcoal/5 relative transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="text-primary mb-4 flex gap-1">
                  <Star size={20} className="fill-primary" />
                  <Star size={20} className="fill-primary" />
                  <Star size={20} className="fill-primary" />
                  <Star size={20} className="fill-primary" />
                  <Star size={20} className="fill-primary" />
                </div>
                <p className="text-charcoal/80 italic mb-6">"Amanda is absolutely wonderful! She took care of our two golden retrievers while we were out of town. The daily photo updates gave us such peace of mind."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold font-serif text-xl">S</div>
                  <div>
                    <p className="font-bold text-charcoal">Sarah M.</p>
                    <p className="text-sm text-charcoal/50">Melbourne, FL</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-white rounded-[32px] p-8 shadow-sm border border-charcoal/5 relative transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="text-primary mb-4 flex gap-1">
                  <Star size={20} className="fill-primary" />
                  <Star size={20} className="fill-primary" />
                  <Star size={20} className="fill-primary" />
                  <Star size={20} className="fill-primary" />
                  <Star size={20} className="fill-primary" />
                </div>
                <p className="text-charcoal/80 italic mb-6">"Finding a reliable cat sitter on the Space Coast was tough until we found Critter Care. Our shy cat Luna warmed up to them immediately!"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold font-serif text-xl">J</div>
                  <div>
                    <p className="font-bold text-charcoal">James T.</p>
                    <p className="text-sm text-charcoal/50">Cocoa Beach, FL</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-white rounded-[32px] p-8 shadow-sm border border-charcoal/5 relative transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="text-primary mb-4 flex gap-1">
                  <Star size={20} className="fill-primary" />
                  <Star size={20} className="fill-primary" />
                  <Star size={20} className="fill-primary" />
                  <Star size={20} className="fill-primary" />
                  <Star size={20} className="fill-primary" />
                </div>
                <p className="text-charcoal/80 italic mb-6">"The overnight stays are a lifesaver. I travel frequently for work and knowing my senior dog is sleeping in his own bed with expert care is priceless."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold font-serif text-xl">E</div>
                  <div>
                    <p className="font-bold text-charcoal">Elena R.</p>
                    <p className="text-sm text-charcoal/50">Viera, FL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                <img 
                  src="https://picsum.photos/seed/amanda/800/1000" 
                  alt="Amanda - Founder of Amanda's Critter Care" 
                  className="rounded-[40px] shadow-2xl w-full object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl max-w-[240px]">
                  <p className="font-serif font-bold text-charcoal text-lg mb-1">"Your pets are my family."</p>
                  <p className="text-charcoal/60 text-sm">— Amanda, Founder</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Meet Amanda</h2>
                  <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
                    Hi! I'm Amanda, and I've spent my entire life surrounded by animals. What started as helping neighbors with their pets turned into a lifelong passion for professional animal care.
                  </p>
                  <p className="text-lg text-charcoal/70 leading-relaxed">
                    With over 10 years of experience and a deep commitment to the Space Coast community, I founded Amanda's Critter Care to provide the kind of personalized, high-touch service that I would want for my own pets.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal">Certified Care</h4>
                      <p className="text-sm text-charcoal/60">Pet CPR & First Aid Certified professional.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal">Fully Insured</h4>
                      <p className="text-sm text-charcoal/60">Your home and pets are protected by our coverage.</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <a href="#book" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all shadow-md">
                    Work With Me <ChevronRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-charcoal/70 text-lg">Everything you need to know about our pet care services.</p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  q: "What areas of the Space Coast do you serve?",
                  a: "We currently serve Melbourne, Viera, Cocoa Beach, Rockledge, and Merritt Island. If you're slightly outside these areas, feel free to reach out!"
                },
                {
                  q: "Are you insured and bonded?",
                  a: "Yes! We are fully insured and bonded through Business Insurers of the Carolinas, specifically tailored for pet care professionals."
                },
                {
                  q: "Do you provide updates during the service?",
                  a: "Absolutely. After every walk or visit, you'll receive a 'report card' via our app with photos, a GPS map of the walk, and details about potty breaks and behavior."
                },
                {
                  q: "What is your cancellation policy?",
                  a: "We ask for 24-hour notice for dog walking and 7-day notice for overnight stays to receive a full refund."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-charcoal/5">
                  <h4 className="font-bold text-lg text-charcoal mb-2">{item.q}</h4>
                  <p className="text-charcoal/70 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="book" className="py-24 bg-cream relative">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83v58.34h-58.34l-.83-.83V0h58.34zM27.5 38.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm13-11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm-26 0a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm13-11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z\' fill=\'%232D3748\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
          
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-12 shadow-2xl border border-charcoal/5">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Check Availability</h2>
                <p className="text-charcoal/70">Tell us a bit about what you need, and we'll get back to you within 24 hours.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-charcoal">Check-in Date</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none text-charcoal/50">
                        <Calendar size={20} />
                      </div>
                      <input 
                        type="date" 
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-cream/50 border border-charcoal/10 rounded-2xl min-w-0 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-charcoal">Check-out Date</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none text-charcoal/50">
                        <Calendar size={20} />
                      </div>
                      <input 
                        type="date" 
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-cream/50 border border-charcoal/10 rounded-2xl min-w-0 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-charcoal">Pet Type</label>
                  <select className="w-full px-4 py-3 sm:py-4 bg-cream/50 border border-charcoal/10 rounded-2xl min-w-0 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%232D3748%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10">
                    <option value="">Select your pet(s)...</option>
                    <option value="dog">Dog(s) Only</option>
                    <option value="cat">Cat(s) Only</option>
                    <option value="both">Dogs & Cats</option>
                    <option value="other">Other/Exotic</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-charcoal">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 sm:py-4 bg-cream/50 border border-charcoal/10 rounded-2xl min-w-0 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3 sm:py-4 rounded-2xl font-bold text-lg transition-colors shadow-md hover:shadow-lg mt-4"
                >
                  Request Booking
                </button>
                <p className="text-center text-sm text-charcoal/50 mt-4">
                  No commitment required. We'll confirm availability first.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-white/80 py-16 sm:py-20 rounded-t-[40px] mt-[-40px] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-white">
                <div className="bg-primary p-2 rounded-xl">
                  <PawPrint size={24} />
                </div>
                <span className="font-serif font-bold text-xl tracking-tight">
                  Amanda's Critter Care
                </span>
              </div>
              <p className="max-w-xs text-white/60 leading-relaxed">
                Expert care when you can't be there. Professional, loving, and reliable pet sitting services.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif font-bold text-lg text-white mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About Amanda</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQs</a></li>
                <li><a href="#book" className="hover:text-primary transition-colors">Book Now</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-lg text-white mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li><a href="tel:+15551234567" className="hover:text-primary transition-colors">(555) 123-4567</a></li>
                <li><a href="mailto:hello@amandascrittercare.com" className="hover:text-primary transition-colors">hello@amandascrittercare.com</a></li>
                <li className="pt-4 border-t border-white/10 flex items-start gap-2 text-white/90">
                  <Heart size={20} className="text-primary shrink-0 mt-0.5" />
                  <span>Proudly serving the Space Coast and Brevard County, FL area.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Amanda's Critter Care. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
