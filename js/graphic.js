//primer grafico enrollment
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
      var data = google.visualization.arrayToDataTable([
        ['ENROLLMENT', 'ENRROLLED', 'DROPOUT'],
        ['SCL - 2017-2', totalAct, totalInac]
       ]);

      var options = {
        title: 'ENROLLMENT - DROPOUT',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Total '+total,
          minValue: 0
        },
        vAxis: {
          title: '# STUDENTS'
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart1'));
      chart.draw(data, options);
    }

//3er grafico promoter score
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Sprint', 'Promoters', 'Passive', 'Detractors'],
          ['S1',  promoterS1,      passiveS1, detractorS1],
          ['S2',  promoterS2,      passiveS2, detractorS2]
        ]);

        var options = {
          chartArea: {width: '50%'},
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart3'));

        chart.draw(data, options);
      }

// grafico satisfaction
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['City', 'TOTAL',],
        ['FAILS', totalSprintNoCumple],
        ['MEETING', totalSprintCumple],
        ['EXCEEDING', totalSprintSupera],

      ]);

      var options = {
        chartArea: {width: '65%'},
        hAxis: {
          title: '# Students',
          minValue: 0
        },
        vAxis: {
          title: 'Satisfaction'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart'));

      chart.draw(data, options);
    }