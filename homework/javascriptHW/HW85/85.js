const pageContent = $('#pageContent');
const home = $('#home');

home.click(() => {
    start();
});
function start() { 
    $.getJSON(' https://jsonplaceholder.typicode.com/users')  
        .then(users => {      
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
                        $.getJSON(`https://jsonplaceholder.typicode.com/posts?userId=${u.id}`)                      
                            .then(posts => {                             
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
                                                .then(comments => {                                                   
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
                    });
            });
        })
        .catch(err => console.error(err)); 
}
start();