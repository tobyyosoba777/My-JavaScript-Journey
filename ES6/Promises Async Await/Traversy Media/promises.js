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

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error:something went wrong')
            }
         }, 2000);
    })
}

createPost({ title: 'Post Three', body: "This is post Three" }).then(getPosts);
