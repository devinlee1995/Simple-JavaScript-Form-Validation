document.getElementById('Submit').onclick=function(){
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	var re = /.*[0-9].*/;

	if (re.test(username)) {
		if (password == "12345678") {
			document.getElementById('title').innerHTML = "Done!"
		}
		else {
			alert("Wrong Password!");
		}
	}

	else {
		alert("No number in user!");
	}
	return false;

};


















