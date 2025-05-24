'use client'
import React, { useState, useEffect, useRef } from 'react'
import Vapi from "@vapi-ai/web"

// Environment variables (usually these would come from .env file)
// For production, move these to .env.local or server environment variables
const VAPI_API_KEY = process.env.NEXT_PUBLIC_VAPI_API_KEY
const VAPI_ASSISTANT_ID = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID

const VapiAssistant = () => {
    const [isActive, setIsActive] = useState(false)
    const [conversation, setConversation] = useState([])
    const vapiRef = useRef(null)
    const captionsRef = useRef(null)
    
    useEffect(() => {
        if (captionsRef.current) {
            captionsRef.current.scrollTop = captionsRef.current.scrollHeight
        }
    }, [conversation])
    
    useEffect(() => {
        // Initialize Vapi with API key from environment variable
        vapiRef.current = new Vapi(VAPI_API_KEY)
        
        if (vapiRef.current) {
            vapiRef.current.on("message", (message) => {
                // Handle transcripts
                if (message.type === "transcript" && message.transcriptType === "final") {
                    setConversation(prev => [
                        ...prev, 
                        { 
                            role: message.role, 
                            text: message.transcript,
                            id: Date.now() // Unique ID for React keys
                        }
                    ])
                }
            })
            
            vapiRef.current.on("call-end", () => {
                setConversation([])
            })
        }
        
        return () => {
            // Cleanup on unmount
            if (vapiRef.current && isActive) {
                vapiRef.current.stop()
            }
        }
    }, [])
    
    const startCall = () => {
        if (vapiRef.current) {
            // Use assistant ID from environment variable
            vapiRef.current.start(VAPI_ASSISTANT_ID)
            setIsActive(true)
        }
    }
    
    const stopCall = () => {
        if (vapiRef.current) {
            vapiRef.current.stop()
            setIsActive(false)
        }
    }
    
    return (
        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-b-lg">
            <div className="max-w-lg mx-auto text-center">
                <p className="mb-8 text-gray-700">
                    This AI voice assistant uses Vapi.ai technology to engage in natural conversation.
                    Click the button below to start or end your call.
                </p>
                
                <button
                    onClick={() => isActive ? stopCall() : startCall()}
                    className={`
                        py-4 px-10 rounded-full font-medium text-lg
                        transition-all duration-300 ease-in-out
                        ${isActive 
                            ? "bg-red-600 hover:bg-red-700 text-white" 
                            : "bg-indigo-600 hover:bg-indigo-700 text-white"}
                        ${isActive ? "animate-pulse" : ""}
                    `}
                >
                    {isActive ? "End Call" : "Start Call"}
                </button>
                
                {/* Caption display area */}
                <div className="mt-8">
                    <div 
                        ref={captionsRef}
                        className={`
                            bg-gray-50 rounded-lg p-5 
                            ${isActive ? "min-h-[200px]" : "min-h-[100px]"} 
                            max-h-[300px] overflow-y-auto
                            transition-all duration-300
                            text-left
                        `}
                    >
                        {conversation.length > 0 ? (
                            <div className="space-y-4">
                                {conversation.map((item) => (
                                    <div 
                                        key={item.id} 
                                        className={`
                                            p-3 rounded-lg 
                                            ${item.role === 'user' ? 'bg-blue-50 ml-4' : 'bg-indigo-50 mr-4'}
                                        `}
                                    >
                                        <p className="font-medium text-sm mb-1 text-gray-600">
                                            {item.role === 'user' ? 'You' : 'Assistant'}
                                        </p>
                                        <p className="text-gray-800">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500 italic text-center">
                                {isActive 
                                    ? "Captions will appear here as you speak..." 
                                    : "Start a call to see captions"}
                            </p>
                        )}
                    </div>
                </div>
                
                {isActive && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-800 font-medium">Call is active</p>
                        <p className="text-gray-600 text-sm mt-2">
                            Speak clearly into your microphone. Click the button above when you're finished.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default VapiAssistant