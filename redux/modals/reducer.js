const modalReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MODAL':
      return [
        ...state.filter(item => item.type !== action.payload.type),
        {
          ...action.payload
        }
      ];
    case 'REMOVE_MODAL':
      return [
        ...state.filter(item => item.type !== action.payload.type),
      ];
    default:
      return state;
  }
};

export default modalReducer