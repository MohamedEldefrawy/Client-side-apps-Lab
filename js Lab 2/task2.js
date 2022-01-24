var isExit = false;
var phoneBook = []

function Contact(name, phone) {
    this.name = name;
    this.phone = phone;

    this.getName = function () {
        return this.name;

    }

    this.getPhone = function () {
        return this.phone;
    }

    this.setName = function (name) {
        this.name = name;
    }

    this.setPhone = function (phone) {
        this.phone = phone;
    }

    this.showDetails = function () {
        prompt("Name = " + this.name + " Phone = " + this.phone);
    }
}

while (!isExit) {
    var operation = prompt("Please choose operation add,search or exit");
    switch (operation) {
        case  "add":
            var newContact = new Contact("", "");
            newContact.setName(prompt("Please enter contact name"));
            newContact.setPhone(prompt("Please Enter phone number"))
            phoneBook.push(newContact);
            break;
        case "search" :
            var searchKey = String(prompt("Enter name or phone"));

            console.log(phoneBook.length);
            for (var i = 0; i < phoneBook.length; i++) {
                if (phoneBook[i].getName() === searchKey || phoneBook[i].getPhone() === searchKey) {
                    phoneBook[i].showDetails();
                    break;
                }
            }
            break;
        case "exit":
            isExit = true;
            break;
        default :
            break;
    }
}
