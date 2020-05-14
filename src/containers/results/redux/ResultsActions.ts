import {ResultsState} from './ResultsReducer'

export enum ActionTypes {
  SetResults = '[SET] Results'
}

export const setResults = (result: ResultsState) => ({
  type: ActionTypes.SetResults,
  payload: {result}
})
