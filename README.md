<h1 align="center">Intellect Assignment</h1>

## Getting Started

To run the development server:

```bash
yarn run dev
# or
npm run dev
```

Open [http://localhost:7000](http://localhost:7000) with your browser to see the result.

## Demo
The project has been deployed at https://intellect-flame.vercel.app


![image](https://github.com/TanayWagh/intellect/assets/85330943/d50cac4c-1476-4605-b6e2-719b9df26551)

## Coding Conventions followed
https://github.com/airbnb/javascript

https://github.com/ryanmcdermott/clean-code-javascrip

## Documentation

#### Q1: React Web Application

##### Overview
React is a JavaScript library for building user interfaces. It follows a component-based architecture and uses a virtual DOM for efficient rendering. With JSX syntax and state management, React allows developers to create interactive web applications with ease. 

In React, data generally flows from parent components to child components through props. Props are immutable and used to pass data and methods between components. The unidirectional data flow helps in maintaining a predictable state and makes the application easier to understand. 

##### Web App
For my assignment, I have developed a React application using the latest version of React (version 18) and Webpack as the bundler. The application showcases modern practices and incorporates several essential features, including error boundaries, code splitting, lazy loading, user authentication, widgets, and components.

In addition to the core application, I have implemented two custom widgets: a Slider component and a Steps component. Throughout the codebase, I have emphasized the importance of testing by including comprehensive test cases and appropriate comments where necessary. This ensures the reliability and stability of the application.

Furthermore, I have included comments suggesting the inclusion of additional components like headers and layout for future expansion into a fully-fledged application. Although these components are not required for the assignment, they demonstrate the potential scalability and extensibility of the project. I have also included a husky pre-commit check, which prevents developers from pushing code to a remote branch if any test cases fail.

Overall, the React application demonstrates proficiency in utilizing modern tools and practices, while also showcasing attention to detail and potential for future enhancements.

##### Widgets

### Slider
A customizable slider widget that allows users to select a value within a specified range.

Usage: 
To use the Slider component, include it in your React component and configure it using the available props:
- import Slider from './Slider';
- Example usage
```jsx
import React from 'react';
import Slider from './Slider';

const App = () => (
  <Slider min={0} max={10} value={5} disabled={false} onChange={handleChange} />
);
```
Props:
The Slider component accepts the following props:

| Name         | Description                                                              | Default | Data Type     |
| ------------ | ------------------------------------------------------------------------ | ------- | ------------- |
| value        | The current value of the slider                                          | 5       | number        |
| defaultValue | The default value of the slider                                          | -       | number        |
| min          | The minimum value of the slider range                                    | 0       | number        |
| max          | The maximum value of the slider range                                    | 10      | number        |
| disabled     | Determines if the Slider component is disabled                           | false   | boolean       |
| className    | Additional CSS class(es) to be applied to the Slider component           | -       | string        |
| style        | Custom styles to be applied to the Slider component                      | -       | CSSProperties |
| onChange     | A callback function that is invoked when the value of the slider changes | -       | function      |

### Ratings

The Rating component is a customizable rating widget that allows users to rate items on a scale.

Usage: 
To use the Rating component, include it in your React component and configure it using the available props:
- import Rating from './Rating';
- Example usage
```jsx
import React from 'react';
import Rating from './Rating';

const App = () => (
 <Rating value={3} onChange={handleRatingChange} />
);
```
Props:
The Rating component accepts the following props:
| Name         | Description                                                              | Default | Data Type     |
| ------------ | ------------------------------------------------------------------------ | ------- | ------------- |
| value        | The current value of the rating                                          | 0       | number        |
| defaultValue | The default value of the rating                                          | 2       | number        |
| disabled     | Determines if the rating component is disabled                           | false   | boolean       |
| className    | Additional CSS class(es) to be applied to the rating component           | -       | string        |
| style        | Custom styles to be applied to the rating component                      | -       | CSSProperties |
| onChange     | A callback function that is invoked when the value of the rating changes | -       | function      |

Here is the additional description of other features:

##### Webpack
Webpack is a powerful static module bundler for JavaScript applications. It simplifies the process of converting code from multiple files into one or more output files, resulting in a more efficient application. By reducing the number of requests and improving loading speed, Webpack enhances the overall performance of the application. Additionally, it effectively manages dependencies, making it easier to organize and maintain complex projects.

In the current application, there are three Webpack files:
- Common File (**webpack.config.js**): This file serves as the main configuration file for Webpack, providing the settings and options required for both development and production builds.
- Development Build (**webpack.development.js**): This specific Webpack configuration file is optimized for the development environment. It includes features like source mapping (inline-source-map in our case) to aid in the debugging and rapid development process.
- Production Build (**webpack.production.js**): The production build configuration file is tailored for optimizing the application for deployment. It typically includes optimizations such as code minification, different plugins such as MiniCssExtractPlugin, ProgressBarPlugin, and caching strategies to enhance performance and reduce the file size of the application.

##### EntryPoint (index.tsx)
In the **index.html** file, there is a div element designated to render our React application. This rendering process takes place within the **index.tsx** file, where we utilize the "createRoot" feature provided by "react-dom/client". It allows us to render our application to the root container, ensuring proper integration and display on the web page.

##### React StrictMode (<React.StrictMode>)
The StrictMode component in React is a developer tool that helps identify potential problems in the application. It highlights potential issues and suggests improvements without affecting the production build.
Highlighting deprecated features
Preventing accidental side effects
Detecting unsafe lifecycle methods

##### React ErrorBoundary (ErrorBoundary.tsx)
Error boundaries in React are special components that handle JavaScript errors occurring within their child component tree. They effectively catch these errors, log them, and display an alternative UI instead of the crashed component tree.

Currently, error boundaries can only be implemented using class components. The current application will show **Something went wrong. Please contact Admin…** message on UI. We can render custom components such as <ReachException/> which can display custom messages or additional images as a fallback UI.

##### Lazy Loading of Application (Lazy.tsx)
Instead of loading the entire application upfront, lazy loading allows for a more optimized and efficient user experience. Some of its advantages include
- Faster initial load time
- Reduced resource usage
- Optimized caching
- Better scalability

Within the application, a custom component named **Lazy.tsx** has been implemented to facilitate the lazy loading of child components. This component utilizes React Suspense, which allows for the rendering of a fallback message while the content is being asynchronously loaded. This ensures a smooth user experience by providing visual feedback until the desired content is ready to be displayed on the UI.

#### User Authentication (withAuthentication Higher Order Component)
User authentication is a critical aspect of the development process, ensuring that users are authorized to access certain components or features. In this application, I have implemented a Higher Order Component (HOC) that handles the authentication flow. The HOC communicates with the server, sending authentication requests and retrieving the corresponding authentication response. If the user is not authenticated, the HOC automatically redirects them to the login page, safeguarding the application's security and protecting sensitive information.

##### CSS 
In this assignment, I utilized CSS-in-JS technology to apply styles directly within my React components. The advantages of using this approach are:

- **Component-based styling**: Styles are scoped to specific components, promoting modularity and easier maintenance.
- **Elimination of class name collisions**: No need to manage unique class names, reducing the potential for conflicts. (Specificity issue)
- **Dynamic and responsive styles**: Styles can be generated dynamically based on component props or states, allowing for adaptable and interactive UIs.
- **Improved developer experience**: Styles and component logic are written together, simplifying codebase understanding and reducing cognitive overhead.
- **Enhanced code organization and readability**: Styles are colocated with components, facilitating better code organization and making it easier to grasp how styles are applied.
- **Support for static typing**: Integration with TypeScript enables catching style-related errors at compile time for more reliable code.
- **Better performance optimizations**: CSS-in-JS libraries often include performance optimizations, leading to reduced CSS size and improved rendering performance.

In this assignment, I have implemented a **global theme context** using **React's createContext** feature. This context allows for the application of a consistent global theme across all child components. By utilizing this context, the styling and visual appearance of the components can be easily managed and updated in a centralized manner, ensuring a cohesive and harmonious user experience throughout the application.

##### Possible Improvements and Additions
- **Global Theming**: Creating a global theme context to manage the overall theme of the web application. This will allow for consistent and centralized control of the application's visual style and enhance customization options for users.
- **Expandable Widget Props**: Allow for additional customization of the widgets by supporting extra props. This will provide users with more flexibility and options to adapt the widgets to their specific use cases. Consider identifying common use cases and implementing prop configurations accordingly.
- **Additional Components**: For future expansion into a fully-fledged application, consider creating additional components such as a header, footer, sidebar, or other common UI elements. These components will provide a consistent layout and navigation structure throughout the application.
- **Enhanced Responsive Design**: Although you have implemented a basic responsive design using CSS-in-JS technology, further design improvements can be made to enhance the visual appeal of the application. Consider incorporating animations, transitions, or other visual effects based on the specific requirements to create a more engaging user experience.
- **Fallback UI Designs**: Instead of displaying only error messages during loading or when encountering React exceptions, consider incorporating fallback UI designs. These designs can include placeholders, loaders, or alternative content to maintain a smooth user experience even when data or components are loading or unavailable.
- **Improved Documentation**: To increase readability and simplicity, consider separating the documentation based on each feature or functionality. This approach will make it easier for users and developers to navigate and understand the specific aspects of the application. Additionally, providing clear examples and usage scenarios will further improve the documentation's effectiveness.
- **Navigation**: Although not deemed necessary for this particular project, consider adding navigation functionality using React Router or similar libraries. This will demonstrate experience in managing routes and improving user flow within the application.

These improvements and additions will enhance the overall functionality, visual appeal, and user experience of this web application.

#### Q2: Assume you have to develop a web app for our existing mobile application, how will you plan the project?
- First, I will analyze the existing mobile application to understand its architecture, UI/UX design, and functionality. I'll identify reusable code and components that can be leveraged in web app development. To streamline development, I will adopt a mono repo approach, housing all the code related to both the mobile and web applications. This way, we can reuse common components in both applications, saving time and effort.

- Next, I will set up the development environment by configuring the necessary tools and frameworks, similar to what I did for the web application for Q1. To ensure an organized project structure, I will create a folder structure for the React web app. This will involve organizing components, stylesheets, assets, and other files based on their functionalities and relationships. Additionally, I will break down the screens from the mobile app into reusable React components. This approach will facilitate easier development and maintenance of the web app.

- Once everything is set up, I will start implementing the React components based on the wireframes and designs. For consistent styling across the web app, I will apply styles using a CSS-in-JS solution. I prefer using the react-jss library, which will ensure that the web app's styling matches the design of the existing mobile app.

- To maintain code quality, I will write unit tests using Jest. I will also integrate the tests with pre-commit and pre-push hooks using Husky, ensuring that tests are run automatically before committing or pushing code changes. I will also add an analytics tool to figure out how users are using the application.

- Throughout the project, I will maintain effective communication with stakeholders, providing regular progress updates and gathering feedback. Additionally, I will focus on optimizing the React app for performance, considering factors like bundle size, lazy loading, code splitting, and caching. This will ensure fast loading times and a smooth user experience

#### Q3: Please provide all the libraries/frameworks you have experience with examples(not limited to ReactJS). Eg. chart, sockets.
| Name                                 | Description                                                                      |
| ------------------------------------ | -------------------------------------------------------------------------------- |
| React Native                         | To create native mobile application                                              |
| Expo                                 | To create native mobile application                                              |
| Ant Design                           | set of High quality react components                                             |
| Antd Design Charts, Ant Design Plots | To create insights dashboard for displaying data                                 |
| React Awesome Query Builder          | To create advance queries for elastic search                                     |
| React Router                         | To create Navigation in web application                                          |
| Kea Logic                            | Redux store for web application                                                  |
| Lexical.dev                          | To Develop Richtext editor                                                       |
| Moment Js, Day Js                    | To perform Time related calculations                                             |
| Next Js                              | Personal Portfolio                                                               |
| Node Js                              | Basic idea about server side code                                                |
| React Audio Voice Recorder           | To record audio in web application                                               |
| React grid layout                    | For drag-drop and resize functionality of widgets                                |
| React Beautiful Dnd                  | Creating Kanban board                                                            |
| Formily                              | Create high-quality dynamic forms                                                |
| Material Ui                          | Used several components in different projects                                    |
| Lodash                               | Javascript calculations                                                          |
| Fast Api                             | CRUD operations for writing apis                                                 |
| Pluralize                            | Display plural/singular form throughout the codebase                             |
| React shadow root                    | Used to render html inside shadow root to prevent style injections attacks       |

#### Q4: Install the Intellect app (you can install the app from this link), go through the flow of the app and detect user experience issues in Intellect app. Map out what your findings are.

Congratulations on creating a beautifully designed and user-friendly app!
In my opinion, these are some of the minor issues which we can improve on:

1. We should add some margin-bottom to ADD GOAL Button at the bottom. Right now, it's touching the bottom.
   
   <img width="336" alt="image" src="https://github.com/TanayWagh/intellect/assets/85330943/2057208e-0733-4f22-8054-f4a3e729f52e">

2. Cross mark on the top right is colliding with the text beside it.
   
   <img width="333" alt="image" src="https://github.com/TanayWagh/intellect/assets/85330943/1a2f1e77-97f8-4dcb-bcd1-a665badf12d0">

3. There is a lot of gap between the input line and the text written in the input box (Fbbvvvv) (Probably due to the expandable icon).
   
   <img width="333" alt="image" src="https://github.com/TanayWagh/intellect/assets/85330943/ab97ece0-c825-421f-8a2e-3365e647b26c">

4. The 3 dots icon on the top right is usually used to display the dropdown there itself. But I realized that it always opens the drawer from the bottom. In my opinion, its a bad user experience since the user has to go down to bottom to perform the next action after clicking on the three dots icon
   
   <img width="333" alt="image" src="https://github.com/TanayWagh/intellect/assets/85330943/b49d1b3f-0879-4e9d-ac7a-03a6848ea165">







