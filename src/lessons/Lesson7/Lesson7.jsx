const Lesson7 = (props) => {

    function myFunction() {
        console.log(">> function truyen thong")
    }

    let a = function () {
        console.log("Anonymous Function 1")
    }()

    myFunction();

    setTimeout(function () {
        console.log("Anonymous Function 2")
    }, 1000)
    // a();

    return (
        <div style={{ padding: "50px" }}>
            <h3>Lesson 7 Anonymous Function:</h3>
        </div>
    )
}

export default Lesson7;