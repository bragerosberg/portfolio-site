document.addEventListener("DOMContentLoaded", function () {
    const yearsSince2021 = new Date().getFullYear() - 2021;
    document.getElementById("yoe").innerText = `Fullstack Web Developer (${yearsSince2021} YOE) - Oslo`;

    const techList = [
        { name: 'Typescript', logo: 'typescript.png' },
        { name: 'JavaScript', logo: 'js.png' },
        { name: 'React', logo: 'react.png' },
        { name: 'Redux', logo: 'redux.png' },
        { name: 'Node', logo: 'nodejs.png' }
    ];

    const techListContainer = document.getElementById("techList");
    techList.forEach(({ name, logo }) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = logo;
        img.alt = name;
        img.classList.add("tech__list--logo");
        li.appendChild(img);
        techListContainer.appendChild(li);
    });
});
