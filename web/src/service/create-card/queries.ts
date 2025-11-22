import {useMutation} from "@tanstack/react-query";

import type {CardFormData} from "./api";
// import {getSkills, type SkillGroup} from "./api";

export const useCreateCard = () => {
  return useMutation({
    mutationFn: (cardFormData: CardFormData) => {
      console.log(cardFormData);
      return Promise.resolve(cardFormData);
    },
    // mutationFn: (cardFormData: CardFormData) => createCard(cardFormData),
    onSuccess: (data) => {
      console.log("Card created successfully:", data);
    },
    onError: (error) => {
      console.error("Error creating card:", error);
    },
  });
};
