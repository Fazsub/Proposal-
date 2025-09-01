'use client';

import Link from 'next/link';
import { Building2, FileText, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <img src="/orbiscr_logo_white.png" alt="ORBIS CR" className="w-14 h-14" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">ORBIS CR</h1>
          <p className="text-xl text-gray-600 mb-2">AI-Powered Digital Solutions</p>
          <p className="text-gray-500">Choose the document you want to view</p>
        </div>

        {/* Document Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Profile Card */}
          <Link href="/company-profile" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Company Profile</h2>
              <p className="text-gray-600 mb-6">
                Complete overview of ORBIS CR services, portfolio, team, and capabilities. 
                Perfect for understanding our company and expertise.
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                View Profile <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* TripBasis Proposal Card */}
          <Link href="/tripbasis-proposal" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">TripBasis MVP Proposal</h2>
              <p className="text-gray-600 mb-6">
                Comprehensive development proposal for TripBasis.com airline booking platform 
                with pricing, timeline, and technical specifications.
              </p>
              <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700">
                View Proposal <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            © 2024 ORBIS CR. All rights reserved. | 
            <a href="mailto:info@orbiscr.com" className="text-blue-600 hover:text-blue-700 ml-1">info@orbiscr.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}