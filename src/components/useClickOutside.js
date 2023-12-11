import React, { useEffect } from "react"

export function useClickOutside(ref, setSideMenu) {
    useEffect(()=>{
        function handleClickOutside(event){
            if(ref.current && !ref.current.contains(event.target)){
                setSideMenu(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return()=>{
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ref])
}