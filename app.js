const api = `https://api.adviceslip.com/advice/search/`;

let searchBtn = document.getElementById(`search-button`);
let randomBtn = document.getElementById(`random-button`);

let advice = document.getElementById(`advice`).innerHTML;

searchBtn.addEventListener(`click`, function () {
    let searchTerm = document.getElementById(`search-box`).value;
    let url = api + searchTerm;


    fetch(url)
        .then(response => response.json()) 
        .then(data => {
            //clearing buffer

            const adv = document.getElementById(`advice`);
            adv.innerHTML = "";
            data.slips.forEach(element => {     //accessing each element of the array
                /* document.querySelector(`#advice`).innerText = element.advice; */

                let newcontent = document.createElement(`div`);
                newcontent.innerText = element.advice;
                /* newcontent.classList.add(`quote`); */

                while (newcontent.firstChild) {
                    adv.appendChild(newcontent.firstChild);
                    adv.appendChild(document.createElement(`br`));
                    /* newcontent.classList.add(`quote`); */
                }
            });
        })

        .catch((err)=>{
            const adv = document.getElementById(`advice`);
            adv.innerHTML = "Sorry, love! Looks like we're out of stock on those.";        
        });
});

//this part done
randomBtn.addEventListener(`click`, function () {
    let url = `https://api.adviceslip.com/advice`;

    fetch(url)
        .then(response => response.json()) //converting to JSON
        .then(data => {
            document.querySelector(`#advice`).innerText = (data.slip.advice);
        })
});

