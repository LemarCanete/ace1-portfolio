import React from 'react'

const Hero = () => {
  return (
        <section id="home" className="hero-section text-white py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Interactive Workflow Showcase</h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Explore a collection of my dynamic and interactive workflows. Click on any workflow to experience it live on its dedicated page.
                </p>
                <a href="#workflows" className="btn-secondary-link font-semibold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    View Workflows
                </a>
            </div>
        </section>  )
}

export default Hero