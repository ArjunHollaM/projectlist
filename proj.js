const projects = [
    {
        id: "1",
        name:"Breeze",
        techstack:"HTML"
    },
    {
        id: "2",
        name:"Command Program",
        techstack:"Java"
    },
    {
        id: "3",
        name:"Point",
        techstack:"openGL"
    },
    {
        id: "4",
        name:"Magnetic Program",
        techstack:"Python"
    },
    {
        id: "5",
        name:"Dynamic Program",
        techstack:"HTML,CSS,JS"
    },
    {
        id: "6",
        name:"Illuminate",
        techstack:"Java"
    },
    {
        id: "7",
        name:"Project Force",
        techstack:"Python"
    },
    {
        id: "8",
        name:"Quest Program",
        techstack:"React"
    },
    {
        id: "9",
        name:"ColorGen",
        techstack:"React"
    },
    {
        id: "10",
        name:"Locator",
        techstack:"DJANGO"
    },
]

const listing = document.getElementsByClassName('listing')[0];
console.log(listing);

projects.forEach((project,index) => {
    let p = document.createElement('p');
    let ptext = document.createTextNode(`${project.id}:${project.name}:${project.techstack}`);
    p.appendChild(ptext);
    listing.appendChild(p);
})
