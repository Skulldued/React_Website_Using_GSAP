import React from 'react'
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  const links =[
    {
      href:"https://twitter.com", icon:<FaTwitter/>
    },
    {
      href:"https://github.com", icon:<FaGithub/>
    },
    {
      href:"https://discord.com", icon:<FaDiscord/>
    },
   
  ]
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
         <p className="text-center text-sm font-light md:text-left">
            &copy; Nova 2024. All Rights Reserved
         </p>
         <div className="flex justify-center gap-4 md:justify-start">
           {
            links.map((items,index)=>(
              <Link key={index} to={items.href} target='_blank' className='text-black transition-colors duration-500 hover:text-white'>
                {items.icon}
              </Link>
            ))
           }
         </div>
      </div>
    </footer>
  )
}

export default Footer
