To test the - ongoing - Amortization Schedule API, use one of the two methods below:

(Recommended)
Use this command in terminal to start watching/running with Jest:
npx jest --watchAll -- schedules.test

---

Use this command in the terminal to start running a localhost server:
npm run dev

Use this cURL in an API testing platform like Postman:
curl --location 'http://localhost:5000/amortization/schedules'
