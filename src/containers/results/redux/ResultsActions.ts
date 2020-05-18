export enum ActionTypes {
  FETCH_RESULTS_INIT = 'FETCH_RESULTS_INIT',
  FETCH_RESULTS_SUCCESS = 'FETCH_RESULTS_SUCCESS',
  FETCH_RESULTS_FAILURE = 'FETCH_RESULTS_FAILURE'
}

export const fetchResultsInit = () => ({
  type: ActionTypes.FETCH_RESULTS_INIT
})

export const fetchResultsSuccess = (result: any) => ({
  type: ActionTypes.FETCH_RESULTS_SUCCESS,
  payload: {result}
})

export const fetchResultsFailure = (error: Error) => ({
  type: ActionTypes.FETCH_RESULTS_FAILURE,
  payload: {error}
})
