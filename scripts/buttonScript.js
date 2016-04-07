function myFunc(){
			var elem = document.getElementById("test");
			if (elem.innerHTML == "Test word") elem.innerHTML = "Word changed";
			else elem.innerHTML = "Test word";
		}