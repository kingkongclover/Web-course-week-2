function addData() {
    //Otetaan elementtien id:den perusteella muuttujiin talteen annetut arvot
    var username = document.getElementById("input-username").value;
    var email = document.getElementById("input-email").value;
    var admin = document.getElementById("input-admin").checked ? "X" : "-";
    var image = document.getElementById("input-image").files[0];

    var table = document.querySelector("#items tbody");
    var tr = document.getElementsByTagName("tr");
    //boolean muuttuja, jonka avulla katsotaan onko annettus username jo olemassa
    var isUsernameExists = false;
    //alla käydään läpi tablen tiedot ja jos rUsrnm on sama kuin username muokataan vain annetut kohdat
    for (var i = 1; i < tr.length; i++) {
        var rUsrnm = tr[i].cells[0].textContent;
        if (rUsrnm === username) {
            isUsernameExists = true;

            tr[i].cells[1].textContent = email;
            tr[i].cells[2].textContent = admin;
        break;
        }
    }

    if (isUsernameExists === false) {
        const newRow = document.createElement('tr');
        //Luodaan imageTag, johon laitetaan kuvalle luotu url ja sen css stylet eli 64 x 64px
        var imageTag = "";
        //Jos kuva on muuttujaan imgURL luodaan objectURL imagesta ja imageTagiin lisätään object url sourcena
        if (image) {
            var imgURL = URL.createObjectURL(image);
            imageTag = `<img src="${imgURL}" style="width: 64px; height: 64px;">`
        }

        //lisätään tbody tableen annetut tiedot
        newRow.innerHTML = `<td>${username}</><td>${email}</><td>${admin}</><td><img>${imageTag}</img></>`;
        table.appendChild(newRow);

    }
}
function emptyData() {
    //valitaan vain #items id:n alla olevat tbody:n sisäiset rivit
    var table = document.querySelector("#items tbody");
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}

