document.addEventListener("DOMContentLoaded", () => {
    const transilation_key = "somali_yacob";
    const transilation = document.querySelector("#transilation");
  
    // Get suraNumber from LocalStorage
    let apiResponse = localStorage.getItem("apiResponse");
  
    let url = `https://quranenc.com/api/v1/translation/sura/${transilation_key}/${apiResponse}`;
  
    // Send API Request using Axios
    axios.get(url).then((response) => {
      const res = response.data.result;
      res.map((eachSura) => {
        transilation.innerHTML += `
          <div class="quran_container">
          <div class="aya"> ${eachSura.aya}</div>
          <p class="ayaArabic"> ${eachSura.arabic_text}</p>
          <p class="ayaSomali"> ${eachSura.translation}</p>
  
       
            `;
        console.log("surah", res);
      });
    });
  });
  