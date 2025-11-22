import { useNavigate } from "react-router";
import { MyCardProfile, type MyCardData } from "./MyCardProfile";

// Mock 데이터
const mockCardData: MyCardData = {
    name: "배윤서",
    age: 23,
    jobGroup: "기획",
    organization: "이화여자대학교 융합콘텐츠학과",
    introduction: "사용자의 관점에서 생각하고, 창의적인 아이디어를 기반으로 유저 프렌들리한 서비스를 만드는 PM\n배윤서입니다.",
};

export function HomeMyCard() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/card/my-detail");
    };

    return (
        <div className="flex justify-center">
            <MyCardProfile data={mockCardData} onClick={handleClick} />
        </div>
    );
}

