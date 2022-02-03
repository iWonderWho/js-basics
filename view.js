//Waiting for generator button click
window.addEventListener('DOMContentLoaded', (event) =>
document.getElementById('generateBtn').addEventListener('click', onGeneratorCall)
);

//Waiting for search button click
document.getElementById("searchButton").addEventListener("click", function () {
    let inputText = document.getElementById("searchInput").value;
    let inputLoanCount = document.getElementById("loanCount").value;
    let searchResult = search(inputText, inputLoanCount);
    fillTable(searchResult);
    generateStats(searchResult);
});

function fillTable(clientList) {
    if (clientList.length == 0) {
        showOrHideStats(false);
    }
    else{
        showOrHideStats(true);
    }
    let tableBody = document.getElementById('tableBody')
    tableBody.innerHTML = '';
    for (let i = 0; i <= clientList.length - 1; i++) {

        let client = clientList[i];
        let newTr = document.createElement('tr');

        newTr.appendChild(createTd(i + 1));
        newTr.appendChild(createTd(client.getFullName()));
        newTr.appendChild(createTd(client.dateOfBirth));
        newTr.appendChild(createTd(client.age));
        newTr.appendChild(createTd(client.getGender()));
        newTr.appendChild(createTd(client.getLoan()));

        tableBody.appendChild(newTr);
    }
}

function addStatsToPage(stats){
    document.getElementById('totalLoanCount').innerText = stats.loanCountSum;
    document.getElementById('averageAge').innerText = stats.averageAge;
}

function showOrHideStats(show = true) {

    let statsElement = document.getElementById("stats");
    if (show == false) {
        statsElement.style.display = "none";
    }
    else {
        statsElement.style.display = "";
    }
}