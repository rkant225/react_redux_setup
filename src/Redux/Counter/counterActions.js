import { INCREMENT, DECREMENT } from "./counterTypes";

export const increaseCounter = (by)=>{
    return {
      type: INCREMENT,
      payload: { by: by}
    };
}

export const decreaseCounter = (by)=>{
    return {
      type: DECREMENT,
      payload: { by: by}
    };
}