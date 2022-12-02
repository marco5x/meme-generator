import React, { useState } from "react";
import Draggable from "react-draggable";
import "./Text.css"

export const Text = ({dark}) => {

    const [input, setInput] = useState("");
    
    return (
        <div className="d-flex justyfy-content-center align-items-center">
            <Draggable>
                <div className="w-75">
                    <textarea
                        className={`${dark ? "textarea" : "dark"}`}
                        placeholder="Double click to edit. then drag"
                        onChange={(e) => setInput(e.target.value.toUpperCase())}
                        value={input}
                    />
                </div>
            </Draggable>
        </div>
    );
};
