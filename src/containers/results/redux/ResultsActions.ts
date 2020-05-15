export enum ActionTypes {
  FetchResultsInit = '[INIT] Fetch Results',
  FetchResultsSuccess = '[SUCCESS] Fetch Results',
  FetchResultsFailure = '[FAILURE] Fetch Results'
}

export const fetchResultsInit = () => ({
  type: ActionTypes.FetchResultsInit
})

export const fetchResultsSuccess = (result: any) => ({
  type: ActionTypes.FetchResultsSuccess,
  payload: {result}
})

export const fetchResultsFailure = (error: Error) => ({
  type: ActionTypes.FetchResultsFailure,
  payload: {error}
})
