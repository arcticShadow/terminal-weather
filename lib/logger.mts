enum Severity {
    Trace = 0,
    Debug,
    Info,
    Warn,
    Error
}

export const trace = (message:any) => log(Severity.Trace)(console.trace, message);

export const log = (severity: Severity) => (logwriter: Function, message:any) => {
    // TODO: Extract Desired log level from env var
    logwriter(message)
}
