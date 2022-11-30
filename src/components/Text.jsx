import React, { useState } from "react";
import Draggable from "react-draggable";
import "./Text.css"

export const Text = () => {

    const [input, setInput] = useState("");

    return (
        <div>
            <Draggable>
                <div className="w-75">
                    <textarea
                        className="textarea"
                        placeholder="Double click intro text"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                    />
                </div>
            </Draggable>
        </div>
    );
};
