$(document).ready(function(){
	var ww = $(window).width();
	var wh = $(window).height();
	var imgLondon1_2 = ['images/london_1_2/1.jpg','images/london_1_2/2.jpg','images/london_1_2/3.jpg','images/london_1_2/4.jpg','images/london_1_2/5.jpg','images/london_1_2/6.jpg','images/london_1_2/7.jpg','images/london_1_2/8.jpg',
						'images/london_1_2/9.jpg','images/london_1_2/10.jpg','images/london_1_2/11.jpg','images/london_1_2/12.jpg'];
	var canvas = document.getElementById("CanvasLondon");
	var currentIndex = 0;
	var imgWidth = ww;
	var imgHeight = ww*603/375;
	var canvasWidth = ww;
	var canvasHeight = wh;
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	var img = new Image();
	img.src = imgLondon1_2[currentIndex];
	var ctx = canvas.getContext('2d');
	ctx.drawImage(img, 0, 0 , imgWidth, imgHeight);

	function changeImage() {
			setTimeout(function(){
				currentIndex++;
				img.src = imgLondon1_2[currentIndex];
				var ctx = canvas.getContext('2d');
				ctx.drawImage(img, 0, 0 , imgWidth, imgHeight);
				if (currentIndex < 12) {
					changeImage();
				}
			},84);
		};

	$(".answer button").click(function(){
		changeImage();
	});


	//loading
	$(".loading-page").click(function(){
		$(this).fadeOut();
	});
});