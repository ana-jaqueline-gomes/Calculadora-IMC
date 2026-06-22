const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    
    const bmi = (weight / (height * height)).toFixed(2);
    const value = document.getElementById('value');

    
    let description = '';

    
    document.getElementById('infos').classList.remove('esconder');
    document.getElementById('more_info').classList.remove('esconder');

    
    if (bmi < 18.5) {
        description = 'Você está abaixo do peso!!.';
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Você está com o peso ideal!!.';
    } else if (bmi >= 25 && bmi <= 30) {
        description = 'Você está com sobrepeso!!.';
    } else if (bmi >= 30 && bmi <= 35) {
        description = 'Você está com obesidade grau 1/moderada!!.';
    } else if (bmi > 35 && bmi <= 40) { 
        description = "Você está com obesidade severa!!.";
    } else {
        description = "Você está com obesidade mórbida!!.";
    }
   
    
    value.textContent = bmi.replace('.', ',');
    
    
    document.querySelector('#description span').textContent = description;
});