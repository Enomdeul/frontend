import { ProfileCard } from "./ProfileCard";

interface ProfileCardData {
    role: "designer" | "planner" | "developer";
    name: string;
    age: number;
    userId?: number; // 유저 ID 추가 (선택적)
}

interface ProfileCardListProps {
    profiles: ProfileCardData[];
    onCardClick?: (profile: ProfileCardData) => void;
}

export function ProfileCardList({ profiles, onCardClick }: ProfileCardListProps) {
    return (
        <div className="flex gap-4">
            {profiles.map((profile, index) => (
                <ProfileCard
                    key={index}
                    role={profile.role}
                    name={profile.name}
                    age={profile.age}
                    onClick={() => onCardClick?.(profile)}
                />
            ))}
        </div>
    );
}

