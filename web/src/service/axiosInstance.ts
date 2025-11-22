import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SUPABASE_URL as string,
  headers: {
    "Content-Type": "application/json",
    apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string,
  },
});

export const authAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});

// // 로그인 ID 중복 확인
// export const checkIdDuplicate = async (id: string) => {
//   baseURL: import.meta.env.VITE_API_BASE_URL as string,
//   headers:{

//   }
// };

// // 이메일 중복 확인
// export const checkEmailDuplicate = async (email: string) => {
//   baseURL: import.meta.env.VITE_API_BASE_URL as string,
//   headers:{

//   }
// };