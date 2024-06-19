/**
 * Singleton class to manage parser quirks flags for IFC parsing.
 */
class IfcParserQuirks {
  private static _instance: IfcParserQuirks
  private _flags: { [key: string]: boolean }

  /**
   * Private constructor to prevent direct instantiation.
   * Initializes the flags with default values.
   */
  private constructor() {
    this._flags = {}
    // https://github.com/bldrs-ai/conway/wiki/IFC-Parser-Quirks#ifc-parser-quirks
    this.setFlag('relAssociatesMaterialRelatedObjects', true)
    this.setFlag('reflectanceMethod', true)
  }

  /**
   * Gets the singleton instance of the IfcParserQuirks class.
   *
   * @return {IfcParserQuirks} The singleton instance.
   */
  public static getInstance(): IfcParserQuirks {
    if (!IfcParserQuirks._instance) {
      IfcParserQuirks._instance = new IfcParserQuirks()
    }
    return IfcParserQuirks._instance
  }

  /**
   * Sets the value of a specific flag.
   *
   * @param {string} flagName - The name of the flag to set.
   * @param {boolean} value - The value to set for the flag.
   */
  public setFlag(flagName: string, value: boolean): void {
    this._flags[flagName] = value
  }

  /**
   * Gets the value of a specific flag.
   *
   * @param {string} flagName - The name of the flag to get.
   * @return {boolean} The value of the flag. Returns false if the flag is not set.
   */
  public getFlag(flagName: string): boolean {
    return this._flags[flagName] || false
  }
}

export default IfcParserQuirks
