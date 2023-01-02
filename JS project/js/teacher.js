const query = window.location.search;
            const page = Number(query.split('=')[1]);
            const size = 5;

            fetch('https://dummyjson.com/posts')
            .then((res) => res.json())
            .then((posts) => {
            //     const mainEl = document.getElementById('main');
            //     const information = `
            //     <h2 class="title">${posts.posts[0].title}</h2>
            //    <p>${posts.posts[0].body}</p>
            //    <p class="price">${posts.posts[0].reactions}</p> `
            //    posts.innerHTML = posts.innerHTML + inf ;
            //    postEl.append(posts) `
                


                const filteredList = posts.posts.filter((item1,index1) => index1 >= (page -1) * size && index1 < page * size);
                const postsHTML = filteredList 
                .map(
                    (item1) => `<li>
                                  <a href="teacher2.html?id=${item1.id}">
                                    ${item1.title}
                                    </a>
                                    </li>`
                )
                .join('');
                document.getElementById('list').innerHTML = postsHTML;
            });


