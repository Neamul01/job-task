export const useUser = () => {
  const user = localStorage.getItem("user") || null;
  return user;
};