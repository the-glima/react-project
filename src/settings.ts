export const settings = {
  api: {
    // Here, in 'url' I'm using the Mocky URL since the
    // authorization invalid error net::ERR_CERT_AUTHORITY_INVALID (check README)

    // To use the real API URL change this value to:
    // process.env.REACT_APP_MOCKY_RESULTS_URL
    url: `${process.env.REACT_APP_MOCKY_RESULTS_URL}?mocky-delay=${process.env.REACT_APP_MOCKY_DELAY}`
  }
}
