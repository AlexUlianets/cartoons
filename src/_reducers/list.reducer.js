import { listConstants } from '../_constants';

export function list(state = {}, action) {
  switch (action.type) {
    case listConstants.GET_SUCCESS:
      return {
        images: action.data
      };
    case listConstants.GET_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}