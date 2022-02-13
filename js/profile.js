// Post Style Function - using Tailwind CSS

function postStyles() {
    const posts = document.getElementsByClassName('post');
    for (const post of posts) {

        post.classList.add('text-black', 'bg-white', 'mt-5', 'rounded-md', 'p-3');
    }
}

// Event Handler for the Share button

document.getElementById('share-btn').addEventListener('click', function () {

    const article = document.createElement('article');
    article.classList.add('post');
    const post = document.createElement('p');
    const lessonInput = document.getElementById('write-lesson');
    const postDiv = document.getElementById('post-div');
    post.innerText = lessonInput.value;

    postDiv.appendChild(article);
    article.appendChild(post);

    postStyles();

    lessonInput.value = '';
})