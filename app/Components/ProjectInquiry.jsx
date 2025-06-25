'use client'
import React from 'react'
import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';


const ProjectInquiry = () => {
    useEffect(() => {
		createChat({
			webhookUrl: 'https://n8n-production-1b3a.up.railway.app/webhook/663a898b-9b6b-4f04-b95b-9efbf765aea3/chat',
            mode: 'fullscreen',
            initialMessages: [
                `Hi, I'm ProTracker, how may I help you today? Can you please provide the project name?`,
            ],
            target: '#n8n-projectInquiry',
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
            <iframe width={800} height={500} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRW2B-EyAB3uuYTBbfNsjNhxxihEGgobFAbsg6-GO3Fkg340gKHDQOFTa7Lnv4kvP74UYJPrpvgcbvb/pubhtml?widget=true&amp;headers=false"></iframe>
            <div id="n8n-projectInquiry" className='w-full h-[500px] overflow-auto'></div> 
        </div>
    )
}

export default ProjectInquiry