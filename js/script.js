$(document).ready(function() {
  	var searchTerm;
  
  	$("#search").keypress(function(e) {//this code allows user to press enter after typing something
    	if(e.which==13) {
    		$("#searchBut").click();//this is as good as clicking search button
    	}
  	});
  
  
  	$("#searchBut").on("click",function (){//this is click handler
   		searchTerm=document.getElementById("search").value;//saves text typed by user
    	searchTerm=searchTerm.replace(/\s/g,"+");//removes spaces from text and replaces with +
    
    	$.getJSON("http://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&limit=10&format=json&callback=?",function(json) {//&callback=? is very important
      		$(".searchResults").text("");//prevents repeating of search results when search button is pressed repeatedly
      		$(".searchResults").css("padding","1%");//inserts a css of padding to the searchresuls div
      		
      		if(JSON.stringify(json[1])=="[]") {
          		$(".searchResults").append("<h2>No results found.</h2>");
        	}//if gibbberish is entered by user
      		else if(json.hasOwnProperty("error")) {//if nothing is entered by user
        		$(".searchResults").append("<h2>Please enter a search term.</h2>");
      		}
      		else {//when proper search terms are entered
      
      			for (var count=0;count<=9;count++) {//total 10 search results are displayed 
      				$(".searchResults").append("<a href="+JSON.stringify(json[3][count])+"target=\"_blank\">"+"<h2>"+JSON.stringify(json[1][count]).replace(/\"/g,"")+"</h2></a>");//displays title of search result
        			$(".searchResults").append(JSON.stringify(json[2][count]).replace(/\"/g,""));//displays a short description of search result
        		}
      		}
        });
    });
});