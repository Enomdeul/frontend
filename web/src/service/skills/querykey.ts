export const skillsQueryKey = {
  all: ["skills"] as const,
  list: () => [...skillsQueryKey.all] as const,
};
