document.querySelector(".försök").innerHTML = localStorage.getItem('score');

function Rätta(){
    let poäng = 0; 

    let answers = document.querySelectorAll("input[type='radio']:checked");

    for (let index = 0; index < answers.length; index++) { //Förstår inte riktigt den här, bara kopierat
    poäng += parseInt(answers[index].value);
  }

    document.querySelector(".rätta-svar").innerHTML = poäng;

  
    document.querySelector(".quiz").classList.toggle("invisible");
    document.querySelector(".svar").classList.toggle("invisible");

    localStorage.setItem('score', 'poäng');

}

function KörOm(){
    document.querySelector(".quiz").classList.toggle("invisible");
    document.querySelector(".svar").classList.toggle("invisible");
    document.querySelector(".quiz").reset();
}

