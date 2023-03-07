"use client"
import React, {useState} from "react";
import Input from "./Input";
import Image from "next/image";

const ContactSection = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [result, setResult] = useState("")
    const [isSent, setIsSent] = useState(false)

    

    const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "99465e56-be1a-4968-94bb-4d5926936c82");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setIsSent(true)
            setResult(res.message);
            setValues({name: '', email: '', message: ''})
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
        
    }
    
    const onChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setValues(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    
	return (
		<section id='contact'>
			<div className='my-12 pb-12 md:pt-16 md:pb-28'>
				<h1 className='text-center font-bold text-4xl'>
					Contact Me
					<hr className='w-6 h-1 mx-auto my-4 border-0 rounded bg-blue-700' />
				</h1>
				<div className="flex flex-col space-y-10 items-stretch justify-center align-top  md:flex-row md:text-left md:space-y-0 md:space-x-10">
                    <div>
                    <Image className='hidden md:block md:bottom-4 md:left-32 md:z-0' src='/contact.png' alt='about' width={325} height={325} />
                    </div>
                    {isSent ? (
                        <div className='flex flex-col justify-center items-center w-1/2 mx-auto text-center'>
                            <h2>Thank you for getting in touch with me</h2>
                            <p>I'll reply as soon as possible :)</p>
                            <button className="text-neutral-100 font-semibold px-6 py-2 mt-2 bg-blue-700 rounded shadow hover:bg-blue-800" onClick={() => setIsSent(false)}>Back to Contact Form</button>
                        </div>
                    ) : (
					<form className='flex flex-col items-center w-full md:w-1/2 mx-auto' 
                    onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="access_key" value="99465e56-be1a-4968-94bb-4d5926936c82"></input>

                        <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}}/>
						<Input
                            onChange={onChange}
                            value={values.name}
							id='name'
							name='name'
							placeholder='John Wick'
							label='Name'
							type='text'
						/>
						<Input
                            onChange={onChange}
                            value={values.email}
							id='email'
							name='email'
							placeholder='example@email.com'
							label='Email'
							type='email'
						/>
                        <div className='w-full mb-3'>
                            <label className="block text-lg" htmlFor="message">Message</label>
                            <textarea
                                required={true}
                                className='w-full text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-blue-700'
                                name='message'
                                value={values.message}
                                onChange={onChange}
                                id='message'
                                cols={30}
                                rows={10}
                                placeholder='Enter your message here...'
                            ></textarea>
                        </div>
						<button
							className='w-full py-2 mt-6 text-lg text-white bg-blue-700 rounded-md active:bg-blue-800 focus:ring-2 focus:border-blue-500 outline-none'
							type='submit'
						>
							Submit
						</button>
					</form>
                    )}
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
