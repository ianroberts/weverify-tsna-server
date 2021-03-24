import {
  CSV_SNA_CLEAN,
  CSV_SNA_SET_RESULTS,
  CSV_COUNT_SET_RESULTS,
  CSV_SNA_SET_TYPE,
  CSV_HISTOGRAM_SET_RESULTS,
} from "../../actions/types/csvSnaTypes";

const defaultState = {
  loading: false,
  loadingMessage: "",
  result: null,
};

const csvSnaReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case CSV_SNA_CLEAN:
      return (state = defaultState);
    case CSV_SNA_SET_RESULTS:
      return {
        ...state,
        loading: true,
        loadingMessage: "",
        result: payload.result,
      };
    case CSV_SNA_SET_TYPE:
      return {
        ...state,
        result: { ...state.result, snaType: payload },
      };
    case CSV_COUNT_SET_RESULTS:
      return {
        ...state,
        result: { ...state.result, countSna: payload },
      };
    case CSV_HISTOGRAM_SET_RESULTS:
      return {...state,
        result: { ...state.result, histogram: payload },
      };
    default:
      return state;
  }
};
export default csvSnaReducer;
