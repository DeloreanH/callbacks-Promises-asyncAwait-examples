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

/*funcion que crea un post y lo agrega al arreglo de post, createPost tarda 2 segundos en ejecutarse, por lo que si se llamaran createPost() y getPosts()
  al mismo tiempo, solo se imprimirian: post 1 y 2, ya que pushear el nuevo post de createPosts() tarda un segundo adicional.

  mediante el uso del callback, puedo pasar la funcion getPosts como parametro de createPost() y asi llamarla luego de pushear el nuevo elemento al arreglo, corrigiendo el problema.
   */
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// llamado de la funcion createPost()
createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
