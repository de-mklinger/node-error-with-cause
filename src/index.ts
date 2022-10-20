export default class ErrorWithCause extends Error {
  readonly cause: unknown;

  constructor(message: string | undefined, cause: unknown) {
    super(getMessageWithCause(message, cause));
    this.cause = cause;
  }
}

function getMessageWithCause(message?: string, cause?: unknown): string {
  if (message && cause) {
    return `${message}, caused by: ${getErrorMessage(cause)}`;
  }

  if (message) {
    return message;
  }

  return getMessageWithCause("Error", cause);
}

function getErrorMessage(e: unknown): string {
  let s;

  if (e instanceof Error) {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    s = e.toString();
  }

  return s ?? "Unknown error";
}
