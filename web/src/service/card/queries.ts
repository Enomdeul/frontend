import { useQuery } from "@tanstack/react-query";
import { getMyCard } from "./api";
import { cardKeys } from "./querykey";

export const useMyCard = () => {
    return useQuery({
        queryKey: cardKeys.myCard(),
        queryFn: getMyCard,
    });
};

