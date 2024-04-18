
document.addEventListener('DOMContentLoaded', function () {
    let stres = 0;
    let anksioznost = 0;
    let depresija = 0;
    let odabranih = 0;
    let DepresijaOpisKraj= "";
    let AnksioznostOpisKraj = "";
    let StresOpisKraj = "";
    const ratingButtonsStres = document.querySelectorAll('.rating-btnStres');
    const ratingButtonsAnksioznost = document.querySelectorAll('.rating-btnAnskioznost');
    const ratingButtonsDepresija = document.querySelectorAll('.rating-btnDepresija');
    const sviGumbi = document.querySelectorAll('.rating-btnDepresija, .rating-btnAnskioznost, .rating-btnStres');

    function updateOdabranihCount() {
        odabranih = 0;
        sviGumbi.forEach(button => {
            if (button.style.color === 'rgb(216, 82, 25)') { // Check if the button is selected (color is #d85219)
                odabranih = odabranih + 1;
            }
        });
        document.getElementById("odgovorenoText").innerHTML = odabranih;
        if (odabranih < 21) {
            document.getElementById("odgovorenoText").style.color = 'red';
            document.getElementById("potrebnoodgovoriti").innerHTML = "Potrebno je odgovoriti na sva pitanja";
            document.getElementById("SubmitButton").setAttribute("disabled", "");

        }
        if (odabranih >= 21) {
            document.getElementById("odgovorenoText").style.color = 'green';
            document.getElementById("potrebnoodgovoriti").innerHTML = "";
            document.getElementById("SubmitButton").removeAttribute("disabled", "");
        }

        let stresFinal = document.getElementById("myText").innerHTML * 2 ;
        let anksFinal = document.getElementById("myAnksioyznostText").innerHTML * 2 ;
        let depraFinal = document.getElementById("myDepresijaText").innerHTML * 2;

        document.getElementById("poruka").innerHTML = "Stres: " + stresFinal + "   Anksioznost: " + anksFinal + "   Depresija: " + depraFinal;

        if (depraFinal <= 9)
            DepresijaOpisKraj = "Bez značajnih smetnji";
        else if (depraFinal <= 13)
            DepresijaOpisKraj = "Blage smetnje";
        else if (depraFinal <= 20)
            DepresijaOpisKraj = "Umjerene smetnje";
        else if (depraFinal <= 27)
            DepresijaOpisKraj = "Ozbiljne smetnje";
        else if (depraFinal >= 28)
            DepresijaOpisKraj = "Izrazito ozbiljne smetnje";


        if (anksFinal <= 7)
            AnksioznostOpisKraj= "Bez značajnih smetnji";
        else if (anksFinal <= 9)
            AnksioznostOpisKraj = "Blage smetnje";
        else if (anksFinal <= 14)
            AnksioznostOpisKraj = "Umjerene smetnje";
        else if (anksFinal <= 19)
            AnksioznostOpisKraj = "Ozbiljne smetnje";
        else if (anksFinal >= 20)
            AnksioznostOpisKraj = "Izrazito ozbiljne smetnje";


        if (stresFinal <= 14)
            StresOpisKraj= "Bez značajnih smetnji";
        else if (stresFinal <= 18)
            StresOpisKraj = "Blage smetnje";
        else if (stresFinal <= 25)
            StresOpisKraj = "Umjerene smetnje";
        else if (stresFinal <= 33)
            StresOpisKraj = "Ozbiljne smetnje";
        else if (stresFinal >= 34)
            StresOpisKraj = "Izrazito ozbiljne smetnje";


        document.getElementById("DepresijaResults").innerHTML = DepresijaOpisKraj;
        document.getElementById("AnksioznostResults").innerHTML = AnksioznostOpisKraj;
        document.getElementById("StresResults").innerHTML = StresOpisKraj;

        document.getElementById("StresBar").value = stresFinal;
        document.getElementById("AnksBar").value = anksFinal;
        document.getElementById("DepraBar").value = depraFinal;


    }

    ratingButtonsStres.forEach(button => {
        button.addEventListener('click', () => {
            const value = parseInt(button.getAttribute('data-value'));
            const answerDiv = button.parentNode;
            const prevValue = parseInt(answerDiv.dataset.value); // Get the previous value

            // Check if prevValue is a valid number
            const prevIsValid = !isNaN(prevValue) && isFinite(prevValue);

            // Subtract the previous value before adding the new value
            stres = stres - (prevIsValid ? prevValue : 0) + value;
            answerDiv.dataset.value = value;
            document.getElementById("myText").innerHTML = stres;
            // Remove bold style from all buttons
            ratingButtonsStres.forEach(btn => {
                if (parseInt(btn.parentNode.dataset.value) === parseInt(btn.getAttribute('data-value'))) {
                    btn.style.fontWeight = 'bold'; // Apply bold style to selected buttons
                    btn.style.color = '#d85219';
                } else {
                    btn.style.fontWeight = 'normal';
                    btn.style.color = 'white';
                    // Remove bold style from unselected buttons
                }
            });
            updateOdabranihCount();
        });
    });

    ratingButtonsAnksioznost.forEach(button => {
        button.addEventListener('click', () => {
            const value = parseInt(button.getAttribute('data-value'));
            const answerDiv = button.parentNode;
            const prevValue = parseInt(answerDiv.dataset.value); // Get the previous value

            // Check if prevValue is a valid number
            const prevIsValid = !isNaN(prevValue) && isFinite(prevValue);

            // Subtract the previous value before adding the new value
            anksioznost = anksioznost - (prevIsValid ? prevValue : 0) + value;
            answerDiv.dataset.value = value;
            document.getElementById("myAnksioyznostText").innerHTML = anksioznost;
            // Remove bold style from all buttons
            ratingButtonsAnksioznost.forEach(btn => {
                if (parseInt(btn.parentNode.dataset.value) === parseInt(btn.getAttribute('data-value'))) {
                    btn.style.fontWeight = 'bold'; // Apply bold style to selected buttons
                    btn.style.color = '#d85219';
                } else {
                    btn.style.fontWeight = 'normal';
                    btn.style.color = 'white';
                    // Remove bold style from unselected buttons
                }
            });
            updateOdabranihCount();

        });

    });
    ratingButtonsDepresija.forEach(button => {
        button.addEventListener('click', () => {
            const value = parseInt(button.getAttribute('data-value'));
            const answerDiv = button.parentNode;
            const prevValue = parseInt(answerDiv.dataset.value); // Get the previous value

            // Check if prevValue is a valid number
            const prevIsValid = !isNaN(prevValue) && isFinite(prevValue);

            // Subtract the previous value before adding the new value
            depresija = depresija - (prevIsValid ? prevValue : 0) + value;
            answerDiv.dataset.value = value;
            document.getElementById("myDepresijaText").innerHTML = depresija;
            // Remove bold style from all buttons

            ratingButtonsDepresija.forEach(btn => {
                if (parseInt(btn.parentNode.dataset.value) === parseInt(btn.getAttribute('data-value'))) {
                    btn.style.fontWeight = 'bold'; // Apply bold style to selected buttons
                    btn.style.color = '#d85219';
                    odabranih = odabranih + 1;
                } else {
                    btn.style.fontWeight = 'normal';
                    btn.style.color = 'white';
                    // Remove bold style from unselected buttons
                }
            });
            updateOdabranihCount();
        });

    });
});

const form = document.getElementById('form');
const result = document.getElementById('result');


form.addEventListener('submit', function (e) {
    e.preventDefault();


    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait..."


    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }

            document.getElementById("Anketa").setAttribute("hidden", "");
            document.getElementById("NaslovAnketa").setAttribute("hidden", "");
            document.getElementById("Rezultati").removeAttribute("hidden", "");




        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
