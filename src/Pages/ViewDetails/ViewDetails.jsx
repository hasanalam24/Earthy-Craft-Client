import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const viewDetailData = useLoaderData()

    return (
        <div>
            <h1>Details:{viewDetailData._id}</h1>
        </div>
    );
};

export default ViewDetails;