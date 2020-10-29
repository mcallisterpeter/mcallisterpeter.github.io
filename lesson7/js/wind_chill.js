function windChill() {
        var tempF = parseFloat(document.getElementById("tempF").innerText);
        var speed = parseFloat(document.getElementById("speed").innerText);

		// Calculate the Wind Chill Factor
		var windChillFactor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);

		// Round windChillFactor
		var digits = 1;
		var multiplier = Math.pow(10, digits);
		var windChillFactorRounded = Math.round(windChillFactor * multiplier ) / multiplier;

		document.getElementById("windChill").innerHTML = windChillFactorRounded + "°F";
	}