import { SET_FILTER } from "../actions";
const initialState = {
  usersList: [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Michael Johnson" },
    { id: 4, name: "Emily Davis" },
    { id: 5, name: "David Wilson" },
    { id: 6, name: "Olivia Brown" },
    { id: 7, name: "James Taylor" },
    { id: 8, name: "Sophia Martinez" },
    { id: 9, name: "Liam Anderson" },
    { id: 10, name: "Emma Thompson" },
  ],
  filterValue: "",
};

const usersReducer = (state = initialState, { type, payload }) => {
  if (type === SET_FILTER) {
    return { ...state, filterValue: payload };
  }

  return state;
};

export default usersReducer;
