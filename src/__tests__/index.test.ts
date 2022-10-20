import ErrorWithCause from "../index";

/* eslint-disable @typescript-eslint/no-base-to-string */

describe("ErrorWithCause", () => {
  it("has cause", () => {
    const cause = new Error();
    const errorWithCause = new ErrorWithCause("msg", cause);
    expect(errorWithCause.cause).toBe(cause);
  });

  it("has message with cause", () => {
    const cause = new Error();
    const errorWithCause = new ErrorWithCause("msg", cause);
    expect(errorWithCause.message).toBe("msg, caused by: " + cause.toString());
  });

  it("accepts all types of cause", () => {
    const cause = "blabla";
    const errorWithCause = new ErrorWithCause("msg", cause);
    expect(errorWithCause.cause).toBe(cause);
  });

  it("has message without cause if no error type", () => {
    const cause = "blabla";
    const errorWithCause = new ErrorWithCause("msg", cause);
    expect(errorWithCause.message).toBe("msg, caused by: Unknown error");
  });

  it("accepts undefined cause", () => {
    const cause = undefined;
    const errorWithCause = new ErrorWithCause("msg", cause);
    expect(errorWithCause.cause).toBeUndefined();
    expect(errorWithCause.message).toBe("msg");
  });

  it("accepts undefined message", () => {
    const cause = new Error("foo");
    const errorWithCause = new ErrorWithCause(undefined, cause);
    expect(errorWithCause.cause).toBe(cause);
    expect(errorWithCause.message).toBe(
      "Error, caused by: " + cause.toString()
    );
  });
});
