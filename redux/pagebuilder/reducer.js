export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_STRUCTURE':
      return [
        ...action.payload
      ];
    default:
      return state;
  }
};
