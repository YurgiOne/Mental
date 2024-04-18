document.addEventListener('DOMContentLoaded', function () {
    let stres = 0;
    let anksioznost = 0;
    let depresija = 0;
    let odabranih = 0;
    let DepresijaOpisKraj = "";
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

        let stresFinal = document.getElementById("myText").innerHTML * 2;
        let anksFinal = document.getElementById("myAnksioyznostText").innerHTML * 2;
        let depraFinal = document.getElementById("myDepresijaText").innerHTML * 2;

        document.getElementById("poruka").innerHTML = "Stres: " + stresFinal + "   Anksioznost: " + anksFinal + "   Depresija: " + depraFinal;

        if (depraFinal <= 9)
            DepresijaOpisKraj = "Bez značajnih smetnji";
        else if (depraFinal <= 13)
            DepresijaOpisKraj = "Osjećate blagu tugu ili gubitak interesa, ali ti simptomi ne ometaju značajno vaš svakodnevni život. Preporučuje se da obratite pažnju na svoje emocionalno stanje i pokušate aktivno raditi na poboljšanju raspoloženja. Razmislite o aktivnostima koje vas ispunjavaju i pomažu vam da se osjećate bolje, poput vježbanja, druženja s prijateljima ili hobija koji vas veseli.";
        else if (depraFinal <= 20)
            DepresijaOpisKraj = "Postoji umjeren osjećaj tuge, gubitka interesa ili zadovoljstva u aktivnostima, što može rezultirati poteškoćama u obavljanju svakodnevnih aktivnosti. Preporučuje se da potražite podršku od bliskih osoba ili stručnjaka za mentalno zdravlje. Razgovor s terapeutom ili psihijatrom može vam pomoći da razumijete uzroke vaših simptoma i naučite tehnike za upravljanje depresijom.";
        else if (depraFinal <= 27)
            DepresijaOpisKraj = "Izraženi osjećaji tuge, beznađa i gubitka interesa mogu značajno ometati svakodnevno funkcioniranje i mogu biti povezani s suicidalnim mislima ili ponašanjem. Važno je da odmah potražite stručnu pomoć od terapeuta, psihijatra ili liječnika opće prakse. Depresija teške ozbiljnosti može zahtijevati terapiju ili medicinsku intervenciju kako bi se adekvatno tretirala i spriječila moguća pogoršanja";
        else if (depraFinal >= 28)
            DepresijaOpisKraj = "Osjećate ekstremne simptome tuge, beznađa i gubitka interesa koji mogu dovesti do značajnih poteškoća u obavljanju svakodnevnih aktivnosti i mogu biti povezani s suicidalnim mislima ili ponašanjem. Odmah potražite hitnu stručnu pomoć i podršku od terapeuta, psihijatra ili liječnika opće prakse. Ovo je kritično vrijeme za primanje odgovarajućeg tretmana koji će vam pomoći u upravljanju teškim emocionalnim izazovima i sprječavanju daljnjih komplikacija.";


        if (anksFinal <= 7)
            AnksioznostOpisKraj = "Bez značajnih smetnji";
        else if (anksFinal <= 9)
            AnksioznostOpisKraj = "Doživljavate blage simptome nervoze ili zabrinutosti, ali oni ne utječu značajno na vašu sposobnost obavljanja svakodnevnih aktivnosti. Preporučuje se da prakticirate tehnike opuštanja poput dubokog disanja, meditacije ili joge kako biste smanjili osjećaj nervoze. Osim toga, pokušajte identificirati situacije koje izazivaju anksioznost i razmislite o strategijama za suočavanje s njima.";
        else if (anksFinal <= 14)
            AnksioznostOpisKraj = "Doživljavate umjerene simptome nervoze ili zabrinutosti koji mogu utjecati na vaše ponašanje i kvalitetu života. Potražite podršku od bliskih osoba i razgovarajte o svojim osjećajima. Također, razmislite o strukturiranoj terapiji kao što je kognitivno-bihevioralna terapija (CBT) koja je dokazano učinkovita u upravljanju anksioznošću.";
        else if (anksFinal <= 19)
            AnksioznostOpisKraj = "Ozbiljne smetnje Izraženi osjećaji tuge, beznađa i gubitka interesa mogu značajno ometati svakodnevno funkcioniranje i mogu biti povezani s suicidalnim mislima ili ponašanjem. Važno je da odmah potražite stručnu pomoć od terapeuta, psihijatra ili liječnika opće prakse. Depresija teške ozbiljnosti može zahtijevati terapiju ili medicinsku intervenciju kako bi se adekvatno tretirala i spriječila moguća pogoršanja. Doživljavate izražene simptome nervoze, napetosti ili zabrinutosti koji ometaju vaše svakodnevne aktivnosti i međuljudske odnose. Važno je da se obratite stručnjaku za mentalno zdravlje što je prije moguće kako biste dobili odgovarajuću podršku i tretman. Terapeut ili psihijatar mogu vam preporučiti terapiju, lijekove ili druge intervencije koje će vam pomoći u suočavanju s teškom anksioznošću. Izraženi osjećaj stresa koji značajno ometa svakodnevno funkcioniranje i može biti povezan s emocionalnim iscrpljenjem ili poteškoćama u kontroliranju emocija. Ako se osjećate preopterećeno stresom, važno je da potražite pomoć stručnjaka za mentalno zdravlje. Terapeut vam može pomoći u identifikaciji uzroka stresa i pružiti vam strategije za suočavanje s njim.";
        else if (anksFinal >= 20)
            AnksioznostOpisKraj = "Doživljavate izrazene simptome nervoze, panike ili straha koji dramatično ometaju vašu sposobnost funkcioniranja i mogu dovesti do izbjegavanja određenih situacija. Odmah potražite hitnu stručnu pomoć i podršku od terapeuta, psihijatra ili liječnika opće prakse. Ovo je kritično vrijeme za primanje odgovarajućeg tretmana koji će vam pomoći u upravljanju teškim emocionalnim izazovima i sprječavanju daljnjih komplikacija.";


        if (stresFinal <= 14)
            StresOpisKraj = "Bez značajnih smetnji";
        else if (stresFinal <= 18)
            StresOpisKraj = "Primjećujete blagu razinu stresa, ali on ne uzrokuje značajne poteškoće u vašem svakodnevnom funkcioniranju. Pokušajte identificirati izvore stresa u svom životu i razmislite o načinima kako ih smanjiti. Postavljanje prioriteta, delegiranje zadataka i prakticiranje tehnika za upravljanje stresom mogu vam pomoći da se osjećate bolje.";
        else if (stresFinal <= 25)
            StresOpisKraj = "Postoji umjeren osjećaj stresa koji može ometati obavljanje svakodnevnih aktivnosti, uzrokovati poteškoće u koncentraciji i izvršavanju zadataka i izazvati fizičke simptome kao što su glavobolja ili poremećaji spavanja. Razmislite o promjenama u načinu života koje bi vam mogle pomoći da smanjite stres, poput uspostavljanja bolje ravnoteže između posla i slobodnog vremena ili traženja podrške od obitelji i prijatelja.";
        else if (stresFinal <= 33)
            StresOpisKraj = "Izraženi osjećaj stresa koji značajno ometa svakodnevno funkcioniranje i može biti povezan s emocionalnim iscrpljenjem ili poteškoćama u kontroliranju emocija. Ako se osjećate preopterećeno stresom, važno je da potražite pomoć stručnjaka za mentalno zdravlje. Terapeut vam može pomoći u identifikaciji uzroka stresa i pružiti vam strategije za suočavanje s njim.";
        else if (stresFinal >= 34)
            StresOpisKraj = "Primjećujete izrazito visoku razinu stresa koja može imati ozbiljne posljedice na vaše mentalno i fizičko zdravlje te na vaše međuljudske odnose. Odmah potražite hitnu stručnu pomoć i podršku od terapeuta, psihijatra ili liječnika opće prakse. Ovo je kritično vrijeme za primanje odgovarajućeg tretmana koji će vam pomoći u upravljanju teškim emocionalnim izazovima i sprječavanju daljnjih komplikacija.";


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
