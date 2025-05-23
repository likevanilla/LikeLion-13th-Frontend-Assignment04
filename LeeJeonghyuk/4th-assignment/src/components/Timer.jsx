import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <div id="box">
                <h2>멋사 프엔 아기사자들 화이팅!!</h2>
                <p>{seconds}초 후에 폭파됩니다</p>
            </div>
        </div>
    );
};

export default Timer;
