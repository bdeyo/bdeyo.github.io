$(document).ready(function(){
	$("#redditButton").click(function(){
		$("#reddit-content").toggle("slow");
		var el = document.getElementById("redditButton");
		if (el.value == "Hide") el.value = "Show";
		else el.value = "Hide";
	});
});