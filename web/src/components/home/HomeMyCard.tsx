import { useNavigate } from "react-router";
import { MyCardProfile, type MyCardData } from "./MyCardProfile";

interface HomeMyCardProps {
    data?: MyCardData;
}

export function HomeMyCard({ data }: HomeMyCardProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/card/my-detail");
    };

    return (
        <div className="flex justify-center">
            <MyCardProfile data={data} onClick={handleClick} />
        </div>
    );
}

