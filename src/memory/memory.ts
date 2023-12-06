declare global {
    /* eslint-disable-next-line no-unused-vars */
    interface Performance {
        memory?: {
            jsHeapSizeLimit: number
            totalJSHeapSize: number
            usedJSHeapSize: number
        }
    }
}

import Environment, { EnvironmentType } from '../utilities/environment'
import Logger from '../logging/logger'

/**
 * Memory class handles retrieving memory statistics for various environments.
 */
export default class Memory {
  /**
   *
   * @return {string} - memory usage result
   */
  static checkMemoryUsage(): string {
    switch (Environment.environmentType) {
      case EnvironmentType.BROWSER:
        return this.checkBrowserMemory()
      case EnvironmentType.NODE:
        return this.checkNodeMemory()
      case EnvironmentType.BOTH_FEATURES:
        Logger.info('Checking memory usage for an environment with both Node.js and Web features.')
        // eslint-disable-next-line no-case-declarations
        const result = `${this.checkBrowserMemory()  } ${   this.checkNodeMemory()}`
        return result
      case EnvironmentType.UNKNOWN:
      default:
        return 'Unable to check memory usage: Unknown environment.'
    }
  }

  /**
   *
   * @return {string} - memory usage result for browser systems
   */
  private static checkBrowserMemory(): string {
    if (window && window.performance && window.performance.memory) {
      const memoryUsage = window.performance.memory
      // eslint-disable-next-line no-magic-numbers
      return `JS heap allocated ${memoryUsage.usedJSHeapSize / 1024 / 1024} MB`
    } else {
      return 'Browser memory usage information is not available.'
    }
  }

  /**
   *
   * @return {string} - memory usage result for node systems
   */
  private static checkNodeMemory(): string {
    const memoryUsage = process.memoryUsage()
    /* eslint-disable no-magic-numbers */
    return `Node Memory Usage: RSS ${memoryUsage.rss / 1024 / 1024} MB, ` +
           `Heap Total: ${memoryUsage.heapTotal / 1024 / 1024} MB, ` +
           `Heap Used: ${memoryUsage.heapUsed / 1024 / 1024} MB`
    /* eslint-enable no-magic-numbers */
  }
}
