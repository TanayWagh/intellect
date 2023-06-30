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
The project has been deployed at https://intellect-git-sprint-tanaywagh.vercel.app/


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










