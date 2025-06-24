'use client'
import React from 'react'
import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';


const OcrExtractionAgent = () => {

   useEffect(() => {
    createChat({
          webhookUrl: 'https://n8n-production-1b3a.up.railway.app/webhook/c5005750-6f2a-49f8-91db-eaa52878a59e/chat',
                mode: 'fullscreen',
                initialMessages: [
                    'Hi there! 👋',
                ],
                target: '#n8n-ocr-extraction',
                i18n: {
                    en: {
                        title: '',
                        subtitle: "",
                        footer: '',
                        getStarted: 'New Conversation',
                        inputPlaceholder: 'Type your question..',
                    },
                },
        });
    // Dynamically load the Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      // After script loads, initialize all embeds
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);
  }, []);

   return (
    
    <div className="p-4 flex flex-col">
       <div className="p-4 flex flex-between gap-6">
           <div className="bg-gray-100 p-6 rounded-lg w-[800px]"><iframe data-tally-src="https://tally.so/embed/n0zYkA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="352" title="OCR Extraction"></iframe>
          </div> 
          <div id="n8n-ocr-extraction" className='w-full h-[500px] overflow-auto'></div> 
      </div >

      <div className="bg-gray-100 p-6 rounded-lg">
           <iframe width= "100%" height={500} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR2JZFACWaYzT-YEH7Xd0wu-7bhbVF1a0AP-hw3GFMZ9Wj2S5GmKKav_5YE0ZGQEWbYokT2YZgAWYPy/pubhtml?widget=true&amp;headers=false"></iframe>
   
      </div>
    </div>
  
  )
}

export default OcrExtractionAgent