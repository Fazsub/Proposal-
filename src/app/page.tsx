'use client';

import Link from 'next/link';
import { Building2, FileText, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #e0e7ff 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        inset: '0',
        background: 'linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(147,51,234,0.05) 50%, rgba(79,70,229,0.05) 100%)'
      }}></div>
      
      <div style={{ maxWidth: '80rem', width: '100%', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            width: '8rem',
            height: '8rem',
            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #3730a3 100%)',
            borderRadius: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            transition: 'transform 0.3s ease'
          }}>
            <img src="/orbiscr_logo_white.png" alt="ORBIS CR" style={{ width: '4rem', height: '4rem' }} />
          </div>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #1d4ed8 0%, #4338ca 50%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1.5rem',
            letterSpacing: '-0.025em'
          }}>ORBIS CR</h1>
          <p style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#334155',
            marginBottom: '1rem'
          }}>AI-Powered Digital Solutions</p>
          <p style={{
            fontSize: '1.125rem',
            color: '#64748b',
            maxWidth: '42rem',
            margin: '0 auto',
            lineHeight: '1.75'
          }}>Choose the document you want to view below</p>
        </div>

        {/* Document Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Company Profile Card */}
          <Link href="/company-profile" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.5s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 35px 60px -12px rgba(0, 0, 0, 0.25)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
            }}>
              <div style={{
                width: '5rem',
                height: '5rem',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #4338ca 100%)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
              }}>
                <Building2 style={{ width: '2.5rem', height: '2.5rem', color: 'white' }} />
              </div>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '900',
                color: '#1e293b',
                marginBottom: '1.5rem'
              }}>Company Profile</h2>
              <p style={{
                color: '#64748b',
                marginBottom: '2rem',
                fontSize: '1.125rem',
                lineHeight: '1.75'
              }}>
                Complete overview of ORBIS CR services, portfolio, team, and capabilities. 
                Perfect for understanding our company and expertise.
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                color: '#2563eb',
                fontWeight: '700',
                fontSize: '1.125rem'
              }}>
                View Profile <ArrowRight style={{ width: '1.5rem', height: '1.5rem', marginLeft: '0.75rem' }} />
              </div>
            </div>
          </Link>

          {/* TripBasis Proposal Card */}
          <Link href="/tripbasis-proposal" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.5s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 35px 60px -12px rgba(0, 0, 0, 0.25)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
            }}>
              <div style={{
                width: '5rem',
                height: '5rem',
                background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #7c3aed 100%)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
              }}>
                <FileText style={{ width: '2.5rem', height: '2.5rem', color: 'white' }} />
              </div>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '900',
                color: '#1e293b',
                marginBottom: '1.5rem'
              }}>TripBasis MVP Proposal</h2>
              <p style={{
                color: '#64748b',
                marginBottom: '2rem',
                fontSize: '1.125rem',
                lineHeight: '1.75'
              }}>
                Comprehensive development proposal for TripBasis.com airline booking platform 
                with pricing, timeline, and technical specifications.
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                color: '#9333ea',
                fontWeight: '700',
                fontSize: '1.125rem'
              }}>
                View Proposal <ArrowRight style={{ width: '1.5rem', height: '1.5rem', marginLeft: '0.75rem' }} />
              </div>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(10px)',
            borderRadius: '9999px',
            padding: '1rem 2rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            <p style={{
              color: '#64748b',
              fontWeight: '500',
              margin: 0
            }}>
              © 2024 ORBIS CR. All rights reserved.
            </p>
            <div style={{
              width: '1px',
              height: '1rem',
              background: '#cbd5e1'
            }}></div>
            <a href="mailto:info@orbiscr.com" style={{
              color: '#2563eb',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}>
              info@orbiscr.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}