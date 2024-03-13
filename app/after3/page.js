"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';


const AfterThree = ({setisYes, noBG, setnoBG}) => {
    
  return (
    <div className="">
        <div className="m-auto overflow-hidden relative h-60 w-60">
            <Image layout="fill" objectFit="cover" src={`/last.gif`} alt="" />
        </div>
        <div className=" text-center w-full h-full my-4" >
        <button className=" bg-red-300 rounded-md px-2 py-1 text-xs md:text-lg text-center" >
        <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString("Semoga di hari sidang dan ultahmu ini, kamu bisa menjadi pribadi yang lebih baik. CONGRATZZZZZZZZZZ")
                .pauseFor(500)
                .deleteAll()
                .callFunction(() => {
                    setnoBG(noBG+1)
                    setisYes(4)
                })
                .start()
                }}
            options={{
                delay:50
            }}
            />
        </button>
        </div>
    </div>
  )
}

export default AfterThree