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
    //    desc = document.querySelector('.desc')
    //    desc.innerHTML = output
    //    let p = document.createElement('p')
    //    p.innerHTML = bodyy
    //    desc.appendChild(p)
    }, 1000);
}
getPosts()

let createPost = (post, callback) => {
    setTimeout(() => {
       posts.push(post)
       callback()
    }, 2000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts)
