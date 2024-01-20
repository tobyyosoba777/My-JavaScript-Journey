const posts = [
    {title: 'Post One', body: 'This is post One'},
    {title: 'Post Two', body: 'This is post two'}
];

const getPosts = () => {
    setTimeout(() => {
       let output = '';
       let bodyy = '';
       posts.forEach((post) => {
        output += `<li>${post.title}</li>`
        bodyy += `<p>${post.body}</p>`
       }) 
       document.body.innerHTML = output;
    }, 1000);
}
getPosts()

let createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            const error = true;

            if(!error) {
                resolve();
            } else {
                reject('Error:something went wrong')
            }
         }, 2000);
    })
}

// createPost({ title: 'Post Three', body: "This is post Three" })
// .then(getPosts)
// .catch(err => console.log(err))

// Promise.all

const promise1 = Promise.resolve("Hello World")
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => 
setTimeout(resolve, 2000, 'Goodbye'));

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

Promise.all([promise1, promise2, promise3, promise4]).then((
    (values) => console.log(values)
))