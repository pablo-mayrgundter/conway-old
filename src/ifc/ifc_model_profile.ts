import { CanonicalProfile } from '../core/canonical_profile'
import {ModelProfile} from '../core/model'


/**
 *
 */
export class IfcModelProfile implements ModelProfile {

  private readonly profiles_ = new Map< number, CanonicalProfile >()

  /**
   * @return {number}
   */
  get length(): number {
    return this.profiles_.size
  }

  /**
   *
   * @param profile
   */
  public add( profile: CanonicalProfile ) {
    this.profiles_.set( profile.localID, profile )
  }

  /**
   *
   * @param localID
   * @return {Profile | undefined}
   */
  public getByLocalID(localID: number): CanonicalProfile | undefined {
    return this.profiles_.get(localID)
  }

  /**
   *
   * @return {IterableIterator<CanonicalProfile>}
   */
  public [Symbol.iterator](): IterableIterator<CanonicalProfile> {
    return this.profiles_.values()
  }

}
