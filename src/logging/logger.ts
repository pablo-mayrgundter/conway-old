import { Statistics } from '../statistics/statistics'
import Environment, { EnvironmentType } from '../utilities/environment'


type LogLevel = 'info' | 'warning' | 'error'

export interface LogEntry {
    level: LogLevel
    message: string
    count: number
}


export interface LoggingProxy {
    log(entry: LogEntry): void
}

/**
 * Logger class which supports logging statistics, as well as proxy logging interfaces
 * for extended logging.
 */
export default class Logger {
  private static logs: LogEntry[] = []
  private static proxies: LoggingProxy[] = []
  private static statistics: Map<number, Statistics> = new Map<number, Statistics>()


  /**
   * Detects environment and initializes wasm callbacks
   */
  public static initializeWasmCallbacks() {
    const environment = Environment.environmentType

    if (environment === EnvironmentType.BROWSER) {
      const globalScope = window;
      (globalScope as any).logInfo = Logger.info;
      (globalScope as any).logWarning = Logger.warning;
      (globalScope as any).logError = Logger.error
    } else if (environment === EnvironmentType.NODE ||
        environment === EnvironmentType.BOTH_FEATURES) {
      const globalScope = global;
      (globalScope as any).logInfo = Logger.info;
      (globalScope as any).logWarning = Logger.warning;
      (globalScope as any).logError = Logger.error
    }
  }

  /**
   *
   * @param message - log message
   * @param level - log level
   * @return {number} log index
   */
  private static findLogIndex(message: string, level: LogLevel): number {
    return Logger.logs.findIndex((log) => log.message === message && log.level === level)
  }

  /**
   *
   * @param level - log level
   * @param message - log message
   */
  private static log(level: LogLevel, message: string): void {
    const index = Logger.findLogIndex(message, level)
    let logEntry: LogEntry

    if (index >= 0) {
      Logger.logs[index].count += 1
      logEntry = Logger.logs[index]
    } else {
      logEntry = { level, message, count: 1 }
      Logger.logs.push(logEntry)
    }

    Logger.proxies.forEach((proxy) => proxy.log(logEntry))
  }

  /**
   *
   * @param proxy - a log proxy
   */
  public static addProxy(proxy: LoggingProxy): void {
    Logger.proxies.push(proxy)
  }

  /**
   *
   * @param message - log message
   */
  public static info(message: string): void {
    Logger.log('info', message)
  }

  /**
   *
   * @param modelID
   * @return {Statistics | undefined}
   */
  public static getStatistics(modelID: number): Statistics | undefined {
    return this.statistics.get(modelID)
  }

  /**
   *
   * @param modelID
   */
  public static createStatistics(modelID: number): void {
    const statistics: Statistics = new Statistics()

    this.statistics.set(modelID, statistics)
  }

  /**
   *
   * @param modelID
   */
  public static printStatistics(modelID: number) {
    const statistics_ = this.statistics.get(modelID)

    if (statistics_ !== void 0) {
      statistics_.printStatistics()
    } else {
      Logger.error(`No statistics for modelID: ${modelID}`)
    }
  }

  /**
   *
   * @param message - log message
   */
  public static warning(message: string): void {
    Logger.log('warning', message)
  }

  /**
   *
   * @param message - log message
   */
  public static error(message: string): void {
    Logger.log('error', message)
  }

  /**
   *
   * @return {LogEntry[]} - list of logs
   */
  public static getLogs(): LogEntry[] {
    return Logger.logs
  }

  /**
   * display logs in a table
   */
  public static displayLogs(clearLogs:boolean = false): void {
    console.table(Logger.logs)

    if (clearLogs) {
      Logger.logs = []
    }
  }

  /**
   * clear logs
   */
  public static clearLogs(): void {
    Logger.logs = []
  }
}
