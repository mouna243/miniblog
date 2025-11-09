//  1 - de récupérer tous les Posts, Users et Comments

 async function main() {
    const [PostsRes, userRes, commentres]= await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/Posts').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/user').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
        .then (rest => console.log(rest))

   ] )
}main();