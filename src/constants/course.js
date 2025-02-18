import course_img1 from '../assets/course_img1.png';
import course_img2 from '../assets/course_img2.png';
import course_img3 from '../assets/course_img3.png';
import course_img4 from '../assets/course_img4.png';
import course_img5 from '../assets/course_img5.png';

// Teacher Images
import T_image1 from '../assets/Ellipse 6.png';
import T_image2 from '../assets/Ellipse 6-1.png';
import T_image3 from '../assets/Ellipse 6-2.png';
import T_image4 from '../assets/Ellipse 6-3.png';
import T_image5 from '../assets/Ellipse 6-4.png';
import T_image6 from '../assets/Ellipse 6-5.png';
import T_image7 from '../assets/Ellipse 6-6.png';



export const Courses = [
    {
        id: 1,
        Img: course_img1,
        text: 'Programming',
        description: 'Learn front-end and back-end programming with essential technologies such as HTML, CSS, JavaScript, React, and Node.js. This course is perfect for beginners who want to break into the world of software development. Whether you’re looking to build websites or work with server-side applications, mastering both the front-end and back-end is key to becoming a full-stack developer. By the end of the course, you will have the skills to create dynamic web applications from scratch.',
        duration: '6 months',
        instructor: {
            name: 'Ivanov Nikolai',
            bio: 'A developer and mentor with 10 years of experience.',
            avatar: T_image1,
        },
        rating: 4.8,
        reviews: 120,
        price: '$ 700',
        process: [
            'Basic HTML and CSS',
            'JavaScript fundamentals and ES6+',
            'Front-end (React, Tailwind CSS)',
            'Back-end (Node.js, Express, MongoDB)',
            'Project creation and working with GitHub'
        ],
        keyFeatures: [
            'Hands-on practice with real projects',
            'Personal consultations with mentors',
            'Certificate and career assistance'
        ]
    },
    {
        id: 2,
        Img: course_img2,
        text: 'Design',
        description: "This course teaches the fundamentals of graphic design and UI/UX design using tools such as Photoshop, Figma, and Illustrator. Ideal for aspiring designers or those looking to transition into the design industry, this course provides the practical skills needed to create compelling visual content and user-centered designs. Whether you're interested in digital art, web design, or mobile app design, this course equips you with the tools to build an impressive portfolio.",
        duration: '4 months',
        instructor: {
            name: 'Kamilova Nargiza',
            bio: 'A renowned graphic designer and UI/UX specialist.',
            avatar: T_image2,
        },
        rating: 4.7,
        reviews: 95,
        price: '$ 499',
        process: [
            'Fundamentals of graphic design',
            'Hands-on practice with Photoshop and Illustrator',
            'UI/UX design principles',
            'Creating designs with Figma',
            'Interactive prototyping and testing'
        ],
        keyFeatures: [
            'Creating a design portfolio',
            'Working with real clients',
            'Certificate and career assistance'
        ]
    },
    {
        id: 3,
        Img: course_img3,
        text: 'Logistics Brokerage',
        description: 'This course provides theoretical and practical knowledge in logistics brokerage, focusing on freight transportation and transport systems. It is aimed at individuals looking to build a career in the logistics industry, specifically in brokerage roles. You will learn the ins and outs of managing transportation, dealing with contracts, and understanding international logistics systems. Ideal for those seeking to expand their skills in logistics management or start their own brokerage business.',
        duration: '5 months',
        instructor: {
            name: 'Jorayev Akbar',
            bio: 'A specialist with 15 years of experience in the logistics field.',
            avatar: T_image5,
        },
        rating: 4.6,
        reviews: 80,
        price: '$ 550',
        process: [
            'Logistics and transportation fundamentals',
            'Principles of working as a broker',
            'International freight transportation systems',
            'Documents and contracts',
            'Practical work and certification'
        ],
        keyFeatures: [
            'Study of international logistics systems',
            'Hands-on practice and certification',
            'Career support'
        ]
    },
    {
        id: 4,
        Img: course_img4,
        text: 'Video Editing and Special Effects',
        description: 'This course teaches the fundamentals of video editing, special effects, and animation using industry-standard tools like Adobe Premiere Pro and After Effects. Aimed at aspiring video editors and content creators, this course will give you the skills to create professional-quality video content. You’ll learn the art of storytelling through video, from basic editing techniques to advanced effects and color grading, which are essential for producing high-quality visual media for various platforms.',
        duration: '6 months',
        instructor: {
            name: 'Smirnova Nadya',
            bio: 'A professional video editor and animator.',
            avatar: T_image7,
        },
        rating: 4.9,
        reviews: 150,
        price: '$ 580',
        process: [
            'Video editing and shot composition',
            'Working with Adobe Premiere Pro',
            'After Effects and visual effects',
            'Color correction and sound design',
            'Creating a professional editing project'
        ],
        keyFeatures: [
            'Working on professional projects',
            'Certificate and career support',
            'Personal consultations with mentors'
        ]
    },
    {
        id: 5,
        Img: course_img5,
        text: 'Marketing',
        description: "Learn the basics of digital marketing and strategic planning, including SEO, SEM, and social media marketing. This course is tailored for individuals looking to launch or grow their marketing career, focusing on both theoretical knowledge and practical skills. Whether you're a business owner looking to expand your brand’s reach or someone entering the field of digital marketing, this course will provide you with the necessary skills to succeed in the competitive marketing industry.",
        duration: '4 months',
        instructor: {
            name: 'Andrey Kuznetsov',
            bio: 'A marketing specialist with 10 years of experience.',
            avatar: T_image6,  
        },
        rating: 4.9,
        reviews: 100,
        price: '$500',
        process: [
            'Basics of digital marketing',
            'SEO and SEM',
            'Social Media Marketing',
            'Email marketing strategies',
            'Marketing technologies and tools'
        ],
        keyFeatures: [
            'Learning through hands-on practice',
            'Career support in marketing',
            'Obtaining a certificate'
        ]
    }
];
