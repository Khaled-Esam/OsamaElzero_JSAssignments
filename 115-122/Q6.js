let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

let details =   (a, b) =>{ 
    if (a < 0 || a > b.length) {
        return
    } 
    let {
        title,
        age,
        avialable,
        skills : [ ,skill]
    } = myFriends[chosen - 1];
    return `${title}
${age}
${(avialable == true) ? "Available" : "Not Available"}
${skill}`
}

console.log(details(chosen, myFriends))