//Version1st : Google
//Version2nd : Yahoo

function kawase(money , base , lang){
	//http://download.finance.yahoo.com
	var URL = "http://download.finance.yahoo.com/d/quotes.csv?s=" + money + base + "=X&f=l1&e=.csv";
	//�b�������������Ȃ���Ύ擾���ɍs���A����΂b��������������擾
	if(getCookie(money)==""){
	
	 	$.getScript(URL,function(data, textStatus, jqxhr) {

		//�擾����csv�̌��ʃf�[�^�����������擾
		result = data.responseText;
		re = new RegExp("<p>");
		before = result.match(re).index + 3;
		re = new RegExp("</p>");
		behind = result.match(re).index;
		
		result = result.substring(before , behind);
		
		output = kawaseMeisyo(base , money) + "\t�F\t" + result +" " + kawaseMeisyo(base , base);
		//�o��
		if(result != null){
			//�b�������������Z�b�g
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

		//�擾����csv�̌��ʃf�[�^�����������擾
		result = data.responseText;
		re = new RegExp("<p>");
		before = result.match(re).index + 3;
		re = new RegExp("</p>");
		behind = result.match(re).index;
		
		result = result.substring(before , behind);

		output = category + "\t�F\t" + result;
		//�b�������������Z�b�g
		setCookie(category,output,1);
		$(".FINANCE").text(output);
	});
	}else{
		output = getCookie(category);
		$(".FINANCE").text(output);
	}

}

