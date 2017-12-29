$(function() 
{
	kawase("USD","米ドル");
	kawase("EUR","ユーロ");
	kawase("GBP","ポンド");
	kawase("AUD","豪ドル");
	kawase("HKD","香港ドル");
	kawase("CNY","人民元");
});

function kawase(money,m_name){
	var URL = "http://api.aoikujira.com/kawase/get.php?format=jsonp&code=" + money;
	var cl_name = "." + money;

	$.getScript(URL, function(data, textStatus, jqxhr) {
		var result = callback();
		$(cl_name).text(m_name + "(" + money + ")：" + result.JPY + "円");
		if(money = "USD") $(".LastUpdate").text(result.update);
	});

}

