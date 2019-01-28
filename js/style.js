function formValidation() {

	// Make quick references to our fields
	fName = document.getElementById("fName");
	email = document.getElementById("email");
	phone = document.getElementById("phone");
	comment = document.getElementById("comment");

	//  to check empty form fields.
	if(fName.value.length == 0) {
		document.getElementById("formHead").innerText = "* All fields are mandatory *";
		fName.focus();
		return false;
	}

	// Check each input in the order that it appears in the form!
	if(inputAlphabet(fName, "* For your name please use alphabets only *")) {

		if(emailValidation(email, "* Please enter a valid email address *")) {

			if(textNumeric(phone, "* Please enter a valid phone number *")) {

				if(lengthDefine(comment, 20, 200)) {

					return true;

				}

			}

		}


	}

	return false;
}

function inputAlphabet(inputtext, alertmsg) {
	alphaExp = /^[a-zA-Z]+$/;
	if(inputtext.value.match(alphaExp)) {
		return true;
	} else {
		document.getElementById("form_p1").innerText = alertmsg;
		inputtext.focus();
		return false;
	}
}

function emailValidation(inputtext, alertmsg) {
	emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(inputtext.value.match(emailExp)) {
		return true;
	} else {
		document.getElementById("form_p2").innerText = alertmsg;
		inputtext.focus();
		return false;
	}
}

function textNumeric(inputtext, alertmsg) {
	numericExpression = /^[0-9]+$/;
	if(inputtext.value.match(numericExpression)) {
		return true;
	} else {
		document.getElementById("form_p3").innerText = alertmsg;
		inputtext.focus();
		return false;
	}
}

function lengthDefine(inputtext, min, max) {
	var ipComment = inputtext.value;
	if(ipComment.length >= min && ipComment.length <= max) {
		return true;
	} else {
		document.getElementById("form_p4").innerText = 
		"* Please enter between " +min+ " and " +max+ " characters *";
		inputtext.focus();
		return false;
	}
}