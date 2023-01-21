import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MachineType {
  typeName: string;
  attributes: Attribute[];
  id: string;
  titleFlied?: string;
}

export interface Attribute {
  dataType: string;
  name: string;
}

export interface MachinesState {
  machineTypes: MachineType[];
  activeMachineType: MachineType;
}

const initialState: MachinesState = {
  machineTypes: [],
  activeMachineType: null,
};

export const machineSlice = createSlice({
  name: "machines",
  initialState,
  reducers: {
    addMachineType: (
      state: MachinesState,
      action: PayloadAction<MachineType>
    ) => {
      state.machineTypes = [...state.machineTypes, action.payload];
      state.activeMachineType = action.payload;
    },

    editMachineType: (
      state: MachinesState,
      action: PayloadAction<MachineType>
    ) => {
      state.machineTypes = state.machineTypes.map((machine: any) => {
        if (machine.id === action.payload.id) {
          return { ...machine, ...action.payload };
        } else {
          return machine;
        }
      });
    },

    deleteMachineType: (state: MachinesState, action: any) => {
      state.machineTypes = state.machineTypes.filter(
        (machine: Machine) => machine.id !== action.payload
      );
    },

    setActiveType: (state: MachinesState, action: any) => {
      state.activeMachineType = action.payload;
    },

    addNewField: (
      state: MachinesState,
      action: PayloadAction<{ id: string; attribute: Attribute }>
    ) => {
      state.machineTypes = state.machineTypes.map((type: MachineType) => {
        if (type.id === action.payload.id) {
          type.attributes = [...type.attributes, action.payload.attribute];
          return type;
        } else {
          return type;
        }
      });
    },

    EditFieldName: (
      state: MachinesState,
      action: PayloadAction<{ id: string; attribute: Attribute; index: number }>
    ) => {
      //get thew type index
      const index = state.machineTypes.findIndex(
        (item) => item.id === action.payload.id
      );

      state.machineTypes[index].attributes[action.payload.index].name =
        action.payload.attribute.name;
    },
  },
});

export const {
  addMachineType,
  editMachineType,
  deleteMachineType,
  setActiveType,
  EditFieldName,
  addNewField,
} = machineSlice.actions;
export default machineSlice.reducer;
