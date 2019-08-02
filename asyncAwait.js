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
 createPost() sigue retornando una promesa, con el uso de async y await podemos hacer un enfoque mas elegante y evitar el uso del .then(), se hace mas simple de leer
 ya que da una estructura similar de una funcion sincrona.
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

// getPosts() queda a la espera de que createPosts() se complete, para ser uso del await, la funcion que lo contiene debe empezar con async
 async function init() {
   await createPost({ title: 'Post Three', body: 'This is post three' });

   getPosts();
 }

 //llamado a init()
 init();
