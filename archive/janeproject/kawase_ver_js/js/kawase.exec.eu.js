$(function() 
{
	setCookie("check","test",1);
	if(getCookie("check")==""){
		$(".titleSouba").text("Please check and enable Cookie");
	}else{
		finance("AEX");	//AEX�I�����_���ϊ����擾

		var tmp = new Array("USD", "JPY", "GBP", "AUD", "HKD", "CNY","CAD","RUB");
		for(i=0;i < tmp.length;i++){
			kawase(tmp[i] , "EUR" , "en");
		}
	}
});
