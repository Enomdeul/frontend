export const cardKeys = {
    all: ["cards"] as const,
    myCard: () => [...cardKeys.all, "me"] as const,
};

