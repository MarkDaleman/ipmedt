google.load("visualization", "1.1", {packages:["corechart"]});
google.setOnLoadCallback(drawStuff);

function drawStuff() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Jaar');
	data.addColumn('number', 'Aansluitingen');
	data.addColumn({type:'string',role:'tooltip'});
	data.addRows([
		['2008', 4.02, '4,02 miljard aansluitingen'],
		['2009', 4.63, '4,63 miljard aansluitingen'],
		['2010', 5.33, '5,33 miljard aansluitingen'],
		['2011', 5.99, '5,99 miljard aansluitingen'],
		['2012', 6.38, '6,38 miljard aansluitingen'],
		['2013', 6.74, '6,74 miljard aansluitingen'],
		['2014', 7.06, '7,06 miljard aansluitingen'],
		['2015', 7.52, '7,52 miljard aansluitingen'],
		['2016', 7.91, '7,91 miljard aansluitingen'],
		['2017', 8.24, '8,24 miljard aansluitingen'],
		['2018', 8.53, '8,53 miljard aansluitingen'],
		['2019', 8.78, '8,78 miljard aansluitingen'],
		['2020', 9.02, '9,02 miljard aansluitingen']
	]);
	var options = {
		title: 'Groei van het aantal mobiele telefonie aansluitingen',
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
			title: 'Aantal aansluitingen in mld.',
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