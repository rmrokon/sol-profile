// Post Style Function - using Tailwind CSS

function postStyles() {
    const posts = document.getElementsByClassName('post');
    for (const post of posts) {

        post.classList.add('text-black', 'bg-white', 'mt-5', 'rounded-md', 'p-3');
    }
}

function interactionButtons(givenBtnName) {

    const creatingButton = document.createElement('button');
    creatingButton.innerText = givenBtnName;
    creatingButton.classList.add('btn-styles', 'mt-4', 'mx-4');

    if (givenBtnName == 'Helpful') {
        creatingButton.classList.add('text-left');
    }
    else if (givenBtnName == 'Share') {
        creatingButton.classList.add('text-right');
    }

    return creatingButton;
}


// I tried to create a function to append child elements
// function appendChild(parentElement, childElement) {
//     parentElement.appendChild(childElement);
// }

// Event Handler for the Share button

document.getElementById('share-btn').addEventListener('click', function () {

    // Creating article 
    const article = document.createElement('article');
    article.classList.add('post');
    const post = document.createElement('p');
    const lessonInput = document.getElementById('write-lesson');
    const postDiv = document.getElementById('post-div');
    post.innerText = lessonInput.value;

    // Creating helpful, comment and share section

    // const interationDiv = document.createElement('div');
    // interationDiv.classList.add('grid', 'grid-cols-3');
    const interationDiv = document.createElement('div');
    interationDiv.classList.add('grid', 'grid-cols-3');
    const helpfulBtn = interactionButtons('Helpful');
    const commentBtn = interactionButtons('Comment');
    const shareLessonBtn = interactionButtons('Share');

    interationDiv.appendChild(helpfulBtn);
    interationDiv.appendChild(commentBtn);
    interationDiv.appendChild(shareLessonBtn);
    post.appendChild(interationDiv);

    postDiv.insertBefore(article, postDiv.children[0]);
    article.appendChild(post);

    postStyles();

    lessonInput.value = '';
})

