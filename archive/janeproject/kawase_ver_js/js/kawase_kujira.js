$(function() 
{
	kawase("USD","�ăh��");
	kawase("EUR","���[��");
	kawase("GBP","�|���h");
	kawase("AUD","���h��");
	kawase("HKD","���`�h��");
	kawase("CNY","�l����");
});

function kawase(money,m_name){
	var URL = "http://api.aoikujira.com/kawase/get.php?format=jsonp&code=" + money;
	var cl_name = "." + money;

	$.getScript(URL, function(data, textStatus, jqxhr) {
		var result = callback();
		$(cl_name).text(m_name + "(" + money + ")�F" + result.JPY + "�~");
		if(money = "USD") $(".LastUpdate").text(result.update);
	});

}

