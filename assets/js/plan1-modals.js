/**
 * Modal System for Project Details
 * Responsive modal (full-screen on mobile, center on desktop)
 */

const projectData = {
    'goico-sos': {
        title: 'Goico SOS',
        video: 'https://github.com/VictorGoic0/VictorGoic0/releases/download/v1.0.1/GoicoSOS.mp4',
        description: `
            <p>Remote teams drown in chat messages, and things falling through the cracks is just an accepted fact of life. Goico SOS helps by providing AI-powered summarization, key decision and action item extraction, and semantic search (keyword weight + vector embedding comparison). It's a React Native Expo app built with remote workers in mind.</p>
            <p>Messages of high priority are automatically highlighted in red, ensuring critical communications never get lost in the noise. Real-time chat functionality is powered by Firebase, providing instant synchronization across all team members.</p>
            <p>I used <code>GPT-4o-mini</code> for all LLM functionality, and <code>OpenAI Text Embedding 3 Small</code> for semantic search capabilities, allowing users to find relevant messages even when they don't remember the exact keywords used.</p>
        `,
        tech: ['React Native', 'Expo', 'Firebase', 'GPT-4o-mini', 'OpenAI Embeddings'],
        techTypes: ['frontend', 'frontend', 'database', 'ai', 'ai'],
        github: 'https://github.com/VictorGoic0/Goico-SOS',
        live: null
    },
    'videoai-studio': {
        title: 'VideoAI Studio',
        video: 'https://github.com/VictorGoic0/VictorGoic0/releases/download/v1.0.1/VideoGenAI.mp4',
        description: `
            <p>Imagine if a single, simple (or long and complex as needed!) prompt generated TV-ready video advertisements within 3-4 minutes. That's our VideoAI Studio! With optional product/logo reference image upload, we implemented a multi-step video generation pipeline.</p>
            <p>Steps include checking for relevant asset images using our RAG pipeline, video and scene composition planning, storyboard image generation, parallel video chunk generation, final stitching, and an optional analysis + music track addition (depending on model used, some support sound out of the box).</p>
            <p>Post-generation processing also allows users to regenerate specific chunks and restitch! The three of us finished this project in one week. My primary role was designing and implementing most of the orchestration pipeline.</p>
            <p>This project was a great learning opportunity for combining all of our new skills up to this point. Models used include <code>GPT-4o-mini</code> for reasoning steps (checking for relevant assets step, planning step), <code>GPT-4 Turbo</code> for image analysis, <code>Flux Dev</code> for image gen, <code>Flux Dev-ControlNet</code> for image gen with reference asset, and <code>Google Veo 3.1</code> OR <code>Minimax Hailuo 2.3 Fast</code> for chunk generation. All deployed using Python FastAPI, and celery + redis task queues to scale multiple videos and/or multiple users.</p>
        `,
        tech: ['Python', 'FastAPI', 'Celery', 'Redis', 'GPT-4o-mini', 'GPT-4 Turbo', 'Flux Dev', 'Veo 3.1'],
        techTypes: ['backend', 'backend', 'other', 'database', 'ai', 'ai', 'ai', 'ai'],
        github: 'https://github.com/Kenji11/aivideo',
        live: 'https://videoai.gauntlet3.com'
    },
    'goicos-artist': {
        title: "Goico's Artist",
        video: 'https://github.com/VictorGoic0/VictorGoic0/releases/download/v1.0.1/GoicosArtist.mp4',
        description: `
            <p>This project was a solo side project I created to test out my skills with Cursor, AI Agents, Wispr Flow, Firebase, React, and Tailwind CSS. It is a collaborative canvas tool very similar to Figma! I built this as part of the Gauntlet AI fellowship program.</p>
            <p>It features real-time database sync for user presence, object selection, cursor movement, and object dragging. The rest of the persisted data is handled by the Firebase store, ensuring seamless collaboration between users.</p>
            <p>I also used this project to learn how to build my first agent. It's very basic, using the <code>OpenAI SDK</code> and <code>GPT-4 Turbo</code> to assist with object creation and even login forms! The AI assistant can help users create complex shapes and designs with simple natural language commands.</p>
        `,
        tech: ['React', 'Tailwind CSS', 'Firebase', 'OpenAI SDK', 'GPT-4 Turbo'],
        techTypes: ['frontend', 'frontend', 'database', 'ai', 'ai'],
        github: 'https://github.com/VictorGoic0/The-Gauntlets-Designer',
        live: 'https://gauntlets-designer.netlify.app'
    },
    'mathmentor-ai': {
        title: 'MathMentor AI',
        video: 'https://github.com/VictorGoic0/VictorGoic0/releases/download/v1.0.1/MathMentorAI.mp4',
        description: `
            <p>MathMentor AI is simple in concept, but powerful. It's a real world use case of how we can superpower learning using AI. What if you could use an LLM to actually teach you concepts as a personal tutor, rather than just spitting out answers? That's MathMentor AI, a personal math tutoring assistant for ANY level of mathematics.</p>
            <p>The trick is to provide our own state to the LLM to track problem attempts, user frustration, hint quantity, and hint strength, which can increase or reset depending on how stuck the student is. Simply type out a problem or upload an image of problems and see for yourself!</p>
            <p>I used <code>GPT-4 Turbo</code> and the Vercel AI SDK to power my tutoring agent. React, Tailwind, and a Next.js serverless API deployed on Vercel. The system adapts its teaching style based on student performance, providing more detailed hints when needed while encouraging independent problem-solving.</p>
        `,
        tech: ['Next.js', 'React', 'Tailwind CSS', 'GPT-4 Turbo', 'Vercel AI SDK'],
        techTypes: ['frontend', 'frontend', 'frontend', 'ai', 'ai'],
        github: 'https://github.com/VictorGoic0/Math-Tutoring-App',
        live: 'https://math-tutoring-app.vercel.app'
    },
    'spendsense': {
        title: 'SpendSense',
        video: 'https://github.com/VictorGoic0/VictorGoic0/releases/download/v1.0.1/SpendSense.mp4',
        description: `
            <p>SpendSense is another powerful real world use case of how to superpower existing applications using AI. In this case, I built an AI-powered recommendation engine. After being granted permission, the system outlines a "persona" based off of a user's spending, saving, and investment habits.</p>
            <p>The system can then recommend relevant products OR learning resources that fit the exact usecase. A good saver might want to learn about investing. Someone with lots of subscriptions might want a subscriptions manager! The recommendations are tailored to each user's unique financial situation and goals.</p>
            <p>Considering the reasoning required for accurate recommendations, I used <code>GPT-4o-mini</code> to power the recommendation engine. Persona assignment uses rule-based logic for the MVP. All deployed to a Python FastAPI backend using <code>OpenAI's SDK</code>.</p>
        `,
        tech: ['React', 'FastAPI', 'Python', 'GPT-4o-mini', 'OpenAI SDK'],
        techTypes: ['frontend', 'backend', 'backend', 'ai', 'ai'],
        github: 'https://github.com/VictorGoic0/SpendSense',
        live: 'https://spend-sense-goico.netlify.app'
    },
    'demand-letter': {
        title: 'Demand Letter Generator',
        video: 'https://github.com/VictorGoic0/VictorGoic0/releases/download/v1.0.1/DemandLetterGen.mp4',
        description: `
            <p>Generating Demand Letters can be a tedious process. What if we could automate only the boring parts? It turns out that at many law firms, the overall "structure" of the letter doesn't really change much. It's more about swapping who the client is, and what are the relevant details of this case.</p>
            <p>What if we could use templates, uploaded knowledge bases, and relevant client data to intelligently generate demand letters as many times and for as many people as needed, within seconds? That's the gist of Demand Letter Generator.</p>
            <p>Simply upload relevant assets (legal doc PDFs), create the required template(s), and generate a demand letter. Post-generation letters are editable and immediately exportable to .docx format. I used <code>GPT-4</code> for the letter generation step. Deployed to a FastAPI backend using <code>OpenAI's SDK</code>.</p>
        `,
        tech: ['React', 'FastAPI', 'Python', 'GPT-4', 'OpenAI SDK'],
        techTypes: ['frontend', 'backend', 'backend', 'ai', 'ai'],
        github: 'https://github.com/VictorGoic0/Demand-Letter-Gen',
        live: 'https://demand-letter-generator.netlify.app'
    },
    'email-ad': {
        title: 'Email Ad Generator',
        video: 'https://github.com/VictorGoic0/VictorGoic0/releases/download/v1.0.1/EmailGen.mp4',
        description: `
            <p>Generating email ads can be a tedious process. Coming up with original copy and assets is a unique and creative effort, but iterating on slightly different versions for A-B testing can be a real pain. What if we could automate only the tedious final assembly step using AI?</p>
            <p>Email Ad Generator is simple in concept. Depending on user role, users in a firm can either review ad campaigns or create them. Users upload logos, banners, descriptions, social media URLs, etc. We use a combination of rules-based categorization, LLM correction, and if needed, a manual user override step to make sure everything is in the right place.</p>
            <p>Then our next LLM call just needs to stitch it all together. Boom! Proof of concept generated. I used <code>GPT-3.5 Turbo</code> for asset categorization, and <code>GPT-4</code> for the email ad generation itself. Deployed to a Python FastAPI backend using <code>OpenAI's SDK</code>.</p>
        `,
        tech: ['React', 'FastAPI', 'Python', 'GPT-3.5 Turbo', 'GPT-4'],
        techTypes: ['frontend', 'backend', 'backend', 'ai', 'ai'],
        github: 'https://github.com/VictorGoic0/Email-Advertising-App',
        live: 'https://email-advertising-generator.netlify.app'
    },
    'rapid-photo': {
        title: 'Rapid Photo Upload',
        video: 'https://github.com/VictorGoic0/VictorGoic0/releases/download/v1.0.1/RapidPhotoUPload.mp4',
        description: `
            <p>Rapid Photo Upload was a fun exercise in learning Java for the first time. The goal was to be able to upload 100 images concurrently, with no front-end lag, within 5 minutes. Final version managed this in more like 10 seconds!</p>
            <p>I used Spring Boot for the backend, WebSockets for real-time progress tracking, and S3 for file upload and storage. The web app was built using React, and the mobile app was built using React Native.</p>
            <p>The key to achieving such high performance was implementing concurrent upload streams with proper backpressure handling, ensuring the client never gets overwhelmed while maximizing network throughput. Progress updates flow through WebSocket connections, giving users real-time feedback on their upload status.</p>
        `,
        tech: ['Java', 'Spring Boot', 'WebSockets', 'AWS S3', 'React', 'React Native'],
        techTypes: ['backend', 'backend', 'other', 'database', 'frontend', 'frontend'],
        github: 'https://github.com/VictorGoic0/RapidImageUpload',
        live: 'https://rapid-photo-upload.netlify.app'
    },
    'rxid': {
        title: 'RxID',
        image: 'images/RxID.PNG',
        description: `
            <p>This was a five-week project that I worked on in a team of 5 Web Developers, 3 DS Developers, 1 UX Designer, and 1 Team Lead. RxID is a web application that lets users identify medications by taking a picture or uploading an image.</p>
            <p>You can also identify the pill by searching it by imprint, name, shape, and/or color. Users can also save searched medications to a list that they can access at any time. They can generate reminders for when to take these pills, and they can write diary entries to keep track of how they are interacting with the medication and how it makes them feel.</p>
            <p>We built the frontend with React and Redux, used Express.js for our main API with PostgreSQL, and Flask for our machine learning API that handled image recognition and data scraping. This was an excellent learning experience in full-stack development and team collaboration.</p>
            <p><em>Note: Currently not live</em></p>
        `,
        tech: ['React', 'Redux', 'Express.js', 'PostgreSQL', 'Flask', 'Machine Learning'],
        techTypes: ['frontend', 'frontend', 'backend', 'database', 'backend', 'ai'],
        github: 'https://github.com/labs12-rxid/Front-End',
        githubBackend: 'https://github.com/labs12-rxid/Backend',
        live: null
    },
    'instagram-clone': {
        title: 'Instagram Clone',
        image: 'images/InstaPage.png',
        description: `
            <p>I started this project as part of a four-day Intermediate React unit. This week was probably the most crucial for increasing my understanding of lifecycle methods. I later came back to this project and refactored it to use redux and interact with an actual backend, which I built myself.</p>
            <p>The backend was originally deployed to Heroku, but is now live on AWS using RDS, EBS, CloudFront, and CodePipeline. The project includes full Instagram-like functionality including posts, comments, likes, and user profiles.</p>
            <p><strong>NOTE:</strong> Deploy and GitHub link updated with new repo! New repo is on a more modern stack of React hooks and Vite over class components and CRA. Heroku for backend. Slight facelift and deleting your own comments/posts added!</p>
        `,
        tech: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'AWS'],
        techTypes: ['frontend', 'frontend', 'backend', 'backend', 'database', 'other'],
        github: 'https://github.com/VictorGoic0/Insta-Clone-2.0',
        githubBackend: 'https://github.com/VictorGoic0/Insta-BE-AWS',
        live: 'https://insta-clone-2.netlify.app'
    }
};

class ModalManager {
    constructor() {
        this.modal = document.getElementById('project-modal');
        this.modalBody = this.modal.querySelector('.modal-body');
        this.modalClose = this.modal.querySelector('.modal-close');
        this.modalOverlay = this.modal.querySelector('.modal-overlay');
        
        this.init();
    }
    
    init() {
        // Attach click listeners to all "View Details" buttons
        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', (e) => {
                const projectId = e.target.dataset.project;
                this.openModal(projectId);
            });
        });
        
        // Close modal listeners
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modalOverlay.addEventListener('click', () => this.closeModal());
        
        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }
    
    openModal(projectId) {
        const project = projectData[projectId];
        if (!project) return;
        
        // Build modal content
        const mediaHtml = project.video 
            ? `<video controls src="${project.video}"></video>`
            : `<img src="${project.image}" alt="${project.title}" />`;
        
        const techBadgesHtml = project.tech.map((tech, index) => {
            const type = project.techTypes[index] || 'other';
            return `<span class="badge ${type}">${tech}</span>`;
        }).join('');
        
        const linksHtml = `
            <div class="modal-links">
                ${project.live ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn-primary">View Live Site</a>` : ''}
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary">View on GitHub</a>
                ${project.githubBackend ? `<a href="${project.githubBackend}" target="_blank" rel="noopener noreferrer" class="btn-secondary">Backend GitHub</a>` : ''}
            </div>
        `;
        
        this.modalBody.innerHTML = `
            <h2>${project.title}</h2>
            ${mediaHtml}
            ${project.description}
            <div class="tech-badges">
                ${techBadgesHtml}
            </div>
            ${linksHtml}
        `;
        
        // Show modal
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus trap
        this.modalClose.focus();
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Stop any videos playing
        const videos = this.modalBody.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ModalManager();
    });
} else {
    new ModalManager();
}

