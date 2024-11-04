import { TiTick } from 'react-icons/ti';
import { MdClose, MdOutlineContentCopy, MdOutlineHistory, MdOutlineZoomOutMap } from "react-icons/md"
import { useSelector } from "react-redux"
import { useState } from 'react';
import CopyToClipboard, { } from "react-copy-to-clipboard"
import { toast } from 'react-hot-toast';
import { v4 as createID } from "uuid"
import { Row } from "react-bootstrap"

const Home = () => {

    const [Data, setData] = useState("")

    const [url, setURL] = useState("")

    const [qrcode, setQRcode] = useState("")

    const [copied, setCopied] = useState(false)

    const [history, setHistory] = useState([])


    const getURL = async () => {
        try {
            const response1 = await fetch(`https://tinyurl.com/api-create.php?url=${Data}`)
            const result1 = await response1.text()
            setURL(result1)
            setData("")

            const check = Data.startsWith("https://")

            const HistoryObj = {
                id: createID(),
                url: result1,
                Data: Data,
                createdAt: new Date().toLocaleString().slice(11, 22)
            }
            if (check) {
                const response2 = `https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${Data}`
                setQRcode(response2)
                setHistory([HistoryObj, ...history])
            }

            console.log(history);
            if (!Data) {
                return toast.error("Enter URL")
            }

            if (check) return toast.success("URL and QR Code Generated")
            else return toast.error("Enter Correcr URL")




        } catch (error) {
            console.log(error.massage);

        }

        // const tempHistory = [...history]
        // if (tempHistory.length>20) {
        //     tempHistory = tempHistory.splice(0, 1)
        //     tempHistory.push(url)
        //     setHistory(...history, tempHistory)
        // }



    }

    const copy = () => {
        return copied ? null : toast.success("Link Copied")
    }

    const historyRemove = (removeId) => {
        const res = history.filter((item) => item.id != removeId)
        setHistory(res)
    }


    return (
        <div className='d-flex row '>
            <div className='d-felx  col-lg-7 col-12 px-5 gap-5 justify-content-start align-items-start'  style={{ height: "100vh" }}>
                <div className='d-flex flex-column gap-3 '>
                    <input onChange={(event) => setData(event.target.value)} value={Data} className=' form-control border-success' type="text" placeholder='Enter URL' />
                    <button onClick={() => getURL()} className='btn btn-outline-success d-flex justify-content-center align-items-center'><TiTick size={30} />Submit</button>
                </div>
                <div className='d-flex col-12 justify-content-center row align-items-center mt-5 p-5 border' style={{ height: "150px" }}>

                    <div className='col-12 col-lg-8  text-center  '>
                        <p className='text-truncate '>URL:- {url}</p>
                    </div>
                    <div className='col-12 col-lg-4  text-center'>
                        <CopyToClipboard text={url}>
                            <button onClick={copy} onCopy={() => setCopied(true)} className='btn text-truncate btn-outline-secondary'>
                                <MdOutlineContentCopy />Copy Link</button>
                        </CopyToClipboard>


                    </div>

                </div>
                <div className=" mt-5 row  border" style={{ height: "35rem" }}>
                    
                        <div className='col-12 text-end px-5 py-3 '>
                            <button className='btn btn-outline-primary'><MdOutlineZoomOutMap size={25} /> </button>
                        </div>
                        <div className=' text-center'>
                            <img className='img-fluid' src={qrcode} />
                        </div>
                    
                </div>
            </div>

            <div className='border col-lg-5 col-12'>
                <h3 className='p-3'> <MdOutlineHistory /> History:-</h3>

                {
                    history.map((item) => {
                        return (
                        <div className='gap-5  my-2' key={item.id}>
                            <div className='d-flex border  bg-secondary overflow-hidden rounded p-2 col-12' >
                                <div className='col-10 '>
                                    <a className='text-decoration-none ' href={item.url}> <p className='text-light fs-5 '>{item.url}</p></a>
                                    <a className='text-decoration-none' href={item.Data}><p className='text-light text-truncate' style={{fontSize:"13px"}}>{item.Data}</p></a>
                                </div>
                                <div className='d-flex gap-3 flex-column justify-content-center align-items-center '>
                                    <div onClick={() => historyRemove(item.id)}> <MdClose cursor={"pointer"} size={20} /></div>
                                    <span className=''><p>{item.createdAt}</p></span>

                                </div>
                            </div>
                        </div>
                        )
                    })
                }



            </div>


        </div>
    );
}

export default Home;
