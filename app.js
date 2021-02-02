$(document).ready(function(){
    $('form').submit(function(){
        let msg = $('#message').val();
        if (msg.length == 0) {
            $('#btn').attr('disabled', true)
        }
        else {
            alert(msg)
        }
    })
})

$('<div></div>').appendTo('body');
$('<ul></ul>').appendTo('div');

$('form').submit(function(d){
    e.preventDefault();
    let msg = $('#message').val()
    $('ul').append('<li>${msg}</li>');
});

$('ul').click(function(event) {
    console.log(event);
    $(event.target).css({'background-color': getRandomColor(), 'border-radius': '25px'})
})

function getRandomColor() {
    let randomColors = 'rgb'()+ (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random()*256)) + ')';
}