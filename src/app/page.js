"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Users, Package, ShoppingCart, UserCircle, BarChart3, CreditCard, Zap, Settings, Shield, Check, ArrowRight, Star, Play } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      id: 'auth',
      icon: Shield,
      title: 'Auth & Role Management',
      description: 'Secure authentication with granular role-based permissions',
      gradient: 'from-blue-500 to-purple-600',
      benefits: ['Multi-factor authentication', 'Custom role creation', 'Permission hierarchies', 'Session management']
    },
    {
      id: 'inventory',
      icon: Package,
      title: 'Inventory Management',
      description: 'Real-time stock tracking and automated reorder alerts',
      gradient: 'from-green-500 to-teal-600',
      benefits: ['Real-time stock levels', 'Automated alerts', 'Batch tracking', 'Supplier management']
    },
    {
      id: 'orders',
      icon: ShoppingCart,
      title: 'Order & PO Management',
      description: 'Streamlined order processing and purchase order automation',
      gradient: 'from-orange-500 to-red-600',
      benefits: ['Order automation', 'PO generation', 'Vendor management', 'Approval workflows']
    },
    {
      id: 'crm',
      icon: UserCircle,
      title: 'CRM & Client Profiles',
      description: 'Complete customer relationship management suite',
      gradient: 'from-pink-500 to-rose-600',
      benefits: ['360° client view', 'Interaction history', 'Lead scoring', 'Pipeline management']
    },
    {
      id: 'reporting',
      icon: BarChart3,
      title: 'Reporting & Dashboards',
      description: 'Advanced analytics with customizable dashboards',
      gradient: 'from-indigo-500 to-blue-600',
      benefits: ['Real-time analytics', 'Custom reports', 'KPI tracking', 'Data visualization']
    },
    {
      id: 'payments',
      icon: CreditCard,
      title: 'Payment & Invoice Handling',
      description: 'Automated billing and multi-gateway payment processing',
      gradient: 'from-emerald-500 to-green-600',
      benefits: ['Multiple payment gateways', 'Automated invoicing', 'Payment tracking', 'Tax calculations']
    },
    {
      id: 'integrations',
      icon: Zap,
      title: 'Integrations',
      description: 'Seamless connections with email, WhatsApp, and more',
      gradient: 'from-yellow-500 to-orange-600',
      benefits: ['Email automation', 'WhatsApp messaging', 'API integrations', 'Third-party apps']
    },
    {
      id: 'admin',
      icon: Settings,
      title: 'Admin Settings & Logs',
      description: 'Comprehensive system administration and audit trails',
      gradient: 'from-gray-500 to-slate-600',
      benefits: ['System configuration', 'Audit logs', 'User management', 'Security monitoring']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Operations Director',
      company: 'TechFlow Inc.',
      content: 'This platform transformed our entire workflow. The inventory management alone saved us 40% in operational costs.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'GrowthCorp',
      content: 'The CRM integration is phenomenal. Our sales team productivity increased by 60% within the first month.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Finance Manager',
      company: 'SmartBiz Solutions',
      content: 'Invoice automation and payment processing made our accounting department so much more efficient.',
      rating: 5
    }
  ];

  const Navigation = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">BizFlow</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`${currentPage === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('features')}
              className={`${currentPage === 'features' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
            >
              Features
            </button>
            <button
              onClick={() => setCurrentPage('pricing')}
              className={`${currentPage === 'pricing' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
            >
              Pricing
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className={`${currentPage === 'contact' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
            >
              Contact
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600 transition-colors">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'features', 'pricing', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 capitalize"
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Transform
              </span>
              <br />
              Your Business
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              All-in-one business management platform that streamlines operations,
              enhances productivity, and drives growth with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center">
                Start Free Trial <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                <Play className="mr-2 bg-white rounded-full p-2 shadow-lg" size={40} />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed to streamline every aspect of your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers are saying about their transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already using our platform to drive growth and efficiency.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all">
            Start Your Free Trial Today
          </button>
        </div>
      </section>
    </div>
  );

  const FeaturesPage = () => (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Modern Business
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our comprehensive suite of tools can revolutionize your business operations.
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={feature.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl flex items-center justify-center mb-8`}>
                    <Icon className="text-white" size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1">
                  <div className={`h-80 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center`}>
                    <Icon className="text-white opacity-20" size={120} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const PricingPage = () => (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Starter',
              price: '$29',
              period: '/month',
              description: 'Perfect for small businesses',
              features: ['Up to 5 users', 'Basic inventory management', 'Standard support', 'Core integrations'],
              gradient: 'from-green-500 to-teal-600',
              popular: false
            },
            {
              name: 'Professional',
              price: '$79',
              period: '/month',
              description: 'Ideal for growing companies',
              features: ['Up to 25 users', 'Advanced analytics', 'Priority support', 'All integrations', 'Custom workflows'],
              gradient: 'from-blue-500 to-purple-600',
              popular: true
            },
            {
              name: 'Enterprise',
              price: '$199',
              period: '/month',
              description: 'Built for large organizations',
              features: ['Unlimited users', 'White-label options', '24/7 dedicated support', 'Custom integrations', 'SLA guarantee'],
              gradient: 'from-purple-500 to-pink-600',
              popular: false
            }
          ].map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all ${plan.popular ? 'ring-4 ring-blue-500 transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <button className={`w-full bg-gradient-to-r ${plan.gradient} text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all`}>
                  Get Started
                </button>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Contact us today for a personalized demo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Let's Talk Business</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">hello@bizflow.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Office</p>
                    <p className="text-gray-600">123 Business Ave, Suite 100<br />New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all' >
            <textarea
              placeholder="Tell us about your business needs..."
              rows={4}
              className="w-full px-4 py-3 border text-black border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              Send Message
            </button>
          </div>

        </div>
      </div>
    </div >

  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'features': return <FeaturesPage />;
      case 'pricing': return <PricingPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {renderPage()}

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">B</span>
                  </div>
                  <span className="ml-3 text-2xl font-bold">BizFlow</span>
                </div>
                <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                  Empowering enterprises with cutting-edge automation solutions and comprehensive business management tools.
                </p>

                {/* Social Media Links */}
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200" aria-label="Twitter">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200" aria-label="GitHub">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="font-semibold text-lg mb-6">Navigation</h3>
                <ul className="space-y-3">
                  <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Home</a></li>
                  <li><a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Features</a></li>
                  <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Pricing</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Contact</a></li>
                  <li><a href="#client-login" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Client Login</a></li>
                </ul>
              </div>
            </div>
          </div>



          {/* Bottom Footer */}
          <div className="border-t border-gray-800 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © 2025 BizFlow Technologies Inc. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</a>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Enterprise Grade Security</span>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>All Systems Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;