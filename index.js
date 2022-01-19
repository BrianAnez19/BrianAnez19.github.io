import "./style.css";
// Declaracion de las variables y operacion para la  
//muestra de los lenguajes de programacion.

const sabi = [ "Python", "C++", "Laravel", "PHP", 
        "HTML", "CSS", "Javascript", "Git", 
        "MySQL", "Bootstrap", "NodeJs"
    ];
    
for (let v of sabi)
    document.write(`
    <figure>
        <img id="imgleg" src="./img/${v}.png">
        <figcaption>
        <p>${v}</p> 
        </figcaption>
    </figure>`);

    
//Declaracion de las variables y operacion para la 
//muestra de la fecha.

let d = new Date();

let month = ['January', 'February', 'March', 'April', 
'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];

let todaysDate = month[d.getUTCMonth()] + ' ' + d.getDate() +', '+ d.getUTCFullYear();

document.getElementById('fechahoy').innerHTML = todaysDate;




