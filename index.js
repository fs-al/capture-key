$(document).keypress((event) => $("input").attr("placeholder", event.key));

$(".resetBtn").click(() => $("input").attr("placeholder", ""))