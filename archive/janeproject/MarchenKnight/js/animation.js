
function moji_anime01() {
	$("#anime .anim-moji-left-white.1").css("z-index","10");
		$("#anime .anim-moji-left-white.1").lettering().animateLetters({opacity:0},null,{randomOrder:false,time:500,reset:false});
	$("#anime .anim-moji-left-white2.1").css("z-index","10");
		$("#anime .anim-moji-left-white2.1").lettering().animateLetters({opacity:0},null,{randomOrder:false,time:500,reset:false});
}
function moji_anime02() {
		$("#anime .anim-moji-left-white.1").lettering().animateLetters({opacity:1},{opacity:0},{randomOrder:false,time:500,reset:false});
		$("#anime .anim-moji-left-white2.1").lettering().animateLetters({opacity:1},{opacity:0},{randomOrder:false,time:500,reset:false});
//	$("#anime .anim-moji-left-white.1").css("z-index","0");
//	$("#anime .anim-moji-left-white2.1").css("z-index","0");
var wait = setInterval( function () {
		$("#anime .anim-moji-left-white.2").css("z-index","10");
			$("#anime .anim-moji-left-white.2").lettering().animateLetters({opacity:0},null,{randomOrder:false,time:500,reset:false});
		$("#anime .anim-moji-left-white2.2").css("z-index","10");
			$("#anime .anim-moji-left-white2.2").lettering().animateLetters({opacity:0},null,{randomOrder:false,time:500,reset:false});
		clearInterval(wait);
		} , 1000 );
}
function moji_anime03() {
		$("#anime .anim-moji-left-white.2").lettering().animateLetters({opacity:1},{opacity:0},{randomOrder:false,time:500,reset:false});
		$("#anime .anim-moji-left-white2.2").lettering().animateLetters({opacity:1},{opacity:0},{randomOrder:false,time:500,reset:false});
var wait = setInterval( function () {
		$("#anime .anim-moji-left-white.3").css("z-index","10");
			$("#anime .anim-moji-left-white.3").lettering().animateLetters({opacity:0},null,{randomOrder:false,time:500,reset:false});
		$("#anime .anim-moji-left-white2.3").css("z-index","10");
			$("#anime .anim-moji-left-white2.3").lettering().animateLetters({opacity:0},null,{randomOrder:false,time:500,reset:false});
		clearInterval(wait);
		} , 1000 );
}
function moji_anime04() {
		$("#anime .anim-moji-left-white.3").lettering().animateLetters({opacity:1},{opacity:0},{randomOrder:false,time:500,reset:false});
		$("#anime .anim-moji-left-white2.3").lettering().animateLetters({opacity:1},{opacity:0},{randomOrder:false,time:500,reset:false});


	var wait = setInterval( function () {
		$("#anime .fade_box").css("z-index","100").fadeOut("3000");
		$("#anime .anim-pic.hime_right").css("zoom","0.7")
			.css("margin","325px 0px 0px 120px")
			.css("z-index","10");
		$("#anime .anim-pic.siro").css("z-index","5")
			.css("margin","70px 0px 0px 170px");
		clearInterval(wait);
	}, 2000);
}

function moji_anime05() {
//右移動
	$("#anime .anim-pic.hime_right").animate({
	'zoom':'1.2',
	'margin-left': '+=100px',
	'margin-top': '-=30px'
	}, 5000);

	$("#anime .anim-pic.siro").animate({
	'margin-left': '-=25px'
	},5000);

}

function moji_anime06() {
//向き変更

		$("#anime .anim-pic.hime_right").css("z-index","0");
		$("#anime .anim-pic.hime_center").css("zoom","1.2")
			.css("margin","295px 0px 0px 220px")
			.css("z-index","9");

		var wait1 = setInterval( function () {
				$("#anime .anim-pic.hime_center").css("z-index","0");
				$("#anime .anim-pic.hime_left").css("z-index","9")
					.css("zoom","1.2")
					.css("margin","295px 0px 0px 220px");
				clearInterval(wait1);
		}, 1500);

		var wait2 = setInterval( function () {
				$("#anime .anim-pic.hime_left").css("z-index","0");
				$("#anime .anim-pic.hime_center").css("z-index","9");
				clearInterval(wait2);
		}, 3500);

}

function moji_anime07() {
//右移動
	$("#anime .anim-pic.hime_left").css("z-index","0");
	$("#anime .anim-pic.hime_center").css("z-index","0");
	$("#anime .anim-pic.hime_right").css("z-index","10");

	$("#anime .anim-pic.hime_right").animate({
	'zoom':'1.5',
	'margin-left': '+=100px',
	'margin-top': '-=30px'
	}, 5000);

	$("#anime .anim-pic.siro").animate({
	'margin-left': '-=25px'
	},5000);

		var wait = setInterval( function () {
		$("#anime .fade_box").css("z-index","100").fadeIn("3000");
			clearInterval(wait);
		}, 2000);
}

function moji_anime08() {
//前のアニメ初期化
	$("#anime .anim-pic.siro").css("z-index","0");
	$("#anime .fade_box").css("z-index","0");
	$("#anime .anim-pic.hime_left").css("z-index","0");
	$("#anime .anim-pic.hime_center").css("z-index","0");
	$("#anime .anim-pic.hime_right").css("z-index","0");
//前のアニメ初期化

	$("#anime .anim-moji-left-white.4").css("z-index","10");
		$("#anime .anim-moji-left-white.4").lettering().animateLetters({opacity:0},null,{randomOrder:false,time:500,reset:false});
	$("#anime .anim-moji-left-white2.4").css("z-index","10");
		$("#anime .anim-moji-left-white2.4").lettering().animateLetters({opacity:0},null,{randomOrder:false,time:500,reset:false});

}

function moji_anime09() {

		$("#anime .anim-moji-left-white.4").lettering().animateLetters({opacity:1},{opacity:0},{randomOrder:false,time:500,reset:false});
		$("#anime .anim-moji-left-white2.4").lettering().animateLetters({opacity:1},{opacity:0},{randomOrder:false,time:500,reset:false});
/*
	var wait = setInterval( function () {
		$("#anime .fade_box").css("z-index","100").fadeOut("3000");
		$("#anime .anim-pic.hime_right").css("zoom","0.7")
			.css("margin","325px 0px 0px 120px")
			.css("z-index","10");
		$("#anime .anim-pic.siro_haikei").css("z-index","5")
			.css("margin","70px 0px 0px 170px");
		clearInterval(wait);
	}, 2000);
*/
}




jQuery(function($)
{
scene = 3;
var wait = setInterval( function () {
		scene ++;
		  if(scene == 1){
				moji_anime01();
			}
			if(scene == 2){
				moji_anime02();
			}
			if(scene == 3){
				moji_anime03();
			}
			if(scene == 4){
				moji_anime04();
			}
			if(scene == 5){
				moji_anime05();
			}
			if(scene == 6){
				moji_anime06();
			}
			if(scene == 7){
				moji_anime07();
			}
			if(scene == 8){
				moji_anime08();
			}
			if(scene == 9){
				moji_anime09();
			}
		} , 5000 );

/*
	$("#anime .next_btn").click(function (){
	scene ++;
	  if(scene == 1){
			moji_anime01();
		}
		if(scene == 2){
			moji_anime02();
		}
		if(scene == 3){
			moji_anime03();
		}
	});
*/
});





