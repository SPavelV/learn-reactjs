import axios from "../../axios/axios-quiz";
import {
  FETCH_QUIZES_START,
  FETCH_QUZES_SUCCESS,
  FETCH_QUIZES_ERROR,
} from "./actionTypes";

export function fetchQuzes() {
  return async (dispatch) => {
    dispatch(fetchQuizesStart());
    try {
      const response = await axios.get("/quizes.json");

      const quizes = [];
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест №${index + 1}`,
        });
      });

      dispatch(fetchQuzesSuccess(quizes));
    } catch (e) {
      dispatch(fetchQuizesError(e));
    }
  };
}

export function fetchQuizesStart() {
  return {
    type: FETCH_QUIZES_START,
  };
}
export function fetchQuzesSuccess(quizes) {
  return {
    type: FETCH_QUZES_SUCCESS,
    quizes
  };
}
export function fetchQuizesError(error) {
  return {
    type: FETCH_QUIZES_ERROR,
    error
  };
}
