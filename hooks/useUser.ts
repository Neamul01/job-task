export const useUser = (): string | null => {
  const user = localStorage.getItem("user") || null;
  return user;
};
