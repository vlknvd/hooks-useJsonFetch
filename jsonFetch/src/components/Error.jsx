import useJsonFetch from "../hooks/useJsonFetch";

const Error = () => {
    const [data, loading, err] = useJsonFetch('http://localhost:7070/error');
    if(err) {
        return (
            <div className="error">Ошибка: {err.message}</div>
        )
    }
}

export default Error