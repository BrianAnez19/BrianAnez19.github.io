// Muestra los lenguajes de programacion.

const sabi2 = [ "Python", "C++", "Laravel", "PHP", 
        "HTML", "CSS", "Javascript", "Git", 
        "MySQL", "Bootstrap", "NodeJs"
    ];
    
for (let v of sabi2)
    document.write(`
    <figure>
        <img id="imgleg" src="./img/${v}.png">
        <figcaption>
        <p>${v}</p> 
        </figcaption>
    </figure>`);


//Muestra la fecha.

let d2 = new Date();

let month2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 
'Mayo', 'Junio', 'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let todaysDate2 =+ d2.getDate() +' de '+ month2[d2.getUTCMonth()] +' del '+ d2.getUTCFullYear();

document.getElementById('fechahoy').innerHTML = todaysDate2;

