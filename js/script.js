var inputString = "";
var url = "";

$("#searchText").keydown();(function(event){
    if(event.keyCode == 13){
        inputString = $("#searchText").val();
    }
});

var inputArray = inputString.split(' ');