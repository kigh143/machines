import { createSlice } from "@reduxjs/toolkit";

interface Machine {
  id: string;
}

interface MachineType {
  typeName: string;
  attributes: Attribute[];
  id: string;
  titleFlied?: string;
}

interface Attribute {
  dataType: string;
  name: string;
}

export interface MachinesState {
  machineTypes: MachineType[];
}

const initialState: MachinesState = {
  machineTypes: [],
};

export const machineSlice = createSlice({
  name: "machines",
  initialState,
  reducers: {
    addMachineType: (state: MachinesState, action: any) => {
      state.value = action.payload;
    },
  },
});

export const { addMachineType } = machineSlice.actions;
export default machineSlice.reducer;
