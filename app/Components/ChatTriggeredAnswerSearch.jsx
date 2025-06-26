'use client'
import React from 'react'
import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';
import { Button } from "@/components/ui/button"
import { Paperclip } from 'lucide-react';

const ChatTriggeredAnswerSearch = () => {
    useEffect(() => {
		createChat({
			webhookUrl: 'https://dsva.app.n8n.cloud/webhook/09a9c2c6-f66a-4f40-8ddf-2669e55d7a3b/chat',
            mode: 'fullscreen',
            initialMessages: [
                'Hi there! 👋',
            ],
            target: '#n8n-chat_triggered_answer_search',
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
        <div className="p-4 ">
            <div className="flex flex-between gap-6">
                {/* <iframe width={800} height={500} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR_NpGTkloO0IBIRb8nLsupovlzx5lHTT6fvbAi0qQjG38UjH-qztjpoAH2jDtXY47z_i_6qXcdLJn4/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe> */}
                <iframe width={800} height={500} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR_NpGTkloO0IBIRb8nLsupovlzx5lHTT6fvbAi0qQjG38UjH-qztjpoAH2jDtXY47z_i_6qXcdLJn4/pubhtml?widget=true&amp;headers=false"></iframe>               
                {/* <iframe src="https://drive.google.com/embeddedfolderview?id=1vdVSIbPCIGYJ4tMFjLQovGNpgkBAMrtK#list"></iframe>  */}
                <div id="n8n-chat_triggered_answer_search" className='w-full h-[500px] overflow-auto'></div> 
            </div>

            <Button className="flex items-center justify-center mt-4 flex-center">
                <Paperclip className="mr-2 h-4 w-4" />
                <a href="https://dsva.app.n8n.cloud/form/582934d8-3776-4a8a-b7dd-73f92ec4f50c" className="" target='__blank'>Add File link</a>
            </Button>
        </div>
    )
}

export default ChatTriggeredAnswerSearch