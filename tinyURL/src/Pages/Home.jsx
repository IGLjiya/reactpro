import React, { useContext, useState } from 'react';
import { TiTick } from "react-icons/ti";
import { urlContext } from '../AllProvidre/provider';

const Home = () => {

    const { Data, setData } = useContext(urlContext)

    const [url, setUrl] = useState("")



    const getUrl = async () => {

        try {
            const response = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
            const result = await response.text()
            setData(result)

        } catch (error) {
            console.log(error.massage);

        }


    }






    return (
        <div className='d-flex flex-column gap-5 justify-content-center align-items-center' style={{ height: "100vh" }}>
            <div className='d-flex flex-column gap-3 w-50'>
                <input className=' form-control border-success' type="text" placeholder='Enter URL' value={url} onChange={(event) => setUrl(event.target.value)} />
                <button onClick={() => getUrl()} className='btn btn-outline-success d-flex justify-content-center align-items-center'><TiTick size={30} />Submit</button>
            </div>
            <div className='w-50 p-5 border' style={{ height: "150px" }}>
                URL :-{Data}
            </div>

        </div>
    );
}

export default Home;
