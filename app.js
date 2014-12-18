ruble = ""

get_rates = function(currency) {
	var rate = $.ajax({
  		type: "GET",
  		url: "https://currency-exchange.p.mashape.com/exchange?from="+currency+"&q=1.0&to=RUB",
  		headers: {
    		"X-Mashape-Key": "R3pChWXvzOmshtpiU3H1wLE9CkIQp14ASbhjsnDXYSzXxNayRs"
		}
	})
	return rate;
}

display_rates = function(currency) {
	get_rates('USD').done(function (data) {
		$("#USD-RATE").html(data)
	})
	get_rates('EUR').done(function (data) {
		$("#EUR-RATE").html(data)
	})
}

display_rates()
rates = window.setInterval(display_rates, 5000)