import { GET_JSON_FROM_INPUT } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case GET_JSON_FROM_INPUT:
      return [...action.payload];
    default:
      return state;
  }
}
