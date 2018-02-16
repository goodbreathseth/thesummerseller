$(function(){
    $(".description").ready(function(e){
	//      e.preventDefault();
	var myurl= "https://talaikis.com/api/quotes/random/";
	$.ajax({
	    url: myurl,
	    dataType : "json",
	    success : function(json) {
		console.log(json);
		var quote = "\"";
		quote += json.quote;
		quote += "\"\n";
		quote += json.author;
		$(".description").html(quote);

	    }
	});
    });
});
