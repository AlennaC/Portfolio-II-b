function checkInputs() {
    var email = document.getElementById("email-input").value;
    var phone = document.getElementById("phone-input").value;
    var zip = document.getElementById("zip-input").value;
    var validEmail = false;
    var validPhone = true;
    var validZip = false;

    e = email.search("@");
    pLength = phone.match(/\d/g).length;
    console.log("phone search: " + pLength);
    console.log("phone nonNumber search: " + phone.match(/\D/g).length);

    // checks that domain includes a dot but not as first or last character
    if (e != -1 && email.length > e + 4) {
        console.log("email 1");
        sub = email.substring(e + 1, email.length).split(".");
        console.log(sub);
        console.log(sub.length);
        if (sub.length == 2 && sub[0].length > 1 && sub[1].length > 0) {    
            
            console.log("email 2");
            validEmail = true;
        }
    }

    if ((pLength == 10 || pLength == 11) && phone.match(/\D/g).length <= 6) {
        console.log("phone 1");
        var numberFound = false;
        var countryCode = "-";

        var p1 = phone.split("(");
        var p2 = p1[1].split(")");

        nonNumber = phone.search(/\D/);
        number = phone.search(/\d/);

        if (phone.split(" ")) {
            s = phone.split(" ");
            var construct = s[s.length - 1];

            while (s.length >= 2) {
                construct = s[s.length - 2] + construct;
            }

            phone = construct;
        }

        if ((p1.length != 1)) {
            phone = p1[0]+p2[0]+p2[1];
            // if (p2 == p1 + 4 && phone.substring(p1 + 1, p2).search(/\d/g).length == 3) {
            //     phone = phone.substring(0, p1) + phone.substring(p1 + 1, p2) + phone.substring(p2, phone.length);
            // } else {
            //     validPhone = false;
            // }
        }

        var phoneGroups = phone.split(/\D/);

        if (validPhone && phoneGroups > 5) {
            numberFound = false;
        } else if (validPhone) {
            var construct = phoneGroups[phoneGroups.length - 1];
            var numOfGroups = phoneGroups.length;

            for (i = 0; i < 3; i++) {
                if (construct.length < 10) {
                    construct = construct[construct.length - 1 - i] + construct;
                }

                if (construct.length == 10) {
                    console.log("phone 2");
                    phone = "(" + construct.substring(0, 3) + ") " + construct.substring(3, 6) + "-" + construct.substring(6, 10)
                    numberFound = true;

                    if (numOfGroups == i + 2 && phoneGroups[0].length <= 3) {
                        countryCode = phoneGroups[0];
                        phone = countryCode + " + " + phone;
                    } else if (numOfGroups == i + 3 && phoneGroups[0].length <= 2 && phoneGroups[1].length <= 4) {
                        countryCode = phoneGroups[0] + "-" + phoneGroups[1];
                        
                    } else if (numOfGroups != i + 1) {
                        validPhone == false;
                    }

                    i = 3;
                }
            }
        }
    } else {
        validPhone = false;
    }

    var zipGroups = zip.split("-");

    console.log(zipGroups);

    if (zipGroups.length > 2) {
        validZip = false;
    } else {
        console.log("zip 1");
        if (zipGroups.length == 2 && zipGroups[1].length == 4) {
            validZip = true;
        }

        if (((zipGroups.length == 2 && validZip) || zipGroups.length == 1) && zipGroups[0].length == 5) {
            console.log("zip 2");
            validZip = true;
        } else {
            validZip = false;
        }
    }

    if (validEmail && validPhone && validZip) {
        document.getElementById("feedback-box").textContent = "Valid Input - Thank you";
        document.getElementById("formatted-phone").textContent = phone;
    } else {
        var message = "email: " + validEmail + " phone: " + validPhone + " zip: " + validZip;
        document.getElementById("feedback-box").textContent = "Invalid Input\n" + message;
        document.getElementById("formatted-phone").textContent = "";
    }
}

// cc-cccc-(xxx)-xxx-xxxx

// 1-(xxx)-xxx-xxxx

// (xxx)-xxx-xxxx

// xxxxxxxxxx

// xxx-xxx-xxxx