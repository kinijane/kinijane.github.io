$(function() 
{
	setCookie("check","test",1);
	if(getCookie("check")==""){
		$(".titleSouba").text("Please check and enable Cookie");
	}else{
		finance("NDX");	//NASDAQ

		var tmp = new Array("JPY", "EUR", "GBP", "AUD", "HKD", "CNY","CAD","RUB");
		for(i=0;i < tmp.length;i++){
			kawase(tmp[i] , "USD" , "en");
		}
	}
});
