

/* --- ABONNEMENTEN CHART --- */ 


google.load("visualization", "1.1", {packages:["corechart"]});
google.setOnLoadCallback(drawAbbo);

function drawAbbo() {
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
	
	var width = ($(window).width() * 0.65);
	var height = ($(window).height() * 0.45);
	
	var options = {
		title: 'Evolutie van het aantal mobiele abonnementen',
		fontName: 'Cabin Condensed',
		fontSize: 20,
		width: (this).width = width,
		height: (this).height = height,
		chartArea: {left:'25%', width:'65%'}, 
		backgroundColor: '#D6D6D6',
		legend: 'none',
		bar: {groupWidth: '85%'},
		hAxis: {
			title: 'Jaar, met vooruitzicht tot 2020',
			textStyle: {
				bold: true,
				color: "#4D4D4D",
				fontSize: 12
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
				color: "#848484",
				fontSize: 12
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


/* --- REGIO CHART--- */ 


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

	var width = ($(window).width() * 0.65);
	var height = ($(window).height() * 0.45);	
	
	var options = {
		title: "Globaal % van mobiele gebruikers per gebied",
		backgroundColor: '#D6D6D6',
		fontName: 'Cabin Condensed',
		fontSize: 20,
		width: (this).width = width,
		height: (this).height = height,
		chartArea: {left:'25%', width:'65%'},  
		hAxis: {
			title: "% van mobiele gebruikers",
			minValue: 0,
			maxValue: 0.2,
			textStyle: {
				bold: true,
				color: "#4D4D4D",
				fontSize: 12
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
				color: "#848484",
				fontSize: 12
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


/* --- VERBINDING CHART --- */ 


google.load("visualization", "1.1", {packages:["corechart"]});
google.setOnLoadCallback(drawVerbinding);

function drawVerbinding() {
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
	
	
	var width = ($(window).width() * 0.65);		
	var height = ($(window).height() * 0.45);	
	
	var options = {
		title: 'Evolutie van het aantal mobiele verbindingen',
		backgroundColor: '#D6D6D6',
		fontName: 'Cabin Condensed',
		fontSize: 20,
		width: (this).width = width,
		height: (this).height = height,
		chartArea: {left:'25%', width:'65%'}, 
		legend: 'none',
		bar: {groupWidth: '90%'},
		hAxis: {
			title: 'Jaar, met vooruitzicht tot 2020',
			textStyle: {
				bold: true,
				color: "#4D4D4D",
				fontSize: 12
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
				color: "#848484",
				fontSize: 12
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
