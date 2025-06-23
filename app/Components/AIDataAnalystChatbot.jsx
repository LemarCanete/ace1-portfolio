'use client'
import React from 'react'
import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';


const aidataanalystchatbot = () => {
    useEffect(() => {
		createChat({
			webhookUrl: 'https://n8n-production-1b3a.up.railway.app/webhook/db810008-eae9-4865-b6c4-e364bfa87372/chat',
            mode: 'fullscreen',
            initialMessages: [
                'Hi there! 👋',
            ],
            target: '#n8n-data-analyst-chat-bot',
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
            <iframe width={800} height={500} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTxbiWnXS59jpJVKykZMYZYXdvFOOigprk3lv-7MBPBGf113NR1t4LyrU--USXPxeQV0R6iC8WeA-aP/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
            <div id="n8n-data-analyst-chat-bot" className='w-full h-[500px] overflow-auto'></div> 
        </div>
    )
}

export default aidataanalystchatbot