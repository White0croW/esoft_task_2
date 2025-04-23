import { useState, useEffect } from "react";
import Greeting from "./Greeting";
import Clock from "./Clock";
import Header from "./Header";

const names = ["Анна", "Иван", "София", "Дмитрий", "Вика", "Андрей"];

function Container() {
    const [currentName, setCurrentName] = useState("");

    // Генерация случайного имени при монтировании
    useEffect(() => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        setCurrentName(randomName);
    }, []);

    // Обновление имени каждые 10 секунд
    useEffect(() => {
        const interval = setInterval(() => {
            const randomName = names[Math.floor(Math.random() * names.length)];
            setCurrentName(randomName);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Header />
            <Greeting name={currentName} />
            <Clock />
        </div>
    );
}

export default Container;