$(document).ready(function(){
	var ww = $(window).width();
	var wh = $(window).height();

	//canvas img array
	var imgLondon1_2 = ['images/london_1_2/1.jpg','images/london_1_2/2.jpg','images/london_1_2/3.jpg',
						'images/london_1_2/4.jpg','images/london_1_2/5.jpg','images/london_1_2/6.jpg',
						'images/london_1_2/7.jpg','images/london_1_2/8.jpg','images/london_1_2/9.jpg',
						'images/london_1_2/10.jpg','images/london_1_2/11.jpg','images/london_1_2/12.jpg'];
	var imgLondon1_5 = ['images/london_1_5/1.jpg','images/london_1_5/2.jpg','images/london_1_5/3.jpg',
						'images/london_1_5/4.jpg','images/london_1_5/5.jpg','images/london_1_5/6.jpg',
						'images/london_1_5/7.jpg','images/london_1_5/8.jpg','images/london_1_5/9.jpg',
						'images/london_1_5/10.jpg','images/london_1_5/11.jpg','images/london_1_5/12.jpg'];
	var imgLondon2_3 = ['images/london_2_3/1.jpg','images/london_2_3/2.jpg','images/london_2_3/3.jpg',
						'images/london_2_3/4.jpg','images/london_2_3/5.jpg','images/london_2_3/6.jpg',
						'images/london_2_3/7.jpg','images/london_2_3/8.jpg','images/london_2_3/9.jpg',
						'images/london_2_3/10.jpg','images/london_2_3/11.jpg','images/london_2_3/12.jpg'];
	var imgLondon2_5 = ['images/london_2_5/1.jpg','images/london_2_5/2.jpg','images/london_2_5/3.jpg',
						'images/london_2_5/4.jpg','images/london_2_5/5.jpg','images/london_2_5/6.jpg',
						'images/london_2_5/7.jpg','images/london_2_5/8.jpg','images/london_2_5/9.jpg',
						'images/london_2_5/10.jpg','images/london_2_5/11.jpg','images/london_2_5/12.jpg'];
	var imgLondon3_4 = ['images/london_3_4/1.jpg','images/london_3_4/2.jpg','images/london_3_4/3.jpg',
						'images/london_3_4/4.jpg','images/london_3_4/5.jpg','images/london_3_4/6.jpg',
						'images/london_3_4/7.jpg','images/london_3_4/8.jpg','images/london_3_4/9.jpg',
						'images/london_3_4/10.jpg','images/london_3_4/11.jpg','images/london_3_4/12.jpg'];
	var imgLondon3_5 = ['images/london_3_5/1.jpg','images/london_3_5/2.jpg','images/london_3_5/3.jpg',
						'images/london_3_5/4.jpg','images/london_3_5/5.jpg','images/london_3_5/6.jpg',
						'images/london_3_5/7.jpg','images/london_3_5/8.jpg','images/london_3_5/9.jpg',
						'images/london_3_5/10.jpg','images/london_3_5/11.jpg','images/london_3_5/12.jpg'];
	var imgLondon4_5 = ['images/london_4_5/1.jpg','images/london_4_5/2.jpg','images/london_4_5/3.jpg',
						'images/london_4_5/4.jpg','images/london_4_5/5.jpg','images/london_4_5/6.jpg',
						'images/london_4_5/7.jpg','images/london_4_5/8.jpg','images/london_4_5/9.jpg',
						'images/london_4_5/10.jpg','images/london_4_5/11.jpg'];
	var imgMilan1_2 = ['images/milan_1_2/1.jpg','images/milan_1_2/2.jpg','images/milan_1_2/3.jpg',
						'images/milan_1_2/4.jpg','images/milan_1_2/5.jpg','images/milan_1_2/6.jpg',
						'images/milan_1_2/7.jpg','images/milan_1_2/8.jpg','images/milan_1_2/9.jpg',
						'images/milan_1_2/10.jpg','images/milan_1_2/11.jpg','images/milan_1_2/12.jpg'];
	var imgMilan1_5 = ['images/milan_1_5/1.jpg','images/milan_1_5/2.jpg','images/milan_1_5/3.jpg',
						'images/milan_1_5/4.jpg','images/milan_1_5/5.jpg','images/milan_1_5/6.jpg',
						'images/milan_1_5/7.jpg','images/milan_1_5/8.jpg','images/milan_1_5/9.jpg',
						'images/milan_1_5/10.jpg','images/milan_1_5/11.jpg','images/milan_1_5/12.jpg'];
	var imgMilan2_3 = ['images/milan_2_3/1.jpg','images/milan_2_3/2.jpg','images/milan_2_3/3.jpg',
						'images/milan_2_3/4.jpg','images/milan_2_3/5.jpg','images/milan_2_3/6.jpg',
						'images/milan_2_3/7.jpg','images/milan_2_3/8.jpg','images/milan_2_3/9.jpg',
						'images/milan_2_3/10.jpg','images/milan_2_3/11.jpg','images/milan_2_3/12.jpg'];
	var imgMilan2_5 = ['images/milan_2_5/1.jpg','images/milan_2_5/2.jpg','images/milan_2_5/3.jpg',
						'images/milan_2_5/4.jpg','images/milan_2_5/5.jpg','images/milan_2_5/6.jpg',
						'images/milan_2_5/7.jpg','images/milan_2_5/8.jpg','images/milan_2_5/9.jpg',
						'images/milan_2_5/10.jpg','images/milan_2_5/11.jpg','images/milan_2_5/12.jpg'];
	var imgMilan3_4 = ['images/milan_3_4/1.jpg','images/milan_3_4/2.jpg','images/milan_3_4/3.jpg',
						'images/milan_3_4/4.jpg','images/milan_3_4/5.jpg','images/milan_3_4/6.jpg',
						'images/milan_3_4/7.jpg','images/milan_3_4/8.jpg','images/milan_3_4/9.jpg',
						'images/milan_3_4/10.jpg','images/milan_3_4/11.jpg','images/milan_3_4/12.jpg'];
	var imgMilan3_5 = ['images/milan_3_5/1.jpg','images/milan_3_5/2.jpg','images/milan_3_5/3.jpg',
						'images/milan_3_5/4.jpg','images/milan_3_5/5.jpg','images/milan_3_5/6.jpg',
						'images/milan_3_5/7.jpg','images/milan_3_5/8.jpg','images/milan_3_5/9.jpg',
						'images/milan_3_5/10.jpg','images/milan_3_5/11.jpg','images/milan_3_5/12.jpg'];
	var imgMilan4_5 = ['images/milan_4_5/1.jpg','images/milan_4_5/2.jpg','images/milan_4_5/3.jpg',
						'images/milan_4_5/4.jpg','images/milan_4_5/5.jpg','images/milan_4_5/6.jpg',
						'images/milan_4_5/7.jpg','images/milan_4_5/8.jpg','images/milan_4_5/9.jpg',
						'images/milan_4_5/10.jpg','images/milan_4_5/11.jpg'];

	
	var currentIndex = 0;
	var imgWidth = ww;
	var imgHeight = ww*603/375;
	var canvasWidth = ww;
	var canvasHeight = wh;

	var canvasLondon = document.getElementById("CanvasLondon");
	canvasLondon.width = canvasWidth;
	canvasLondon.height = canvasHeight;
	var imgLondon = new Image();
	imgLondon.src = imgLondon1_5[currentIndex];
	var ctx = canvasLondon.getContext('2d');
	ctx.drawImage(imgLondon, 0, 0 , imgWidth, imgHeight);

	var canvasMilan = document.getElementById("CanvasMilan");
	canvasMilan.width = canvasWidth;
	canvasMilan.height = canvasHeight;
	var imgMilan = new Image();
	imgMilan.src = imgMilan1_5[currentIndex];
	var ctx2 = canvasMilan.getContext('2d');
	ctx2.drawImage(imgMilan, 0, 0 , imgWidth, imgHeight);

	var canvasZurich = document.getElementById("CanvasZurich");
	canvasZurich.width = canvasWidth;
	canvasZurich.height = canvasHeight;
	var imgZurich = new Image();
	imgZurich.src = imgLondon1_5[currentIndex];
	var ctx3 = canvasZurich.getContext('2d');
	ctx3.drawImage(imgZurich, 0, 0 , imgWidth, imgHeight);


	/*set content size*/
	function setContentSize() {
		$(".homepage a").css({width: (ww-72-14)/2});
        
        
    };
    setContentSize();

    $(window).resize(function(){
        setContentSize();
    }).resize();



	function changeImageLondon() {
			setTimeout(function(){
				currentIndex++;
				imgLondon.src = imgLondon1_5[currentIndex];
				var ctx = canvasLondon.getContext('2d');
				ctx.drawImage(imgLondon, 0, 0 , imgWidth, imgHeight);
				if (currentIndex < 12) {
					changeImageLondon();
				}
			},84);
		};

	$(".london .answer button").click(function(){
		changeImageLondon();
		$(this).parents(".city-box").addClass("onAnimate");
	});

	function changeImageMilan() {
			setTimeout(function(){
				currentIndex++;
				imgMilan.src = imgMilan1_5[currentIndex];
				var ctx2 = canvasMilan.getContext('2d');
				ctx2.drawImage(imgMilan, 0, 0 , imgWidth, imgHeight);
				if (currentIndex < 12) {
					changeImageMilan();
				}
			},84);
		};

	$(".milan .answer button").click(function(){
		var currentIndex = 0;
		changeImageMilan();
		$(this).parents(".city-box").addClass("onAnimate");
	});


	//loading
	$(".loading-page").click(function(){
		$(this).fadeOut();
		$(".homepage").addClass("onAnimate");
	});

	//homepage
	$(".homepage .play").click(function(){
		$(".homepage").addClass("hide");
		$(".city-box.london").addClass("show");
	});

	//answer
	$(".answer input").change(function(){
		$(this).parents(".answer").find(".confirm").addClass("highlight");
	});

	//london
	$(".london .next").click(function(){
		$(".london").addClass("hide");
		$(".milan").addClass("show");
	});

	//milan
	$(".milan .next").click(function(){
		$(".milan").addClass("hide");
		$(".zurich").addClass("show");
	});

	//zurich
	$(".zurich .next").click(function(){
		$(".zurich").addClass("hide");
		$(".result").addClass("show");
		$(".result").addClass("onAnimate");
	});
	$(".zurich .answer button").click(function(){
		$(this).parents(".city-box").addClass("onAnimate");
	});

	//result
	$(".result .final-score .view_detail").click(function(){
		$(".result .final-score").addClass("hide");
		setTimeout(function(){
			$(".result .form").addClass("show");
		},600)
	});
	$(".result .form button").click(function(){
		$(".result .form").addClass("hide");
		setTimeout(function(){
			$(".result .qr").addClass("show");
			$(".result .share").addClass("show");
		},600)
	});
});