$(function(){
	BASE = "JPY";
	$(".inputBox input:text").change(
		function(){
			WORD = $(".inputBox input:text").val();
			kawaseSearch( WORD, BASE);
		});
});


function kawaseSearch(money , base){
	if(money.length ==3){
		var URL = "http://download.finance.yahoo.com/d/quotes.csv?s=" + money + base + "=X&f=l1&e=.csv";
		 	$.getScript(URL,function(data, textStatus, jqxhr) {

			//取得したcsvの結果データ部分だけを取得
			result = data.responseText;
			re = new RegExp("<p>");
			before = result.match(re).index + 3;
			re = new RegExp("</p>");
			behind = result.match(re).index;
			
			result = result.substring(before , behind);
			
			output = money + "\t：\t" + result +" " + base;
			//さーち用
			if(result != null){
				$(".result").text(output);
			}else{
				$(".result").text("unknown");
			}
		//	console.log(result);
			 });
	}else{
			$(".result").text("unknown");
	}
}


function changeSelect(){
    var select = document.getElementById('select');
    var options =
        document.getElementById('select').options;
    BASE = options.item(select.selectedIndex).value;
	kawaseSearch( WORD, BASE);
}
