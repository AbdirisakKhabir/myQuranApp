const allSura = document.querySelector('.surah-list');

// FUNCTION FOR FETCHING ALL SURAH
let getSurah = () => {

    // URL FOR API
    let url = "https://api.alquran.cloud/v1/surah";

    axios.get(url)
        .then((response)=> {
            const data = response.data.data;
            data.map((oneSura) => {
                console.log(oneSura)
                let suraName = oneSura.name;
                let suraNumber = oneSura.number;
                allSura.innerHTML += `
                <li onclick=handleClick(this.value) class="surah" value=${suraNumber}>${suraNumber}: ${suraName}</li>
                `;
            })
            

        })
        .catch((error) => {
            alert(error);
          });
}


// CALLBACK FUNCTION
const handleClick = (value) => {
    window.location.href = "showsura.html";
    let suraNumber = value;
    // BROWSER STORAGE
        // LOCALSTORAGE
        // SESSION STORAGE
    localStorage.setItem("apiResponse", JSON.stringify(suraNumber));


}
// MAR KASTA OO LA BOOQDO BAYJKA FUNCION_KA II WAC
window.addEventListener("load", getSurah);