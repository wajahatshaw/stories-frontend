import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Card } from 'react-native-square-in-app-payments'
import * as Constants from "expo-constants";
console.log(
  "****** process.env.BACKEND_URL *********>>>>> ",
  Constants.default.expoConfig?.extra?.BACKEND_URL
);
const instance = axios.create({
  baseURL: Constants.default.expoConfig?.extra?.BACKEND_URL,
})

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error("Axios Error - Status Code:", error.response.status);
      console.error("Axios Error - Response:", error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Axios Error - No Response:", error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.error("Axios Error - Request Setup:", error.message);
    }
    throw error;
  }
);
// get story endpoint instance.
export const fetchStories = async () => {
  try {
    const response = await instance.get("/stories");
    return response.data;
  } catch (error) {
    console.error("Error fetching stories:", error);
    throw error;
  }
};
// Login endpoint instance
export const loginUser = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const response = await instance.post("auth/login", { email, password });
    console.log("Login successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// signup endpoint instance

export const signUpUser = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const response = await instance.post("auth/signup", { email, password });
    console.log("Signup successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

// nextStory endpoint instance
export const fetchNextStory = async (currentStoryId: string): Promise<any> => {
  try {
    const response = await instance.get(`stories/next-story/${currentStoryId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching next story:', error);
    throw error;
  }
};

export const fetchPreviousStory = async (currentStoryId: string): Promise<any> => {
  try {
    const response = await instance.get(`stories/previous-story/${currentStoryId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching next story:', error);
    throw error;
  }
};

export const saveStory = async (storyId: string) => {
  try {
    const response = await instance.post(`users/save-story/${storyId}`);
    return response.data;
  } catch (error) {
    console.error("Error saving story:", error);
    throw error;
  }
};

export const fetchSavedStories = async () => {
  try {
    const response = await instance.get(`users/saved-stories`);
    return response.data;
  } catch (error) {
    console.error("These are users saved stories:", error);
    throw error;
  }
};



export const resetUser = async (
  email: string,
  
): Promise<any> => {
  try {
    const response = await instance.post("/users/reset-password", {
      email,
     
    });
    console.log("Reset Password:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};

export const createCustomerCard = async (
  nonce: string,
  card: Card,
) => {
  try {
    const response = await instance.post("/payments/create-customer-card", {
      nonce,
      card,
    });
    console.log("Card saved successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error saving customer card:", error);
    throw error;
  }
};

export const subscription = async (planType: string) => {
  try {
    const response = await instance.post("/subscriptions/subscription", {
      planType,
    });
    console.log("Card saved successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error saving customer card:", error);
  }
};

export const guestMode = async (): Promise<any> => {
  try {
    const response = await instance.post("auth/guest-mode");
    return response.data;
  } catch (error) {
    console.error("Error Activating Guest mode:", error);
    throw error;
  }
};

export const applyDiscount = async (discountCode: string) => {
  try {
    const response = await instance.post("discount/apply-discount", {
      discountCode,
    });
    return response.data;
  } catch (error) {
    console.error("Error Applying Discount:", error);
  }
};

export const searchStories = async (query: string) => {
  try {
    const response = await instance.get(`stories/search?query=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error searching for stories:", error);
    throw error;
  }
};

export const getSubscriptionPlansPrices = async () => {
  try {
    const response = await instance.get("prices/");
    return response.data;
  } catch (error) {
    console.error("Error getting subscription prices:", error);
  }
};

export const getDiscountPercentage = async () => {
  try {
    const response = await instance.get("discount/discounted-price");
    return response.data;
  } catch (error) {
    console.error("Error coming in discount price:", error);
  }
};
export const getUserCard = async () => {
  try {
    const response = await instance.get(`payments/get-user-card`);
    return response.data;
  } catch (error) {
    console.error("Error in getting payment card:", error);
    throw error;
  }
};

export const removePaymentCard = async (cardId : string) => {
  try {
    const response = await instance.delete("payments/delete-customer-card", {
      data: { cardId } 
    });
    return response.data;
  } catch (error) {
    console.error("Error Applying Discount:", error);
  }
};
