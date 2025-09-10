import React from 'react';
import { LogoIcon } from './icons/CoreIcons';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto max-w-5xl px-8 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <LogoIcon className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">
                Tamika <span className="font-light">Pharmacy</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Your trusted partner in health and wellness. Delivering quality pharmacy products to your door.
            </p>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Pain Relief</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vitamins</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Skincare</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Baby Care</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>
        </div>

        {/* Social and Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon className="h-6 w-6" /></a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon className="h-6 w-6" /></a>
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon className="h-6 w-6" /></a>
            </div>
            <div className="w-full md:w-auto">
              <p className="text-lg font-semibold text-white mb-2 text-center md:text-left">Subscribe to our newsletter</p>
              <form className="flex w-full">
                <input type="email" placeholder="Your email address" className="w-full md:w-auto px-4 py-2 bg-gray-700 border border-gray-600 rounded-l-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"/>
                <button type="submit" className="px-4 py-2 bg-green-600 text-white font-semibold rounded-r-md hover:bg-green-700 transition-colors flex-shrink-0">
                  Subscribe
                </button>
              </form>
            </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-gray-900 py-4 px-8 md:px-12">
          <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-2">
              <p>&copy; {new Date().getFullYear()} Tamika Pharmacy. All rights reserved.</p>
              <div className="flex space-x-4">
                  <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;