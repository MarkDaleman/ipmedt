google.load("visualization", "1", {packages: ["corechart", "bar"]});
google.setOnLoadCallback(drawAxisTickColors);

function drawAxisTickColors() {
	var data = google.visualization.arrayToDataTable([
		["Regio", "% van mobiele gebruikers (globaal)"],
		["Azi\353 (Overig)", 0.19],
		["China", 0.18],
		["Europa", 0.17],
		["India", 0.14],
		["Afrika", 0.11],
		["Zuid Amerika", 0.10],
		["Noord Amerika", 0.06],
		["Midden Oosten", 0.05],
		
	]);

	var options = {
		title: "Globaal % van mobiele gebruikers per regio",
		width: 900,
		height: 400,
		hAxis: {
			title: "% van mobiele gebruikers",
			minValue: 0,
			maxValue: 0.2,
			textStyle: {
				bold: true,
				color: "#4d4d4d"
			},
			format: "percent",
			gridlines: {count: 9},
			titleTextStyle: {
				bold: true,
				color: "#4d4d4d"
			}
		},
		vAxis: {
			title: "Regio",
			textStyle: {
				bold: true,
				color: "#848484"
			},
			titleTextStyle: {
				bold: true,
				color: "#848484"
			}
		},
		legend:{
			position: "none"
		}
		
	};
  var chart = new google.visualization.BarChart(document.getElementById('regio_chart'));
  chart.draw(data, options);
};