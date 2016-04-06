function myFunc(){
			var val = 0;
			if (val == 0) {
				document.getElementById("test").innerHTML = "Word changed";
				val++;
			} else {
				document.getElementById("test").innerHTML = "Word changed again!";
				val--;
			}
		}