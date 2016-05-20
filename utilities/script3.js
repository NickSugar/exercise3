function pop() {
	var demographic = {
		"city": document.getElementById('city').value,
		"state": document.getElementById('state').value,
		"coun": document.getElementById('coun').value,
		"con": document.getElementById('con').value,
		"pop": document.getElementById('pop').value
	};
	document.getElementById("cityTo").innerHTML =demographic.city;
	document.getElementById("stateTo").innerHTML =demographic.state;
	document.getElementById("counTo").innerHTML =demographic.coun;
	document.getElementById("conTo").innerHTML =demographic.con;
	document.getElementById("popTo").innerHTML =demographic.pop;
};