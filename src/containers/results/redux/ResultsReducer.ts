import {ActionTypes} from './ResultsActions'
import {ResultsDOM} from '../models/ResultsDOMModel'

export interface ResultsState {
  data: ResultsDOM | null
}

const initialState: ResultsState = {
  data: null
}

export const ResultsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SetResults: {
      const {result} = action.payload

      return {
        ...state,
        data: result.data
      }
    }
    default:
      return state
  }
}
