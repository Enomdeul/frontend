export const authQueryKey = {
    all: ["auth"] as const,
    signup: () => [...authQueryKey.all, "signup"] as const,
};

