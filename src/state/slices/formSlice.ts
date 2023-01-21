import { createSlice } from "@reduxjs/toolkit";

export interface FormType {
  value: number;
}

const initialState: FormType = {
  value: 0,
};

export const machineSlice = createSlice({
  name: "machines",
  initialState,
  reducers: {
    addMachineType: (state: FormType, action: any) => {
      state.value = action.payload;
    },
  },
});

export const { addMachineType } = machineSlice.actions;
export default machineSlice.reducer;
