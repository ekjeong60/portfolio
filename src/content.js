
// URLs
const URLS = {
    linkedin: 'https://www.linkedin.com/in/ethan-jeong-02a8392b8/?isSelfProfile=true',
    github: 'https://github.com/ekjeong60',
    satellite: 'https://github.com/ekjeong60/Satellite-Tracker',
    space: 'https://github.com/ekjeong60/space-invaders',
    verify: 'https://learn.comptia.org/verify/certmaster-ce-for-security-exam-sy0-601',
    fire: 'https://www.fire.umd.edu/',
    resume: 'extras-images/Ethan_Jeong_Resume.pdf'
};


// ICONS

const ICON_GITHUB = `
    <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.75-.24.75-.54v-2.1c-3.07.66-3.72-1.3-3.72-1.3-.5-1.28-1.23-1.62-1.23-1.62-1-.68.08-.67.08-.67 1.11.08 1.7 1.13 1.7 1.13.99 1.7 2.58 1.2 3.2.91.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.49 0-1.21.43-2.2 1.14-2.97-.12-.28-.5-1.41.11-2.94 0 0 .93-.3 3.06 1.13a10.55 10.55 0 0 1 5.58 0c2.13-1.44 3.05-1.13 3.05-1.13.61 1.53.23 2.66.12 2.94.71.77 1.13 1.76 1.13 2.97 0 4.27-2.6 5.21-5.07 5.48.4.35.75 1.02.75 2.05v3.05c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z"/>
    </svg>
`;

const ICON_LINKEDIN = `
    <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8.1 18.7H5.1V9.1h3v9.6ZM6.6 7.8a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Zm12.1 10.9h-3v-4.67c0-1.11-.02-2.55-1.55-2.55-1.56 0-1.8 1.21-1.8 2.47v4.75h-3V9.1h2.88v1.31h.04a3.16 3.16 0 0 1 2.85-1.57c3.05 0 3.61 2.01 3.61 4.62v5.24Z"/>
    </svg>
`;

const ICON_FILE = `
    <svg aria-hidden="true" viewBox="0 0 24 24">
        <path
            d="M5 2h9l5 5v15H5zM14 2v5h5M8 12h8M8 16h8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
        />
    </svg>
`;


// HTML HELPERS

const a = (href, label, className = '') => `
    <a
        class="${className}"
        href="${href}"
        target="_blank"
        rel="noopener noreferrer"
    >
        ${label}
    </a>
`;

const pills = (items) => `
    <div class="tech-list">
        ${items.map((item) => `
            <span class="tech">${item}</span>
        `).join('')}
    </div>
`;

const section = (title, subtitle = '') => `
    <h2 class="section-heading">
        <span class="heading-prefix">##</span>
        ${title}
    </h2>

    ${subtitle ? `
        <p class="section-subtitle">${subtitle}</p>
    ` : ''}
`;

const actions = () => `
    <div class="action-group">
        ${a(
            URLS.linkedin,
            ICON_LINKEDIN + ' LinkedIn',
            'action-link primary'
        )}

        ${a(
            URLS.github,
            ICON_GITHUB + ' GitHub',
            'action-link'
        )}

        ${a(
            URLS.resume,
            ICON_FILE + ' Resume (PDF)',
            'action-link'
        )}
    </div>
`;

// PROJECT DATA

const PROJECTS = [
    {
        id: 'satellite',
        name: 'Satellite Tracker',
        date: 'Sep 2026',
        tag: 'Completed',
        tone: 'green',
        href: URLS.satellite,

        stack: [
            'Python',
            'Flask',
            'JavaScript',
            'HTML/CSS',
            'Globe.gl',
            'CelesTrak'
        ],

        description:
            'Built a full-stack satellite tracking application that ' +
            'displays 17,000 active satellites on a searchable ' +
            'interactive 3D globe. Parsed Two-Line Element data ' +
            'and calculated real-world latitude, longitude, and ' +
            'altitude using ECI/ECEF coordinate conversions.',

        learned:
            'Orbital coordinate systems, third-party data integration, ' +
            'full-stack UI design, and resilience through two-hour ' +
            'JSON caching and fallback when live data is unavailable.',

        details: 'Jun – Sep 2026'
    },

    {
        id: 'sms',
        name: 'Daily Schedule SMS Messenger',
        date: 'Feb 2025',
        tag: 'Completed',
        tone: 'green',
        href: URLS.github,

        stack: [
            'Python',
            'Twilio API',
            'Tkinter',
            'JSON'
        ],

        description:
            'Built an automated SMS reminder application with an ' +
            'admin-only interface for creating, editing, and deleting ' +
            'user schedules. Separated administration, scheduling, ' +
            'and messaging into maintainable modules.',

        learned:
            'API integration, event-driven scheduling, desktop GUI ' +
            'development, and modular software architecture.',

        details: 'Feb 2025',

        note:
            'Repository not published yet; title currently links ' +
            'to my GitHub profile.'
    },

    {
        id: 'space',
        name: 'Space Invaders Game',
        date: 'Mar 2025',
        tag: 'Completed',
        tone: 'green',
        href: URLS.space,

        stack: [
            'Java',
            'OOP',
            'Collision detection'
        ],

        description:
            'Developed a 2D arcade game with custom polygon-based ' +
            'collision detection for ships and projectiles, health ' +
            'and scoring systems, and randomized, increasingly ' +
            'difficult enemy rounds.',

        learned:
            'Object-oriented design with inheritance and interfaces, ' +
            'reusable game components, collision logic, and balancing ' +
            'difficulty through gameplay systems.',

        details: 'Mar 2025'
    },

    {
        id: 'scanner',
        name: 'Python Vulnerability Scanner',
        date: 'In development',
        tag: 'In progress',
        tone: 'gold',
        href: null,

        stack: [
            'Python',
            'AST',
            'Static analysis',
            'Rule engine',
            'pytest',
            'GitHub Actions (planned)'
        ],

        description:
            'Building a Python static application security testing ' +
            'tool to identify risky code patterns through AST ' +
            'parsing and configurable detection rules. The goal ' +
            'is to report vulnerable files, functions, line numbers, ' +
            'evidence, and severity, with a future GitHub Actions ' +
            'workflow that fails security checks for high-risk findings.',

        learned:
            'Currently learning AST traversal, vulnerability taxonomies, ' +
            'rule-based static analysis, findings reporting, and ' +
            'eventually taint tracking and CI security gates.',

        details: 'Current project',

        note:
            'Design and workflow described here are planned; ' +
            'they are not presented as completed scanning features.'
    }
];

// PROJECT CARD TEMPLATE

const card = (project) => `
    <article class="card">

        <div class="card-top">
            <span class="tag ${project.tone}">
                ${project.tag}
            </span>

            <span class="date">
                ${project.date}
            </span>
        </div>

        <h3>
            ${project.href
                ? a(project.href, project.name, 'card-title-link')
                : project.name
            }
        </h3>

        <p>${project.description}</p>

        ${pills(project.stack)}

        <div class="learning">
            <strong>
                What I learned${project.id === 'scanner'
                    ? ' / am learning'
                    : ''
                }:
            </strong>

            ${project.learned}
        </div>

        ${project.note ? `
            <p
                class="muted"
                style="font-size:11px;margin:12px 0 0"
            >
                ${project.note}
            </p>
        ` : ''}

        <div class="card-footer">

            ${project.href
                ? a(
                    project.href,
                    ICON_GITHUB + ' View repository ↗',
                    'inline-link'
                )
                : '<span class="muted">Repository not yet shared</span>'
            }

            ${project.id === 'scanner' ? `
                <button
                    class="plain-link"
                    data-open="scanner"
                >
                    View architecture →
                </button>
            ` : ''}

        </div>

    </article>
`;

// INDIVIDUAL PROJECT PAGE TEMPLATE

function projectDetail(project) {
    return `
        ${section(
            project.name,
            `${project.details} · ${project.tag}`
        )}

        <div class="detail-card">

            <div class="pill-header">

                <span class="tag ${project.tone}">
                    ${project.tag}
                </span>

                ${project.href
                    ? a(project.href, 'Open GitHub ↗', 'inline-link')
                    : ''
                }

            </div>

            <p>${project.description}</p>

            <h4>Tools & technologies</h4>

            ${pills(project.stack)}

            <div class="learning">
                <strong>
                    What I learned${project.id === 'scanner'
                        ? ' / am learning'
                        : ''
                    }:
                </strong>

                ${project.learned}
            </div>

            ${project.note ? `
                <p class="muted" style="font-size:11px">
                    ${project.note}
                </p>
            ` : ''}

        </div>

        <div class="card-footer">
            <button class="plain-link" data-open="projects">
                ← All projects
            </button>
        </div>
    `;
}

// VSCODE PAGES

const pages = {
    // WELCOME PAGE
    welcome: {
        file: 'welcome.md',
        folder: '',
        language: 'Markdown',

        render: () => `
            <section class="hero">

                <div class="eyebrow">
                    // Welcome to My Portfolio
                </div>

                <h1>
                    <span class="gradient-text">
                        Ethan Jeong
                    </span>
                </h1>

                <strong class="hero-subtitle">
                    MAJOR: Computer Science Junior<br>
                    University of Maryland, College Park<br>
                    Year: Class Of 2028
                </p>

                <p class="hero-description">
                    I'm an aspiring software developer with a passion for building reliable software and exploring cybersecurity. 
                    Through personal projects and my student research experience, I've discovered that what I enjoy most is the process of problem-solving. 
                    I like breaking down complex problems, planning solutions, and overcoming the unexpected challenges that arise along the way. 
                    In the development process, the most fulfilling part for me is seeing an idea come to life as a finished, functional product.
                </p>

                ${actions()}

            </section>

            <div class="stat-grid">

                <div class="stat">
                    <strong>3.579</strong>
                    <small>UMD GPA</small>
                </div>

                <div class="stat">
                    <strong>4</strong>
                    <small>Projects · 1 in progress</small>
                </div>

                <div class="stat">
                    <strong>Security+</strong>
                    <small>CompTIA certified</small>
                </div>

            </div>

            ${section(
                'Explore my workspace',
                'Select any folder on the left, or use these shortcuts to browse my work.'
            )}

            <div class="cards">

                <article class="card">

                    <div class="card-top">
                        <span class="tag">01 / About</span>
                    </div>

                    <h3>My story</h3>

                    <p>
                        How Java sparked my interest in CS, the courses
                        that built my foundation, and the problems
                        I'm excited to solve.
                    </p>

                    <div class="card-footer">
                        <button class="plain-link" data-open="story">
                            Read story →
                        </button>
                    </div>

                </article>

                <article class="card">

                    <div class="card-top">
                        <span class="tag">02 / Projects</span>
                    </div>

                    <h3>Things I've built</h3>

                    <p>
                        Full-stack satellite data visualization,
                        productivity tools, a Java game, and
                        security tooling in development.
                    </p>

                    <div class="card-footer">
                        <button class="plain-link" data-open="projects">
                            Explore projects →
                        </button>
                    </div>

                </article>

            </div>

            <p class="footer-note">
                // This portfolio is inspired by Visual Studio Code.
                Click a file to open it in the editor.
            </p>
        `
    },

    // ABOUT ME
    story: {
        file: 'story.md',
        folder: 'about-me',
        language: 'Markdown',

        render: () => `
            ${section(
                'About Me',
                'A little about my background, where I started, and where I’m going.'
            )}

            <div class="detail-card">
                <div class="eyebrow">// my journey</div>
                <h3>
                    From my first Java program to the systems
                    I build today
                </h3>
                <p>
                    My interest in computer science started with my
                    dad, who works as a software developer. Warching him
                    create websites and grow them was astounding to me as 
                    I watched him code thousands of mysterious
                    lines and build a fully functional website. This sparked
                    my interest in web development and how I can also create
                    applications like the ones we use everyday. During my
                    sophomore year of high school, I started learning Java,
                    writing my first programs and discovering how much I
                     enjoyed turning ideas into working software.
                </p>
                <p>
                    That curiosity grew into a more serious pursuit
                    at the University of Maryland, College Park,
                    where I'm now a junior majoring in Computer Science
                    in the College of Computer, Mathematical, and
                    Natural Sciences (CMNS). Through coursework and
                    hands-on projects, I've developed my skills across
                    programming, systems, web development, and
                    data science.
                </p>
                <p>
                    Outside the classroom, I've built a satellite-tracking
                    application, a schedule-to-SMS messaging tool, and
                    a 2D Space Invaders game. My growing interest in
                    cybersecurity led me to earn CompTIA Security+,
                    and I'm now designing an AST-based Python vulnerability
                    scanner to explore how security can be built into
                    the development workflow.
                </p>
            </div>

            ${section('At a glance')}

            <div class="stat-grid">

                <div class="stat">
                    <strong>Junior</strong>
                    <small>Current year</small>
                </div>

                <div class="stat">
                    <strong>May 2028</strong>
                    <small>Expected graduation</small>
                </div>

                <div class="stat">
                    <strong>UMD</strong>
                    <small>College Park · CMNS</small>
                </div>

            </div>

            ${actions()}
        `
    },


    // EDUCATION
    education: {
        file: 'education.md',
        folder: 'about-me',
        language: 'Markdown',

        render: () => `
            ${section(
                'Education',
                'Academic foundation and recognition.'
            )}

            <div class="timeline">

                <article class="timeline-item">

                    <h3>University of Maryland, College Park</h3>

                    <span class="muted">
                        College of Computer, Mathematical,
                        and Natural Sciences (CMNS)
                    </span>

                    <span class="date">
                        B.S. Computer Science · Junior · Expected May 2028
                    </span>

                    <p><strong>GPA:</strong> 3.57</p>

                    <p>
                        <strong>Recognition:</strong>
                        Dean’s List (Fall 2024, Spring 2025);
                        President’s Scholarship; participation
                        in the FIRE undergraduate research program.
                    </p>

                    <h4>Relevant coursework</h4>

                    ${pills([
                        'Object-Oriented Programming',
                        'Computer Systems',
                        'Web Application Development',
                        'Algorithms',
                        'Data Science'
                    ])}

                </article>

                <article class="timeline-item">

                    <h3>George Mason University</h3>

                    <span class="muted">
                        Dual Enrollment Program ·
                        Senior year of high school
                    </span>

                    <span class="date">
                        Aug 2023 – Jun 2024
                    </span>

                    <p><strong>GPA:</strong> 4.0</p>

                    <p>
                        Completed college-level Matrix Algebra and
                        Multivariable Calculus while in high school.
                    </p>

                    ${pills([
                        'Matrix Algebra',
                        'Multivariable Calculus'
                    ])}

                </article>

            </div>
        `
    },

    // TECHNICAL SKILLS

    skills: {
        file: 'skills.json',
        folder: 'about-me',
        language: 'JSON',

        render: () => `
            ${section(
                'Technical Skills',
                'Languages, frameworks, and areas I’m exploring.'
            )}

            <div class="detail-card skills-list">

                <div class="skill-row">
                    <strong>Languages</strong>
                    <span>
                        Python, Java, JavaScript, HTML/CSS, SQL,
                        C, x86-64 Assembly, OCaml, Rust
                    </span>
                </div>

                <div class="skill-row">
                    <strong>Tools & frameworks</strong>
                    <span>
                        Git/GitHub, Flask, REST APIs, Twilio,
                        Tkinter, Globe.gl, Pandas
                    </span>
                </div>

                <div class="skill-row">
                    <strong>Current interests</strong>
                    <span>
                        Cybersecurity, secure software development,
                        static code analysis, AWS Cloud
                    </span>
                </div>

            </div>

            <pre class="code-block"><span class="comment">// developer-profile.json</span>
{
  <span class="key">"name"</span>: <span class="string">"Ethan Jeong"</span>,
  <span class="key">"major"</span>: <span class="string">"Computer Science"</span>,
  <span class="key">"university"</span>: <span class="string">"University of Maryland"</span>,
  <span class="key">"year"</span>: <span class="string">"Junior"</span>,
  <span class="key">"interests"</span>: [<span class="string">"Software Engineering"</span>, <span class="string">"Cybersecurity"</span>]
}</pre>
        `
    },

    // CERTIFICATIONS
    certifications: {
        file: 'certifications.md',
        folder: 'certifications',
        language: 'Markdown',

        render: () => `
            ${section(
                'Certifications',
                'Credentials I’ve earned and cloud certifications I’m working toward.'
            )}

            <h3 class="eyebrow" style="margin-top:32px">
                ✓ ACHIEVED
            </h3>

            <div class="detail-card">

                <div class="pill-header">

                    <div>
                        <div class="cert-badge">Sec+</div>

                        <h3 style="margin-bottom:5px">
                            CompTIA Security+ (SY0-701)
                        </h3>

                        <div class="date">
                            Earned August 2026
                        </div>
                    </div>

                    <span class="tag green">Certified</span>

                </div>

                <p>
                    A foundational cybersecurity certification covering
                    security operations, threat and vulnerability management,
                    network and infrastructure security, identity and access
                    management, and security architecture principles.
                </p>

                <p>
                    <strong>Verification reference supplied:</strong>

                    <code style="font-size:12px;overflow-wrap:anywhere">
                        711962ead855466fa6902eebd6dab0c6
                    </code>
                </p>

                ${a(
                    URLS.verify,
                    'Verify Here',
                    'inline-link'
                )}

            </div>

            <h3 class="eyebrow" style="margin:35px 0 20px">
                ◌ IN PROGRESS / PLANNED
            </h3>

            <div class="two-column">

                <div class="compact-card">

                    <span class="tag gold">In progress</span>

                    <h3>AWS Certified Cloud Practitioner</h3>

                    <p>
                        Studying AWS cloud concepts, core services,
                        security, pricing, and cloud architecture
                        fundamentals.
                    </p>

                </div>

                <div class="compact-card">

                    <span class="tag">Planned next</span>

                    <h3>
                        AWS Certified Solutions Architect – Associate
                    </h3>

                    <p>
                        Next step after Cloud Practitioner, focused on
                        designing secure, resilient, high-performing
                        cloud solutions.
                    </p>

                </div>

            </div>
        `
    },

    // PROJECTS OVERVIEW
    projects: {
        file: 'projects.md',
        folder: 'projects',
        language: 'Markdown',

        render: () => `
            ${section(
                'Projects',
                'A collection of completed software projects and what I’m currently working on.'
            )}

            <div class="cards">
                ${PROJECTS.map(card).join('')}
            </div>
        `
    },


    // INDIVIDUAL PROJECT PAGES
     satellite: {
        file: 'satellite-tracker.py',
        folder: 'projects',
        language: 'Python',

        render: () => projectDetail(PROJECTS[0])
    },

    sms: {
        file: 'sms-messenger.py',
        folder: 'projects',
        language: 'Python',

        render: () => projectDetail(PROJECTS[1])
    },

    space: {
        file: 'space-invaders.java',
        folder: 'projects',
        language: 'Java',

        render: () => projectDetail(PROJECTS[2])
    },

    // VULNERABILITY SCANNER

    scanner: {
        file: 'vulnerability-scanner.py',
        folder: 'projects',
        language: 'Python',

        render: () => `
            ${projectDetail(PROJECTS[3])}

            ${section(
                'Planned architecture',
                'Based on my “Building a Python vulnerability scanner” project plan.'
            )}

            <div class="flowchart">

                ${[
                    'GitHub push / pull request',
                    'Python AST parser',
                    'AST analyzer',
                    'Rule engine',
                    'Findings report',
                    'CI check / dashboard'
                ].map((step, index) => `
                    ${index
                        ? '<span class="flow-arrow">→</span>'
                        : ''
                    }

                    <span class="flow-node">
                        ${step}
                    </span>
                `).join('')}

            </div>

            <div class="detail-card">

                <h3>Detection workflow</h3>

                <p>
                    <strong>1. Parse:</strong>
                    Convert Python source code into an Abstract
                    Syntax Tree using <code>ast.parse()</code>.
                </p>

                <p>
                    <strong>2. Analyze:</strong>
                    Traverse nodes with <code>ast.walk()</code>
                    or <code>ast.NodeVisitor</code> and inspect
                    calls, assignments, names, and attributes.
                </p>

                <p>
                    <strong>3. Evaluate rules:</strong>
                    Match node patterns against a rule dictionary
                    or mapping; eventually track untrusted values
                    through assignments using taint analysis.
                </p>

                <p>
                    <strong>4. Report:</strong>
                    Produce machine-readable and terminal findings
                    with file, line number, function, vulnerability
                    type, evidence, and severity.
                </p>

                <p>
                    <strong>5. Integrate:</strong>
                    Run automated tests and GitHub Actions on
                    push/pull requests. Planned merge checks would
                    fail when high-severity findings remain, once
                    branch protection is configured.
                </p>

            </div>

            <div class="detail-card">

                <h3>Vulnerability categories being studied</h3>

                ${pills([
                    'SQL injection',
                    'Cross-site scripting (XSS)',
                    'Command injection',
                    'Hardcoded secrets',
                    'Unsafe deserialization',
                    'Insecure configuration'
                ])}

                <p class="muted">
                    Version 1 focuses on Python static patterns;
                    identifying all of these categories accurately
                    —including browser-side XSS—requires additional
                    language coverage or deeper data-flow analysis.
                    The scanner is in development, not a certified
                    or complete security audit.
                </p>

            </div>

            ${section('Learning roadmap')}

            <div class="timeline">

                ${[
                    [
                        'Week 1',
                        'Python AST basics',
                        'Explore ast.parse, ast.dump, ast.walk, NodeVisitor; print function calls and line numbers.'
                    ],
                    [
                        'Week 2',
                        'Vulnerability rules',
                        'Build a dictionary of insecure patterns, explanations, rule IDs, and severities.'
                    ],
                    [
                        'Week 3',
                        'Analysis engine',
                        'Traverse AST nodes and record accurate findings using classes and dataclasses.'
                    ],
                    [
                        'Week 4',
                        'Directory scanning & reporting',
                        'Scan Python files with pathlib; handle syntax errors and export JSON.'
                    ],
                    [
                        'Week 5',
                        'Testing & CI',
                        'Add pytest coverage, GitHub Actions, and failure exit codes.'
                    ],
                    [
                        'Week 6',
                        'Taint analysis',
                        'Follow untrusted input from sources to dangerous sinks like eval().'
                    ]
                ].map((row) => `
                    <div class="timeline-item">

                        <h3>${row[0]} — ${row[1]}</h3>

                        <p>${row[2]}</p>

                    </div>
                `).join('')}

            </div>
        `
    },

    // EXPERIENCE

    
    experience: {
        file: 'fire-research.md',
        folder: 'experience',
        language: 'Markdown',

        render: () => `
            ${section(
                'Research Experience',
                'Practical research with real experiments, data collection, and team collaboration.'
            )}

            <article class="detail-card">

                <div class="pill-header">

                    <a
                        href="${URLS.fire}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="fire-logo-link"
                        aria-label="Visit UMD FIRE Program"
                    >
                        <img
                            src="extras-images/umd-fire-logo.avif"
                            alt="University of Maryland FIRE Program Logo"
                            class="fire-logo"
                        />
                    </a>

                    <span class="tag green">
                        Completed
                    </span>

                </div>

                <h3 style="font-size:23px;margin-bottom:6px">
                    Student Researcher · FIRE Program
                </h3>

                <div class="muted">
                    University of Maryland, College Park
                </div>
                <div class="date" style="margin-top:10px">
                    Aug 2024 - Dec 2025
                </div>
                <p>
                    Worked on a three-person research team investigating
                    whether elevated carbon dioxide concentrations
                    influence methane production in Jug Bay wetland soil.
                </p>
                <ul class="highlight-list">
                    <li>
                        Designed and conducted two incubation trials
                        with CO₂ headspace concentrations of
                        0, 400, 450, and 500 ppm.
                    </li>
                    <li>
                        Collected methane readings at multiple
                        time points over 10-day trials using
                        gas chromatography.
                    </li>
                    <li>
                        Analyzed experimental data in Excel and
                        communicated results to the research team.
                    </li>
                    <li>
                        Observed rising methane concentrations across
                        all tested CO₂ treatments, with the highest
                        final reading in the 500 ppm treatment;
                        the results suggested a possible relationship,
                        not proof of causation.
                    </li>
                </ul>

                ${pills([
                    'Experimental research',
                    'Gas chromatography',
                    'Excel',
                    'Data analysis',
                    'Scientific communication'
                ])}

                <div class="learning">
                    <strong>What I learned:</strong>
                    Experimental design, maintaining data consistency,
                    analyzing uncertainty, team collaboration,
                    and explaining scientific findings without
                    overstating the results.
                </div>

                <div class="card-footer">
                    ${a(
                        URLS.fire,
                        'Learn about UMD FIRE ↗',
                        'inline-link'
                    )}
                </div>

            </article>`
    }

};


// EXPLORER FOLDER STRUCTURE
const groups = [
    {
        title: 'about-me',
        files: ['story', 'education', 'skills']
    },
    {
        title: 'certifications',
        files: ['certifications']
    },
    {
        title: 'projects',
        files: ['projects', 'satellite', 'sms', 'space', 'scanner']
    },
    {
        title: 'experience',
        files: ['experience']
    }
];


export { URLS, pages, groups };
