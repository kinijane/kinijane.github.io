//�ב֒�`
function kawaseMeisyo(base , money) 
{
	if(base == "JPY"){
		switch(money){
		case "USD":
		return "�ăh��";
		break;
		case "EUR":
		return "���[��";
		break;
		case "GBP":
		return "�p�|���h";
		break;
		case "AUD":
		return "���h��";
		break;
		case "HKD":
		return "���`�h��";
		break;
		case "CNY":
		return "�l����";
		break;
		case "CAD":
		return "�J�i�_�h��";
		break;
		case "JPY":
		return "�~";
		break;
		case "RUB":
		return "���V�A���[�u��";
		break;
		}
		
	}else{
		switch(money){
		case "USD":
		return "US dollar";
		break;
		case "EUR":
		return "Euro";
		break;
		case "GBP":
		return "British Pound";
		break;
		case "AUD":
		return "Australian Dollar";
		break;
		case "HKD":
		return "HongKong Dollar";
		break;
		case "CNY":
		return "Chinese Yuan";
		break;
		case "CAD":
		return "Canadian Dollar";
		break;
		case "JPY":
		return "Japanese Yen";
		break;
		case "RUB":
		return "Russian Ruble";
		break;
		}
		
	}
	
}