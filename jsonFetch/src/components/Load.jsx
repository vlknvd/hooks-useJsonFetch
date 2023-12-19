import useJsonFetch from "../hooks/useJsonFetch";

const Load = () => {
    const [data, loading, err] = useJsonFetch('http://localhost:7070/loading');
    if(loading) {
        return (
            <div className="loading">Загрузка...</div>
        )
    }
}

export default Load