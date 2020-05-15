import {ActionTypes} from './ResultsActions'
import {ResultsDOM} from '../models/ResultsDOMModel'

export interface ResultsState {
  data: ResultsDOM | null
  isLoading: boolean
  hasError: boolean
}

const initialState: ResultsState = {
  data: null,
  isLoading: false,
  hasError: false
}

export const ResultsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.FetchResultsInit: {
      return {
        ...state,
        isLoading: true,
        hasError: false
      }
    }

    case ActionTypes.FetchResultsSuccess: {
      const {result} = action.payload

      return {
        ...state,
        data: result.data,
        isLoading: false,
        hasError: false
      }
    }

    case ActionTypes.FetchResultsFailure: {
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    }

    default:
      return state
  }
}
