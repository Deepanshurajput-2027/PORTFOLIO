export const commands = {
    about: {
        description: 'About me',
        usage: 'about',
        fn: () => `
══════════════════════════════════════
   SYSTEM PROFILE : USER INFORMATION
══════════════════════════════════════
 Name        : Deepanshu Rajput
 Role        : Product-Focused Frontend Developer
 Speciality  : SaaS UI Systems & Interactive Interfaces
 Stack       : Modern JavaScript / React Ecosystem
 Mission     : Building scalable product-first web apps
══════════════════════════════════════`
    },

    skills: {
        description: 'List technical skills',
        usage: 'skills',
        fn: () => `
══════════════════════════════════════
   TECHNICAL CAPABILITIES
══════════════════════════════════════
 Frontend   : HTML5 | CSS3 | JavaScript | React | Tailwind
 Backend    : Node.js | Express (Basic)
 Database   : MongoDB (Basic)
 Tools      : Git | GitHub | Vercel | Render | Figma
 Focus      : UI Systems | Rapid Prototyping | API Integration
══════════════════════════════════════`
    },

    projects: {
        description: 'View my projects',
        usage: 'projects',
        fn: () => `
══════════════════════════════════════
   PROJECT DEPLOYMENTS
══════════════════════════════════════
 [1] Figma Clone
     Browser-based collaborative design editor

 [2] Notes Manager
     Full-stack CRUD notes application

 [3] WeatherPro
     Real-time weather forecast platform

 [4] User Card Generator
     Dynamic profile generator tool

 [5] Cyberfiction Website
     Interactive storytelling frontend
══════════════════════════════════════`
    },

    experience: {
        description: 'Display work experience',
        usage: 'experience',
        fn: () => `
══════════════════════════════════════
   PROFESSIONAL EXPERIENCE
══════════════════════════════════════
 Independent Product Builder (2025–Present)
   • SaaS-style deployable applications
   • Interactive UI-driven web experiences
   • Rapid frontend-first product prototyping

 Learning & Development Phase (2023–2025)
   • Production-style frontend & full-stack builds
   • JavaScript architecture and UI engineering focus
══════════════════════════════════════`
    },

    contact: {
        description: 'Get contact information',
        usage: 'contact',
        fn: () => `
══════════════════════════════════════
   CONTACT CHANNELS
══════════════════════════════════════
 Email        : deepanshurajput2731@gmail.com
 Location     : India
 Availability : Open for product collaborations & roles
══════════════════════════════════════`
    },

    github: {
        description: 'Open GitHub profile',
        usage: 'github',
        fn: () => {
            window.open('https://github.com/Deepanshurajput-2027', '_blank')
            return '[SYSTEM] Launching GitHub profile...'
        }
    },

    resume: {
        description: 'Download resume',
        usage: 'resume',
        fn: () => '[SYSTEM] Resume download initiated...'
    },

    social: {
        description: 'View social media links',
        usage: 'social',
        fn: () => `
══════════════════════════════════════
   SOCIAL NETWORK LINKS
══════════════════════════════════════
 GitHub    : https://github.com/Deepanshurajput-2027
 Portfolio : Coming Soon
══════════════════════════════════════`
    },

    echo: {
        description: 'Echo a passed string',
        usage: 'echo <string>',
        fn: (...args) => args.join(' ')
    }
}


export const welcomeMessage = `
╔════════════════════════════════════════╗
║   Welcome to Deepanshu CLI Portfolio   ║
╚════════════════════════════════════════╝

Available commands:

  about        → Learn about me
  skills       → View technical skills
  projects     → Explore projects
  experience   → Work journey
  contact      → Contact information
  github       → Open GitHub profile
  resume       → Download resume
  social       → Social links
  echo         → Echo text

Type 'help' anytime to view command documentation.
`
