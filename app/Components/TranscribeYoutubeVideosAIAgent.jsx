'use client'
import React from 'react'
import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const TranscribeYoutubeVideosAIAgent = () => {
    useEffect(() => {
		createChat({
			webhookUrl: 'https://dsva.app.n8n.cloud/webhook/70129cbe-1a05-495f-bd92-18d36c1bc260/chat',
            mode: 'fullscreen',
            initialMessages: [
                'Hi there! 👋',
            ],
            target: '#n8n-youtube-transcribe',
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
        <div className="p-4 gap-6">
            {/* <iframe width={800} height={500} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTrCpD-CBJ73nNFmgjRbYgpx8-2Qx_7LJVpICxWRA1zAS-ixkU0Gal1B25V1tjO-0XXfUANheGwuCwL/pubhtml?widget=true&amp;headers=false"></iframe> */}
            <div id="n8n-youtube-transcribe" className='w-full h-[500px] overflow-auto'></div> 
        </div>
    )
}

export default TranscribeYoutubeVideosAIAgent