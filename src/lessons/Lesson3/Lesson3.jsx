import { useState } from "react";
import CoolButton from "./CoolButton";

const Lesson3 = (props) => {
    const [name, setName] = useState('');
    const abc = "abc"
    return (
        <div>
            <label>Name:</label>
            <input type={'text'}
                onChange={(event) => setName(event.target.value)}
                value={name}
            />
            <div>Your name 's ... {name} </div>
            <CoolButton
                btnClass="primary"
                title="Cool Button"
                abc={abc}
            />
        </div>
    )
}

export default Lesson3;