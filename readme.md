# Error Handling Flowchart

## Scenario 1: Error is thrown
Catching the Error:
- Synchronous Code: Use try-catch blocks.
- Asynchronous Code: Use .then().catch() or async/await with try-catch.
Handling the Error:
Option A: Directly handle the error within the block.
Option B: Use an Express error handling function (middleware).

## Scenario 2: No error is thrown (Manual Validation)
- Process: Validate values manually (e.g., checking if a user exists or if input is valid).
Outcome:
Option A: Manually Throw an error to trigger the "Error is thrown" flow.
Option B: Directly handle the "error" state without throwing a formal exception.

1. Types of Errors & Handling Errors
Error Categories:
- Technical Errors: Errors that are thrown by the system or code.
- "Expected Errors": Predictable issues, such as invalid user input.

Handling Methods:
- Custom if-checks.
- try-catch blocks.
- .then().catch() for promises.
- Express Middleware: You can use Express error-handling middleware to manage all unhandled errors in one place.

2. Errors & Status Codes
Purpose: Setting HTTP status codes in responses informs the browser about what specifically went wrong.

Status Code Ranges:
- 2xx: Success
- 3xx: Redirect
- 4xx: Client-side errors
- 5xx: Server-side errors
Clarification: Using a status code to indicate an error does not imply that the response is incomplete or that the application has crashed.