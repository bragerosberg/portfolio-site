const { uuid } = require('uuidv4');
const myProjects = [
  {
    index: uuid(),
    image: "https://i.imgur.com/CGE4Bbh.png",
    title: "Android App: Budget Manager",
    text: "A convertion of my Budget Manager into React Native, developing this for launching on Google Play Store.",
    repolink: "https://github.com/bragerosberg/budgetManagerNative",
    website: "https://github.com/bragerosberg/budgetManagerNative",
    topics: "React, React Native, Expo"
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/SV6i6vt.png",
    title: "Day Organizer (Weather & ToDo-management)",
    text: "A day organizer to structure your tasks and plan according to the local weather",
    repolink: "https://github.com/bragerosberg/DayOrganizer",
    website: "https://organizeyourday.herokuapp.com/",
    topics: "React, GraphQL, Apollo, node.js, Express JS"
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/IvAKdPc.png",
    title: "Hackday Project (1-day)",
    text: "Hackday through the bootcamp at </salt>. In this project we only had a day to implement the application and therefor as a result I took my collected bag of ideas and experimented with them in this project",
    repolink: "https://github.com/bragerosberg/Hackday",
    website: "https://github.com/bragerosberg/Hackday",
    topics: "React, Express JS, Open APIs"
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/MJvasqg.png",
    title: "Android App: Bidra Sammen (Grad. proj)",
    text: "Graduation project through the bootcamp at </salt> where my mob made a React Native application through 2x SCRUM week sprints",
    repolink: "https://github.com/jopemoma/Graduation-Project",
    website: "https://github.com/jopemoma/Graduation-Project",
    topics: "React, React Native, Express, MongoDB, Mongoose, Expo"
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/Xlnrij0.png",
    title: "Budget Manager",
    text: "Management tool for yearly budget, easily control the monthly expenses and see other months",
    repolink: "https://github.com/bragerosberg/BudgetManager",
    website: "https://simplebudgetmanager.herokuapp.com/",
    topics: "React, Express JS"
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/urL3xOL.png",
    title: "Vue: Todo Application",
    text: "A todo application created in Vue. Easily create tasks, toggle as complete, delete a task, delete every completed or completely reset the list.",
    repolink: "https://github.com/bragerosberg/vuetodo",
    website: "https://todovueapplication.herokuapp.com/",
    topics: "Vue"
  },
  {
    index: uuid(),
    image: "https://github.com/bragerosberg/ReactTodo/raw/master/phone.png",
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

