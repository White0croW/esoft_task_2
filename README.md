# React Components Practice

## Описание проекта
Простое React-приложение для изучения основ работы с компонентами, состоянием (state) и пропсами (props). Включает:
- Динамическое обновление имени с интервалом в 10 секунд;
- Отображение текущего времени с проверкой делимости минут на 5;
- Статичный заголовок.

![Схема компонентов](https://github.com/user-attachments/assets/b1f92104-97b0-4b4c-8e05-d5bc1a02c6e7)

## Структура проекта
#### src/
#### ├── components/
#### │ ├── Container.jsx # Родительский компонент с состоянием имени
#### │ ├── Greeting.jsx # Приветствие с обработкой изменений имени
#### │ ├── Clock.jsx # Часы с проверкой делимости минут
#### │ └── Header.jsx # Статичный заголовок
#### └── main.jsx # Точка входа приложения


## Установка и запуск
1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/ваш-логин/my-react-app.git
   cd my-react-app

2. Установите зависимости:
   ```bash
   npm install
3. Запустите dev-сервер:
   ```bash
   npm run dev

## Функциональные особенности
1. Компонент Container
    ```jsx
    ## Использует useState для хранения имени из списка: ["Анна", "Иван", "София", "Дмитрий", "Вика", "Андрей"].
    ## Генерирует случайное имя при первом рендере:
    useEffect(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      setCurrentName(randomName);
    }, []);
    ## Обновляет имя каждые 10 секунд через setInterval в useEffect. 

2. Компонент Greeting
    ```jsx
    ## Принимает name через пропсы и отслеживает изменения:
    const prevNameRef = useRef(name);
    useEffect(() => {
      if (prevNameRef.current !== name) {
        prevNameRef.current = name;
      }
    }, [name]);
    ## Выводит сообщение при смене имени:
    {prevNameRef.current === name ? (
      <p>Привет, {name}!</p>
    ) : (
      <p>Привет, у тебя поменялось имя, теперь ты {name}!</p>
    )}

3. Компонент Clock
    ```jsx
    ## Обновляет время каждую секунду:
    useEffect(() => {
      const timer = setInterval(() => setCurrentTime(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);
    ## Проверяет делимость минут на 5:
    const isDivisibleBy5 = currentTime.getMinutes() % 5 === 0;
    {isDivisibleBy5 && <p>Время делится на 5</p>}

4. Компонент Header
    ```jsx
    ## Статичный компонент без пропсов/состояния:
    function Header() {
      return <h1>Это мой первый React. проект!</h1>;
    }
