import { create } from "zustand";
interface CreateTokenState {
  address: string;
  setAddress: (address: string) => void;
}

const useCreateToken = create<CreateTokenState>((set) => ({
  address: "",
  setAddress: (address: string) => set({ address }),
}));

export { useCreateToken };
