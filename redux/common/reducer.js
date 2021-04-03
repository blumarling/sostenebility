export default (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_HOME_MODAL':
      return {
        ...state,
        homeModalSeen: true
      }
    default:
      return state;
  }
};
