import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import Header from "@/components/Header";
import { MyCardComponent } from "@/components/MyCardComponent";
import Button from "@/components/Button";
import { Modal } from "@/components/Modal";
import myCardBg from "@/assets/image/my_card_bg.png";

// role을 jobGroup으로 변환하는 맵 (MyCardComponent의 symbolMap 키와 일치하도록 영어로)
const roleToJobGroupMap: Record<string, string> = {
    designer: "DESIGNER",
    planner: "PLAN",
    developer: "DEVELOPER",
};

export function UserCardDetail() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [showSendMatchModal, setShowSendMatchModal] = useState(false);
    const [showSendSuccessModal, setShowSendSuccessModal] = useState(false);

    // URL 파라미터에서 데이터 가져오기
    const name = searchParams.get("name") || "설정원";
    const role = searchParams.get("role") || "designer";
    const age = parseInt(searchParams.get("age") || "24", 10);
    const jobGroup = roleToJobGroupMap[role] || "디자인";

    // TODO: 실제 유저 ID를 사용해서 API에서 전체 카드 데이터 가져오기
    // 현재는 URL 파라미터에서 받은 기본 정보와 mockData를 조합
    const mockCardData = {
        name,
        age,
        jobGroup,
        organization: "홍익대학교 디자인컨버전스학부", // TODO: API에서 가져오기
        introduction: "사용자의 관점에서 생각하고, 창의적인 아이디어를 기반으로 유저 프렌들리한 서비스를 만드는 프로덕트 디자이너입니다.", // TODO: API에서 가져오기
        skills: [
            { skillId: 1, skillName: "Adobe Illustrator" },
            { skillId: 2, skillName: "Adobe Photoshop" },
            { skillId: 3, skillName: "Notion" },
            { skillId: 4, skillName: "Figma" },
            { skillId: 5, skillName: "Figjam" },
        ],
        desiredSkills: [
            { skillId: 6, skillName: "Adobe Premier" },
            { skillId: 7, skillName: "JAVA" },
            { skillId: 8, skillName: "Slack" },
        ],
    };

    const handleSendMatch = () => {
        // 매칭 보내기 확인 모달 표시
        setShowSendMatchModal(true);
    };

    const handleConfirmSendMatch = async () => {
        // TODO: 매칭 보내기 API 호출
        try {
            // const response = await sendMatchAPI();
            console.log("매칭 보내기 완료");
            setShowSendMatchModal(false);
            // 성공 모달 표시
            setShowSendSuccessModal(true);
        } catch (error) {
            console.error("매칭 보내기 실패:", error);
        }
    };

    return (
        <div 
            className="min-h-screen relative"
            style={{
                backgroundImage: `url(${myCardBg})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Header */}
            <Header
                content={
                    <>
                        AS <span className="font-['Pretendard:Regular',sans-serif]">a Mentee</span>
                    </>
                }
                onClick={() => navigate(-1)}
            />

            {/* Card Container */}
            <div className="px-4 pt-[132px] pb-8 flex justify-center">
                <MyCardComponent data={mockCardData} />
            </div>

            {/* Button - Fixed at bottom */}
            <div className="fixed bottom-0 left-0 right-0 px-4 pb-8 pt-5 flex justify-center bg-transparent">
                <div className="w-full max-w-[358px]">
                    <Button
                        variant="primary"
                        text="매칭 보내기"
                        onClick={handleSendMatch}
                        style={{ height: "48px", borderRadius: "12px" }}
                    />
                </div>
            </div>

            {/* Send Match Confirmation Modal */}
            <Modal
                type="send-match"
                title="매칭 보내기"
                message={`${mockCardData.name}님에게 메칭 전송을 하시겠습니까?`}
                isOpen={showSendMatchModal}
                onClose={() => setShowSendMatchModal(false)}
                onCancel={() => setShowSendMatchModal(false)}
                onConfirm={handleConfirmSendMatch}
            />

            {/* Send Match Success Modal */}
            <Modal
                type="send-success"
                title="매칭 전송이 완료됐어요!"
                message="매칭 성공 여부는 매칭 관리에서 확인할 수 있어요."
                isOpen={showSendSuccessModal}
                onClose={() => setShowSendSuccessModal(false)}
            />
        </div>
    );
}
