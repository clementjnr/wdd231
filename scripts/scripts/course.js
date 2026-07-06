const courses = [

{
subject: "CSE",
number: 110,
title: "Programming Building Blocks",
credits: 2,
completed: true
},

{
subject: "WDD",
number: 130,
title: "Web Fundamentals",
credits: 2,
completed: true
},

{
subject: "CSE",
number: 111,
title: "Programming with Functions",
credits: 2,
completed: false
},

{
subject: "CSE",
number: 210,
title: "Programming with Classes",
credits: 2,
completed: false
},

{
subject: "WDD",
number: 131,
title: "Dynamic Web Fundamentals",
credits: 2,
completed: true
},

{
subject: "WDD",
number: 231,
title: "Front-End Web Development I",
credits: 2,
completed: false
}

];






const courseContainer = document.querySelector("#courses");
const creditDisplay = document.querySelector("#credits");

displayCourses(courses);

document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
    displayCourses(courses.filter(course => course.subject === "WDD"));
});

document.querySelector("#cse").addEventListener("click", () => {
    displayCourses(courses.filter(course => course.subject === "CSE"));
});




function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");

        card.classList.add("course");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            ${course.subject} ${course.number}
        `;

        courseContainer.appendChild(card);

    });

    displayCredits(courseList);

}





function displayCredits(courseList) {

    const totalCredits = courseList.reduce(
        (sum, course) => sum + course.credits,
        0
    );

    creditDisplay.textContent =
    `The total credits for courses listed above is ${totalCredits}.`;

}
