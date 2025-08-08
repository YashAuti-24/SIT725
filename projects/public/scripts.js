const clickMe = () => {
alert("Thanks for clicking me. Hope you have a nice day!")
}

$(document).ready(function(){
$('.materialboxed').materialbox();
$('#formSubmit').click(()=>{
submitForm();
})
getProjects();
$('.modal').modal();
});

const getProjects = () => {
$.get('/projects',(response) => {
if(response.statusCode==200){
addCards(response.data);
}
})
}

