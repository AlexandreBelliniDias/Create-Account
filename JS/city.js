let stateObject = {
    "Eua": {
        "Florida": ["Orlando", "Miami"],
        "California": ["San Francisco", "Los Angeles"],
    },
    "Brazil": {
        "São Paulo": ["Ribeirão Preto", "Campinas"],
        "Minas Gerais": ["Belo Horizonte", "Uberlândia"]
    },
    "Canada": {
        "Alberta": ["Calgari", "Edmonton"],
        "British Columbia": ["Vancouver", "Victoria", "Kelowna"]
    },
}
window.onload = function () {
    let countrySel = document.getElementById("countrySel")
    let stateSel = document.getElementById("stateSel");
    let districtSel = document.getElementById("districtSel");
        
    for (let country in stateObject) {
        countrySel.options[countrySel.options.length] = new Option(country, country);
    }
    countrySel.onchange = function () {
        stateSel.length = 1;
        districtSel.length = 1;
        if (this.selectedIndex < 1) return;

        for (let state in stateObject[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state, state);
        }
    }
    countrySel.onchange(); // reset in case page is reloaded
    
    stateSel.onchange = function () {
        districtSel.length = 1;
        if (this.selectedIndex < 1) return;
        let district = stateObject[countrySel.value][this.value];

        for (let i = 0; i < district.length; i++) {
            districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
        }
    }
}