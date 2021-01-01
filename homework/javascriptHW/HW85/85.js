// function fetch1() {
// }
// const title = $('#caption');
const pageContent = $('#pageContent');
const home = $('#home');

// usersFetched = false;

// postsFetched = false;
// let commentsFetched = false;
home.click(() => {

    start();
});
function start() {
    // if (!usersFetched) {
    $.getJSON(' https://jsonplaceholder.typicode.com/users')
    // $.getJSON('users.json')
        .then(users => {
            // usersFetched = true;
            // title.text('Users');
            // const startUsers =
            pageContent.empty();
            $(`<h1>Users</h1>
            <hr>
            <div>
                <ul id="users">        
                </ul>
            </div>`).appendTo(pageContent);
            const userList = $('#users');
            users.forEach(u => {
                $(`<li><div>name: ${u.name}</div>
                   <div>website: ${u.website}</div>
                   <div>company: ${u.company.name}</div><hr>
                </li>`)
                    .appendTo(userList).click(() => {
                        // if (!postsFetched) {
                        $.getJSON(`https://jsonplaceholder.typicode.com/posts?userId=${u.id}`)
                        // $.getJSON(`posts.json/posts?userId=${u.id}`)
                            .then(posts => {
                                // postsFetched = true;
                                // title.text('Posts');
                                // const postContent =
                                pageContent.empty();
                                $(`<h1>Posts</h1>
                                <hr>
                                <div>
                                    <ul id="posts">        
                                    </ul>
                                </div>`).appendTo(pageContent);
                                const postsList = $('#posts');
                                postsList.empty();
                                posts.forEach(p => {
                                    let commentsUl = '';
                                    let commentsLi = '';
                                    const postLi = $(`<li><div class = "title"> ${p.title}</div>                                        
                                                                <div> ${p.body}</div>
                                                                <button id = "showComment${p.id}">Show Comments</buton></li>`)
                                        .appendTo(postsList);
                                    $(`#showComment${p.id}`).click(() => {
                                        if ($(`#showComment${p.id}`).text() === 'Show Comments') {
                                            $(`#showComment${p.id}`).text('Hide Comments');
                                            commentsUl = $(`
                                                                <h1>Comments</h1>      
                                                               
                                                                <div>
                                                                <ul class = "comments" id="comment${p.id}">        
                                                                </ul>
                                                            </div>`).appendTo(postLi);
                                            
                                            $.getJSON(` https://jsonplaceholder.typicode.com/comments?postId=${p.id}`)
                                            // $.getJSON('comments.json')
                                                .then(comments => {
                                                    // commentsFetched = true;
                                                    comments.forEach(c => {
                                                        commentsLi = $(`#comment${p.id}`);
                                                        $(` <li id = "post${p.id}">
                                                        <div> ${c.name}</div> 
                                                        <div> ${c.email}</div> 
                                                        <div> ${c.body}</div>
                                                        <br>
                                                    </li>`)
                                                            .appendTo(commentsLi);
                                                    });
                                                })
                                                .catch(err => console.error(err));
                                        }
                                        else if ($(`#showComment${p.id}`).text() === 'Hide Comments') {
                                            $(`#showComment${p.id}`).text('Show Comments');
                                            commentsLi.empty();
                                            commentsUl.remove();
                                        }
                                    });
                                });
                            })
                            .catch(err => console.error(err));
                        // }
                        // else {
                        //     // postContent;
                        // }
                    });
            });
        })
        .catch(err => console.error(err));
    // } else {
    //     // startUsers;
    // }
}
start();