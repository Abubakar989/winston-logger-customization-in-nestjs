import { Logger } from '@nestjs/common';

export class WinstonLogger {
    private readonly logger: Logger;

    /**
     * Creates an instance of WinstonLogger.
     * @param {string} context
     * @memberof WinstonLogger
     */
    constructor(context: string) {
        this.logger = new Logger(context, true);
    }
    /**
     * Log an info message
     *
     * @param {string} message
     * @param {string} className
     * @param {string} functionName
     * @param {object} meta
     * @memberof WinstonLogger
     */
    public log(className:string, functionName:string, message: string, meta: object = {}) {
        this.logger.log({className,functionName, message, ...meta});
    }

    /**
     * Log an info message
     * @param {string} message
     * @param {object} meta
     * @param {string} functionName
     * @param {string} className
     * @memberof WinstonLogger
     */
    public info(className:string, functionName:string, message: string, meta: object = {}) {
        this.logger.log({className,functionName, message, ...meta});
    }

    /**
     * Log a debug message
     * @param {string} message
     * @param {object} meta
     * @param {string} className
     * @param {string} functionName
     * @memberof WinstonLogger
     */
    public debug(className:string, functionName:string, message: string, meta: object = {}) {
        this.logger.debug({className,functionName, message, ...meta});
    }

    /**
     * Log a verbose message
     * @param {string} message
     * @param {object} meta
     * @param {string} functionName
     * @param {string} className
     * @memberof WinstonLogger
     */
    public verbose(className:string, functionName:string, message: string, meta: object = {}) {
        this.logger.verbose({className,functionName, message, ...meta});
    }

    /**
     * Log an error message
     * @param {string} message
     * @param {object} meta
     * @param {string} functionName
     * @param {string} className
     * @memberof WinstonLogger
     */
    public error(className:string, functionName:string, message: string, meta: object = {}) {
        this.logger.error({className,functionName, message, ...meta});
    }

    /**
     * Log a warn message
     * @param {string} message
     * @param {string} functionName
     * @param {string} className
     * @param {object} meta
     * @memberof WinstonLogger
     */
    public warn(className:string, functionName:string, message: string, meta: object = {}) {
        this.logger.warn({className,functionName, message, ...meta});
    }
}
