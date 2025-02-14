function verify_name(e, id1, id2){
    const nom = document.getElementById(id1);
    const nom_value = nom.value;

    const errorMessage = document.getElementById(id2);

    if(nom_value.trim() === ''){
        e.preventDefault();
        errorMessage.textContent = 'Ce champ doit être rempli';
        errorMessage.style.color = 'red';
        errorMessage.style.display = 'flex';
        errorMessage.style.justifyContent = 'center';
        nom.style.border = '1px solid red';
    }
    else{
        errorMessage.style.display = 'none';
        nom.style.borderColor = 'black';
    }
}

function verify_number(e, num_id, span_id){
    let number = document.getElementById(num_id);
    number_valeur = number.value;
    let errorMessage = document.getElementById(span_id);

    const phoneRegex = /^01(97|96|54|66|94|43)[0-9]{6}$/;

    if(number_valeur.trim() === ''){
        e.preventDefault();
        errorMessage.textContent = 'Ce champ doit être rempli';
        errorMessage.style.color = 'red';
        errorMessage.style.display = 'flex';
        errorMessage.style.justifyContent = 'center';
        number.style.border = '1px solid red';
    }
    else if(!(phoneRegex.test(number.value))){
        e.preventDefault();
        errorMessage.textContent = 'Le numéro n\'est pas valide';
        errorMessage.style.color = 'red';
        errorMessage.style.display = 'flex';
        errorMessage.style.justifyContent = 'center';
        number.style.border = '1px solid red';
    }
    else{
        errorMessage.style.display = 'none';
        number.style.borderColor = 'black';
    }
    
}

function verify_mail(e, mail_id, span_id){
    let mail = document.getElementById(mail_id);
    mail_valeur = mail.value;
    let errorMessage = document.getElementById(span_id);

    const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(mail_valeur.trim() === ''){
        e.preventDefault();
        errorMessage.textContent = 'Ce champ doit être rempli';
        errorMessage.style.color = 'red';
        errorMessage.style.display = 'flex';
        errorMessage.style.justifyContent = 'center';
        mail.style.border = '1px solid red';
    }
    else if(!(mailRegex.test(mail.value))){
        e.preventDefault();
        errorMessage.textContent = 'Adresse mail invalide';
        errorMessage.style.color = 'red';
        errorMessage.style.display = 'flex';
        errorMessage.style.justifyContent = 'center';
        mail.style.border = '1px solid red';
    }
    else{
        errorMessage.style.display = 'none';
        mail.style.borderColor = 'black';
    } 
}

function verify_sujet(e, suj_id, span_id){
    const sujet = document.getElementById(suj_id);
    const sujet_value = sujet.value;

    const errorMessage = document.getElementById(span_id);

    if(sujet_value.trim() == 'choisir'){
        e.preventDefault();
        errorMessage.textContent = 'Selectionnez une option';
        errorMessage.style.color = 'red';
        errorMessage.style.display = 'flex';
        errorMessage.style.justifyContent = 'center';
        sujet.style.border = '1px solid red';
    }
    else{
        errorMessage.style.display = 'none';
        sujet.style.borderColor = 'black';
    } 
}

function verify_contact(e, contact_id, span_id){
    let contacts = document.getElementsByName('preference_contact');
    let contact_choisi = false;

    let contact = document.getElementById(contact_id);
    let errorMessage = document.getElementById(span_id);

    for(const contact of contacts){
        if(contact.checked){
            contact_choisi = true;
            break;
        }
    }

    if(!contact_choisi){
        e.preventDefault();
        errorMessage.textContent = 'Selectionnez une option';
        errorMessage.style.color = 'red';
        errorMessage.style.display = 'flex';
        errorMessage.style.justifyContent = 'center';
        document.getElementById('preference_contact1').style.border = '1px solid red';
        document.getElementById('preference_contact2').style.border = '1px solid red';
        document.getElementById('preference_contact3').style.border = '1px solid red';
        document.getElementById('preference_contact4').style.border = '1px solid red';
    }
    else{
        errorMessage.style.display = 'none';
        document.getElementById('preference_contact1').style.borderColor = 'black';
        document.getElementById('preference_contact2').style.borderColor = 'black';
        document.getElementById('preference_contact3').style.borderColor = 'black';
        document.getElementById('preference_contact4').style.borderColor = 'black';
    }
}

function verify_message(e, message_id, span_id){
    let message = document.getElementById(message_id);
    let message_value = message.value;
    let errorMessage = document.getElementById(span_id);

    if(message_value.trim() === ''){
        e.preventDefault();
        errorMessage.textContent = 'Ce champ doit être rempli';
        errorMessage.style.color = 'red';
        errorMessage.style.display = 'flex';
        errorMessage.style.justifyContent = 'center';
        message.style.border = '1px solid red';
    }
    else if(message_value.length < 100){
        e.preventDefault();
        errorMessage.textContent = 'Le message doit contenir au moins 100 caractères !';
        errorMessage.style.color = 'red';
        errorMessage.style.display = 'flex';
        errorMessage.style.justifyContent = 'center';
        message.style.border = '1px solid red';
    }
    else{
        errorMessage.style.display = 'none';
        message.style.borderColor = 'black';
    }
}

function verify_accepter(e, accepter_id, span_id){
    let contacts = document.getElementsByName('accepter');
    let accepter_condition = false;

    let contact = document.getElementById(accepter_id);
    let errorMessage = document.getElementById(span_id);

    for(const contact of contacts){
        if(contact.checked){
            accepter_condition = true;
            break;
        }
    }

    if(!accepter_condition){
        e.preventDefault();
        errorMessage.textContent = 'Accepeter les conditions';
        errorMessage.style.color = 'red';
        errorMessage.style.display = 'flex';
        errorMessage.style.justifyContent = 'center';
        contact.style.border = '1px solid red';
        document.getElementById('accepter').style.border = '1px solid red';
    }
    else{
        errorMessage.style.display = 'none';
        document.getElementById('accepter').style.borderColor = 'black';
    }
}

const button = document.getElementById('soumettre');

button.addEventListener('click', function(event){
    verify_name(event, 'name', 'name_error');

    verify_name(event, 'surname', 'surname_error');

    verify_number(event, 'number', 'number_error');

    verify_mail(event, 'mail', 'mail_error');

    verify_sujet(event, 'sujet', 'sujet_error');

    verify_contact(event, 'preference_contact', 'preference_error');

    verify_message(event, 'message', 'message_error');

    verify_accepter(event, 'accepter', 'accepter_error');
})