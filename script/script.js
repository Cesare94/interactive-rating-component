document.addEventListener("DOMContentLoaded", function() {

    const btnSubmit = document.querySelector(".submit button");
    const btn = document.querySelector(".btn button");
    const btn1 = document.getElementById('1');
    const btn2 = document.getElementById('2');
    const btn3 = document.getElementById('3');
    const btn4 = document.getElementById('4');
    const btn5 = document.getElementById('5');

    const rating = document.getElementById("rating");
    const container = document.getElementById("container");

    const message = document.getElementById("message")






     btn1.onclick = function() {
        btn1.style.backgroundColor = "white";

        btn2.style.backgroundColor = "hsl(217, 12%, 63%)";
        btn3.style.backgroundColor = "hsl(217, 12%, 63%)";
        btn4.style.backgroundColor = "hsl(217, 12%, 63%)";
        btn5.style.backgroundColor = "hsl(217, 12%, 63%)";

        btnSubmit.onclick = function() {

            rating.style.display = "block";
            container.style.display ="none";

            message.innerHTML = `<span>${"You selected 1 out of 5"}</span> ` 

        }
    } 

    btn2.onclick = function() {
        btn2.style.backgroundColor = "white";

        btn1.style.backgroundColor = "hsl(217, 12%, 63%)";
        btn3.style.backgroundColor = "hsl(217, 12%, 63%)";
        btn4.style.backgroundColor = "hsl(217, 12%, 63%)";
        btn5.style.backgroundColor = "hsl(217, 12%, 63%)";



        btnSubmit.onclick = function() {

            rating.style.display = "block";
            container.style.display ="none";

            message.innerHTML = `<span>${"You selected 2 out of 5"}</span> ` 
        }
    } 

    btn3.onclick = function() {
        btn3.style.backgroundColor = "white";

        btn1.style.backgroundColor = "hsl(217, 12%, 63%)";
        btn2.style.backgroundColor = "hsl(217, 12%, 63%)";
        btn4.style.backgroundColor = "hsl(217, 12%, 63%)";
        btn5.style.backgroundColor = "hsl(217, 12%, 63%)";

        btnSubmit.onclick = function() {

            rating.style.display = "block";
            container.style.display ="none";

            message.innerHTML = `<span>${"You selected 3 out of 5"}</span> ` 
        }
    } 

    btn4.onclick = function() {

        btn4.style.backgroundColor = "white";

        btn1.style.backgroundColor = "hsl(217, 12%, 63%)";
        btn2.style.backgroundColor = "hsl(217, 12%, 63%)";
        btn3.style.backgroundColor = "hsl(217, 12%, 63%)";
        btn5.style.backgroundColor = "hsl(217, 12%, 63%)";

        btnSubmit.onclick = function() {

            rating.style.display = "block";
            container.style.display ="none";

            message.innerHTML = `<span>${"You selected 4 out of 5"}</span> ` 
        } 
    }

    btn5.onclick = function() {
        btn5.style.backgroundColor = "white";

        btn1.style.backgroundColor = "hsl(217, 12%, 63%)";
        btn3.style.backgroundColor = "hsl(217, 12%, 63%)";
        btn4.style.backgroundColor = "hsl(217, 12%, 63%)";
        btn2.style.backgroundColor = "hsl(217, 12%, 63%)";

        btnSubmit.onclick = function() {

            rating.style.display = "block";
            container.style.display ="none";

            message.innerHTML = `<span>${"You selected 5 out of 5"}</span> ` 
        }
    } 
    
  
    
    
    
    

});