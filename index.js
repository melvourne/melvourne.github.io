var one = "#E0E0E0",
		two = "#FF9800",
		three = "#448AFF",
		four = "#00BCD4",
		five = "#bb6774";

$(window).on("scroll touchmove", function() {
		if ($(document).scrollTop() >= $("#one").position().top) {
				$('body').css('background', $("#one").attr("data-color"));

		};
		if ($(document).scrollTop() > $("#two").position().top) {
				$('body').css('background', $("#two").attr("data-color"))
		};
		if ($(document).scrollTop() > $("#three").position().top) {

				$('body').css('background', $("#three").attr("data-color"))
		};
		if ($(document).scrollTop() > $("#four").position().top) {

				$('body').css('background', $("#four").attr("data-color"))
		};
		if ($(document).scrollTop() >= $("#five").position().top) {
				$('body').css('background', $("#five").attr("data-color"))
		};
});
