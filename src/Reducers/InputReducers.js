import { ADD } from "../Action/InputAction";

const initialState = {
  data: [],
};

const Item = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        data: (state.data = ""),
      };
    default:
      return state;
  }
};

export default Item;
