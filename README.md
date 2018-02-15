# Friend-Finder
Friend Finder is an application where you can answer generic personality questions on a scale of 1(don't agree) to 5(strongly agree). Submiting your information and answers will then match you with someone who also answered similarly. You will be added to the API so that someone in the future can match with you. 

There is no database attached to this application so storage will only persist as long as the server is running.

## Getting Started
1. When cloning the repo be sure to do an `npm install` to get all the depencies.
2. Start the server by running `node server.js` or `nodemon server.js` if you have the package.

## How it Works
1. When a user submits their survey, a POST request is sent to the server. The user's answers are parsed and stored in a variable.
2. The user's and API scores are all summed up and added as an additional object property in the API.
3. The API object is looped through, and tries to see which user has the least difference between someone else's scores.
4. After a match has been made the user will be added to the API to avoid matching with themselves.
![API](https://i.gyazo.com/31117c52c60f2677e6b02c2247daa064.png) 
5. Once a match has been found it is returned to the client in json and displayed for the user in a modal, showing their match's name and photo.
![result](https://i.gyazo.com/9f2900654cc874e26724b259b8fcee2e.png)

## Tech Used
* Node.js
* Express

## Todo and bugs
1. I have not been able to correctly validate information users submit. Users are still being allowed to submit null data in their survey questions. 
2. The form does not reset to default blanks when a user submits.