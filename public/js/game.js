const correctSound = new Audio('audios/correctSound.mp3');
const incorrectSound = new Audio('audios/incorrectSound.mp3');

function compareQuestion(answer, id){
    var optionBtn = document.querySelector('#' + id);

    if(answer){
        correctSound.play();
        optionBtn.setAttribute('disabled', ' ');
        optionBtn.classList.remove('btn-danger');
        optionBtn.classList.add('btn-success');
        setTimeout(function(){
            document.location.href = '/game';
        }, 3000);
    }else{
        incorrectSound.play();
        optionBtn.setAttribute('disabled', ' ');
        optionBtn.classList.remove('btn-danger');
        optionBtn.classList.add('btn-blue-grey');
    }
};