# Harry Collards Task Submission

To start backend:

- cd backend
- npm i
- npm run start

To start frontend:

- cd frontend
- npm i
- npm run dev

Things I would do in future:

- Add loading spinner when an api request is occurring.
- On the front end handle if the api key is incorrect, there wasnt a specific instruction to handle this in the spec sheet, so currently only an error is logged.
- I just noticed that on the backend, I return Epoch in milliseconds. This should be changed to return epoch seconds to match requirements.
- Do the back-end in TypeScript also. In the interests of time constraints, I decided to just use the recommended library to set up a skeleton express project (in JavaScript).
- Reset the 1 second time update to start exactly when a new request comes through for simplicity, I just set a 1 second timer in useEffect, which then wouldnt update directly 1 second after the new api data is received.
- Add in testing on frontend and backend. On the frontend the function `generateFormattedDifference()` was set up as a pure function (only relys on input arguments to determine output) so it is straight foward to test.
- In a normal project .env files would not be put on GitHub for security reasons. However, seeing as this is a mock task and it needs to be easily tested, they are on there.
- Set up separate files for interfaces
