'use client'
import { useEffect, useState } from "react"
import AIDataAnalystChatbot from "../../Components/AIDataAnalystChatbot"
import ChatTriggeredAnswerSearch from "../../Components/ChatTriggeredAnswerSearch"
import PepaMedicalClinic from "../../Components/PepaMedicalClinic"
import EventKnowledgeBasedAI from "../../Components/EventKnowledgeBasedAI"
import AutomatedInterviewSchedulingGoogleCalendarChatBot from "../../Components/AutomatedInterviewSchedulingGoogleCalendarChatBot"
import Helpdesk from "../../Components/Helpdesk"
import VapiAssistant from "../../Components/VapiAssistant"
import ProjectInquiry from "../../Components/ProjectInquiry"
import TranscribeYoutubeVideosAIAgent from "../../Components/TranscribeYoutubeVideosAIAgent"
import OcrExtractionAgent from "../../Components/OcrExtractionAgent"


const page = ({params}) => {
    const workflow_info = [
        {
            name: "Appointment / Reservation AI Agent",
            // description: "An interactive AI voice assistant that engages in conversation and provides information in real-time using the Vapi.ai platform.",
            description: "A voice assistant that handles reservation and appointment.",
            instruction: "",
            notes: "<h4>How to use:</h4><u><li>Click the 'Start Call' button to begin speaking with the AI assistant</li><li>Speak clearly into your microphone</li><li>Click 'End Call' when you're finished</li></u>",
            component: <PepaMedicalClinic />,
            link: "reservation-ai-agent"
        },
        {
            name: "Data Analyst Agent",
            description: "A chatbot that uses AI to answer questions about data analysis. This workflow analyzes sales, refunds, status of the transactions or the products, what payment method, transaction in a range of date from a data source",
            instruction: "",
            notes: "<h4>Try asking it these questions:</h4><u><li>How many refunds in January and what was the amount refunded?</li><li>How many successful sales did we have in January 2025 and what was the final income of those?</li><li>What is the most frequent reason for refunds?</li></u>",
            component: <AIDataAnalystChatbot />,
            link: "data-analyst-agent"
        },
        {
            name: `HR AI Agent`,
            description: "A chatbot that uses AI to search through documents, scrape websites and answer questions. This is very useful to find answers related to company policies, procedures, work instructions, or any other related use cases.",
            instruction: "",
            notes: `<u><li>You can add a file link or a website link by clicking on the Add File Link button</li></u><b>You can ask questions like:</b><o><li>Why ACE-1 IT Solutions?</li><li>What is ACE-1 IT?</li><li>What are the services of ACE-1 IT?</li></o>`,
            component: <ChatTriggeredAnswerSearch />,
            link: "hr-ai-agent"
        },
        {
            name: "Event AI Agent",
            description: "An AI agent that answers questions about an event. Questions such as: event time, location, guests, parking, food, etc.",
            instruction: "",
            notes: `<u><li>Send message through this Bot Link: <a target="__blank" href="https://t.me/sssssssssssssun_bot">https://t.me/sssssssssssssun_bot</a></li><li>What is the event all about?</li><li>What is the event schedule?</li><li>Are there any giveaways?</li><li>Where can I park?</li></u>`,
            component: <EventKnowledgeBasedAI />,
            link: "event-ai-agent"
        },
        {
            name: "Automated Interview Scheduling Google Calendar Chat Bot",
            description: "This workflow uses chat as trigger. It connects with google calendar to get availability during the week and creation of events",
            instruction: "This workflow uses chat as trigger. It connects with google calendar to get availability during the week and creation of events",
            notes: `<p>Required Inputs: </p><o><li>Phonenumber</li><li>Date & Time</li><li>Email</li><p>Try asking, Id like to have an interview on Thursday</p></o>`,
            component: <AutomatedInterviewSchedulingGoogleCalendarChatBot />,
            link: "automated-interview-scheduling-google-calendar-chat-bot"
        },
        {
            name: "Customer Service AI Agent (Helpdesk)",
            description: "An AI Agent that answers inquiries about a product, pricing, etc. It allows users/clients to raise an issue. The agent will try to give instructions on how to fix an issue. This AI is integrated with Helpdesk system where issues will be raises for 2nd level support",
            instruction: "",
            notes: "<h4>Try asking it these questions:</h4><u><li>What are Ace1 Services?</li><li>What are Ace1 Solutions and Architects?</li><li>How to setup Email on Android</li><li>Can you connect me with the support team, I cant setup email on my android phone</li></u>",
            component: <Helpdesk />,
            link: "helpdesk"
        },
        {
            name: "Project Inquiry AI Agent",
            description: "A chat bot that answers project related inquiries such as project status and project details. This AI agent could also translate different languages to English.",
            instruction: "",
            notes: "<h4>Try sending a message to ms teams - lcanete@ace1it.com</h4><h4>Try asking it these questions:</h4><u><li>What is the update for Bridge Expansion project?</li><li>מה אתם עושים שם? הרבה פרויקטים עדיין תלויים ועומדים.</li></u>",
            component: <ProjectInquiry />,
            link: "project-inquiry-ai-agent"
        },
        {
            name: "Transcribe Youtube Videos AI Agent",
            description: "A chat bot that transcribes youtube videos and provides the transcript in a text format.",
            instruction: "",
            notes: "<h4>Try entrering these video links:</h4><u><li>https://www.youtube.com/watch?v=w8t7_M6Yt1w</li><li>https://www.youtube.com/watch?v=d3L2uPuxOxU</li></u>",
            component: <TranscribeYoutubeVideosAIAgent />,
            link: "transcribe-youtube-videos-ai-agent"
        },        
        {
            name: "OCR Extraction AI Agent",
            description: "A chat bot that accurately extracts, analyzes, and organizes details from both scanned and online documents",
            instruction: "",
           notes: `
                    <h4>Try uploading these files (download them first):</h4>
                
                        <li>Sales Report Sample 1:
                        <u><a href="https://fuchsia-charis-26.tiiny.site" target="_blank" rel="noopener noreferrer">
                            https://fuchsia-charis-26.tiiny.site
                        </a></u>
                        </li>
                        <li>
                        Invoice Sample 1:
                        <u><a href="https://turquoise-felecia-52.tiiny.site" target="_blank" rel="noopener noreferrer">
                            https://turquoise-felecia-52.tiiny.site
                        </a></u>
                        </li>
                        <li>Invoice Sample 2:
                        <u><a href="https://ivory-carmelina-52.tiiny.site" target="_blank" rel="noopener noreferrer">
                            https://ivory-carmelina-52.tiiny.site
                        </a></u></li>
                    <h4>Try asking chat these questions:</h4>
                    <li>'Can you summarize invoice with Customer Code GL001-U'</li><li>'Can you summarize sales reports from year 2030'</li>
                    `,
            component: <OcrExtractionAgent/>,
            link: "ocr-extraction-agent"
        }, 

    ]
    
    const [site, setSite] = useState('')
    useEffect(() => {
        const getWorkflow = async() =>{
            const items = await params
            setSite(items.workflow)
        }
        getWorkflow()
    }, [])

    return (
        <div className='antialiased text-gray-800'>
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 id="workflowTitle" className="text-xl md:text-2xl font-bold text-indigo-700">{site}</h1>
                    <a href="/" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium py-2 px-4 rounded-md border border-indigo-600 hover:bg-indigo-50 transition-colors duration-150">
                        &larr; Back to Portfolio
                    </a>
                </div>
            </header>

            {workflow_info.map((workflow, index) => {
                if(site === workflow.link)
                return(<div className="content-wrapper container mx-auto px-6 py-8 md:py-12" key={index}>
                    {/* instructions */}
                    <section id="workflowInstructions" className="mb-8 p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-indigo-800 mb-3">Description:</h2>
                        <p className="text-gray-700 leading-relaxed">{workflow.description}</p>
                    </section>

                    {/* worflow area */}
                    <section id="interactiveWorkflowArea" className="mb-8">
                        <div className="bg-slate-700 text-white px-4 py-2.5 flex justify-between items-center rounded-t-md">
                            <span id="workflowToolbarTitle" className="text-base font-semibold truncate">{workflow.name} - Live Demo</span>
                            <div className="flex items-center space-x-2">
                                <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
                                <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
                                <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
                            </div>
                        </div>
                        
                        
                        {workflow.component}
                    </section>

                    {/* Notes and Considerations */}
                    <section id="workflowNotes" className="mb-8 text-sm text-gray-600">
                        <h3 className="font-semibold text-gray-700 mb-2">Notes & Considerations:</h3>
                        <div dangerouslySetInnerHTML={{ __html: workflow.notes }} />
                    </section>


                </div>)
            })}


        </div>
    )
}

export default page