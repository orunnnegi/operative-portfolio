
import React, { useState } from 'react';
import { Send, Mail, MapPin, Headset } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mission Request Received",
        description: "We'll establish contact shortly.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section-container bg-cod-dark-gray/30">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 bg-cod-green/20 text-cod-green text-xs mb-4 font-orbitron">
          SECURE CHANNEL
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">ESTABLISH CONTACT</h2>
        <div className="h-0.5 w-20 bg-cod-green mx-auto mb-6"></div>
        <p className="text-white/70 max-w-2xl mx-auto">
          Ready to deploy for your mission? Use this secure channel to transmit your objectives and requirements.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        <div className="lg:col-span-2 animate-fade-in-up">
          <div className="neo-card p-6 h-full">
            <h3 className="text-xl font-orbitron text-white mb-6">COMMAND CENTER</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-sm bg-cod-green/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Mail className="w-5 h-5 text-cod-green" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Communication Channel</h4>
                  <p className="text-cod-light-gray">operative@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-sm bg-cod-green/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-cod-green" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Base Location</h4>
                  <p className="text-cod-light-gray">Secure Facility, Web Development Division</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-sm bg-cod-green/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Headset className="w-5 h-5 text-cod-green" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Direct Line</h4>
                  <p className="text-cod-light-gray">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-white font-semibold mb-4">MISSION AVAILABILITY</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-cod-light-gray">Monday - Friday</span>
                  <span className="text-cod-green">0900 - 1800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cod-light-gray">Saturday</span>
                  <span className="text-cod-orange">On Call</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cod-light-gray">Sunday</span>
                  <span className="text-cod-red">Off Duty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <form onSubmit={handleSubmit} className="neo-card p-6">
            <h3 className="text-xl font-orbitron text-white mb-6">MISSION REQUEST</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-cod-light-gray mb-2 text-sm">
                  CODE NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-cod-gray border border-cod-dark-gray focus:border-cod-green focus:ring-1 focus:ring-cod-green/50 rounded p-3 text-white"
                  placeholder="Your code name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-cod-light-gray mb-2 text-sm">
                  SECURE EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-cod-gray border border-cod-dark-gray focus:border-cod-green focus:ring-1 focus:ring-cod-green/50 rounded p-3 text-white"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-cod-light-gray mb-2 text-sm">
                MISSION OBJECTIVE
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-cod-gray border border-cod-dark-gray focus:border-cod-green focus:ring-1 focus:ring-cod-green/50 rounded p-3 text-white"
                placeholder="Brief subject"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-cod-light-gray mb-2 text-sm">
                MISSION DETAILS
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-cod-gray border border-cod-dark-gray focus:border-cod-green focus:ring-1 focus:ring-cod-green/50 rounded p-3 text-white"
                placeholder="Describe your project requirements"
                required
              ></textarea>
            </div>
            
            <div className="text-right">
              <button
                type="submit"
                className="tactical-btn group px-6 py-3"
              >
                TRANSMIT <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
