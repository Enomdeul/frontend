import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data.result;
  },
  (error) => {
    console.error("Error:", error);
    return Promise.reject(error);
  }
);

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
