# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Custom Pages

Location : src/views/custom

- CustomDashboard
    - Description : Main Page with a sidebar and a content depending on the page variable 
    - Requires : 
      - page : component to call

- CustomPlayer
    - Description : Player allowing to navigate between the 4 following components
        - WorldModeling
            - Description : Displays worlds
        - GoalModeling
            - Description : Displays goals
        - Analysis
        - Synthesis
    
- CreateEnvironment
    - Description : Page built with Gridworld allowing to build or modify an environment
    - Requires :
        - JSON of the grid, the actions and sensors
    - Produces :
        - JSON of the new environment, or the updated one

### Crome Components

Location : src/components/Crome

-Console
    - Description : Component visible from everywhere able to display data
- CustomHeader
    - Description : Displays the 4 parts of the CustomPlayer
    - Requires :
        - List of titles, icons and colors (see customheadercards in Custom Data)
- CustomSidebar
    - Description : Sidebar with links to every custom page
    - Requires :
        - List of titles, colors, links and more (see customheadercards in Custom Data)
        - Current page to know what title to highlight
- IndexEnvironment
    - Description : Gridworld file
    - Requires :
        - Canvas to draw the grid, width, height and options of the grid
- GoalEdit
    - Description : Displays a modal to edit a Goal component
    - Requires :
        - List of goals ('get-goals' API)
        - List of available patterns ('get-patterns' API)
    - Produces :
        - Modified goal
- WorldEdit
    - Description : Displays a modal to edit a element from the environment creation
    - Requires :
        - Element to modify, and lists to handle mutex
    - Produces :
        - Modified element (location, action or sensor)

### Custom APIs

Location : src/components/Custom/Examples

- FetchTime
- GetConsoleMessage
  - Fetches the messages sent by the back-end to return them to the Console
- GetGoals
  - Fetches the goals and returns them to GoalModeling
- GetPatterns
  - Fetches the patterns and returns them to GoalModeling
- GetProjects
  - Fetches the projects and returns them to WorldModeling
- SaveEnvironment
  - Takes a world in argument and sends it to the back-end for it to be saved
- SaveGoals
  - Takes a list of goals and sends it to the back-end for it to be saved
- SocketIoMessage

### Custom Components

Location : src/components/Custom

- AddButton
- ContractAccordionItem
- ContractContentComponent
- ContractContentEditor
- ContractEditArguments 
- ContractModalDetails  
- CustomCardMini
- CustomFooter
- CustomNavButton  
- CustomSelect
- GoalView
- ListBlock
- ListLine  
- Location
- LocationIdEdit  
- LoginSession
- SavingEdit  
- WorldView

### Custom Data

Location : src/_texts/custom

- console
- contracteditorinfo
- createenvironment  
- customaccordion
- customheadercards
- customnavbutton  
- customplayerinfo
- customsidebar
- defaultgoal
- goaleditinfo
- goalmodelinginfo
- gridcolors
- mutexcolors
- worldmodelinginfo

### Custom Stylesheets

Location : src/assets/styles

- custom.css
    - Description : Every style rule that we couldn't have with the other stylesheets