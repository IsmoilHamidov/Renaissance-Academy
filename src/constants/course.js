import course_img1 from '../assets/course_img1.png';
import course_img2 from '../assets/course_img2.png';
import course_img3 from '../assets/course_img3.png';
import course_img4 from '../assets/course_img4.png';
import course_img5 from '../assets/course_img5.png';

// Teacher Images
import T_image1 from '../assets/tutor_1.jpg';
import T_image2 from '../assets/tutor_2.jpg';
import T_image3 from '../assets/tutor_3.jpg';
import T_image4 from '../assets/tutor_4.jpg';
import T_image5 from '../assets/tutor_5.jpg';
import T_image6 from '../assets/tutor_6.png';
import T_image7 from '../assets/tutor_7.jpg';



export const Courses = [
    {
        id: 1,
        Img: course_img1,
        text: 'Programming',
        description:
        'Learn front-end and back-end programming with essential technologies such as HTML, CSS, JavaScript, React, and Node.js. This course is perfect for beginners who want to break into the world of software development. Whether you’re looking to build websites or work with server-side applications, mastering both the front-end and back-end is key to becoming a full-stack developer. By the end of the course, you will have the skills to create dynamic web applications from scratch. You’ll also gain hands-on experience with modern tools like Git, Tailwind CSS, and MongoDB, ensuring you’re ready for real-world projects. Our instructors will guide you through every step, from writing your first line of code to deploying your first application.',
        duration: '6 months',
        schedule: '3 times a week',
        language: 'Russian, English',
        instructor: {
            name: 'Ivanov Nikolai',
            bio: 'A developer and mentor with 10 years of experience.',
            avatar: T_image5,
        },
        rating: 4.8,
        reviews: 120,
        price: '$ 700',
        process: [
            'Basic HTML and CSS: Learn the fundamentals of web development.',
            'JavaScript fundamentals and ES6+: Master JavaScript and modern syntax.',
            'Front-end development with React and Tailwind CSS: Build responsive and interactive user interfaces.',
            'Back-end development with Node.js and Express: Create server-side applications and APIs.',
            'Database management with MongoDB: Learn to store and manage data efficiently.',
            'Version control with Git and GitHub: Collaborate on projects and manage code changes.',
            'Deployment and hosting: Learn to deploy applications using platforms like Vercel and Heroku.',
            'Final project: Build a full-stack application from scratch.',
          ],
          keyFeatures: [
            'Hands-on practice with real-world projects.',
            'Personalized feedback and consultations with mentors.',
            'Access to a community of like-minded learners.',
            'Certificate of completion to showcase your skills.',
            'Career support, including resume reviews and interview preparation.',
            'Lifetime access to course materials and updates.',
          ],
    },
    {
        id: 2,
        Img: course_img2,
        text: 'Design',
        description:
        "This course teaches the fundamentals of graphic design and UI/UX design using tools such as Photoshop, Figma, and Illustrator. Ideal for aspiring designers or those looking to transition into the design industry, this course provides the practical skills needed to create compelling visual content and user-centered designs. Whether you're interested in digital art, web design, or mobile app design, this course equips you with the tools to build an impressive portfolio. You’ll learn how to create wireframes, prototypes, and high-fidelity designs while understanding the principles of color theory, typography, and user experience. By the end of the course, you’ll have a professional portfolio ready to showcase to potential employers or clients.",
        duration: '4 months',
        schedule: '4 times a week',
        language: 'Russian, Uzbek',
        instructor: {
            name: 'Kamilova Nargiza',
            bio: 'A renowned graphic designer and UI/UX specialist.',
            avatar: T_image2,
        },
        rating: 4.7,
        reviews: 95,
        price: '$ 499',
        process: [
            'Fundamentals of graphic design: Learn design principles and theory.',
            'Hands-on practice with Photoshop and Illustrator: Create stunning visuals and graphics.',
            'UI/UX design principles: Understand user-centered design and usability.',
            'Creating designs with Figma: Build wireframes and prototypes.',
            'Interactive prototyping and testing: Test and refine your designs.',
            'Advanced techniques in typography and color theory: Master the art of visual communication.',
          ],
          keyFeatures: [
            'Hands-on projects to build a professional portfolio.',
            'One-on-one feedback from industry experts.',
            'Access to design resources and templates.',
            'Certificate of completion to boost your career.',
            'Career support, including portfolio reviews and job placement assistance.',
            'Lifetime access to course materials and updates.',
          ],
    },
    {
        id: 3,
        Img: course_img3,
        text: 'Logistics Brokerage',
        description:
        'This course provides theoretical and practical knowledge in logistics brokerage, focusing on freight transportation and transport systems. It is aimed at individuals looking to build a career in the logistics industry, specifically in brokerage roles. You will learn the ins and outs of managing transportation, dealing with contracts, and understanding international logistics systems. Ideal for those seeking to expand their skills in logistics management or start their own brokerage business. The course covers key topics such as supply chain management, customs regulations, and risk management. By the end of the course, you’ll be equipped with the knowledge to navigate the complexities of global logistics and provide value to your clients.',
        duration: '5 months',
        schedule: '3 times a week',
        language: 'Uzbek, English',
        instructor: {
            name: 'Jorayev Akbar',
            bio: 'A specialist with 15 years of experience in the logistics field.',
            avatar: T_image1,
        },
        rating: 4.6,
        reviews: 80,
        price: '$ 550',
        process: [
            'Logistics and transportation fundamentals: Understand the basics of logistics.',
            'Principles of working as a broker: Learn the role and responsibilities of a logistics broker.',
            'International freight transportation systems: Explore global logistics networks.',
            'Documents and contracts: Master the legal aspects of logistics.',
            'Supply chain management: Optimize supply chains for efficiency.',
            'Customs regulations and compliance: Navigate international trade laws.',
            'Risk management: Identify and mitigate risks in logistics.',
            'Final project: Develop a logistics plan for a real-world scenario.',
          ],
          keyFeatures: [
            'Practical knowledge from industry experts.',
            'Case studies and real-world examples.',
            'Certificate of completion to enhance your resume.',
            'Career support, including job placement assistance.',
            'Access to a network of logistics professionals.',
            'Lifetime access to course materials and updates.',
          ],
    },
    {
        id: 4,
        Img: course_img4,
        text: 'Video Editing and Special Effects',
        description:
        'This course teaches the fundamentals of video editing, special effects, and animation using industry-standard tools like Adobe Premiere Pro and After Effects. Aimed at aspiring video editors and content creators, this course will give you the skills to create professional-quality video content. You’ll learn the art of storytelling through video, from basic editing techniques to advanced effects and color grading, which are essential for producing high-quality visual media for various platforms. The course also covers motion graphics, 3D animation, and sound design, ensuring you have a well-rounded skill set. By the end of the course, you’ll have a portfolio of projects that demonstrate your ability to create engaging and visually stunning content.',
        duration: '6 months',
        schedule: '3 times a week',
        language: 'Russian, English',
        instructor: {
            name: 'Andrey Kuznetsov',
            bio: 'A professional video editor and animator.',
            avatar: T_image6,
        },
        rating: 4.9,
        reviews: 150,
        price: '$ 580',
        process: [
            'Video editing and shot composition: Learn the basics of video editing.',
            'Working with Adobe Premiere Pro: Master professional editing tools.',
            'After Effects and visual effects: Create stunning special effects.',
            'Color correction and sound design: Enhance the visual and auditory quality of your videos.',
            'Motion graphics and 3D animation: Add dynamic elements to your projects.',
            'Storytelling and narrative techniques: Craft compelling video stories.',
            'Portfolio development: Build a professional portfolio of your work.',
            'Final project: Create a complete video project from start to finish.',
          ],
          keyFeatures: [
            'Hands-on projects to build a professional portfolio.',
            'One-on-one feedback from industry experts.',
            'Access to premium video editing resources.',
            'Certificate of completion to showcase your skills.',
            'Career support, including portfolio reviews and job placement assistance.',
            'Lifetime access to course materials and updates.',
          ],
    },
    {
        id: 5,
        Img: course_img5,
        text: 'Marketing',
        description:
        "Learn the basics of digital marketing and strategic planning, including SEO, SEM, and social media marketing. This course is tailored for individuals looking to launch or grow their marketing career, focusing on both theoretical knowledge and practical skills. Whether you're a business owner looking to expand your brand’s reach or someone entering the field of digital marketing, this course will provide you with the necessary skills to succeed in the competitive marketing industry. You’ll explore topics like content marketing, email campaigns, and data analytics, gaining insights into how to create effective marketing strategies. By the end of the course, you’ll have the tools to drive traffic, generate leads, and increase conversions for any business.",
        duration: '4 months',
        schedule: '4 times a week',
        language: 'Russian, English',
        instructor: {
            name: 'Smirnova Nadya',
            bio: 'A marketing specialist with 5 years of experience.',
            avatar: T_image4,  
        },
        rating: 4.9,
        reviews: 100,
        price: '$500',
        process: [
            'Basics of digital marketing: Understand the fundamentals of online marketing.',
            'SEO and SEM: Optimize websites for search engines and run paid campaigns.',
            'Social Media Marketing: Create and manage effective social media strategies.',
            'Email marketing strategies: Build and execute email campaigns.',
            'Content marketing: Develop engaging content to attract and retain customers.',
            'Data analytics and reporting: Measure and analyze marketing performance.',
            'Marketing automation: Use tools to streamline marketing processes.',
            'Final project: Develop a comprehensive marketing plan for a real-world business.',
          ],
          keyFeatures: [
            'Hands-on projects to build practical skills.',
            'One-on-one feedback from industry experts.',
            'Access to marketing tools and resources.',
            'Certificate of completion to boost your career.',
            'Career support, including resume reviews and job placement assistance.',
            'Lifetime access to course materials and updates.',
          ],
    }
];
