import { textStyles } from "@/lib/typography";

interface SkillChipProps {
    label: string;
    selected?: boolean;
}

export function SkillChip({ label, selected = false }: SkillChipProps) {
    return (
        <div
            className={
                selected
                    ? "bg-[#d0dbff] border border-[#5d7fe8] rounded-[48px] px-6 py-2"
                    : "bg-[#efeff2] rounded-[48px] px-6 py-2"
            }
        >
            <p
                className={`${textStyles.button.button2} text-[14px] leading-[1.5] ${
                    selected ? "text-[#5d7fe8]" : "text-[#464659]"
                }`}
            >
                {label}
            </p>
        </div>
    );
}

