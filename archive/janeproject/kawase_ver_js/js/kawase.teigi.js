//為替定義
function kawaseMeisyo(base , money) 
{
	if(base == "JPY"){
		switch(money){
		case "USD":
		return "米ドル";
		break;
		case "EUR":
		return "ユーロ";
		break;
		case "GBP":
		return "英ポンド";
		break;
		case "AUD":
		return "豪ドル";
		break;
		case "HKD":
		return "香港ドル";
		break;
		case "CNY":
		return "人民元";
		break;
		case "CAD":
		return "カナダドル";
		break;
		case "JPY":
		return "円";
		break;
		case "RUB":
		return "ロシアルーブル";
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