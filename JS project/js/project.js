const mainEl = document.getElementById('main');

fetch('https://dummyjson.com/posts')
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
    })
    .then((posts) => {
        let post = document.createElement('div');
        post.className('')

        const postEl = `
          <div class="post-img"></div>
          <div class="post-text">
              <h2>${posts.posts[0].title}</h2>
              <p>${posts.posts[0].body}</p>
          </div>`;
          post.innerHTML = post.innerHTML + postEl;

        mainEl.append(post)


    })