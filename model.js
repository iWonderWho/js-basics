class Gender {

    constructor(gender) {
        const genders = ['male', 'female'];
        if (gender == '') {
            let lengthGender = genders.length;
            let randomIndexGender = Math.round(Math.random() * (lengthGender - 1));
            this.setGender(genders[randomIndexGender]);
        }
        else {
            this.setGender(gender)
        }
    }

    setGender(gender) {
        this.gender = gender;
    }

    getGender() {
        return this.gender;
    }
}

class Fullname {

    constructor(gender) {

        let fullName = this.getRandomFullNameByGender(gender);

        this.firstName = fullName.firstName;
        this.middleName = fullName.middleName;
        this.lastName = fullName.lastName;
    }

    getRandomFullNameByGender(gender) {

        let listsOfNames = {
            male: {
                firstName: ['Oleg', 'Kostja', 'Max', 'Zhora', 'Dima'],
                middleName: ['Carj', 'Korolj', 'Princ'],
                lastName: ['Buhovich', 'Kravchenko', 'Smirnov', 'Sidorov', 'Ozols']
            },
            female: {
                firstName: ['Olja', 'Marina', 'Marija', 'Nastja'],
                middleName: ['Koroleva', 'Princesa', 'Sluzanka'],
                lastName: ['Landisheva', 'Melnikova', 'Hanina', 'Silcenko']
            }
        }

        let lengthFirstName = listsOfNames[gender]['firstName'].length;
        let lengthMiddleName = listsOfNames[gender]['middleName'].length;
        let lengthLastName = listsOfNames[gender]['lastName'].length;
        let randomIndexFirstName = Math.round(Math.random() * (lengthFirstName - 1));
        let randomIndexMiddleName = Math.round(Math.random() * (lengthMiddleName - 1));
        let randomIndexLastName = Math.round(Math.random() * (lengthLastName - 1));
        let firstName = listsOfNames[gender]['firstName'][randomIndexFirstName];
        let middleName = listsOfNames[gender]['middleName'][randomIndexMiddleName];
        let lastName = listsOfNames[gender]['lastName'][randomIndexLastName];

        return { firstName, middleName, lastName };
    }

}


class Person {
    
    constructor(dateOfBirth, gender) {
        let personGender = new Gender(gender);
        if (!(personGender instanceof Gender)) {
            throw 'Invalid object - should be type of Gender';
        }
        else {
            this.setGender(personGender.getGender());
        }

        this.setLoan(Math.floor(Math.random() * 10));
        this.setDateOfBirth(dateOfBirth);

        let fullName = new Fullname(this.getGender());
        if (!(fullName instanceof Fullname)) {
            throw 'Invalid object - should be type of Name';
        }
        else {
            this.setName(fullName.firstName);
            this.setSurname(fullName.lastName);
            this.setMiddleName(fullName.middleName);
        }

    }
    setName(firstName) {
        this.name = firstName.toUpperCase();
    }
    getName() {
        return this.name;
    }
    setSurname(lastName) {
        this.surname = lastName.toUpperCase();
    }
    setMiddleName(middleName) {
        this.middleName = middleName.toUpperCase();
    }
    getFullName() {
        return this.name + ' ' + this.surname + ' ' + this.middleName;
    }
    setDateOfBirth(dateOfBirth) {
        this.dateOfBirth = dateOfBirth.toLocaleDateString("en-GB");
        this.age = this.defineAge(dateOfBirth);
    }
    defineAge(dateOfBirth) {
        let diff = (new Date() - dateOfBirth) / (24 * 3600 * 365.25 * 1000);
        return Math.floor(diff);
    }
    setGender(gender) {
        this.gender = gender;
    }
    getGender() {
        return this.gender;
    }
    setLoan(loan) {
        this.loan = loan;
    }
    getLoan() {
        return this.loan;
    }
}