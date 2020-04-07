import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/actionTypes";

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let order = action.payload;

      let foundItem = state.items.find(
        (item) => item.drink === order.drink && item.option === order.option
      );
      if (foundItem) {
        foundItem.quantity += order.quantity;

        return {
          ...state,
          items: [...state.items],
        };
      } else {
        return {
          ...state,
          items: state.items.concat(order),
        };
      }

    case REMOVE_ITEM:
      const itemToRemove = action.payload;

      return {
        ...state,
        items: state.items.filter((item) => item !== itemToRemove),
      };

    case CHECKOUT:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export default reducer;
