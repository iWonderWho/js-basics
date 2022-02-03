function getRandomBirthDate(minYears, maxYears, maxMonths, maxDays) {
    const randomYear = Math.floor(minYears + Math.random() * (maxYears - minYears));
    const randomMonth = Math.floor(Math.random() * maxMonths);
    const randomDay = Math.floor(Math.random() * maxDays);

    return new Date(randomYear, randomMonth, randomDay);
}


function generateClientList(numberOfClients = 25, gender = '') {

    let clients = [];
    let i = 1;
    while (i <= numberOfClients) {
        let dateOfBirth = getRandomBirthDate(1950, 2000, 6, 5);
        let client = new Person(dateOfBirth, gender);
        clients.push(client);
        i++;
    }
    return clients;
}

function createTd(text) {
    let newTd = document.createElement('td');
    newTd.innerHTML = text;

    return newTd;
}

function search(searchName, searchLoanCount) {
    let searchResult = [];
    searchName = searchName.toUpperCase();

    for (let index in clientList) {
        let loanCount = clientList[index].getLoan();
        let fullName = clientList[index].getFullName().toUpperCase();

        if (searchLoanCount == 'any'){
            if (fullName.includes(searchName)){
                searchResult.push(clientList[index]);
            }
        }
        else{
            if (fullName.includes(searchName) && loanCount == searchLoanCount) {
                searchResult.push(clientList[index]);
            }
        }
    }

    return searchResult;
}

function generateStats(clientList) {
    let loanCountSum = 0;
    let ageSum = 0;

    for (let index in clientList) {
        let clientAge = clientList[index].age;
        let loanCount = clientList[index].getLoan();
        loanCountSum += loanCount;
        ageSum += clientAge;
    }
    let averageAge = ((ageSum / clientList.length)).toFixed(0);

    addStatsToPage({loanCountSum, averageAge})
}

function onGeneratorCall() {

    let clientCountElementValue = document.getElementById('clientCount').value;
    let genderElementValue = document.getElementById('gender').value;
    clientList = generateClientList(clientCountElementValue,genderElementValue); //can this one be public or is it bad practise. this is done for search to access the collection of elements
    fillTable(clientList);
    generateStats(clientList);
    document.getElementById('generator').style.display = 'none';
    document.getElementById('clientsTable').style.display = '';
    document.getElementById('filters').style.display = '';
    
}