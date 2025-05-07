'use client'

import React from 'react'

const page:React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>

        <div>Test your tailwind components</div>
        <div>
            {/*  */}
    
            <div className="btn">
  <style jsx>{`
    .btn .link {
      list-style-type: none;
    }
    
    .btn .link {
      cursor: pointer;
      background-color: #e4c590;
      --c: black;
      font-family: "Forum", serif;
      color: black;
      width: 12em;
      height: 3em;
      letter-spacing: 0.1em;
      text-align: center;
      line-height: 3em;
      position: relative;
      overflow: hidden;
      z-index: 1;
      transition: color 0.3s ease;
      margin: 1em;
    }
    
    .btn .link span {
      position: absolute;
      width: 25%;
      height: 100%;
      background-color: var(--c);
      transform: translateY(150%);
      border-radius: 50%;
      left: calc((var(--n) - 1) * 25%);
      transition: transform 0.7s ease;
      transition-delay: calc((var(--n) - 1) * 0.15s);
      z-index: -1;
    }
    
    .btn .link:hover {
      color: white;
      border: 1px solid #e4c590;
    }
    
    .btn .link:hover span {
      transform: translateY(0) scale(2);
    }
    
    .btn .link span:nth-child(1) {
      --n: 1;
    }
    
    .btn .link span:nth-child(2) {
      --n: 2;
    }
    
    .btn .link span:nth-child(3) {
      --n: 3;
    }
    
    .btn .link span:nth-child(4) {
      --n: 4;
    }
  `}</style>
  
  <div className="link">
    Book a Table
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

            {/*  */}
        </div>
    </div>
  )
}

export default page