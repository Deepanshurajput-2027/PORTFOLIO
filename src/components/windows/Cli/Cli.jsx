import React from 'react'
import MacWindow from '../MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.css"

const Cli = ({ windowName, setWindowsState }) => {
    const commands = {
    about: {
        description: 'About me',
        usage: 'about',
        fn: () => 'I am Deepanshu Rajput, a product-focused frontend developer building interactive SaaS-style web applications, UI systems, and rapid prototypes using modern JavaScript and React-based stacks.'
    },
    skills: {
        description: 'List technical skills',
        usage: 'skills',
        fn: () => `Frontend: HTML5, CSS3, JavaScript, React.js, TailwindCSS
Backend: Node.js, Express.js (basic)
Databases: MongoDB (basic)
Tools: Git, GitHub, Vercel, Render, Figma
Focus: Interactive UI, Rapid Product Prototyping, API Integration`
    },
    projects: {
        description: 'View my projects',
        usage: 'projects',
        fn: () => `1. Figma Clone - Browser-based design editor
2. Notes Manager - Full-stack CRUD notes application
3. WeatherPro - Real-time weather forecast app (API-based)
4. User Card Generator - Dynamic profile card generator
5. Cyberfiction Website - Interactive storytelling frontend experience`
    },
    experience: {
        description: 'Display work experience',
        usage: 'experience',
        fn: () => `Independent Product Builder (2025 - Present)
  - Building deployable SaaS-style applications
  - Designing interactive UI-driven web experiences
  - Rapid prototyping frontend-first products

Learning & Development Phase (2023 - 2025)
  - Built multiple production-style frontend and full-stack projects
  - Strengthened JavaScript architecture and UI engineering skills`
    },
    contact: {
        description: 'Get contact information',
        usage: 'contact',
        fn: () => `Email: deepanshurajput2731@gmail.com
Location: India
Availability: Open to product collaborations and frontend roles`
    },
    github: {
        description: 'Open GitHub profile',
        usage: 'github',
        fn: () => {
            window.open('https://github.com/Deepanshurajput-2027', '_blank')
            return 'Opening GitHub profile...'
        }
    },
    resume: {
        description: 'Download resume',
        usage: 'resume',
        fn: () => 'Resume download started...'
    },
    social: {
        description: 'View social media links',
        usage: 'social',
        fn: () => `GitHub: https://github.com/Deepanshurajput-2027
Portfolio: Coming Soon`
    },
    echo: {
        description: 'Echo a passed string',
        usage: 'echo <string>',
        fn: (...args) => args.join(' ')
    }
}

const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to Deepanshu CLI Portfolio ║
╚════════════════════════════════════════╝

Hello! Welcome to my interactive developer portfolio. Explore my skills, projects, and engineering journey using terminal commands.

Type 'help' to see all available commands, or try:
  • about      - Learn about me
  • skills     - View my technical skills
  • projects   - Check out my work
  • experience - See my development journey
  • contact    - Get in touch

Happy exploring!
`


    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} elem="cli">
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'deepanshurajput:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                    inputTextStyle={{color:'#ffff00'}}
                />
            </div>
        </MacWindow>
    )
}

export default Cli