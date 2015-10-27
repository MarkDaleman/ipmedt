$(document).ready(function()
{	

	/* ----   GLOBAAL   ---- */
	
	
	var globaal = new Array();
	globaal.push(["#", "Land", "Aantal Inwoners", "Aantal Abonnementen"]);
	globaal.push([1, "China", "1.357.380.000", "1.204.109.192"]);
	globaal.push([2, "India", "1.279.498.874", "905.670.012"]);
	globaal.push([3, "Indonesië", "251.268.276", "314.985.244"]);
	globaal.push([4, "Verenigde Staten", "316.497.531", "307.248.648"]);
	globaal.push([5, "Brazilië", "204.259.377", "276.373.248"]);
	globaal.push([1, "Monaco", "37.528", "35.180"]);
	globaal.push([2, "Micronesia", "103.718", "31.444"]);
	globaal.push([3, "Kiribati", "108.544", "18.029"]);
	globaal.push([4, "Palau", "20.919", "17.946"]);
	globaal.push([5, "Tuvalu", "9.876", "3.400"]);

	//Create a HTML Table element.
	var table = $("<table />");
	table[0].border = "1";
	//Get the count of columns.
	var columnCount = globaal[0].length;
	var meeste = $("<td colspan=\"4\"><h3>Top 5 globale landen met meeste abonnementen</h3></td>");
	row = $(table[0].insertRow(-1));
	row.html(meeste);
	//Add the header row.
	var row = $(table[0].insertRow(-1));
	for (var i = 0; i < columnCount; i++) {
		var headerCell = $("<th />");
		headerCell.html(globaal[0][i]);
		row.append(headerCell);
	}
	//Add the data rows.
	for (var i = 1; i < 6; i++) {
		row = $(table[0].insertRow(-1));
		for (var j = 0; j < columnCount; j++) {
			var cell = $("<td />");
			cell.html(globaal[i][j]);
			row.append(cell);
		}
	}
	var minste = $("<td colspan=\"4\"><h3>Top 5 globale landen met minste abonnementen</h3></td>");
	row = $(table[0].insertRow(-1));
	row.html(minste);
	
	//Add the header row.
	var row = $(table[0].insertRow(-1));
	for (var i = 0; i < columnCount; i++) {
		var headerCell = $("<th />");
		headerCell.html(globaal[0][i]);
		row.append(headerCell);
	}
	for (var i = 6; i < globaal.length; i++) {
		row = $(table[0].insertRow(-1));
		for (var j = 0; j < columnCount; j++) {
			var cell = $("<td />");
			cell.html(globaal[i][j]);
			row.append(cell);
		}
	}
	var mob_globaal = $("#mob_globaal");
	mob_globaal.append(table);	
	
	
	/* ----   EUROPA   ---- */
	

	var europa = new Array();
	europa.push(["#", "Land", "Aantal Inwoners", "Aantal Abonnementen"]);
	europa.push([1, "Rusland", "143.506.911", "219.329.293"]);
	europa.push([2, "Duitsland", "80.645.605", "97.517.605"]);
	europa.push([3, "Italië", "60.233.948", "95.661.926"]);
	europa.push([4, "Verenigd Koninkrijk", "64.106.779", "79.883.334"]);
	europa.push([5, "Frankrijk", "65.925.498", "64.933.631"]);
	europa.push([1, "Andorra", "75.902", "61.255"]);
	europa.push([2, "Faroe Eilanden", "48.292", "58.280"]);
	europa.push([3, "Liechtenstein", "37.040", "38.547"]);
	europa.push([4, "San Marino", "31.391", "36.713"]);
	europa.push([5, "Monaco", "37.528", "35.180"]);

	//Create a HTML Table element.
	var table = $("<table />");
	table[0].border = "1";
	//Get the count of columns.
	var columnCount = europa[0].length;
	var meeste = $("<td colspan=\"4\"><h3>Top 5 Europese landen met meeste abonnementen</h3></td>");
	row = $(table[0].insertRow(-1));
	row.html(meeste);
	//Add the header row.
	var row = $(table[0].insertRow(-1));
	for (var i = 0; i < columnCount; i++) {
		var headerCell = $("<th />");
		headerCell.html(europa[0][i]);
		row.append(headerCell);
	}
	//Add the data rows.
	for (var i = 1; i < 6; i++) {
		row = $(table[0].insertRow(-1));
		for (var j = 0; j < columnCount; j++) {
			var cell = $("<td />");
			cell.html(europa[i][j]);
			row.append(cell);
		}
	}
	var minste = $("<td colspan=\"4\"><h3>Top 5 Europese landen met minste abonnementen</h3></td>");
	row = $(table[0].insertRow(-1));
	row.html(minste);
	
	//Add the header row.
	var row = $(table[0].insertRow(-1));
	for (var i = 0; i < columnCount; i++) {
		var headerCell = $("<th />");
		headerCell.html(europa[0][i]);
		row.append(headerCell);
	}
	for (var i = 6; i < europa.length; i++) {
		row = $(table[0].insertRow(-1));
		for (var j = 0; j < columnCount; j++) {
			var cell = $("<td />");
			cell.html(europa[i][j]);
			row.append(cell);
		}
	}
	var mob_europa = $("#mob_europa");
	mob_europa.append(table);	
	

	/* ----   AZIË   ---- */
	
	
	var azie = new Array();
	azie.push(["#", "Land", "Aantal Inwoners", "Aantal Abonnementen"]);
	azie.push([1, "China", "1.357.380.000", "1.204.109.192"]);
	azie.push([2, "India", "1.279.498.874", "905.670.012"]);
	azie.push([3, "Indonesië", "251.268.276", "314.985.244"]);
	azie.push([4, "Japan", "127.338.621", "148.114.459"]);
	azie.push([5, "Pakistan", "181.192.646", "127.071.084"]);
	azie.push([1, "Cyprus", "1.141.652", "1.100.089"]);
	azie.push([2, "Macau", "568.056", "1.727.357"]);
	azie.push([3, "Maldiven", "351.111", "636.192"]);
	azie.push([4, "Bhutan", "754.637", "544.835"]);
	azie.push([5, "Brunei", "411.499", "461.761"]);

	//Create a HTML Table element.
	var table = $("<table />");
	table[0].border = "1";
	//Get the count of columns.
	var columnCount = azie[0].length;
	var meeste = $("<td colspan=\"4\"><h3>Top 5 Aziatische landen met meeste abonnementen</h3></td>");
	row = $(table[0].insertRow(-1));
	row.html(meeste);
	//Add the header row.
	var row = $(table[0].insertRow(-1));
	for (var i = 0; i < columnCount; i++) {
		var headerCell = $("<th />");
		headerCell.html(azie[0][i]);
		row.append(headerCell);
	}
	//Add the data rows.
	for (var i = 1; i < 6; i++) {
		row = $(table[0].insertRow(-1));
		for (var j = 0; j < columnCount; j++) {
			var cell = $("<td />");
			cell.html(azie[i][j]);
			row.append(cell);
		}
	}
	var minste = $("<td colspan=\"4\"><h3>Top 5 Aziatische landen met minste abonnementen</h3></td>");
	row = $(table[0].insertRow(-1));
	row.html(minste);
	
	//Add the header row.
	var row = $(table[0].insertRow(-1));
	for (var i = 0; i < columnCount; i++) {
		var headerCell = $("<th />");
		headerCell.html(azie[0][i]);
		row.append(headerCell);
	}
	for (var i = 6; i < azie.length; i++) {
		row = $(table[0].insertRow(-1));
		for (var j = 0; j < columnCount; j++) {
			var cell = $("<td />");
			cell.html(azie[i][j]);
			row.append(cell);
		}
	}
	var mob_azie = $("#mob_azie");
	mob_azie.append(table);	
	
	
	/* ----   N-AMERIKA   ---- */
	
	
	var n_amerika = new Array();
	n_amerika.push(["#", "Land", "Aantal Inwoners", "Aantal Abonnementen"]);
	n_amerika.push([1, "Verenigde Staten", "316.497.531", "307.248.648"]);
	n_amerika.push([2, "Mexico", "123.740.109", "104.955.716"]);
	n_amerika.push([3, "Canada", "35.158.304", "28.341.137"]);
	n_amerika.push([4, "Guatemala", "15.690.793", "22.028.859"]);
	n_amerika.push([5, "Dominicaans Republiek", "10.281.408", "9.092.209"]);
	n_amerika.push([1, "Cayman Eilanden", "58.369", "97.925"]);
	n_amerika.push([2, "Bermuda", "65.001", "93.809"]);
	n_amerika.push([3, "Dominica", "72.005", "93.578"]);
	n_amerika.push([4, "Saint Kitts and Nevis", "54.301", "77.156"]);
	n_amerika.push([5, "Groenland", "56.483", "59.866"]);

	//Create a HTML Table element.
	var table = $("<table />");
	table[0].border = "1";
	//Get the count of columns.
	var columnCount = n_amerika[0].length;
	var meeste = $("<td colspan=\"4\"><h3>Top 5 Noord-Amerikaanse landen met meeste abonnementen</h3></td>");
	row = $(table[0].insertRow(-1));
	row.html(meeste);
	//Add the header row.
	var row = $(table[0].insertRow(-1));
	for (var i = 0; i < columnCount; i++) {
		var headerCell = $("<th />");
		headerCell.html(n_amerika[0][i]);
		row.append(headerCell);
	}
	//Add the data rows.
	for (var i = 1; i < 6; i++) {
		row = $(table[0].insertRow(-1));
		for (var j = 0; j < columnCount; j++) {
			var cell = $("<td />");
			cell.html(n_amerika[i][j]);
			row.append(cell);
		}
	}
	var minste = $("<td colspan=\"4\"><h3>Top 5 Noord-Amerikaanse landen met minste abonnementen</h3></td>");
	row = $(table[0].insertRow(-1));
	row.html(minste);
	
	//Add the header row.
	var row = $(table[0].insertRow(-1));
	for (var i = 0; i < columnCount; i++) {
		var headerCell = $("<th />");
		headerCell.html(n_amerika[0][i]);
		row.append(headerCell);
	}
	for (var i = 6; i < n_amerika.length; i++) {
		row = $(table[0].insertRow(-1));
		for (var j = 0; j < columnCount; j++) {
			var cell = $("<td />");
			cell.html(n_amerika[i][j]);
			row.append(cell);
		}
	}
	var mob_n_amerika = $("#mob_n_amerika");
	mob_n_amerika.append(table);	
	
	
	/* ----   Z-AMERIKA   ---- */
	
	
	var z_amerika = new Array();
	z_amerika.push(["#", "Land", "Aantal Inwoners", "Aantal Abonnementen"]);
	z_amerika.push([1, "Brazilië", "204.259.377", "276.373.248"]);
	z_amerika.push([2, "Argentinië", "42.538.304", "69.136.409"]);
	z_amerika.push([3, "Colombia", "47.342.363", "49.276.083"]);
	z_amerika.push([4, "Venezuela", "30.276.045", "30.764.832"]);
	z_amerika.push([5, "Peru", "30.565.461", "29.979.515"]);
	z_amerika.push([1, "Bolivia", "10.399.931", "10.160.676"]);
	z_amerika.push([2, "Paraguay", "6.465.669", "6.704.250"]);
	z_amerika.push([3, "Uruguay", "3.407.969", "5.269.349"]);
	z_amerika.push([4, "Suriname", "533.450", "859.216"]);
	z_amerika.push([5, "Guyana", "761.033", "528.255"]);

	//Create a HTML Table element.
	var table = $("<table />");
	table[0].border = "1";
	//Get the count of columns.
	var columnCount = z_amerika[0].length;
	var meeste = $("<td colspan=\"4\"><h3>Top 5 Zuid-Amerikaanse landen met meeste abonnementen</h3></td>");
	row = $(table[0].insertRow(-1));
	row.html(meeste);
	//Add the header row.
	var row = $(table[0].insertRow(-1));
	for (var i = 0; i < columnCount; i++) {
		var headerCell = $("<th />");
		headerCell.html(z_amerika[0][i]);
		row.append(headerCell);
	}
	//Add the data rows.
	for (var i = 1; i < 6; i++) {
		row = $(table[0].insertRow(-1));
		for (var j = 0; j < columnCount; j++) {
			var cell = $("<td />");
			cell.html(z_amerika[i][j]);
			row.append(cell);
		}
	}
	var minste = $("<td colspan=\"4\"><h3>Top 5 Zuid-Amerikaanse landen met minste abonnementen</h3></td>");
	row = $(table[0].insertRow(-1));
	row.html(minste);
	
	//Add the header row.
	var row = $(table[0].insertRow(-1));
	for (var i = 0; i < columnCount; i++) {
		var headerCell = $("<th />");
		headerCell.html(z_amerika[0][i]);
		row.append(headerCell);
	}
	for (var i = 6; i < z_amerika.length; i++) {
		row = $(table[0].insertRow(-1));
		for (var j = 0; j < columnCount; j++) {
			var cell = $("<td />");
			cell.html(z_amerika[i][j]);
			row.append(cell);
		}
	}
	var mob_z_amerika = $("#mob_z_amerika");
	mob_z_amerika.append(table);	
	
	
	/* ----   AFRIKA   ---- */
	
	
	var afrika = new Array();
	afrika.push(["#", "Land", "Aantal Inwoners", "Aantal Abonnementen"]);
	afrika.push([1, "Nigeria", "172.816.517", "126.660.615"]);
	afrika.push([2, "Egypte", "87.613.909", "106.457.815"]);
	afrika.push([3, "Zuid Afrika", "53.157.490", "77.420.706"]);
	afrika.push([4, "Morokko", "33.452.686", "42.995.135"]);
	afrika.push([5, "Algerije", "38.186.135", "38.486.935"]);
	afrika.push([1, "Comoren", "751.697", "355.434"]);
	afrika.push([2, "Eritrea", "4.998.824", "280.083"]);
	afrika.push([3, "Djibouti", "864.554", "241.780"]);
	afrika.push([4, "Seychellen", "89.900", "132.461"]);
	afrika.push([5, "Sao Tomé en Principe", "182.386", "118.441"]);

	//Create a HTML Table element.
	var table = $("<table />");
	table[0].border = "1";
	//Get the count of columns.
	var columnCount = afrika[0].length;
	var meeste = $("<td colspan=\"4\"><h3>Top 5 Afrikaanse landen met meeste abonnementen</h3></td>");
	row = $(table[0].insertRow(-1));
	row.html(meeste);
	//Add the header row.
	var row = $(table[0].insertRow(-1));
	for (var i = 0; i < columnCount; i++) {
		var headerCell = $("<th />");
		headerCell.html(afrika[0][i]);
		row.append(headerCell);
	}
	//Add the data rows.
	for (var i = 1; i < 6; i++) {
		row = $(table[0].insertRow(-1));
		for (var j = 0; j < columnCount; j++) {
			var cell = $("<td />");
			cell.html(afrika[i][j]);
			row.append(cell);
		}
	}
	var minste = $("<td colspan=\"4\"><h3>Top 5 Afrikaanse landen met minste abonnementen</h3></td>");
	row = $(table[0].insertRow(-1));
	row.html(minste);
	
	//Add the header row.
	var row = $(table[0].insertRow(-1));
	for (var i = 0; i < columnCount; i++) {
		var headerCell = $("<th />");
		headerCell.html(afrika[0][i]);
		row.append(headerCell);
	}
	for (var i = 6; i < afrika.length; i++) {
		row = $(table[0].insertRow(-1));
		for (var j = 0; j < columnCount; j++) {
			var cell = $("<td />");
			cell.html(afrika[i][j]);
			row.append(cell);
		}
	}
	var mob_afrika = $("#mob_afrika");
	mob_afrika.append(table);	
	
	
	/* ----   OCEANIË   ---- */
	
	
	var oceanie = new Array();
	oceanie.push(["#", "Land", "Aantal Inwoners", "Aantal Abonnementen"]);
	oceanie.push([1, "Australië", "23.125.868", "24.708.486"]);
	oceanie.push([2, "Nieuw Zeeland", "4.442.100", "4.698.662"]);
	oceanie.push([3, "Papoea-Nieuw-Guinea", "7.308.864", "2.994.920"]);
	oceanie.push([4, "Fiji", "880.487", "929.796"]);
	oceanie.push([5, "Solomon Eilanden", "560.685", "322.791"]);
	oceanie.push([1, "Tonga", "105.139", "57.399"]);
	oceanie.push([2, "Micronesia", "103.718", "31.444"]);
	oceanie.push([3, "Kiribati", "108.544", "18.029"]);
	oceanie.push([4, "Palau", "20.919", "17.946"]);
	oceanie.push([5, "Tuvalu", "9.876", "3.400"]);

	//Create a HTML Table element.
	var table = $("<table />");
	table[0].border = "1";
	//Get the count of columns.
	var columnCount = oceanie[0].length;
	var meeste = $("<td colspan=\"4\"><h3>Top 5 Oceanische landen met meeste abonnementen</h3></td>");
	row = $(table[0].insertRow(-1));
	row.html(meeste);
	//Add the header row.
	var row = $(table[0].insertRow(-1));
	for (var i = 0; i < columnCount; i++) {
		var headerCell = $("<th />");
		headerCell.html(oceanie[0][i]);
		row.append(headerCell);
	}
	//Add the data rows.
	for (var i = 1; i < 6; i++) {
		row = $(table[0].insertRow(-1));
		for (var j = 0; j < columnCount; j++) {
			var cell = $("<td />");
			cell.html(oceanie[i][j]);
			row.append(cell);
		}
	}
	var minste = $("<td colspan=\"4\"><h3>Top 5 Oceanische landen met minste abonnementen</h3></td>");
	row = $(table[0].insertRow(-1));
	row.html(minste);
	
	//Add the header row.
	var row = $(table[0].insertRow(-1));
	for (var i = 0; i < columnCount; i++) {
		var headerCell = $("<th />");
		headerCell.html(oceanie[0][i]);
		row.append(headerCell);
	}
	for (var i = 6; i < oceanie.length; i++) {
		row = $(table[0].insertRow(-1));
		for (var j = 0; j < columnCount; j++) {
			var cell = $("<td />");
			cell.html(oceanie[i][j]);
			row.append(cell);
		}
	}
	var mob_oceanie = $("#mob_oceanie");
	mob_oceanie.append(table);	
	
	
});