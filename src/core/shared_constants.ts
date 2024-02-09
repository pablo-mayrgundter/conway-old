/**
 * Enum presenting the extraction results.
 */
/* eslint-disable no-shadow, no-unused-vars, no-magic-numbers */
// -- eslint doesn't understand enums properly.
export enum ExtractResult {

  COMPLETE = 0,
  INCOMPLETE = 1,
  SYNTAX_ERROR = 2,
  MISSING_TYPE = 3,
  INVALID_STEP = 4
}
/* eslint-enable no-shadow, no-unused-vars, no-magic-numbers */
