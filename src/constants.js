import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';
import githubLogo from './assets/github.png';
import icseLogo from './assets/icse_logo.jpg';
import netlifyLogo from './assets/netlify.png';
import javaLogo from './assets/java.png';
import firebaseLogo from './assets/firebase.png';
import companyLogo from './assets/company_logo.png';
import androidLogo from './assets/android.svg';
import expressLogo from './assets/express.png';
import javascriptLogo from './assets/javascript.png';
import collegeLogo from './assets/mietgroup_logo.jpeg';
import mongoLogo from './assets/mongodb.png';
import nodeLogo from './assets/nodejs.png';
import postmanLogo from './assets/postman.png';
import reactLogo from './assets/react.svg';
import reduxLogo from './assets/redux.png';
import tailwindLogo from './assets/tailwindcss.png';
import vercelLogo from './assets/vercel.png';
import vsCodeLogo from './assets/vscode.png';
import noteBookLogo from './assets/noteBookLogo.jpeg';
import QuickStayLogo from './assets/QuickStayLogo.png';
import todoLogo from './assets/todoLogo.png';
import techQuizLogo from './assets/techQuizLogo.jpeg';
import textUtilsLogo from './assets/TextUtils.png';

export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactLogo },
            { name: 'Redux', logo: reduxLogo },
            { name: 'Tailwind CSS', logo: tailwindLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node JS', logo: nodeLogo },
            { name: 'Express JS', logo: expressLogo },
            { name: 'MongoDB', logo: mongoLogo },
            { name: 'Firebase', logo: firebaseLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'Java', logo: javaLogo },
            { name: 'JavaScript', logo: javascriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vsCodeLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Netlify', logo: netlifyLogo },
            { name: 'Android Studio', logo: androidLogo },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: companyLogo,
        role: "Computer Scientist",
        company: "Belzabar Software",
        date: "June 2024 - Present",
        desc: "Developed and maintained enterprise applications using React, collaborating with backend teams for API integration. Built reusable UI components, improved UX, and contributed to QA through manual testing and bug verification.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Redux",
            "JSON"
        ],
    },
    {
        id: 1,
        img: companyLogo,
        role: "Intern",
        company: "Belzabar Software",
        date: "August 2023 - June 2024",
        desc: "Developed responsive internal web pages using React, JavaScript, HTML, and CSS, and built reusable components while collaborating with backend teams to ensure seamless integration.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "JSON"
        ],
    }
];

export const education = [
    {
        id: 0,
        img: collegeLogo,
        school: "Meerut Institute of Engineering and Technology, Meerut",
        date: "July 2019 - July 2023",
        grade: "8.32 CGPA",
        desc: "I completed my B.Tech in Computer Science from MIET, Meerut, where I built a strong foundation in programming and software development. My coursework included Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. The experience significantly contributed to my technical skills and professional growth.",
        degree: "Master of Computer Applications - MCA",
    },
    {
        id: 2,
        img: icseLogo,
        school: "Maria School, Jaspur",
        date: "Apr 2018 - March 2019",
        grade: "93.5%",
        desc: "I completed my class 12 education from Maria School, Jaspur, under the ISC board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
        degree: "ISC(XII) - PCM with Computer Science",
    },
    {
        id: 3,
        img: icseLogo,
        school: "Maria School, Jaspur",
        date: "Apr 2016 - March 2017",
        grade: "88.4%",
        desc: "I completed my class 10 education from Maria School, Jaspur, under the ICSE board, where I studied Science with Computer.",
        degree: "ICSE(X), Science with Computer Application",
    },
];

export const projects = [
    {
        id: 0,
        title: "iNotebook: Personal Note-Taking Web App",
        description: "A full-stack notes app with JWT authentication, secure CRUD operations, and responsive UI using React, React Hooks, and bcrypt for password hashing.",
        image: noteBookLogo,
        tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "JWT", "MongoDB"],
        github: "https://github.com/riya-verma27/iNotebook/blob/main/README.md",
    },
    {
        id: 1,
        title: "QuickStay: Hotel Management Web App",
        description: "Developed a full-stack MERN hotel booking app with role-based dashboards, Stripe payments, Clerk auth, and Cloudinary integration, using React Context and Tailwind CSS for secure, responsive UI.",
        image: QuickStayLogo,
        tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "Tailwind CSS", "JavaScript", "Cloudinary"],
        github: "https://github.com/riya-verma27/hotel-booking/blob/main/README.md",
    },
    {
        id: 2,
        title: "Todo App - Task Manager with Local Storage",
        description: "A React based task management app with  features like add/edit/delete, dark mode, local storage, and live date/time using React Hooks and animated, responsive UI.",
        image: todoLogo,
        tags: ["React JS", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/riya-verma27/TodoApp/blob/main/README.md"
    },
    {
        id: 3,
        title: "Tech Quiz - Android Quiz App",
        description: "Developed an Android quiz app using Java, XML, and Firebase with category-wise questions, timed quizzes, and real-time scoring.",
        image: techQuizLogo,
        tags: ["JAVA", "XML", "Firebase"],
        github: "https://github.com/riya-verma27/TechQuiz/blob/master/README.md"
    },
    {
        id: 4,
        title: "Text Utils - React Based Text Utility App",
        description: "This project is a simple React-based text utility application called TextUtils. The application provides various text manipulation functionalities.",
        image: textUtilsLogo,
        tags: ["React", "HTML","CSS"],
        github: "https://github.com/riya-verma27/TextUtils?tab=readme-ov-file"
    }
];