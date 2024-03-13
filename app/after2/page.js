"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';

const dataImg3 = ['b1.gif', 'b2.gif', 'b3.gif', 'b4.gif', ]
const data3 = ['BTW HAPPYYYY BIRTHHH DAYYYYYYY', "CIYEEE YANG ULTAHHHH", "SEMOGA PANJANG UMURR", "SEMOGA SEHAT SELALU DAN DILANCARKAN REZEKINYA"]

let hasil3 = 0

const AfterTwo = ({setisYes, setnoBG, noBG}) => {
    const [noImg3, setnoImg3] = useState(dataImg3[0])
  const [nuimg3, setnuimg3] = useState(0)
  const [text3, setText3] = useState(data3[0])

  const yesHandler3 = () => {
    if(nuimg3 < 3){
      setText3(data3[nuimg3+1])
      setnoImg3(dataImg3[nuimg3+1])
      setnuimg3(nuimg3+1)
    } else {
      setnoBG(noBG+1)
      setisYes(isYes+1)
    }
  }

  return (
    <div>
        <div className="m-auto overflow-hidden relative h-60 w-60">
                <Image layout="fill" objectFit="cover" src={`/${noImg3}`} alt="" />
            </div>
            <div className=" text-center w-full h-full my-4" >
            <button className=" bg-red-300 rounded-md px-2 py-1 text-xs md:text-lg text-center" onClick={yesHandler3} >
            <Typewriter
            onInit={(typewriter) => {
                data3.map((e) => {
                typewriter.typeString(e)
                .pauseFor(500)
                .deleteAll()
                .callFunction(() => {
                    hasil3 += 0.5
                    if(hasil3 % 1 == 0){
                    setnoImg3(dataImg3[hasil3])
                    }
                    if(hasil3 > 3){
                        setnoBG(noBG+1)
                        setisYes(3)
                    }
                })
                .start()
                })
            }}
            options={{delay:75}}
            />
            </button>
            </div>
        </div>
  )
}

export default AfterTwo