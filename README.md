# LLD Code Challenge

[Staging Link](https://lld-code-challenge.netlify.app/data/)

https://github.com/agiannotti/lld-code-challenge

## Summary

This application was developed as part of a coding challenge for LimeLight Devs, as well as for practice utilizing Vue, Nuxt, and tailwind.

## User Stories

- A user can view a list of products
- A user can view a list of products sorted by available categories

## BackLog User Stories

- A user can paginate results from server determined values
- filter results after unique categories

## Features

- Create a state and pass Axios data to it
- Map through data and render an item for each object
- Item contains an image with a transparent overlay on the bottom of the image
- Overlay contains item name & price
- Data is displayed in a 4 column grid using flexbox
- Entire project must be responsive on all screen sizes
- Create an array of unique categories from the api data
- Create a dropdown menu that has a list of unique categories

## Technologies Used

- JavaScript
- Nuxt
- Vuex
- Axios
- Vue Devtools - Chrome extension which allows tracking of state changes and other informartion

## What I Learned

This project is my first application utilizing Vue, Tailwind, and Nuxt. I really enjoyed working with the tech stack.

## Areas for improvement

#### I used a custom flex class in the tailwind config to achieve the fixed 4 column flex row, but it needs work for mobile view. I wasn't able to master the lifecycle methods to extract my fetch call, I tried using the nuxtInit and looking into API Composition but it was proving too complicated for only a small bit of data.

- I addressed this through modularization to separate other actions for different pieces of state so it didn't become too crowded.
- There is definitely room for improvement as I learn the intricacies of using Vue in a Nuxt application.
- I should have taken this project on with TypeScript!
- I chose vue3 and found it challenging to adapt but very fun to read docs on new frameworks and tools. Tailwind is great.

#### data page got messy as features were implemented

###### To address this in the future, I intend to:

- Leverage the benefits of using Vuex and API composition for state management to reduce the size of component files and need for local state
- Further extract and modularization of component API
