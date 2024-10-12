import { click } from "@testing-library/user-event/dist/click";
import React from "react";

const Button = ()=> {
    // console.log(props);
    return(
        <div>
            <div>
                <button onClick={click} className="btn btn-dark"></button>
            </div>
        </div>
    )
}
export default Button;