"use client";

import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    try {
      const f = document.createElement('iframe');
      f.src = 'https://forms.zohopublic.com/teamdisso1/form/ContactUs/formperma/wNpe3SR04rKvomg19XkoRLfnKV9luRJlnMwst1pff40?zf_rszfm=1';
      f.style.border = 'none';
      f.style.height = '1014px';
      f.style.width = '90%';
      f.style.transition = 'all 0.5s ease';
      f.setAttribute('aria-label', 'Contact Us');
      f.onload = () => setIframeLoaded(true);
      const d = document.getElementById('zf_div_wNpe3SR04rKvomg19XkoRLfnKV9luRJlnMwst1pff40');
      if (d && !d.querySelector('iframe')) d.appendChild(f);
      window.addEventListener('message', function (event: MessageEvent) {
        if (!event) return;
        const evntData = event.data;
        if( evntData && typeof evntData === 'string' ){
          const zf_ifrm_data = evntData.split("|");
          if ( zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3 ) {
            const zf_perma = zf_ifrm_data[0];
            const zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
            const container = document.getElementById('zf_div_wNpe3SR04rKvomg19XkoRLfnKV9luRJlnMwst1pff40');
            if (!container) return;
            const iframe = container.getElementsByTagName('iframe')[0];
            if (iframe && iframe.src.indexOf('formperma') > 0 && iframe.src.indexOf(zf_perma) > 0 ) {
              const prevIframeHeight = iframe.style.height;
              let zf_tout = false;
              if( zf_ifrm_data.length === 3 ) {
                iframe.scrollIntoView();
                zf_tout = true;
              }
              if (prevIframeHeight !== zf_ifrm_ht_nw ) {
                if( zf_tout ) {
                  setTimeout(function(){
                    iframe.style.height = zf_ifrm_ht_nw;
                  },500);
                } else {
                  iframe.style.height = zf_ifrm_ht_nw;
                }
              }
            }
          }
        }
      }, false);
    }catch(e){}
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 md:py-20 min-h-[60vh]">
          <motion.h1 
            className="font-glacial-indifference-bold text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            We'd love to hear from you! Please fill out the form below and our team will get back to you as soon as possible.
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-10 border border-gray-200 dark:border-gray-700 relative">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-gray-800/80 z-10 rounded-2xl">
                  <svg className="animate-spin h-8 w-8 text-teal-500 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  <span className="text-gray-500 dark:text-gray-300">Loading form…</span>
                </div>
              )}
              <div id="zf_div_wNpe3SR04rKvomg19XkoRLfnKV9luRJlnMwst1pff40" className="transition-all" />
            </div>
          </div>
          <div className="space-y-8 mt-16 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4 mb-4">
                <Mail size={24} className="text-teal-500 dark:text-teal-400 mt-1" />
                <div>
                  <h3 className="font-glacial-indifference-bold text-lg font-medium text-gray-700 dark:text-gray-200">Email</h3>
                  <a href="mailto:team@dissolvagum.com" className="text-teal-600 dark:text-teal-400 hover:underline">team@dissolvagum.com</a>
                  <p className="text-sm text-gray-500 dark:text-gray-400">For general inquiries and support.</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="font-glacial-indifference-bold text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">Connect on Instagram</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com/DissolvaGum" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 transition-colors">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.396 3.635 1.364 2.668 2.332 2.403 3.505 2.344 4.782.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.277.324 2.45 1.292 3.418.968.968 2.141 1.233 3.418 1.292C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.059 2.45-.324 3.418-1.292.968-.968 1.233-2.141 1.292-3.418.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.277-.324-2.45-1.292-3.418-.968-.968-2.141-1.233-3.418-1.292C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

