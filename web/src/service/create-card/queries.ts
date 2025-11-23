import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createCard, type CardFormData} from "./api";

import {myCardQueryKey} from "../my-card/querykey";

export const useCreateCard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (cardFormData: CardFormData) => createCard(cardFormData),
    onSuccess: (data) => {
      console.log("Card created successfully:", data);
      queryClient.invalidateQueries({queryKey: myCardQueryKey.myCard});
    },
    onError: (error) => {
      console.error("Error creating card:", error);
    },
  });
};
