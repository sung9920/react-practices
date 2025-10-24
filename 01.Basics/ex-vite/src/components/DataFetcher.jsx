import { useState, useEffect } from 'react';

function DataFetcher() {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('데이터 패치를 시작하겠습니다.');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                console.log('데이터 패치가 완료되었습니다.');
                setData(json);
            })
            .catch((error) => {
                console.error('데이터 패치 중 오류 발생:', error);
                
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>데이터 패치(Fetch)</h2>
            {loading && <p>데이터를 불러오는 중입니다...</p>}

            {data && (
                <ul>
                    {data.map((user) => (
                        console.log(user),
                       <li key = {user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                       </li> 
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DataFetcher;