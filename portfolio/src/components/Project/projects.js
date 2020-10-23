const { uuid } = require('uuidv4');

const myProjects = [
  {
    index: uuid(),
    image: "https://i.imgur.com/yoc4qE2.png",
    title: "Budget Manager (Android)",
    text: "The mobile version of another app I've made with the same concept. Manage a budget, add expenses and easily edit/delete. Values are always stored so you'll see the numbers exactly as you expect them at all times.",
    repolink: "https://github.com/bragerosberg/budgetManagerNative",
    // website: "https://github.com/bragerosberg/budgetManagerNative",
    topics: "React, React Native, Expo"
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/zwaYrQ1.jpg",
    title: "Day Organizer",
    text: "Adding two useful parts that greatly fits together, a board of tasks where you may write anything you'd like, while having a 5-day forecast at the top of the page. Making it easy to prepare based on the weather (Oslo).",
    repolink: "https://github.com/bragerosberg/DayOrganizer",
    website: "https://organizeyourday.herokuapp.com/",
    topics: "React, GraphQL, Apollo, node.js, Express JS"
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/o8ogcY6.png",
    title: "Hackday Project (24 hours)",
    text: "An assignment I was given during my bootcamp, create a product of your choice, consisting of a frontend and-backend. Three different APIs were used, a MVP-project",
    repolink: "https://github.com/bragerosberg/Hackday",
    // website: "https://github.com/bragerosberg/Hackday",
    topics: "React, Express JS, Open APIs"
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/QxPaWdC.png",
    title: "Graduation Project (Android app) ",
    text: "My mob was assigned to create a project through 2 sprints, using SCRUM preperation. App is a voluntary platform where users and organisations can interact and add events. ",
    repolink: "https://github.com/jopemoma/Graduation-Project",
    // website: "https://github.com/jopemoma/Graduation-Project",
    topics: "React, React Native, Express, MongoDB, Mongoose, Expo"
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/WVak6hX.png",
    title: "Budget Manager",
    text: "First release of this product (android version is the second). Developed for full responsiveness on web. Manage a budget, add expenses and easily edit/delete. Values are always stored so you'll see the numbers exactly as you expect them at all times.",
    repolink: "https://github.com/bragerosberg/BudgetManager",
    website: "https://simplebudgetmanager.herokuapp.com/",
    topics: "React, Express JS"
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/nC61JYM.png",
    title: "Vue Todo",
    text: "A todo application created in Vue. Easily create tasks, toggle as complete, delete a task, delete every completed or completely reset the list.",
    repolink: "https://github.com/bragerosberg/vuetodo",
    website: "https://todovueapplication.herokuapp.com/",
    topics: "Vue"
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/ttj5XsP.png",
    title: "React Todo",
    text: "A todo application made with REACT, full responsive across platforms",
    repolink: "https://github.com/bragerosberg/ReactTodo",
    website: "https://bragereacttodo.netlify.app/",
    topics: "React"
  },
];

module.exports = {
  myProjects
}

