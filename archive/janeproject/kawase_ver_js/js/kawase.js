//Version1st : Google
//Version2nd : Yahoo

function kawase(money , base , lang){
	//http://download.finance.yahoo.com
	var URL = "http://download.finance.yahoo.com/d/quotes.csv?s=" + money + base + "=X&f=l1&e=.csv";
	//Ｃｏｏｋｉｅがなければ取得しに行き、あればＣｏｏｋｉｅから取得
	if(getCookie(money)==""){
	
	 	$.getScript(URL,function(data, textStatus, jqxhr) {

		//取得したcsvの結果データ部分だけを取得
		result = data.responseText;
		re = new RegExp("<p>");
		before = result.match(re).index + 3;
		re = new RegExp("</p>");
		behind = result.match(re).index;
		
		result = result.substring(before , behind);
		
		output = kawaseMeisyo(base , money) + "\t：\t" + result +" " + kawaseMeisyo(base , base);
		//出力
		if(result != null){
			//Ｃｏｏｋｉｅをセット
			setCookie(money,output,1);
			$("." + money).text(output);
			$(".result").text(output);
		}else{
			$("." + money).text("unknown");
			$(".result").text("unknown");
		}
	//	console.log(result);
		 });
	}else{
		output = getCookie(money);
		$("." + money).text(output);
	}

}

function finance(category){
	var URL = "http://download.finance.yahoo.com/d/quotes.csv?s=%5E" + category + "&f=l1&e=.csv";
	if(getCookie(category)==""){
	$.getScript(URL, function(data, textStatus, jqxhr) {

		//取得したcsvの結果データ部分だけを取得
		result = data.responseText;
		re = new RegExp("<p>");
		before = result.match(re).index + 3;
		re = new RegExp("</p>");
		behind = result.match(re).index;
		
		result = result.substring(before , behind);

		output = category + "\t：\t" + result;
		//Ｃｏｏｋｉｅをセット
		setCookie(category,output,1);
		$(".FINANCE").text(output);
	});
	}else{
		output = getCookie(category);
		$(".FINANCE").text(output);
	}

}

