import React, { useState } from 'react'
import Layout from '../components/Layout'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('')
  const [email , setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleContact =(e)=>{
    e.preventDefault()

    // create new object that contain all dynamic data
    const templateParams ={
      from_name :name,
      from_email:email,
      to_name:'expertcoder',
      message:message,
    }
    emailjs.send('service_pmbw4i5','template_hzzalhr', templateParams,'Da5X3W4TRVurTp9D4',)
    .then((res)=>{
      toast.success("Email Send Successfully !!",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      
        })
      setName('')
      setEmail('')
      setMessage('')
        } )
    .catch((error)=>{
      console.log(error)
    })
    
  }

  return (
    <Layout>
      <main className="flex flex-col justify-center items-center min-h-screen px-4 py-8">
    <h2 className="text-4xl font-bold text-center mb-4"></h2>
    <section className="flex flex-col md:flex-row md:space-x-8 w-full">
      <div className="md:w-1/2 order-1 md:order-none px-4">
        <h3 className="text-2xl font-bold mb-10">Map</h3>
        <div className="map-container bg-cover bg-center h-full relative">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.3804281038774!2d72.85647437467077!3d19.309291544608353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1bd9428491b%3A0x1c1c38eee4f3a0fc!2sNagee%20Billiards%20Accessories!5e0!3m2!1sen!2sin!4v1711605342563!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  className="absolute inset-0 object-cover w-[100%] lg:h-[40vh]" alt="Map"></iframe> 
        </div>
      </div>
      <div className="w-full md:w-1/2 order-none md:order-1 px-2">
        <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
        <form action="#" method="post" className="flex flex-col space-y-4" onSubmit={handleContact}>
          <div className="flex flex-col">
            <label for="name" className="text-sm font-medium mb-1"></label>
            <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} className="shadow-sm rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full" placeholder="Your Name" required/>
          </div>
          <div className="flex flex-col">
            <label for="email" className="text-sm font-medium mb-1"></label>
            <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="shadow-sm rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full" placeholder="Your Email" required/>
          </div>
          <div className="flex flex-col">
            <label for="message" className="text-sm font-medium mb-1"></label>
            <textarea id="message" name="message" value={message} onChange={(e)=>setMessage(e.target.value)} rows="4" className="shadow-sm rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full" placeholder="Your Message" required></textarea>
          </div>
          <div className="contact-form flex justify-end px-2 py-2">
            <button type="submit" className="send-message-button px-2 py-2 text-white bg-black font-sm rounded focus:outline-none">SEND A MESSAGE</button>
          </div>
        </form>
      </div>
    </section>

    <div className="lg:flex lg:justify-between lg:items-center lg:w-[100%] w-full lg:mt-0 mt-[15rem]">
      <div className="lg:flex lg:justify-between lg:items-center gap-[6rem]">
          <div className="">
              <h3 className="text-xl font-bold lg:mb-4">Address</h3>
              <p classNameName='text-sm'>Your Company</p>
              <p classNameName='text-sm'>4877 Spruce Drive</p>
              <p classNameName='text-sm'>West Newton, PA 15089</p>
              <p classNameName='text-sm'>+1 (734) 123-4567</p>
              <p classNameName='text-sm'>hello@example.com</p>
          </div>
          <div className=" mt-4 md:mt-0">
              <h3 className="text-xl font-bold mb-4">Social Media</h3>
              <div className="flex flex-col space-y-2">
                  <div className="hover:text-gray-700 text-sm"><a href=""><i className="fab fa-facebook"></i> Facebook</a></div>
                  <div className="hover:text-gray-700 text-sm"><a href=""><i className="fab fa-twitter"></i> Twitter</a></div>
                  <div className="hover:text-gray-700 text-sm"><a href=""><i className="fab fa-instagram"></i> Instagram</a></div>
                  <div className="hover:text-gray-700 text-sm"><a href=""><i className="fab fa-skype"></i> Skype</a></div>
              </div>
          </div>
      </div>
  </div>
  
  </main>
  <ToastContainer />
    </Layout>
  )
}

export default Contact
