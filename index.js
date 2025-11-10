//  1 - de récupérer tous les Posts, Users et Comments

 async function main() {
    const [PostsRes, userRes, commentres]= await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/Posts').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/user').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
        .then (rest => console.log(rest))

   ] )
        //    2 - de convertir les trois réponses en tableaux :
        const posts = PostsRes;
        const users =  userRes;
        const comments = commentres;
        // using map() methode
        const arrMap = new Map(users.map(user => [id.user ,user]));

        const comment = new Map();
        comment.forEach(com => {
            if(!comment.has(com.postId)){
                // pour cree un nouvelle stock de commentaires de stock
                comment.set(com.postId || [])
            }
            comment.get(comment.postId).push(comment)
        }

    );
    console.log(comment)

    // 3- un nouveau tableau nommé allPosts
    const allPosts = posts.map(post => ({
        id: post.id,
        userName: userMap.get(post.userId)?.name || 'Unknown User',
        title: post.title,
        body: post.body,
        published: true, // tous les posts sont publiés dans cet exemple
        comments: commentsByPost.get(post.id) || []
    }));
        

}main();