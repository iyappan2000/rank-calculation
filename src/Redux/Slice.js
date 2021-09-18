const initialState = [
  {
    id: 0,
    Name: "Santhosh",
    Tamil: 40,
    English: 35,
    Maths: 35,
    Science: 35,
    SSS: 35,
    Total: 180,
    Rank: 3,
    Result: "Pass",
  },
  {
    id: 1,
    Name: "Saktheesh",
    Tamil: 35,
    English: 35,
    Maths: 35,
    Science: 35,
    SSS: 34,
    Total: 174,
    Rank: "Nil",
    Result: "Fail",
  },
  {
    id: 2,
    Name: "Mahindran",
    Tamil: 50,
    English: 50,
    Maths: 50,
    Science: 50,
    SSS: 50,
    Total: 250,
    Rank: 2,
    Result: "Pass",
  },
  {
    id: 3,
    Name: "Iyappan",
    Tamil: 90,
    English: 100,
    Maths: 100,
    Science: 100,
    SSS: 100,
    Total: 490,
    Rank: 1,
    Result: "Pass",
  },
];

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DETAILS":
      state = [...state, action.payload];
      return state;
    case "DELETE_DETAILS":
      const deleteFilter = state.filter((detail) =>
        detail.id === action.payload ? null : detail
      );
      state = deleteFilter;
      return state;

    default:
      return state;
  }
};
