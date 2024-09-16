function addData() {

    var username = document.getElementById("input-username").value;
    var email = document.getElementById("input-email").value;
    var admin = document.getElementById("input-admin").checked ? "X" : "-";
    var image = document.getElementById("input-image").files[0];

    var table = document.querySelector("#items tbody");
    var tr = document.getElementsByTagName("tr");

    var isUsernameExists = false;

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
        const newRow = document.createElement('tr')
        newRow.innerHTML = `<td>${username}</><td>${email}</><td>${admin}</><td>${image}</>`
        table.appendChild(newRow)
    }
}
function emptyData() {
    var table = document.querySelector("#items tbody");
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}

