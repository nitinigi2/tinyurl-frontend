function shortUrl(){
	var response = getData();
	var shortUrl = response.url;
	var sample = "https://tinyurl123.herokuapp.com/" + shortUrl;
	document.getElementById("demo").innerHTML = sample.link(sample);
}

function getData(){
	var url = document.getElementById("shorturl").value;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "https://tinyurl123.herokuapp.com/generate", false);
	xhr.setRequestHeader("Content-Type", "application/json");
	//xhr.setRequestHeader("Access-Control-Allow-Origin" , "*");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			//console.log(xhr.responseText);
			return xhr.responseText;
		}
	};
	var data = JSON.stringify({"url": url});
	xhr.send(null);
}