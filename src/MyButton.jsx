import { useState, useEffect } from "react";

let i = 0
function MyButton() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    function click() {
        setCount(count + 1);
    }

    function click2() {
        setCount2(count2 + 1);
    }

    useEffect(() => {

        return () => {
            console.log(" finish 💀");
        }
    }, [])

    console.log("---------------------")


    return (
        <div style={{ border: 'solid 1px black' }}>
            <p> this is my first component ❤️ </p>
            <button
                style={{ backgroundColor: "red" }}
                onClick={click}
            >
                click me !
            </button>
            <button
                style={{ backgroundColor: "red" }}
                onClick={click2}
            >
                click me 2 !
            </button>
            <p style={{ backgroundColor: "yellow" }}> nbr : {count} </p>
            <p style={{ backgroundColor: "red" }}> nbr : {count2} </p>

        </div>
    )
}

export default MyButton;