<h2 align="center">Basketball-Scoreboard</h2>

<p align="center">
  <em> The basketball scoreboard is my second project of Scrimba Front-End course, in this course I build web designs from scratch and learning how to use flexbox and "div"properly.</em>
</p>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![Join the chat at https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist](https://badges.gitter.im/Front-End-Checklist/Front-End-Design-Checklist.svg)](https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist) [![CC0](https://img.shields.io/badge/license-CC0-green.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

## Table of Contents
* **[1. Design requirements](#1---design-requirements)**
	* [1.1 Structure Design](#11---structure-design)
	* [1.2 Fonts and texts](#12---fonts-and-texts)
* **[2. Flexbox](#2---Flexbox)**
	* [2.1 Property in Flexbox](#21---Property-in-Flexbox)
* **[3. Function()](#3---function)**

---

> The **Hometown Homepage** is my second static website which I learnt how to use the flexbox in two column web struture and the concept of code reusability. By writing the function, I know how to implement function and reduce the repetitive code.

I start the Scrimba Module 2 course- Web dev basics and learn how to use the basic Loop & Function knowledge. At the end of the course, I follow the Figma template to finish a basketball scoreboard which can be used in any game, take a look on the → [Basketball_Scoreboard](https://shiuandai.github.io/Basketball-Scoreboard/).

## How I start the project?

* Ensure all points are taken into consideration from Figma Template. → [Figma Template from Scrimba](https://www.figma.com/file/YC48MCx4frBFtYoz6rNJE6/Basketball-Scoreboard?type=design&node-id=0%3A1&mode=design&t=x5mv3JS4Vi3QXr1R-1)
* Having a materials preparation document where I collect font style/color to match a better visual communication and coherence in one page.
* It's important to brainstorm the HTML structure before starting coding, this step helps me save the time.
* Use the "DRY" concept (Don't Repeat Yourself), so that I learn how to write a function which can be easily used on my project.
* To show the completed work between a Web and a template, I prefer refining the CSS code to make sure the project can align the design.

---

## 1. - Design requirements

Designing a homwtown homepage website requires following some rules and taking into consideration that the project is not only a graphic project but a web project too. The next sections are crucial for any web project.

### 1.1 - Structure design

* [ ] **Button** tag defines a clickable button. You can put text and tag inside the button element. It becomes clickable by using **onclick** in the button element.
	> ℹ️ [Button] GET to know more about the definition. → [W3School](https://www.w3schools.com/jsref/event_onclick.asp)

* [ ] **Master the Flexbox** and **container**. 
* [ ] Before working on each website project, I prefer **drawing templates** with my own strcuture concept. Building the structure before everything else, will facilitate my work afterwards.

```css
body{
    display: flex;
    flex-direction: column;
    align-items: center;
} 
```

⚠️ *Use the "flexbox" to organise the layout, think about why we use the **flex-box**, there is a good explanation.* → [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

**[⬆ back to top](#table-of-contents)**


### 1.2 - Fonts and texts

Fonts are an essential part of every design.

It is recommended to organise the font size and style in the design process. in this project, I use the font style called "Cursed Timer ULiL". Download the font then unzip it to extract the tiff. file then put the file to the same path of your code.([Fonts2u](https://fonts2u.com/cursed-timer-ulil.font)).

* [ ] Using the technique **@font-face** in CSS, the link is embedded to the CSS. 

```css
@font-face {
    src: url("CursedTimerULiL.ttf");
    font-family: CursedTimerULiL; //you can name the font-family on your own then you can use the font-family to implement in other element.
}
```

**[⬆ back to top](#table-of-contents)**


## 2. - Flexbox

### 2.1 - Property in Flexbox

It is recommended to master **flex-box** concept, it usually combine with different **Property** like **flex-direction: column; align-items: center;** .

Define what condition to use the flex-box, it influences on how the content display.

⚠️ *Get to know more about Flexbox. Check out ([HERE](https://www.w3schools.com/css/css3_flexbox_container.asp))*

## 3. - Function()

Write the basic function makes the number increment "1" when the function acts each time.

```js
home_scoreEl=document.getElementById("home_scoreel")
guest_scoreEl=document.getElementById("guest_scoreel")
let sum=0
console.log(guest_scoreEl)

function plus_1_home(){
    sum = sum + 1
    home_scoreEl.textContent=sum
}
```

**[⬆ back to top](#table-of-contents)**

---

## Author

**[Shiuan Dai](https://www.linkedin.com/in/shiuandai/)**

**[⬆ back to top](#table-of-contents)**


[6]:	https://guideguide.me/
[7]:	https://www.sketchapp.com/docs/canvas/rulers-guides-grids/
[8]:	https://getbootstrap.com/docs/4.0/layout/grid/
[9]:	http://flexboxgrid.com/
[10]: https://css-tricks.com/dont-overthink-it-grids/
[11]:	https://www.lifewire.com/aco-file-2619477
[16]:	http://bradfrost.com/blog/post/atomic-web-design/
[22]:	https://js.libhunt.com/
[23]:	https://bestof.js.org/
[28]:	https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist
