import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex gap-[1vw] absolute top-[96%] left-[50%]' style={{transform: "translate(-50%, 0)", fontFamily: "ClashDisplay-Medium"}}>
      <Link to={"/cgu"} className="">CGU</Link>
      <Link to={"/contact"} className="">CONTACT</Link>
    </div>
  )
}

export default Footer