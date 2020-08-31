const { uuid } = require('uuidv4');
const myProjects = [
  {
    index: uuid(),
    image: "https://github.com/bragerosberg/ReactTodo/raw/master/phone.png",
    title: "React ToDo",
    text: "A todo application made with REACT, full responsive across platforms",
    repolink: "https://github.com/bragerosberg/ReactTodo",
    website: "https://bragereacttodo.netlify.app/",
  },
  {
    index: uuid(),
    image: "https://i.imgur.com/SV6i6vt.png",
    title: "Day Organizer",
    text: "A day organizer to structure your tasks and plan according to the local weather",
    repolink: "https://github.com/bragerosberg/DayOrganizer",
    website: "https://organizeyourday.herokuapp.com/",
  },
];

module.exports = {
  myProjects
}