import { LogEntry, LoggingProxy } from '../logging/logger'


/* eslint-disable no-unused-vars */
/**
 * When we are ready to handle Sentry Logging, this is a skeleton for a logging proxy.
 */
class SentryLoggingProxy implements LoggingProxy {

  /**
   *
   * @param entry - log entry
   */
  log(entry: LogEntry) {
    throw new Error( 'Not Implemented' )
  }
}
/* eslint-enable no-unused-vars */

/*
//Example proxy Usage
Logger.addProxy(new SentryLoggingProxy());

Logger.info('Application started');
Logger.warning('Low memory');
Logger.warning('Low memory');
Logger.error('Failed to load resource');

Logger.displayLogs();*/
