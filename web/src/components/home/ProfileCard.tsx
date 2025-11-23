import { textStyles } from "@/lib/typography";
import { symbolMap } from "@/constants/symbol";

interface ProfileCardProps {
    role: "designer" | "planner" | "developer";
    name: string;
    age: number;
    onClick: () => void;
}

export function ProfileCard({ role, name, age, onClick }: ProfileCardProps) {
    // role에 따라 symbol 이미지 매핑
    const roleToSymbolMap: Record<"designer" | "planner" | "developer", string> = {
        designer: symbolMap["DESIGNER"],
        planner: symbolMap["PLAN"],
        developer: symbolMap["DEVELOPER"],
    };

    const profileImage = roleToSymbolMap[role];
    // 역할별 스타일 설정
    const roleStyles = {
        designer: {
            container: "absolute flex items-center justify-center left-[45px] top-[-15px] w-[170.957px] h-[170.957px]",
            imageWrapper: "flex-none scale-y-[-100%]",
            imageSize: "w-[124.214px] h-[124.214px]",
        },
        planner: {
            container: "absolute flex h-[150.893px] items-center justify-center left-[63px] top-[-10px] w-[142.29px]",
            imageWrapper: "flex-none scale-y-[-100%]",
            imageSize: "h-[119.345px] relative w-[101.965px]",
        },
        developer: {
            container: "absolute flex h-[139.772px] items-center justify-center left-[62px] top-[-10px] w-[131.293px]",
            imageWrapper: "flex-none",
            imageSize: "h-[68.03px] relative w-[124.722px]",
        },
    };

    const styles = roleStyles[role];

    return (
        <div 
            className="h-[108px] w-[164px] rounded-[12px] overflow-hidden relative bg-[#F0F4FF] cursor-pointer"
            onClick={onClick}
        >
            {/* 프로필 이미지 */}
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <div className={styles.imageSize}>
                        <img
                            alt={name}
                            src={profileImage}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* 텍스트 정보 */}
            <div className="absolute flex flex-col gap-0 left-3 top-4 z-10">
                <p className={`${textStyles.caption.semibold} text-[12px] text-[#668cff] leading-[1.5]`}>
                    {role === "designer" ? "디자이너" : role === "planner" ? "기획자" : "개발자"}
                </p>
                <p className={`${textStyles.subtitle.bold} text-[18px] text-black leading-[1.5]`}>
                    {name} ({age})
                </p>
            </div>
        </div>
    );
}

