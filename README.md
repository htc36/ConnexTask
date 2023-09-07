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

- Add loading spinner when an API request is occurring. I deemed this as a lower priority compared to the other tasks and subsequently did not have enough time to add this feature.
- On the front end, I don't have any indication that an error has occured to the user if the API key is incorrect and also if the API request failed in general, there is no specific instruction to handle this in the spec sheet, so currently I only console.log the error.
- I just noticed that on the backend, I return Epoch in milliseconds. This should be changed to return epoch seconds to match requirements, it would also clean up the frontend as I convert it to seconds there.
- Do the back-end in TypeScript as well. In the interests of time constraints, I decided to juse use the recommended library to set up a skeleton express project (in JavaScript).
- Inside the `Time` component, reset the 1 second time interval to start exactly when a new response from the server comes through. For simplicity, I just set a 1-second timer in useEffect, this does not take into account the exact time a new response from the server is received. To fix this, I would add `apiTime` as a dependency to the useEffect hook. The reason I did not do this while developing was because I thought a new interval would get created each time without deleting the old one. However, I forgot that useEffects return function is not only run on unmount, but also runs when a dependency changes.
- Add in testing on the frontend and backend. On the frontend, the function `generateFormattedDifference()` was set up as a pure function (only relys on input arguments to determine output) so it is straight forward to test.
- In a normal project, env files would not be put on GitHub for security reasons. However, seeing as this is a mock task and it needs to be easily tested, they are on there.
- Set up separate files for interfaces.
- Update some function names, i.e setAPIs() is not a helpful function name; callAPIs() would be a better name.
