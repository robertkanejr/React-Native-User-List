A mobile app to fetch user data from an API via a network request and render the data on screen.

Built with React Native, TypeScript, Redux Toolkit, and randomuser.me API.

I will update the README with more details soon.

Install Steps:

Init React Native Project:  
npx react-native@latest init <ProjectName>

Redux Installs:  
npm i @reduxjs/toolkit react-redux

Types Checking Install:  
npm i @types/react-native

After installation, run **npm start** to start the Metro bundler, then in a new terminal window run **npx react-native run-ios** or **npx react-native run-android** to start the app.

randomuser.me API endpoint:  
`https://randomuser.me/api/?page=${page}&results=${count}`, where page is the page number and count is the number of results per page.
