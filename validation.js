function valid() {
	//FirstName
	v1 = document.getElementById("bx1");
	e1 = document.getElementById("er1");
	exp1 = /^[a-zA-Z]{3,20}$/;
	if (v1.value == "") {
		e1.innerHTML = "Name cant't be empty";
		v1.focus();
		return false;
	}
	else if (exp1.test(v1.value) == false) {
		e1.innerHTML = "Please enter valid name";
		v1.focus();
		return false;
	}
	else {
		e1.innerHTML = "";
	}
	//LastName
	a1 = document.getElementById("b1");
	b1 = document.getElementById("e1");
	ab1 = /^[a-zA-Z]{3,20}$/;
	if (a1.value == "") {
		b1.innerHTML = "Name cant't be empty";
		a1.focus();
		return false;
	}
	else if (ab1.test(a1.value) == false) {
		b1.innerHTML = "Please enter valid name";
		a1.focus();
		return false;
	}
	else {
		b1.innerHTML = "";
	}

	//password1

	a2 = document.getElementById("b2");
	b2 = document.getElementById("e2");
	ab2 = /^[a-zA-Z]{3,10}[0-9]{1,5}$/;
	if (a2.value == "") {
		b2.innerHTML = "Name cant't be empty";
		a2.focus();
		return false;
	}
	else if (ab2.test(a2.value) == false) {
		b2.innerHTML = "Please enter valid Password";
		a2.focus();
		return false;
	}
	else {
		b2.innerHTML = "";
	}
	//password3

	a3 = document.getElementById("b3");
	b3 = document.getElementById("e3");
	ab3 = /^[a-zA-Z]{3,10}[0-9]{1,5}$/;
	if (a3.value == "") {
		b3.innerHTML = "Name cant't be empty";
		a3.focus();
		return false;
	}
	else if (ab3.test(a3.value) == false) {
		b3.innerHTML = "Please enter valid Password";
		a3.focus();
		return false;

	}
	else if (a3.value != a2.value) {
		b3.innerHTML = "Password isn't same ";
		a3.focus();
		return false;
	}
	else {
		b3.innerHTML = "";
	}

	//email

	a4 = document.getElementById("b4");
	b4 = document.getElementById("e4");
	ab4 = /^[a-zA-Z@0-9]{10,20}$/;
	if (a4.value == "") {
		b4.innerHTML = "Name cant't be empty";
		a4.focus();
		return false;
	}
	else if (ab4.test(a4.value) == false) {
		b4.innerHTML = "Please enter valid Email";
		a4.focus();
		return false;

	}

	else {
		b4.innerHTML = "";
	}


	//Phone
	v2 = document.getElementById("bx2");
	e2 = document.getElementById("er2");
	exp2 = /^[6-9]{1}[0-9]{9}$/;
	if (v2.value == "") {
		e2.innerHTML = "Number cant't be empty";
		v2.focus();
		return false;
	}
	else if (exp2.test(v2.value) == false) {
		e2.innerHTML = "Please enter valid phone number";
		v2.focus();
		return false;
	}
	else {
		e2.innerHTML = "";
	}
	//gender
	v3 = document.getElementsByName("gender");
	e3 = document.getElementById("er3");
	if (v3[0].checked == false && v3[1].checked == false) {
		e3.innerHTML = "Select your gender";
		return false;
	}
	else {
		e3.innerHTML = "";
	}
	//skills
	v4 = document.getElementsByName("skills");
	e4 = document.getElementById("er4");
	count = 0;
	for (i = 0; i < v4.length; i++) {
		if (v4[i].checked == true) {
			count++;
		}
	}
	if (count < 2) {
		e4.innerHTML = "Select min 2 skills";
		return false;
	}
	else if (count > 5) {
		e4.innerHTML = "Slect max 4 skills";
		return false;
	}
	else {
		e4.innerHTML = "";
	}
	//select
	v5 = document.getElementById("bx5");
	e5 = document.getElementById("er5");
	sel = v5.selectedIndex;
	if (sel == 0) {
		e5.innerHTML = "Select your department";
		return false;
	}
	else {
		e5.innerHTML = "";
	}

	//pincode
	v6 = document.getElementById('bx6');
	e6 = document.getElementById('er6');
	exp6 = /^[6]{1}[0-9]{5}$/;
	if (v6.value == "") {
		e6.innerHTML = "Number cant't be empty";
		v6.focus();
		return false;
	}
	else if (exp6.test(v6.value) == false) {
		e6.innerHTML = "Please enter valid pin code";
		v6.focus();
		return false;
	}
	else {
		e6.innerHTML = "";
	}

	//Aadhar
	v7 = document.getElementById('bx7');
	e7 = document.getElementById('er7');
	exp7 = /^[0-9]{1}[0-9]{11}$/;
	if (v7.value == "") {
		e7.innerHTML = "Number cant't be empty";
		v7.focus();
		return false;
	}
	else if (exp7.test(v7.value) == false) {
		e7.innerHTML = "Please enter valid Aadhar Number";
		v7.focus();
		return false;
	}
	else {
		e7.innerHTML = "";
	}

	//pan
	v8 = document.getElementById('bx8');
	e8 = document.getElementById('er8');
	exp8 = /^[A-Z]{4}[0-9]{3}[A-Z]{1}$/;
	if (v8.value == "") {
		e8.innerHTML = "Number cant't be empty";
		v8.focus();
		return false;
	}
	else if (exp8.test(v8.value) == false) {
		e8.innerHTML = "Please enter valid PAN Number";
		v8.focus();
		return false;
	}
	else {
		e8.innerHTML = "";
	}




	//DOB



	var year1 = document.getElementById("year").value;
	var month1 = document.getElementById("month").value;
	var day1 = document.getElementById("day").value;

	if (day1 == 0) {
		alert("Please select Day")
	}
	else if (month1 == 0) {
		alert("Please select Month")
	}
	else if (year1 == 0) {
		alert("Please select year")
	}
	else if (year1 > 2003) {
		alert("You are not eligible. Age should be above 16...!!!")
	}

	else if (x != true && y != true) {
		alert("gender");
	}
	else {

		alert("Name = " + fname + "\n" + "Last Name = " + lname
			+ "\n" + "Email = " + email
			+ "\n" + "Password = " + password
			+ "\n" + "DOB = " + day1 + "-" + month1 + "-" + year1
		);
	}

}
