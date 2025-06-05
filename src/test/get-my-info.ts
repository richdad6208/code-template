interface User {
  id: string;
  name: string;
  role: string;
}
export const getMyInfo = (): Promise<User> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: "jaesung", name: "jaesung", role: "user" });
    }, 300);
  });
