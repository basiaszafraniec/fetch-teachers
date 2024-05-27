"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const teachers = await fetchTeachers();
  console.log(teachers);
}

async function fetchTeachers() {
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/master/data/users.json ");
  const data = await response.json();
  displayTeachers(data);
  return (data);
}

function displayTeachers(teachers){
  const teachersList = document.querySelector("#teachers-list");
  for (const teacher of teachers){
    teachersList.insertAdjacentHTML(
      "beforeend",`
      <li>
      ${teacher.name} - ${teacher.title}
      </li>
      `
    )
    console.log(teacher);
  }
}
