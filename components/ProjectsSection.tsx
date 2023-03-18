import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { SiBootstrap, SiExpress, SiJavascript, SiMaterialui, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

const dummyData = [
	{
		name: "T-MINUS",
		description: "T-MINUS is a web app using React and an API to show upcoming rocket launches with filters for date, location, and rocket type. It has a user-friendly interface and offers detailed launch information.",
		image: "/T-MINUS.png",
		github_link: "https://github.com/EmmGlezz/t-minus",
		demo_link: "https://t-minus.vercel.app/",
        stack: [
            {
                skill: 'JavaScript',
                icon: <SiJavascript />,
                color: 'bg-yellow-500'
            },
            {
                skill: 'React',
                icon: <SiReact />,
                color: 'bg-sky-500'
            },
            {
                skill: 'Bootstrap',
                icon: <SiBootstrap />,
                color: 'bg-violet-700'
            },
        ]
	},
	{
		name: "Laneway Hub",
		description:
			"Laneway Hub is a social media web application developed using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create profiles, connect with other students, trainers, and staff from Laneway Education, upload posts with pictures, and view other users' profiles. ",
		image: "/LanewayHub.png",
		github_link: "https://github.com/EmmGlezz/LanewayHUB",
		demo_link: "https://laneway-hub.vercel.app/",
        stack: [
            {
                skill: 'JavaScript',
                icon: <SiJavascript />,
                color: 'bg-yellow-500'
            },
            {
                skill: 'React',
                icon: <SiReact />,
                color: 'bg-sky-500'
            },
            {
                skill: 'Material UI',
                icon: <SiMaterialui />,
                color: 'bg-blue-600'
            },
            {
                skill: 'Node.js',
                icon: <SiNodedotjs />,
                color: 'bg-green-600'
            },
            {
                skill: 'Express',
                icon: <SiExpress />,
                color: 'bg-neutral-600'
            },
            {
                skill: 'MongoDB',
                icon: <SiMongodb />,
                color: 'bg-green-800'
            },
        ]
	},
	{
		name: "GTG - Get This Game",
		description:
			"Get This Game (GTG) is a user-friendly web app that recommends new games based on your selected categories. GTG suggests games tailored to your interests, including game information, user ratings, and links to purchase or play online.",
		image: "/GTG.png",
		github_link: "https://github.com/EmmGlezz/GTG",
		demo_link: "https://gtg-app-plum.vercel.app/",
        stack: [
            {
                skill: 'JavaScript',
                icon: <SiJavascript />,
                color: 'bg-yellow-500'
            },
            {
                skill: 'React',
                icon: <SiReact />,
                color: 'bg-sky-500'
            },
            {
                skill: 'Bootstrap',
                icon: <SiBootstrap />,
                color: 'bg-violet-700'
            },
            {
                skill: 'Node.js',
                icon: <SiNodedotjs />,
                color: 'bg-green-600'
            },
            {
                skill: 'Express',
                icon: <SiExpress />,
                color: 'bg-neutral-600'
            },
            {
                skill: 'MongoDB',
                icon: <SiMongodb />,
                color: 'bg-green-800'
            },
        ]
	},
    {
		name: "Personal Portfolio :)",
		description:
			"Personal Portfolio to showcase my tech stack and projects. :)",
		image: "/portfolio.png",
		github_link: "https://github.com/EmmGlezz/Personal_Portfolio",
		demo_link: "https://www.emilianogonzalez.dev/",
        stack: [
            {
                skill: 'TypeScript',
                icon: <SiTypescript />,
                color: 'bg-sky-600'
            },
            {
                skill: 'React',
                icon: <SiReact />,
                color: 'bg-sky-500'
            },
            {
                skill: 'Tailwind',
                icon: <SiTailwindcss />,
                color: 'bg-teal-500'
            },
            {
                skill: 'Next.js',
                icon: <SiNextdotjs />,
                color: 'bg-neutral-900'
            },
        ]
	},
];


const ProjectsSection = () => {
	return (
		<section id='projects'>
			<h1 className='text-center font-bold text-4xl'>
				Projects
				<hr className='w-6 h-1 mx-auto my-4 border-0 rounded bg-blue-700' />
			</h1>

			<div className='flex flex-col space-y-28'>
                {dummyData.map((project, i) => {
                    return (
                    <div key={i}>
                        <SlideUp offset="-300px 0px -300px 0px">
                            <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2  md:flex-row md:space-x-12 items-center">
                                <div className="mt-8 md:w-1/2">
                                    <Link href={project.demo_link} target='_blank'>
                                        <Image 
                                        src={project.image}
                                        alt=''
                                        width={1000}
                                        height={1000}
                                        className='rounded-xl shadow-xl hover:opacity-70'
                                        />
                                    </Link>
                                </div>
                                <div className="mt-12 md:w-1/2">
                                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">{project.description}</p>
                                    <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                                        {project.stack.map((framework, i) => {
                                            return (
                                                <div className={`${framework.color} flex flex-row space-x-1 items-center px-4 py-2 mr-2 mt-2 text-white rounded font-semibold`}>
                                                    <p key={i}>{framework.skill}</p>
                                                    {framework.icon}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-row align-bottom space-x-4 mt-4">
                                        <Link href={project.github_link} target='_blank'>
                                            <BsGithub 
                                            size={30}
                                            className='hover:-translate-y-1 transition-transform cursor-pointer'
                                            />
                                        </Link>
                                        <Link href={project.demo_link} target='_blank'>
                                            <BsArrowUpRightSquare
                                            size={30}
                                            className='hover:-translate-y-1 transition-transform cursor-pointer'
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    )
                })}
            </div>
		</section>
	);
};

export default ProjectsSection;
