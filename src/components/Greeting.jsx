import { useEffect, useRef } from "react";

function Greeting({ name }) {
    const prevNameRef = useRef(name);

    useEffect(() => {
        if (prevNameRef.current !== name) {
            console.log(`Имя изменилось с ${prevNameRef.current} на ${name}`);
            prevNameRef.current = name;
        }
    }, [name]);

    return (
        <div>
            {prevNameRef.current === name ? (
                <p>Привет, {name}!</p>
            ) : (
                <p>Привет, у тебя поменялось имя, теперь ты {name}!</p>
            )}
        </div>
    );
}

export default Greeting;