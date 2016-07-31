var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
var cb = "&callback=JSON_CALLBACK";
var page = "https://en.wikipedia.org/?curid=";
var inputString, input, url = "";

function processData() {

}

function getJson(url) {
	$.ajax({
		type: "GET",
		url: url,
		dataType: "json",
		success: function (obj) {
			processData(obj);
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			alert("Error: " + errorThrown);
		}
	});
}

$("#searchText").keypress(function(event){
    if(event.which == 13){
        inputString = $("#searchText").val();
        var inputArray = inputString.split(' ');
        input = inputArray.join('_');
        url = api + input + cb;

        $('#index').hide();

        getJson(url);
    }
});