google.load("visualization", "1", {packages: ["corechart", "bar"]});
google.setOnLoadCallback(drawAxisTickColors);

function drawAxisTickColors() {
	var data = google.visualization.arrayToDataTable([
		["Gebied", "% van mobiele gebruikers (globaal)", {role: 'style'}],
		["Azi\353 (Overig)", 0.19, 'fill-color: #00007F'],
		["China", 0.18, 'fill-color: #00007F'],
		["Europa", 0.17, 'fill-color: #00007F'],
		["India", 0.14, 'fill-color: #00007F'],
		["Afrika", 0.11, 'fill-color: #00007F'],
		["Zuid Amerika", 0.10, 'fill-color: #00007F'],
		["Noord Amerika", 0.06, 'fill-color: #00007F'],
		["Midden Oosten", 0.05, 'fill-color: #00007F']
	]);

	var options = {
		title: "Globaal % van mobiele gebruikers per gebied",
		width: 900,
		height: 400,
		backgroundColor: '#D6D6D6',
		hAxis: {
			title: "% van mobiele gebruikers",
			minValue: 0,
			maxValue: 0.2,
			textStyle: {
				bold: true,
				color: "#4D4D4D"
			},
			format: '##,#%',
			gridlines: {
				count: 9,
				color: "#4D4D4D"},
			titleTextStyle: {
				bold: true,
				color: "#4D4D4D"
			}
		},
		vAxis: {
			title: "Gebied",
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