google.load("visualization", "1.1", {packages:["corechart"]});
google.setOnLoadCallback(drawStuff);

function drawStuff() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Jaar');
	data.addColumn('number', 'Abonnementen');
	data.addColumn({type:'string',role:'tooltip'});
	data.addRows([
		['2008', 2.35, '2,35 miljard abonnementen'],
		['2009', 2.57, '2,57 miljard abonnementen'],
		['2010', 2.80, '2,80 miljard abonnementen'],
		['2011', 3.01, '3,01 miljard abonnementen'],
		['2012', 3.21, '3,21 miljard abonnementen'],
		['2013', 3.46, '3,46 miljard abonnementen'],
		['2014', 3.64, '3,64 miljard abonnementen'],
		['2015', 3.84, '3,84 miljard abonnementen'],
		['2016', 4.02, '4,02 miljard abonnementen'],
		['2017', 4.19, '4,19 miljard abonnementen'],
		['2018', 4.34, '4,34 miljard abonnementen'],
		['2019', 4.47, '4,47 miljard abonnementen'],
		['2020', 4.60, '4,60 miljard abonnementen']
	]);
	var options = {
		title: 'Groei van het aantal mobiele telefonie abonnementen',
		width: 900,
		height: 400,
		legend: 'none',
		bar: {groupWidth: '90%'},
		hAxis: {
			title: 'Jaar',
			textStyle: {
				bold: true,
				color: "#4d4d4d"
			},
			titleTextStyle: {
				bold: true,
				color: "#4d4d4d"
			}							
		},
		vAxis: { 
			gridlines: { count: 4 },
			title: 'Aantal abonnementen in mld.',
			textStyle: {
				bold: true,
				color: "#848484"
			},
			titleTextStyle: {
				bold: true,
				color: "#848484"
			}	
		}
	};

	var chart = new google.visualization.ColumnChart(document.getElementById('abonnementen_chart'));
	chart.draw(data, options);
};