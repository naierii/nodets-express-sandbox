import { ServerResponse } from "http";

export function testImportLog() {
  console.log("OwO");
}

export const rollDice = (min: number = 1, max: number = 6) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

/**
 * === ERROR TOOLS START ===
 *
 * Warning! Some article says using
 * custom error like this can have a problem
 * with Babel compilation.
 * I personally like this, so fix
 * Babel version instead???
 *
 * Relocate this into an custom-error-util.ts
 * or something.
 */
export class ResCustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}
export class IncorrectMethod extends ResCustomError {
  statusCode: number;

  constructor(message = "Method not allowed") {
    super(message);
    this.message = message;
    this.statusCode = 500;
  }
}
export class NotFound extends ResCustomError {
  constructor(entity: string) {
    const message = `${entity} not found`;
    super(message);
    this.message = message;
    this.statusCode = 404;
  }
}
export class PageNotFound extends ResCustomError {
  constructor() {
    const notFound = new NotFound("page");
    super(notFound.message);

    this.message = notFound.message;
    this.statusCode = notFound.statusCode;
  }
}
/**
 * === ERROR TOOLS END ===
 */

export const isJson = (str: any): boolean => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

/**
 * Prefer using "throw new Error()" instead of plain
 * "throw" for better logging and debugging experience
 */
export const resErrorHandler = (res: ServerResponse, error: unknown) => {
  let errorMessage = "Bad Request";
  let errorStatusCode = 400;
  let errorStack;

  let errorData: { [key: string]: any } = {};

  if (error instanceof ResCustomError || error instanceof Error) {
    if (!isJson(error.message)) {
      errorMessage = error.message;
      errorStack = error.stack;
      errorStatusCode =
        (error instanceof ResCustomError && error.statusCode) ||
        errorStatusCode;
    } else {
      errorData = JSON.parse(error.message);
      errorMessage = errorData.message || errorMessage;
      errorStatusCode = errorData.statusCode || errorStatusCode;
      errorStack = error.stack;
    }
  } else {
    if (!isJson(error)) {
      errorMessage = typeof error === "string" ? error : errorMessage;
    } else {
      errorData = JSON.parse(error as string);
      errorMessage = errorData.message || errorMessage;
      errorStatusCode = errorData.statusCode || errorStatusCode;
    }
  }

  console.error(
    "<resErrorHandler>",
    "status code:",
    errorStatusCode,
    "errorMessage:",
    errorMessage,
    "errorStack:",
    errorStack
  );

  res.writeHead(errorStatusCode, {
    "content-type": "application/json",
  });
  res.end(
    JSON.stringify({
      message: errorMessage,
    })
  );
};
