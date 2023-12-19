import useJsonFetch from "../hooks/useJsonFetch";

const Data = () => {
    const [data, loading, err] = useJsonFetch('http://localhost:7070/data');
    if(data) {
        return (
            <div className="data">Получение данных: {data.status}</div>
        )
    }
}

export default Data