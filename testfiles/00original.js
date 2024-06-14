const urlToSend = "https://github.com/danilofes/refactoring-toy-example";
const commitID = "36287f7c3b09eff78395267a3ac0d7da067863fd";

fetch(`http://localhost:8080/greeting?${new URLSearchParams({
    url: urlToSend,
    id: commitID,
})}`)
.then(response => response.json())
.then(data => {
    console.log(data.content);
})
.catch(error => {
    console.error('Error:', error);
});
