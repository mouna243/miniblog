//  1 - de récupérer tous les Posts, Users et Comments

async function main() {
    const [PostsRes, userRes, commentres] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/Posts').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/user').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
            .then(rest => console.log(rest))

    ])
    //    2 - de convertir les trois réponses en tableaux :
    const posts = PostsRes;
    const users = userRes;
    const comments = commentres;
    // using map() methode
    const arrMap = new Map(users.map(user => [id.user, user]));

    const comment = new Map();
    comment.forEach(com => {
        if (!comment.has(com.postId)) {
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
    // 4 - Créer les fonctions utilitaires suivantes :
    // 4-1 sortByUserName() qui permet de trier par utilsateur

    function sortByUserName(array) {
        return [...array].sort((a, b) => a.userName.localeCompare(b.userName));
    }

    // 4-2 sortByPostTitle() qui permet de trier par le titre du Post

    function sortByPostTitle() {
        return [...array].sort((a, b) => a.title.localeCompare(b.title));

    }

    // 4-3 getPagePosts(offset, size = 10) qui retourne un nouveau tableau extrait du tableau allPosts à partir de offset et contenant size éléments

    function getPagePosts(array, offset, size = 10) {
        
        return array.slice(offset, offset + size);
    }

        // 5 - Ecrire la fonction showPosts() qui permettra d'afficher les 10 premiers posts
    function showPosts(postsArray = allPosts) {
        const page = getPagePosts(postsArray, 0, 10);
        console.log('=== 10 premiers posts ===');
        page.forEach(post => {
            console.log(`Post #${post.id} by ${post.userName}: "${post.title}"`);
        });
    }
} main();