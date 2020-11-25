export const initialState = {
  alertList: [],
};

//This is a selector
export const getAlertsTotal = (alertList) => alertList.length;

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_ALERTS":
      return {
        ...state,
        alertList: [...state.alertList],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove product (id: ${action.id}) because it's not in the cart`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
        username: action.username,
      };

    default:
      return state;
  }
};

export default reducer;
