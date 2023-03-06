import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const dummyData = [
	{
		name: "Project A",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "https://dummyimage.com/1000x1000/000/fff",
		github_link: "https://github.com/username/project-a",
		demo_link: "https://www.example.com/project-a",
	},
	{
		name: "Project B",
		description:
			"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "https://dummyimage.com/1000x1000/000/fff",
		github_link: "https://github.com/username/project-b",
		demo_link: "https://www.example.com/project-b",
	},
	{
		name: "Project C",
		description:
			"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		image: "https://dummyimage.com/1000x1000/000/fff",
		github_link: "https://github.com/username/project-c",
		demo_link: "https://www.example.com/project-c",
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
                            <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2  md:flex-row md:space-x-12">
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
                                    <div className="flex flex-row align-bottom space-x-4">
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
