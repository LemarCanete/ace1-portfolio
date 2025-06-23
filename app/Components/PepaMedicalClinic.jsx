'use client'
import React from 'react'
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { Button } from "@/components/ui/button"
import Vapi from "@vapi-ai/web";
import { PhoneCall } from 'lucide-react';

const vapi = new Vapi("2aa90ffb-0f56-42af-8305-7071bd76960c");


const PepaMedicalClinic = () => {
    const [isRecording, setIsRecording] = React.useState(false);

    const startCall = () =>{
        // vapi.start("341649e3-8563-43a6-993b-137f3897162b");
        vapi.start("341649e3-8563-43a6-993b-137f3897162b");
        setIsRecording(true);
    }

    const stopCall = () =>{
        vapi.stop()
        setIsRecording(false)
    }

    return (
        <div className="p-4 relative">
            <iframe className="airtable-embed bg-transparent border-1 border-solid text-[ccc]" 
                src="https://airtable.com/embed/appOpcCK8pomQW8TN/shrtWRSfM5a7ybjA1" 
                frameBorder="0" width="100%" height="533" 
                ></iframe>
            <img src="/workflow-images/Microphone-icon.png" alt="" className={`absolute bottom-0 mx-auto cursor-pointer ${isRecording ? 'animate-pulse' : ''}`} onClick={() => isRecording ? stopCall() : startCall()} />
        </div>
    )
 }

export default PepaMedicalClinic