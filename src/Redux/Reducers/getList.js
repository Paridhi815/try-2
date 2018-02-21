const defaultState = {
  bookList: [],
};

const noteReducer = (previousState = defaultState, action) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    case 'GET_LIST': {
      return {
        ...previousState,
        bookList: action.payload,
      };
    }
    case 'GET_LIKE_STATUS': {
      return {
        ...previousState,
      };
    }
    default: {
      return previousState;
    }
  }
};

export default noteReducer;
