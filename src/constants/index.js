export const navItems = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Experience',
        href: '#experience',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#epilogue',
    },
];

export const workExperience = [
    {
        id: 1,
        company: 'Trend Micro',
        role: 'Software Engineer',
        duration: 'May 2024 - Present',
        desc: "At Trend Micro, I am currently adding new features to Trend Vision One™. I am using TypeScript, Axios and both React and Vue.js to build new reusable frontend components. Some interfaces I've implemented include user modals, advanced tables and custom notification alerts. I have also implemented backend report sharing services using Golang, Gin Framework, MongoDB and AWS services (SES, S3) to increase user engagement across several assessment sharing applications.",
        icon: '/assets/trend.svg',
    },
    {
        id: 2,
        company: 'Nokia',
        role: 'Software Engineer Intern',
        duration: 'Sept 2023 - Dec 2023',
        desc: 'At Nokia, this time in my second term, I continued to develop full stack features to enhance NetGuard Cybersecurity Dome. I created new user-facing frontend components using React, TypeScript and Apollo Client to fetch and cache data from GraphQL. Some components I created were interactive forms, toggles and custom loading skeletons. In the backend, I contributed to new services using TypeScript, MongoDB and several Azure APIs. I also optimized integration test pipelines by improving automated tests using Python and Robot Framework.',
        icon: '/assets/nokia.svg',
    },
    {
        id: 3,
        company: 'Motive',
        role: 'Software Engineer Intern',
        duration: 'May 2023 - Aug 2023',
        desc: "At Motive, I contributed to the development of iSIM Secure Connect to assist in the management and provisioning services to mobile devices. I helped develop functional and modular TypeScript libraries to support telco encoding and decoding in accordance to universal telecom standards (UMTS). I created interactive and responsive UI components using Angular and TypeScript and helped migrate from Angular v8 to v15. I also developed new backend services using Spring Boot, Java and PostgreSQL.",
        icon: '/assets/motive.png',
    },
    {
        id: 4,
        company: 'Nokia',
        role: 'Software Engineer Intern',
        duration: 'Jan 2023 - Apr 2023',
        desc: "At Nokia, I drove feature development for NetGuard Cybersecurity Dome and delivered multiple robust full-stack solutions. On the frontend, I created interactive React components with TypeScript and Apollo Client for efficient GraphQL data handling. For the backend, I built and optimized services using TypeScript, MongoDB, and Microsoft Sentinels REST API. Additionally, I improved CI/CD efficiency by enhancing existing and adding new automated integration tests with Python and Robot Framework, reducing pipeline completions times by ~8%.",
        icon: '/assets/nokia.svg',
    },
    {
        id: 5,
        company: 'Telesat',
        role: 'Software Developer Intern',
        duration: 'May 2022 - Dec 2022',
        desc: "At Telesat, I worked on internal tools to help facilitate the operations of Lightspeed LEO satellite network. I championed a POC solution to using JavaScript, Node.js, Express and Webex API to reduce call center queues by 15%. I developed an emailing service using C# to enhance error detection and logging. Lastly, I maintained several SQL Server databases, wrote new SQL stored procedures and created automated scripts to manage server environments and configurations.",
        icon: '/assets/telesat.svg',
    },
];

export const enterpriseProjects = [
    {
        title: 'Trend Vision One™',
        desc: 'Trend Vision One™ is a leading XDR cybersecurity platform that integrates security data from endpoints, servers, cloud workloads, and networks into a single, comprehensive view. I worked on key aspects of this platform, allowing organizations to quickly identify and respond to complex security threats - enabling businesses to stay ahead of evolving cyber threats.',
        subdesc: 'What I worked with: ',
        href: 'https://www.trendmicro.com/en_ca/business/products/one-platform.html',
        logo: '/assets/proj-logo1.png',
        logoStyle: {
            backgroundColor: '#610909',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        skills: [
            {
                id: 1,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 2,
                name: 'Golang',
                path: '/assets/golang.png',
            },
            {
                id: 3,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 4,
                name: 'Vue.js',
                path: '/assets/vue.png',
            },
            {
                id: 6,
                name: 'Figma',
                path: '/assets/figma.svg',
            },
            {
                id: 7,
                name: 'AWS',
                path: '/assets/aws.png',
            },
        ],
    },
    {
        title: 'NetGuard Cybersecurity Dome',
        desc: "NetGuard Cybersecurity Dome is an award winning security orchestration software tailored for the telecommunications industry. My tenure here has allowed me to develop new features towards real-time threat detection, automated incident response, and comprehensive security insights. The mission - to safeguard critical 5G networks for global telco providers.",
        subdesc: 'What I worked with: ',
        href: 'https://www.nokia.com/cybersecurity/xdr/netguard-cybersecurity-dome/',
        logo: '/assets/proj-logo2.png',
        logoStyle: {
            backgroundColor: '#152638',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        skills: [
            {
                id: 1,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 2,
                name: 'Python',
                path: '/assets/python.png',
            },
            {
                id: 3,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 4,
                name: 'GQL',
                path: '/assets/gql.png',
            },
            {
                id: 5,
                name: 'Kubernetes',
                path: '/assets/k8s.png',
            },
            {
                id: 6,
                name: 'Azure',
                path: '/assets/azure.png',
            },
        ],
    },
    {
        title: 'iSIM Secure Connect',
        desc: 'Motive SIM (formerly iSIM Secure Connect) provides secure and efficient embedded SIM technology, enabling remote provisioning and management of cellular connectivity. I contributed to new capabilities on this project, allowing enterprises to enroll in secure device onboarding, remote subscription management and unlock further IoT and 5G opportunities.',
        subdesc: 'What I worked with:',
        href: 'https://motive.com/sim',
        logo: '/assets/proj-logo3.png',
        logoStyle: {
            backgroundColor: '#18350a',
            border: '0.2px solid #1b360e',
            boxShadow: '0px 0px 60px 0px #1b360e',
        },
        spotlight: '/assets/spotlight3.png',
        skills: [
            {
                id: 1,
                name: 'Javascript',
                path: '/assets/javascript.png',
            },
            {
                id: 2,
                name: 'Java',
                path: '/assets/java.svg',
            },
            {
                id: 3,
                name: 'Angular',
                path: '/assets/angular.png',
            },
            {
                id: 4,
                name: 'Spring',
                path: '/assets/spring.png',
            },
            {
                id: 5,
                name: 'PostgreSQL',
                path: '/assets/postgresql.png',
            },
            {
                id: 6,
                name: 'Azure',
                path: '/assets/azure.png',
            },
        ],
    },
];

export const personalProjects = [
    {
        id: 1,
        name: 'Interactive Brokers Trading CLI',
        subname: 'Buy and sell stock from your command line.',
        desc:
            'If you have a passion for trading and personal finance, check out this command line trading tool I created. You can connect your personal Interactive Brokers account with this CLI to place trades and view market data on your live/paper trading account.',
        href: 'https://github.com/allan-wang9/interactive-brokers-trading-cli',
    },
    {
        id: 2,
        name: 'Green Vehicle Incentive Tracker',
        subname: 'Incentivized to drive green.',
        desc:
            'Have you ever considered buying a eco-friendly car like a hybrid or battery electric vehicle (or maybe even a hydrogen car) in Canada? Select your brand, model and province. Then find all the incentives associated your selected vehicle in your province.',
        href: 'https://github.com/allan-wang9/vehicle-incentive-app',
    },
];
