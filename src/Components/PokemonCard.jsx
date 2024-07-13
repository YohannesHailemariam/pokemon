import React from 'react'
import { IconContext } from "react-icons";
import { FaArrowRight } from "react-icons/fa";

const PokemonCard = ({imgSrc,title,text,date}) => {
  return (
    <div>
        <div className="w-full max-w-xs">
        <img className="rounded-xl h-52 w-full shadow-xl" src={imgSrc}/>
        <div>
            <h2 className="mt-2 font-medium text-center text-sm">{title}</h2>
            <p className="mt-2 text-xs text-center line-clamp-6">{text}</p>
            <div className="grid grid-cols-2">
                <p className="mt-2 text-gray-500 text-xs text-center">{date}</p>
                <div className="flex flex-row justify-center items-center gap-3 cursor-pointer text-sm">
                        <div className="text-[red] hover:text-red-700">Read More</div>
                        <div>
                            <IconContext.Provider value={{ color: "red" }}>
                                <FaArrowRight />
                            </IconContext.Provider>
                        </div>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard