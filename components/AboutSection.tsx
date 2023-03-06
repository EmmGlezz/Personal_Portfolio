import React from 'react'
import {SiHtml5, SiCss3, SiJavascript, SiPython, SiReact, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiNextdotjs, SiTypescript, SiMongodb, SiGit, SiGithub} from 'react-icons/si'
import Image from 'next/image'

const skills = [
    {
        skill: 'HTML',
        icon: <SiHtml5 />,
        color: 'bg-orange-600'
    },
    {
        skill: 'CSS',
        icon: <SiCss3 />,
        color: 'bg-blue-700'
    },
    {
        skill: 'JavaScript',
        icon: <SiJavascript />,
        color: 'bg-yellow-500'
    },
    {
        skill: 'Python',
        icon: <SiPython />,
        color: 'bg-sky-900'
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
        skill: 'Next.js',
        icon: <SiNextdotjs />,
        color: 'bg-neutral-900'
    },
    {
        skill: 'TypeScript',
        icon: <SiTypescript />,
        color: 'bg-sky-600'
    },
    {
        skill: 'MongoDB',
        icon: <SiMongodb />,
        color: 'bg-green-800'
    },
    {
        skill: 'Git',
        icon: <SiGit />,
        color: 'bg-orange-700'
    },
    {
        skill: 'GitHub',
        icon: <SiGithub />,
        color: 'bg-zinc-900'
    },
]

const AboutSection = () => {
  return (
    <section id='about'>
        <div className='my-12 pb-12 md:pt-16 md:pb-48'>
            <h1 className='text-center font-bold text-4xl'>About Me
            <hr className='w-6 h-1 mx-auto my-4 border-0 rounded bg-blue-700' />
            </h1>
            <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Who am I?</h1>
                    <p>
                        Hey again, I am Emiliano González, and I am currently studying a Systems Engineering degree online. 
                        I am also pursuing a diploma in IT with a specialization in web development in the city of Sydney, Australia. 
                    </p>
                    <br />
                    <p>
                        My passion for technology and its impact on people's lives has led me to pursue a career in software engineering. 
                        I believe that technology has the power to bring positive change, and I want to be a part of it.
                    </p>
                    <br />
                    {/* <p>
                        I am an avid reader. Additionally, I like to work out to keep myself physically fit and mentally sharp. 
                        Lastly, coding is one of my hobbies, and I enjoy building new applications and exploring new programming languages.
                    </p>
                    <br /> */}
                    <p>
                        I am not one to stay in my comfort zone, and I am always striving to improve myself. I believe that constant learning is essential 
                        to achieve one's goals, and I am always looking for opportunities to learn and grow. My dedication to self-improvement has helped me 
                        gain new skills and broaden my knowledge, both of which are essential to my career in software engineering.
                    </p>
                    <br />
                    <p>
                        My ultimate goal as a software engineer is to create software that can improve people's lives. I believe that technology has the 
                        potential to solve many of the world's problems, and I want to be a part of that change.
                    </p>
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>My Tech Skills</h1>
                    <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                        {skills.map((item, i) => {
                            return (
                                <div className={`${item.color} flex flex-row space-x-1 items-center px-4 py-2 mr-2 mt-2 text-white rounded font-semibold`}>
                                    <p key={i}>{item.skill}</p>
                                    {item.icon}
                                </div>
                            )
                        })}
                    </div>
                    <Image className='hidden md:block md:relative md:bottom-4 md:left-32 md:z-0' src='/about.png' alt='about' width={325} height={325} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection 