// JavaScript Object Notation (JSON)

// const person ={
//     name:"Shahid Ahamed",
//     age:24,
//     profession:"Web Developer"
// }

// //Object to JSON
// const newPerson = JSON.stringify(person);
// console.log(newPerson);
// // console.log(typeof newPerson);
// // console.log(typeof person);

// //JSON to Object

// const jsonPerson = '{"name":"Shahid Ahamed","age":24,"profession":"Web Developer"}';
// const objPerson = JSON.parse(jsonPerson);
// console.log(objPerson);
// // console.log(typeof jsonPerson);
// // console.log(typeof objPerson);   

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

    //   const loadData = () =>{
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    //   }


    // const loadUserData = () => {
    //     fetch("https://jsonplaceholder.typicode.com/users")

    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    //     displayUser(data);
    // })
    // }

    // const displayUser = users => {
    //     console.log(users[2]);

    // }

    // const moreData = () => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res => res.json())
    //     .then(data => {
    //         showUser(data);
    //     })
    // }       

    // const showUser = users => {
    //     //part-1
    //     // console.log(users);

    //     // part-2
    //     // for(let i=0; i<users.length; i++){
    //     //     const user = users[i];
    //     //     console.log(user);
    //     // }

    //     for(const user of users){
    //         console.log(user.name);
    //         const li = document.createElement("li");
    //         li.innerText = user.name;
    //         document.getElementById("user-container").appendChild(li);
    //     }
    // }

    //create a div and display user info

    // const displayPosts = () => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(res => res.json())
    //     .then(data => {
    //         showPosts(data);
    //     })
    // }

    // const showPosts = (posts) => {
        
    //     const postContainer = document.getElementById("cardContainer");
    //     for (const post of posts) {
    //         console.log(post);
    //         const div = document.createElement("div");
    //         div.classList.add("card");
    //         div.innerHTML = `
    //         <h1>${post.title}</h1>
    //         <p>${post.body}</p>
    //         <button>Read More</button>
    //         `;
    //         postContainer.appendChild(div);
    //     }
    // }
    // displayPosts();


    const displayPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            showPosts(data);
        })  
    }

    const showPosts = (posts) => {
        const postContainer = document.getElementById("cardContainer");

        for (const post of posts) {
            console.log(post);
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML =`
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <button>Read More</button>
            `;
            postContainer.appendChild(div);
          
        }
    }

    displayPosts();
