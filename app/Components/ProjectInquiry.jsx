'use client'
import React from 'react'
import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';


const ProjectInquiry = () => {
    useEffect(() => {
		createChat({
			webhookUrl: 'https://dsva.app.n8n.cloud/webhook/fbe6ae09-49b8-425d-8e3e-e928038bf518/chat',
            mode: 'fullscreen',
            initialMessages: [
                'Hi there! 👋',
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
            <iframe width={800} height={500} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRW2B-EyAB3uuYTBbfNsjNhxxihEGgobFAbsg6-GO3Fkg340gKHDQOFTa7Lnv4kvP74UYJPrpvgcbvb/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
            <div id="n8n-projectInquiry" className='w-full h-[500px] overflow-auto'></div> 
        </div>
    )
}

export default ProjectInquiry