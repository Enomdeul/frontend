import { ProfileCard } from "./ProfileCard";

interface ProfileCardData {
    role: "designer" | "planner" | "developer";
    name: string;
    age: number;
    profileImage: string;
}

interface ProfileCardListProps {
    profiles: ProfileCardData[];
}

export function ProfileCardList({ profiles }: ProfileCardListProps) {
    return (
        <div className="flex gap-4">
            {profiles.map((profile, index) => (
                <ProfileCard
                    key={index}
                    role={profile.role}
                    name={profile.name}
                    age={profile.age}
                    profileImage={profile.profileImage}
                />
            ))}
        </div>
    );
}

