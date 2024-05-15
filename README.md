# The Odin Project - CV Builder App

This is a React app made for The Odin Project in which users can input their details and it will create a CV for them.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- Input their details including personal/education/experience
- Submit their data to generate a CV
- Add multiple sections for education and experiences
- Resubmit their personal details should anything change
- Delete individual instances for the education and experience sections

### Screenshot

![](/src/assets/screenshot.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- React

### What I learned

Understanding React Fundamentals:
Creating a CV builder app in React allowed me to solidify my understanding of React fundamentals, including component-based architecture, state management, and the virtual DOM. Leveraging React's declarative approach streamlined the development process and facilitated efficient updates to the UI based on state changes.

Form Handling and Validation:
Developing form components for inputting and editing CV data provided insights into form handling and validation in React.

Dynamic UI Rendering
Building a dynamic UI that updates in real-time based on user input was a key feature of the CV builder app. Leveraging React's ability to dynamically render components and utilizing conditional rendering techniques allowed me to create a responsive and interactive user experience.

I enjoyed learning how to use state and handle functions in order to properly update state and cause components to re-render

```jsx
const handleEducationInfoSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const updatedEducationInfo = {};
  formData.forEach((value, name) => {
    updatedEducationInfo[name] = value;
  });
  setEducationInfo([...educationInfo, updatedEducationInfo]);
};
```
