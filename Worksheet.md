# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

Project 1 is going to be my first shot at creating a portfolio web site for Myself. It will have 4  buttons that you can click at the top that will scroll down the page and take you to the specific spot on the page. The "home" page is going to have my name what i am, and the about me section. As you scroll down you can start to see the projects section, followed by the languages section. At the bottom will be a contact me page where you can submit stuff. As the page gets into tablet size width the project section will grow in size but will still only keep 2 elements side by side. Same with languages. The big change will happen when it goes from tablet to desktop. The projects should then list on their own lines, and the languages will display in blocks of 4. The nav bar on the mobile site is not going to be a fixed position but will have a little button in the bottom right corner to go back to the top of the page. The desktop version will have a fixed nav bar. 

## Wireframes

[My Wireframe](https://wireframepro.mockflow.com/view/MNedeyL86h)

## Time/Priority Matrix 

[My Time/Priority Matrix](https://imgur.com/a/KHGX5yl)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MVP and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP

- About section
- Nav bars will auto scroll down the page for you
- Dynamic sizing with big changes going from tablet -> desktop
- Nav bar will be flexbox, everything else will be grid

#### PostMVP 

- More fledged out nav bar with animations
- Submittable form with googlesheets
- Better blend of colors, more researched pallete that work well with each other 
- Add additional information to the projects and languages, maybe giving a little bit of background or how long I have been doing stuff concerning that specific language or project
- Functioning footer menu on the mobile that displays once you hit languages to navigate
## Functional Components

Unless otherwise stated, all time is in hours.
| Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: | 
| Page Framework | H | 5 | 4 |  
| HTML | H | 3 | 3 | 
| CSS/Flex/Grid Layouts | H | 3 | 5 |
| Jump to scroll | L | 3 | 4 |
| Nav bar | H | 2 | 4 |
| Fixed nav bar for desktop | M | 2 | 2 |
| Project section (image formatting) | H | 4 | 3 |
| Languages section (copy of projects with different grid layouts) | H | 2 | 3 |
| Contact me | H | 3 | 1 |
| Submittable form | L | 3 | 0
| Mobile -> Desktop | M | 4 | 6 |
| Total | H | 37 | 35 (as of 1:25 1/27) | |

## Additional Libraries



## Code Snippet

## HTML
      <!-----NAV BAR---->
      <nav>
        <ul class="nav-links">
          <a href="#aboutMe">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#languages">Languages</a>
          <a href="#contactMe">Contact</a>
        </ul>
      </nav>

## MEDIA CSS
@media screen and (min-width: 1024px) {
  nav {
    font-size: 2em;
    position: sticky;
    top: 0;
    background-color: rgba(47, 79, 79, 0);
  }
## CSS
.nav-links {
  display: flex;
  flex-direction: inline-block;
  justify-content: space-evenly;
  list-style: none;
  font-size: 1.25;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  padding: 0;
}

.nav-links ul,
a,
#aboutNav,
#projectsNav,
#langNav,
#contactMeNav {
  transition: all 0.3s ease 0s;
  text-decoration: none;
  color: lightslategrey;
  font-weight: 700px;
  font-size: 1.1em;
}

.nav-links a:hover {
  color: lightgrey;
}
## JAVASCRIPT
$("#langNav").onclick = function () {
  $("html, body").animate(
    {
      scrollTop: $(".langTitle").offset().top,
    },
    2000
  );
};

$("#projectsNav").onclick = function () {
  $("html, body").animate(
    {
      scrollTop: $("#projects").offset().top,
    },
    2000
  );
};
$("#languages").onclick = function () {
  $("html, body").animate(
    {
      scrollTop: $("#languages").offset().top,
    },
    2000
  );
};

$("#contactMe").onclick = function () {
  $("html, body").animate(
    {
      scrollTop: $("#contactMe").offset().bottom,
    },
    2000
  );
};