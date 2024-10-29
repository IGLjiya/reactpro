import { useDispatch, useSelector } from "react-redux"
import { decreament, increament } from "../Redux/Slice/counterSlice"


const Redux = () => {

    const { counter } = useSelector((states) => states.counter)

    const dispatch = useDispatch()

    const handleIncreament = () =>{
        dispatch(increament(
            {num:3}
        ))
    }

    const handleDecreament =() =>{
        dispatch(decreament({num:2}))
    }

    return (
        <div>
            <div className='pt-5 d-flex flex-column align-items-center'>
                <div>{counter}</div>
                <button onClick={handleIncreament} className="btn btn-outline-success mt-5">Increament</button>
                <button onClick={handleDecreament} className="btn btn-outline-danger mt-2">Decreament</button>
            </div>
        </div>
    );
}

export default Redux;
