# Amortization Schedule API

This README describes how to test the (ongoing) Amortization Schedule API.

## Testing

There are two primary methods for testing the API:

### 1. Unit Tests with Jest (Recommended)

This method uses Jest for automated unit testing. It provides fast, isolated feedback on the API's functionality.

**Steps:**

1.  **Open a terminal.**
2.  **Navigate to the project's root directory.** (Where your `package.json` is located.)
3.  **Run the following command:**

    ```bash
    npx jest --watchAll -- schedules.test
    ```

    - `npx jest`: Executes the Jest test runner. `npx` ensures you're using the locally installed version of Jest (from your `node_modules`).
    - `--watchAll`: Watches for changes in your code and automatically re-runs the tests when changes are detected. This is great for development.
    - `-- schedules.test`: Adjust this to match your actual test file name(s). If you want to run _all_ tests, you can omit this part: `npx jest --watchAll`.

### 2. Manual Testing with `curl` and a Development Server

This method involves running a local development server and using `curl` (or an API testing platform like Postman) to send requests to the API.

**Steps:**

1.  **Start the Development Server:**

    - Open a terminal.
    - Navigate to your project's root directory.
    - Run:

      ```bash
      npm run dev
      ```

      This command starts a local development server that automatically reloads when you make code changes. The `dev` script is defined within your project's `package.json` file.

2.  **Send Requests using `curl` (or Postman):**

    - **Using `curl` (Command Line):**

      Open _another_ terminal (keep the development server running in the first terminal). Use the following `curl` command:

      ```bash
      curl --location 'http://localhost:5000/amortization/schedules'
      ```

      - `--location`: This option tells `curl` to follow any redirects (HTTP 3xx responses). This is often good practice when testing APIs.
      - `'http://localhost:5000/amortization/schedules'`: This is the URL of your API endpoint. Adjust the port (`5000`) if your server is running on a different port.

    - **Using Postman (GUI):**

      1.  Open Postman.
      2.  Create a new request.
      3.  Set the request method to GET
      4.  Enter the URL: `http://localhost:5000/amortization/schedules`
      5.  Add any necessary headers (e.g., `Content-Type: application/json` if it's a `POST` request with a JSON body).
      6.  Click "Send".

````markdown
### API Endpoints

#### `GET /amortization/schedules` (or `POST`, depending on your API)

**Description:** Calculates and returns an amortization schedule.

**Request Parameters:**

- **Method:** `GET`
  **Response (Example):**

```json
[
    {
        "period": 1,
        "paymentDate": "2024-02-15",
        "paymentAmount": 536.82,
        "principal": 120.15,
        "interest": 416.67,
        "balance": 99879.85
    },
    {
        "period": 2,
        "paymentDate": "2024-03-15",
        "paymentAmount": 536.82,
        "principal": 120.65,
        "interest": 416.17,
        "balance": 99759.20
    },
    ... // Remaining periods
]
```
````
