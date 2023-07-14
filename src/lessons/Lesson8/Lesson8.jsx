import './Lesson8.scss';

const Lesson8 = (props) => {
    function handleOnClick1() {
        alert('click me')
    }

    const handleOnClick2 = () => {
        alert('click me')
    }

    return (
        <div className="lesson8">
            <h3>Lesson 8 :</h3>
            <div>
                <button
                    onClick={handleOnClick2} // passing
                // onClick={handleOnClick2()} // running => () exec
                >Tham Chiếu</button>
            </div>
            <div>
                <button>Inline</button>
            </div>
            <div>
                <button
                    onClick={() => handleOnClick2()} // anonymous function
                >Arrow function</button>
            </div>
        </div>
    )
}

export default Lesson8;