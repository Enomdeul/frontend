import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "@/components/Header";
import { MyCardComponent } from "@/components/MyCardComponent";
import Button from "@/components/Button";
import { Modal } from "@/components/Modal";

// 임시 데이터 (나중에 API로 대체)
const mockCardData = {
    name: "김윤서",
    age: 23,
    jobGroup: "기획",
    organization: "이화여자대학교 융합콘텐츠학과",
    introduction: "사용자의 관점에서 생각하고, 창의적인 아이디어를 기반으로 유저 프렌들리한 서비스를 만드는 PM\n배윤서입니다.",
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

export function OfferedCard() {
    const navigate = useNavigate();
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    // const [searchParams] = useSearchParams();
    // const name = searchParams.get("name") || mockCardData.name; // TODO: name을 기반으로 API에서 데이터 가져오기

    // TODO: name을 기반으로 API에서 데이터 가져오기
    const cardData = mockCardData;

    const handleAccept = async () => {
        // TODO: 매칭 수락 API 호출
        try {
            // const response = await acceptMatchAPI();
            // 성공 시 모달 표시
            setShowSuccessModal(true);
        } catch (error) {
            console.error("매칭 수락 실패:", error);
        }
    };

    const handleDecline = () => {
        // 거절 확인 모달 표시
        setShowConfirmModal(true);
    };

    const handleConfirmDecline = async () => {
        // TODO: 매칭 거절 API 호출
        try {
            // const response = await declineMatchAPI();
            console.log("매칭 거절 완료");
            setShowConfirmModal(false);
            // 거절 후 이전 페이지로 이동하거나 다른 처리
            navigate(-1);
        } catch (error) {
            console.error("매칭 거절 실패:", error);
        }
    };

    const handleCopyEmail = () => {
        // 이메일 복사 완료 처리 (선택적)
        console.log("이메일 복사 완료");
    };

    return (
        <div className="bg-white relative w-full min-h-screen flex flex-col">
            {/* Header */}
            <Header
                content="제안 받은 매칭"
                onClick={() => navigate(-1)}
            />

            {/* Card */}
            <div className="flex-1 flex items-center justify-center px-4 pt-6 pb-8">
                <div className="w-full max-w-[358px]">
                    <MyCardComponent 
                        data={cardData} 
                        className="border border-[#cfcfd7] shadow-sm"
                        showSkillBorder={true}
                    />
                </div>
            </div>

            {/* Buttons */}
            <div className="px-4 pb-8 flex flex-col gap-3 items-center">
                <div className="w-full max-w-[358px]">
                    <Button
                        variant="primary"
                        text="매칭 수락하기"
                        onClick={handleAccept}
                        style={{ height: "48px", borderRadius: "12px" }}
                    />
                </div>
                <div className="w-full max-w-[358px]">
                    <Button
                        variant="secondary"
                        text="매칭 거절하기"
                        onClick={handleDecline}
                        style={{ height: "48px", borderRadius: "12px" }}
                    />
                </div>
            </div>

            {/* Success Modal */}
            <Modal
                type="success"
                title="매칭이 성사되었어요!"
                message=""
                userName="설정원"
                email="jini77877@naver.com"
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                onCopyEmail={handleCopyEmail}
            />

            {/* Confirm Decline Modal */}
            <Modal
                type="confirm"
                title="정말 매칭을 거절하시겠어요?"
                message="거절한 매칭은 복구할 수 없어요."
                isOpen={showConfirmModal}
                onClose={() => setShowConfirmModal(false)}
                onCancel={() => setShowConfirmModal(false)}
                onConfirm={handleConfirmDecline}
            />
        </div>
    );
}
