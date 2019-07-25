//  array of posts
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

// funcion hipotetica que recibe la data del server y la muestra, 1 segundo de retarso para simular respuesta del servidor
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

/*
 ahora createPost() retorna una promesa, pudiendo ser accedida con el .then() y catch() para los errores.
 Luego de que se complete la promesa  se esta llamando a getPosts()
*/
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

// llamado de createPosts y accendiendo a getPosts() luego de que se complete la promesa
 createPost({ title: 'Post Three', body: 'This is post three' })
   .then(getPosts)
   .catch(err => console.log(err));
