import { PARSE_HOURS_JSON_DATA } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case PARSE_HOURS_JSON_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
