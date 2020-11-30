const { uuid } = require('uuidv4');

const myProjects = [
  {
    index: uuid(),
    image: "https://i.imgur.com/QxPaWdC.png",
    title: "Graduation Project (Android app) ",
    text: "A mobile app that connects volunteers with organisations that need them. Built by my mob during bootcamp over a 2-week SCRUM sprint.",
    repolink: "https://github.com/jopemoma/Graduation-Project",
    // website: "https://github.com/jopemoma/Graduation-Project",
    topics: "React, React Native, Express, MongoDB, Mongoose, Expo"
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/yoc4qE2.png",
    title: "Budget Manager (Android)",
    text: "A mobile budget management application, developed through React Native. Manage a yearly budget, set and delete expenses. Available through Expo client, check repository to learn more.",
    repolink: "https://github.com/bragerosberg/budgetManagerNative",
    // website: "https://github.com/bragerosberg/budgetManagerNative",
    topics: "React, React Native, Expo"
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/zwaYrQ1.jpg",
    title: "Day Organizer",
    text: "A board to write up to-do tasks, with the upper part of the application displaying a weather-forecast for the upcoming 5 days.",
    repolink: "https://github.com/bragerosberg/DayOrganizer",
    website: "https://organizeyourday.herokuapp.com/",
    topics: "React, GraphQL, Apollo, node.js, Express JS"
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/o8ogcY6.png",
    title: "Hackday Project (24 hours)",
    text: "Challenge given during my coding bootcamp. A project of my choice, consisting of a frontend and backend. Usage of different APIs, scaled to be a MVP-project",
    repolink: "https://github.com/bragerosberg/Hackday",
    // website: "https://github.com/bragerosberg/Hackday",
    topics: "React, Express JS, Open APIs"
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/WVak6hX.png",
    title: "Budget Manager",
    text: "A management tool for budgets, enter yearly sum, fill in expenses through months, and get an overview. Feel free to experiment with it on the website.",
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

