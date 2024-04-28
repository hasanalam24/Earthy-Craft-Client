import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>Error Page 404</h1>
            <button className="btn btn-secondary" onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default ErrorPage;