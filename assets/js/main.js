function shortUrl(){
	var longurl = document.getElementById("shorturl").value;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "https://tinyurl123.herokuapp.com/generate", true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var resu = JSON.parse(this.response);
			console.log(resu);
			var tiny = resu.url;
			console.log(tiny);
			var sample = "https://tinyurl123.herokuapp.com/" + tiny;
			document.getElementById("demo").innerHTML = sample.link(sample);
		}
	};
	var data = JSON.stringify({"url": longurl});
	xhr.send(data);
}

function sendMessage(){
	alert("Message sent successfully.");
}