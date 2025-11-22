import { textStyles } from "@/lib/typography";
import Button from "./Button";

export type ModalType = "success" | "confirm" | "send-match" | "send-success";

interface ModalProps {
    type: ModalType;
    title: string;
    message: string;
    userName?: string; // success 타입에서 사용
    email?: string; // success 타입에서 사용
    onConfirm?: () => void;
    onCancel?: () => void;
    onCopyEmail?: () => void; // success 타입에서 사용
    isOpen: boolean;
    onClose: () => void;
}

export function Modal({
    type,
    title,
    message,
    userName,
    email,
    onConfirm,
    onCancel,
    onCopyEmail,
    isOpen,
    onClose,
}: ModalProps) {
    if (!isOpen) return null;

    const handleCopyEmail = () => {
        if (email) {
            navigator.clipboard.writeText(email);
            onCopyEmail?.();
        }
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                <div
                    className="bg-white rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_4px_14px_0px_rgba(0,0,0,0.1)] w-full max-w-[358px]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between pb-2 pt-5 px-5">
                        <h2 className={`${textStyles.body1.bold} text-[18px] text-[#353743] text-center flex-1 leading-[1.5]`}>
                            {title}
                        </h2>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4 pb-5 pt-0 px-5">
                        {/* Message */}
                        <div className="flex flex-col gap-0.5">
                            <p className={`${textStyles.body2.medium} text-[14px] text-[#454858] text-center leading-[1.5] whitespace-pre-line`}>
                                {type === "success" && userName && email ? (
                                    <>
                                        {userName}님의 이메일은{"\n"}
                                        {email}이예요.
                                    </>
                                ) : (
                                    message
                                )}
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            {type === "success" ? (
                                <>
                                    {/* 확인 버튼 */}
                                    <div className="flex-1">
                                        <Button
                                            variant="secondary"
                                            text="확인"
                                            onClick={onClose}
                                            style={{ height: "48px", borderRadius: "12px" }}
                                        />
                                    </div>
                                    {/* 이메일 복사 버튼 */}
                                    <div className="flex-1">
                                        <Button
                                            variant="primary"
                                            text="이메일 복사"
                                            onClick={handleCopyEmail}
                                            style={{ height: "48px", borderRadius: "12px" }}
                                        />
                                    </div>
                                </>
                            ) : type === "send-match" ? (
                                <>
                                    {/* 취소 버튼 */}
                                    <div className="flex-1">
                                        <Button
                                            variant="secondary"
                                            text="취소"
                                            onClick={onCancel || onClose}
                                            style={{ height: "48px", borderRadius: "12px" }}
                                        />
                                    </div>
                                    {/* 확인 버튼 */}
                                    <div className="flex-1">
                                        <Button
                                            variant="primary"
                                            text="확인"
                                            onClick={onConfirm}
                                            style={{ height: "48px", borderRadius: "12px" }}
                                        />
                                    </div>
                                </>
                            ) : type === "send-success" ? (
                                <>
                                    {/* 확인 버튼 (하나만) */}
                                    <div className="w-full">
                                        <Button
                                            variant="primary"
                                            text="확인"
                                            onClick={onClose}
                                            style={{ height: "48px", borderRadius: "12px" }}
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* 취소 버튼 */}
                                    <div className="flex-1">
                                        <Button
                                            variant="secondary"
                                            text="취소"
                                            onClick={onCancel || onClose}
                                            style={{ height: "48px", borderRadius: "12px" }}
                                        />
                                    </div>
                                    {/* 거절 버튼 */}
                                    <div className="flex-1">
                                        <button
                                            onClick={onConfirm}
                                            className={`${textStyles.button.button1} bg-[#ff4538] h-[48px] rounded-[12px] px-3 py-2 w-full flex items-center justify-center transition hover:opacity-90 text-[16px] leading-[1.5] text-white text-center`}
                                        >
                                            거절
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

