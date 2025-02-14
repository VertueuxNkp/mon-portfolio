let button1 = document.getElementById('timeline-item1');

let button2 = document.getElementById('timeline-item2');

let button3 = document.getElementById('timeline-item3');

let button4 = document.getElementById('timeline-item4');

button1.addEventListener('click', function(){
    document.getElementById('annee_enseignement1').style.display = 'flex';
    document.getElementById('annee_enseignement2').style.display = 'none';
    document.getElementById('annee_enseignement3').style.display = 'none';
    document.getElementById('annee_enseignement4').style.display = 'none';
    
    document.getElementById('timelin1').style.backgroundColor = 'black';
    document.getElementById('timelin2').style.backgroundColor = 'gray';
    document.getElementById('timelin3').style.backgroundColor = 'gray';
    document.getElementById('timelin4').style.backgroundColor = 'gray';

    
    document.getElementById('timelin1').style.borderColor = 'black';
    document.getElementById('timelin2').style.borderColor = 'gray';
    document.getElementById('timelin3').style.borderColor = 'gray';
    document.getElementById('timelin4').style.borderColor = 'gray';

    document.getElementById('large1').style.border = '1px solid black';
    document.getElementById('large2').style.border = '1px solid gray';
    document.getElementById('large3').style.border = '1px solid gray';
    document.getElementById('large4').style.border = '1px solid gray';
    document.getElementById('large5').style.border = '1px solid gray';

});


button2.addEventListener('click', function(){
    document.getElementById('annee_enseignement1').style.display = 'none';
    document.getElementById('annee_enseignement2').style.display = 'flex';
    document.getElementById('annee_enseignement3').style.display = 'none';
    document.getElementById('annee_enseignement4').style.display = 'none'; 

    document.getElementById('timelin1').style.backgroundColor = 'gray';
    document.getElementById('timelin2').style.backgroundColor = 'black';
    document.getElementById('timelin3').style.backgroundColor = 'gray';
    document.getElementById('timelin4').style.backgroundColor = 'gray';

    
    document.getElementById('timelin1').style.borderColor = 'gray';
    document.getElementById('timelin2').style.borderColor = 'black';
    document.getElementById('timelin3').style.borderColor = 'gray';
    document.getElementById('timelin4').style.borderColor = 'gray';

    document.getElementById('large1').style.border = '1px solid gray';
    document.getElementById('large2').style.border = '1px solid black';
    document.getElementById('large3').style.border = '1px solid gray';
    document.getElementById('large4').style.border = '1px solid gray';
    document.getElementById('large5').style.border = '1px solid gray';
});


button3.addEventListener('click', function(){
    document.getElementById('annee_enseignement1').style.display = 'none';
    document.getElementById('annee_enseignement2').style.display = 'none';
    document.getElementById('annee_enseignement3').style.display = 'flex';
    document.getElementById('annee_enseignement4').style.display = 'none'; 

    document.getElementById('timelin1').style.backgroundColor = 'gray';
    document.getElementById('timelin2').style.backgroundColor = 'gray';
    document.getElementById('timelin3').style.backgroundColor = 'black';
    document.getElementById('timelin4').style.backgroundColor = 'gray';

    
    document.getElementById('timelin1').style.borderColor = 'gray';
    document.getElementById('timelin2').style.borderColor = 'gray';
    document.getElementById('timelin3').style.borderColor = 'black';
    document.getElementById('timelin4').style.borderColor = 'gray';

    document.getElementById('large1').style.border = '1px solid gray';
    document.getElementById('large2').style.border = '1px solid gray';
    document.getElementById('large3').style.border = '1px solid black';
    document.getElementById('large4').style.border = '1px solid gray';
    document.getElementById('large5').style.border = '1px solid gray';
});

button4.addEventListener('click', function(){
    document.getElementById('annee_enseignement1').style.display = 'none';
    document.getElementById('annee_enseignement2').style.display = 'none';
    document.getElementById('annee_enseignement3').style.display = 'none';
    document.getElementById('annee_enseignement4').style.display = 'flex'; 

    document.getElementById('timelin1').style.backgroundColor = 'gray';
    document.getElementById('timelin2').style.backgroundColor = 'gray';
    document.getElementById('timelin3').style.backgroundColor = 'gray';
    document.getElementById('timelin4').style.backgroundColor = 'black';

    
    document.getElementById('timelin1').style.borderColor = 'gray';
    document.getElementById('timelin2').style.borderColor = 'gray';
    document.getElementById('timelin3').style.borderColor = 'gray';
    document.getElementById('timelin4').style.borderColor = 'black';

    document.getElementById('large1').style.border = '1px solid gray';
    document.getElementById('large2').style.border = '1px solid gray';
    document.getElementById('large3').style.border = '1px solid gray';
    document.getElementById('large4').style.border = '1px solid black';
    document.getElementById('large5').style.border = '1px solid gray';
});

let activite1 = document.querySelectorAll('.activite-item1');
activite1Button = document.getElementById('activite-item1')

let activite2 = document.querySelectorAll('.activite-item2');
activite2Button = document.getElementById('activite-item2')

let activite3 = document.querySelectorAll('.activite-item3');
activite3Button = document.getElementById('activite-item3')

//console.log(activite2);

let img = document.getElementById('activite-img');

activite1Button.addEventListener('click', function(){

    img.src = 'images/logo.jpg';

    activite1.forEach(function(element) {
        element.style.color = 'black';
    });
    activite1Button.style.borderColor = 'gray'

    activite2.forEach(function(element) {
        element.style.color = 'gray';
        
    });

    activite3.forEach(function(element) {
        element.style.color = 'gray';
        
    });
});

activite2Button.addEventListener('click', function(){

    img.src = 'images/profil.png';

    activite2.forEach(function(element) {
        element.style.color = 'black';
    });
    activite2Button.style.borderColor = 'gray'

    activite1.forEach(function(element) {
        element.style.color = 'gray';
        
    });

    activite3.forEach(function(element) {
        element.style.color = 'gray';
        
    });
});

activite3Button.addEventListener('click', function(){

    img.src = 'images/valeur.png';

    activite3.forEach(function(element) {
        element.style.color = 'black';
    });
    activite3Button.style.borderColor = 'gray'

    activite2.forEach(function(element) {
        element.style.color = 'gray';
        
    });

    activite1.forEach(function(element) {
        element.style.color = 'gray';
        
    });
});

let buttonVille1 = document.getElementById('villeline-item1');

let buttonVille2 = document.getElementById('villeline-item2');

let buttonVille3 = document.getElementById('villeline-item3');


buttonVille1.addEventListener('click', function(){
    document.getElementById('ville_enseignement1').style.display = 'flex';
    document.getElementById('ville_enseignement2').style.display = 'none';
    document.getElementById('ville_enseignement3').style.display = 'none';
    
    document.getElementById('villelin1').style.backgroundColor = 'black';
    document.getElementById('villelin2').style.backgroundColor = 'gray';
    document.getElementById('villelin3').style.backgroundColor = 'gray';

    
    document.getElementById('villelin1').style.borderColor = 'black';
    document.getElementById('villelin2').style.borderColor = 'gray';
    document.getElementById('villelin3').style.borderColor = 'gray';

    document.getElementById('large-ville1').style.border = '1px solid black';
    document.getElementById('large-ville2').style.border = '1px solid gray';
    document.getElementById('large-ville3').style.border = '1px solid gray';
    document.getElementById('large-ville4').style.border = '1px solid gray';

    buttonVille1.style.color = 'black';
    buttonVille2.style.color = 'gray';
    buttonVille3.style.color = 'gray';
});

buttonVille2.addEventListener('click', function(){
    document.getElementById('ville_enseignement1').style.display = 'none';
    document.getElementById('ville_enseignement2').style.display = 'flex';
    document.getElementById('ville_enseignement3').style.display = 'none';
    
    document.getElementById('villelin1').style.backgroundColor = 'gray';
    document.getElementById('villelin2').style.backgroundColor = 'black';
    document.getElementById('villelin3').style.backgroundColor = 'gray';

    
    document.getElementById('villelin1').style.borderColor = 'gray';
    document.getElementById('villelin2').style.borderColor = 'black';
    document.getElementById('villelin3').style.borderColor = 'gray';

    document.getElementById('large-ville1').style.border = '1px solid gray';
    document.getElementById('large-ville2').style.border = '1px solid black';
    document.getElementById('large-ville3').style.border = '1px solid gray';
    document.getElementById('large-ville4').style.border = '1px solid gray';

    buttonVille1.style.color = 'gray';
    buttonVille2.style.color = 'black';
    buttonVille3.style.color = 'gray';
});

buttonVille3.addEventListener('click', function(){
    document.getElementById('ville_enseignement1').style.display = 'none';
    document.getElementById('ville_enseignement2').style.display = 'none';
    document.getElementById('ville_enseignement3').style.display = 'flex';
    
    document.getElementById('villelin1').style.backgroundColor = 'gray';
    document.getElementById('villelin2').style.backgroundColor = 'gray';
    document.getElementById('villelin3').style.backgroundColor = 'black';

    
    document.getElementById('villelin1').style.borderColor = 'gray';
    document.getElementById('villelin2').style.borderColor = 'gray';
    document.getElementById('villelin3').style.borderColor = 'black';

    document.getElementById('large-ville1').style.border = '1px solid gray';
    document.getElementById('large-ville2').style.border = '1px solid gray';
    document.getElementById('large-ville3').style.border = '1px solid black';
    document.getElementById('large-ville4').style.border = '1px solid gray';

    buttonVille1.style.color = 'gray';
    buttonVille2.style.color = 'gray';
    buttonVille3.style.color = 'black';
});

