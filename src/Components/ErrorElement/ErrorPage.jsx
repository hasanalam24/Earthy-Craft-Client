import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="relative bg-blue-200 h-[600px]">
            <Helmet>
                <title>EP || Error</title>

            </Helmet>
            <div className=" absolute mx-auto top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white w-1/2 h-[300px]">
                <h1 className=" mb-5 text-center mt-10 text-6xl font-medium">404</h1>
                <p className="text-center mb-8">Page Not Found</p>
                <div className="text-center">
                    <button className="btn btn-secondary" onClick={handleBack}>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;