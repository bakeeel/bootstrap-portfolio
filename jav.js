$(document).ready(fnction()

{
	$('.carousel').carousel(
	{
		interval:6000
	});

	//show color div when clck on the color
	$(".gear-check").click(function()
	{
		$(".color-option").fadeToggle();
	});
});