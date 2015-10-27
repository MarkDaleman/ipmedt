google.load("visualization", "1.1", {packages:["corechart"]});
google.setOnLoadCallback(drawStuff);

function drawStuff() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Jaar');
	data.addColumn('number', 'Aansluitingen');
	data.addColumn({type:'string',role: 'style' })
	data.addColumn({type:'string',role:'tooltip'});
	data.addRows([
		['2008', 4.02,'fill-color: #00007F', '4,02 miljard aansluitingen'],
		['2009', 4.63,'fill-color: #00007F', '4,63 miljard aansluitingen'],
		['2010', 5.33,'fill-color: #00007F', '5,33 miljard aansluitingen'],
		['2011', 5.99,'fill-color: #00007F', '5,99 miljard aansluitingen'],
		['2012', 6.38,'fill-color: #00007F', '6,38 miljard aansluitingen'],
		['2013', 6.74,'fill-color: #00007F', '6,74 miljard aansluitingen'],
		['2014', 7.06,'fill-color: #00007F', '7,06 miljard aansluitingen'],
		['2015', 7.52,'fill-color: #00007F', '7,52 miljard aansluitingen'],
		['2016', 7.91,'fill-color: #00007F', '7,91 miljard aansluitingen'],
		['2017', 8.24,'fill-color: #00007F', '8,24 miljard aansluitingen'],
		['2018', 8.53,'fill-color: #00007F', '8,53 miljard aansluitingen'],
		['2019', 8.78,'fill-color: #00007F', '8,78 miljard aansluitingen'],
		['2020', 9.02,'fill-color: #00007F', '9,02 miljard aansluitingen']
	]);
	var options = {
		title: 'Evolutie van het aantal mobiele verbindingen',
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
			title: 'Aantal verbindingen in mld.',
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

	var chart = new google.visualization.ColumnChart(document.getElementById('aansluitingen_chart'));
	chart.draw(data, options);
};