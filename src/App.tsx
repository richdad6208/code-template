import { useEffect, useState } from 'react';
import { http } from './api/http';

export default function App() {
    const [data, setData] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const result = await http.get('https://jsonplaceholder.typicode.com/todos/1');

        console.log(result);
    };

    return <div className="flex items-center h-[100dvh] justify-center"></div>;
}
