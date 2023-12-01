import { create, } from 'zustand'

const useStore = create((set) => ({
    // Login 상태 관련
    is_login: false,
    setIsLogin: (newstate) => set({is_login: newstate}),

    // ACESS_TOKEN 관련
    ACCESS_TOKEN: '',
    setAcessToken: (token) => set({ACCESS_TOKEN: token}),
    
    // generatedimageurl
    generatedimageurl: '',
    setGeneratedImageUrl: (imageurl) => set({ generatedimageurl: imageurl }),

    // prompt 관련
    prompt: '',
    setPrompt: (dalle_prompt) => set({prompt: dalle_prompt}),

  }));
  
  export default useStore;