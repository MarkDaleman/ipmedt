google.load("visualization", "1.1", {packages:["corechart"]});
google.setOnLoadCallback(drawStuff);

function drawStuff() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Jaar');
	data.addColumn('number', 'Abonnementen');
	data.addColumn({type:'string',role: 'style' })
	data.addColumn({type:'string',role:'tooltip'});
	data.addRows([
		['2008', 2.35,'fill-color: #00007F','2,35 miljard abonnementen'],
		['2009', 2.57,'fill-color: #00007F','2,57 miljard abonnementen'],
		['2010', 2.80,'fill-color: #00007F','2,80 miljard abonnementen'],
		['2011', 3.01,'fill-color: #00007F','3,01 miljard abonnementen'],
		['2012', 3.21,'fill-color: #00007F','3,21 miljard abonnementen'],
		['2013', 3.46,'fill-color: #00007F','3,46 miljard abonnementen'],
		['2014', 3.64,'fill-color: #00007F','3,64 miljard abonnementen'],
		['2015', 3.84,'fill-color: #00007F','3,84 miljard abonnementen'],
		['2016', 4.02,'fill-color: #00007F','4,02 miljard abonnementen'],
		['2017', 4.19,'fill-color: #00007F','4,19 miljard abonnementen'],
		['2018', 4.34,'fill-color: #00007F','4,34 miljard abonnementen'],
		['2019', 4.47,'fill-color: #00007F','4,47 miljard abonnementen'],
		['2020', 4.60,'fill-color: #00007F','4,60 miljard abonnementen']
	]);
	var options = {
		title: 'Evolutie van het aantal mobiele abonnementen',
		width: 900,
		height: 400,
		backgroundColor: '#D6D6D6',
		legend: 'none',
		bar: {groupWidth: '90%'},
		hAxis: {
			title: 'Jaar, met vooruitzicht tot 2020',
			textStyle: {
				bold: true,
				color: "#4D4D4D"
			},
			titleTextStyle: {
				bold: true,
				color: "#4D4D4D"
			}							
		},
		vAxis: { 
			gridlines: { 
			count: 4,
			color: "#4D4D4D"
			},
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