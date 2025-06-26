'use client'
import React from 'react'
import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';


const Helpdesk = () => {
    useEffect(() => {
		createChat({
			webhookUrl: 'https://dsva.app.n8n.cloud/webhook/602aadfe-10d7-4c7d-90a1-29ae76f3495c/chat',
            mode: 'fullscreen',
            initialMessages: [
                'Hi there! 👋',
            ],
            target: '#n8n-helpdesk',
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
	}, []);
    return (
        <div className="p-4 flex flex-between gap-6">
            <iframe width={800} height={500} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTrCpD-CBJ73nNFmgjRbYgpx8-2Qx_7LJVpICxWRA1zAS-ixkU0Gal1B25V1tjO-0XXfUANheGwuCwL/pubhtml?widget=true&amp;headers=false"></iframe>
            <div id="n8n-helpdesk" className='w-full h-[500px] overflow-auto'></div> 
        </div>
    )
}

export default Helpdesk