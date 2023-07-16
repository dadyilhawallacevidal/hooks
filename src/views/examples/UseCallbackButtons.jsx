import React from "react";

const UseCallbackButtons = (props) => {
    console.log("render...");
    return (
        <div>
            <button className="btn"
                onClick={(e) => props.inc(parseInt(e.target.outerText))}>
                +6
            </button>
            <button className="btn"
                onClick={(e) => props.inc(parseInt(e.target.outerText))}>
                +12
            </button>
            <button className="btn"
                onClick={(e) => props.inc(parseInt(e.target.outerText))}>
                +18
            </button>
        </div>
    );
}

export default React.memo(UseCallbackButtons);