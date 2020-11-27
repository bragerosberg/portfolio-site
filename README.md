# Portfolio Site
A personal page containing the most updated information about my career, projects, education, work-experience, knowledge, contact information and more.
Visit it online on my domain https://bragerosberg.com/ or do the following steps to test locally.
- Clone this repository at your desired location
- cd to ```portfolio``` folder
- Install dependencies and start script, ``` npm i "&&" npm start ```

## Contents
* Homepage
* Portfolio
* Projects
* Contact Page

Components like "portfolio" and "projects" will see updates, whenever there is a new event.

## Tech Usage and Reasoning
Before starting the implementation of this portfolio website, I knew I wanted to have a MPA - having the setup and information clearly divided into section making it as clarifying as possible. During my previous 24-hour [hackday][hackday] where I created a MVP-project, utilizing React and React-Routers BrowserRouter to fullfill the wish of making a MPA. Knowing I had created a great fundamental barebones. 

The way I utilized React was with HashRouter (reasoning further down), linking to different parent components (e.g. home) each containing smaller, child-components (e.g. tech-stack, about) for clarification, readability, maintainability and scalability reasons. 

### Hosting - gh-pages + domain
At the top of this README you can see a constantly live and hosted version of this portfolio. This was done by integrating GitHub pages into the project, configuring gh-pages to custom domain, where I added my personal, and on my domain-supplier (NameCheap) configured it to be able to render an external source. 

## Challenges Faced
Since I was building upon a previous MVP-project of mine, I had an advantage with a great boost in the beginning thanks to my [hackday][hackday] implementation earlier. However, if you have a project with no challengs - you probably have not realised them. Here was my main one, and how I faced it. 

### HashRouter vs BrowserRouter
Like mention above, I changed from the "BrowserRouter" I had in my [hackday][hackday] project and changed to use the sub-module HashRouter. Whenver you are using the standard ReactRouter, and hosting it through gh-pages and redirecting to different paths (e.g. bragerosberg.com/about) and decided to take a refresh (which would re-render at the /about endpoint) would cause a 404-error. 

The way I managed to bypass and fix this problem, was by changing to the HashRouter - which in a better way renders in this instance, by using the hash part of the URL to sync it properly. 

## Design
WIP, working on illustrations. 

## Full Description 
This portfolio is consisting of all information related to me as a developer, prior experience, strengths, previous projects, contact information and continuously being updated to contain the most up-to-date news. 

### Homepage - landing page 
A brief introduction, having a profile picture, name, role, location, main skills and a short description. Common with every route one would navigate to, you would have the same navbar and footer. The navbar containing the routes to the different sections, and footer with hotlinks for my [linkedin][linkedin] and github.

### Portfolio 
A sorted containing all the relevant information regarding my experience, knowledge, achievements and skills. Having my developer skills sorted into their desired sections (e.g. front-end, back-end), tools, principles, prior jobs and my educational background. This is always updated, and you can make sure that what you are reading here is corrrect. 

### Projects 
Here I am showcasing work I have done, projects I have created individually, products I have done in collaboration and more. All being showed through interactive cards, containing relevant thumbnails with the opportunity to redirect to the repository and website if the latter is available.

### Contact me
In similarity with the landing-page being a short introduction, this is a short outro. Leaving hotlinks for the user to get in touch with me, through the different medias I am available on, whether it would be e-mail, github or linkedin. 

### Get in touch with me:
[<img align="left" style="margin-left: 10px;" alt="codeSTACKr | LinkedIn" width="40px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" style="margin-left: 10px;" alt="codeSTACKr.com" width="40px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website]
<a href="mailto:bragecontact@gmail.com"><img width="40px" className="homepage__contact" alt="gmail" src="https://i.imgur.com/mo4E0Fb.png"/></a>


 [linkedin]: https://www.linkedin.com/in/brage-rosberg/
 [website]: https://bragerosberg.com/
 [hackday]: https://github.com/bragerosberg/hackday
