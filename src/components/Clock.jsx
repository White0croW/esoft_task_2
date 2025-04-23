import { useState, useEffect } from "react";

function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const minutes = currentTime.getMinutes();
    const isDivisibleBy5 = minutes % 5 === 0;

    return (
        <div>
            <p>Текущее время: {currentTime.toLocaleTimeString()}</p>
            {isDivisibleBy5 && <p>Время делится на 5</p>}
        </div>
    );
}

export default Clock;