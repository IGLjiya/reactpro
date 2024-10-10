import React, { useEffect, useState } from 'react';

const MouseFollower = () => {


    const [axis, setAxis] = useState({ x: 0, y: 0 })

    const handleMouse = (event) => {
        setAxis({ x: event.clientX, y: event.clientY })
    }

    useEffect(() => {
        document.addEventListener("mousemove", handleMouse)

        return () => {
            document.removeEventListener("mousemove", handleMouse)
        }
    }, [])
    return (

        
        <div className='d-flex flex-column justify-content-center' style={{ height: "100vh", width: "100vw" }}>
            <div style={{ width: "20px", height: "20px", top:`${axis.y}px`, left: `${axis.x}px`,filter:"blur(10px)"}} className='position-absolute rounded-5 bg-black'>
            </div>
        </div>

    );
}

export default MouseFollower;
