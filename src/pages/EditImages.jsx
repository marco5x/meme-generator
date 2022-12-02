import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom"
import { exportComponentAsJPEG } from "react-component-export-image"
import Button from 'react-bootstrap/Button';
import { Text } from "../components/Text"

export const EditImages = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);

    const toggleDark = () => setDark(!dark);
    
    const memeRef = createRef()

    const addText = () => {
        setCount(count + 1)
    }
    
    return (
        <div className="d-flex flex-column justify-content-center align-items-center ">
            <div ref={memeRef} className="w-auto h-75 ">
                <img class="img-fluid border border-opacity-75" src={params.get("url")} alt="meme_not_found" />
                {
                    Array(count).fill(0).map((t) => (<Text dark={dark} />))                    
                }
            </div>
            <div className="d-flex justify-content-evenly align-items-center gap-5 my-2 mx-2">
                <Button onClick={toggleDark} variant="dark">{`${dark ? "Dark letter" : "White letter"}`}</Button>
                <Button onClick={addText} variant="primary">Add Text</Button>
                <Button onClick={(e) => exportComponentAsJPEG(memeRef)} variant="success">Save Meme</Button>
            </div>
        </div>
    )
}
