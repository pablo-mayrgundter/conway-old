// eslint-disable-next-line no-shadow
export enum MemoizationCapture {

  // eslint-disable-next-line no-unused-vars
  OPTIMAL  = 0, // Only capture optimal states
  // eslint-disable-next-line no-unused-vars
  FULL     = 1, // Capture temporaries, booleans etc
}

/**
 * Static class of the regression capture states.
 */
export abstract class RegressionCaptureState {

  public static memoization: MemoizationCapture = MemoizationCapture.OPTIMAL

}
