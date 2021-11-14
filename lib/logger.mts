enum Severity {
    Trace = 0,
    Debug,
    Info,
    Warn,
    Error
}

export const trace = (message:any) => log(Severity.Trace)(console.trace, message);

export const debug = (message:any) => log(Severity.Debug)(console.debug, message);

export const info = (message:any) => log(Severity.Info)(console.info, message);

export const warn = (message:any) => log(Severity.Warn)(console.warn, message);

export const error = (message:any) => log(Severity.Error)(console.error, message);

export const log = (severity: Severity) => (logwriter: Function, message:any) => {
    // TODO: Extract Desired log level from env var
    logwriter(message)
}
