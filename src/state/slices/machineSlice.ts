import { createSlice } from "@reduxjs/toolkit";

export interface MachinesState {
  value: number;
  coords: any;
  userType: string;
  fcmToken: string;
  user: any;
  photoUrl: string;
  activeSub: any;
}

const initialState: MachinesState = {
  value: 0,
  coords: null,
  userType: "",
  fcmToken: "",
  user: null,
  photoUrl: "",
  activeSub: null,
};

export const machineSlice = createSlice({
  name: "machines",
  initialState,
  reducers: {
    addMachineType: (state: MachinesState, action: any) => {
      state.userType = action.payload;
    },
  },
});

export const { addMachineType } = machineSlice.actions;
export default machineSlice.reducer;
