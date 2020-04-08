google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(base);
google.charts.setOnLoadCallback(comparison);

function base() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Maximum Temperature');

    //This needs to be pulled from latest information
    data.addRows([
        [1, 10],[2, 14],[3, 16],[4, 12],[5, 21],[6, 10],[7, 17],[8, 14],[9, 19],[10, 17],
        [11, 14],[12, 10],[13, 8],[14, 6],[15, 7],[16, 9],[17, 11],[18, 5],[19, 3],[20, -1],
        [21, 1],[22, 4],[23, 4],[24, 7],[25, 9],[26, 10],[27, 9],[28, 8],[29, 7],[30, 11],
        [31, 7]
    ]);

    var options = {
        title: 'Current Usage Graph',
        hAxis: {
            title: 'Days'
        },
        vAxis: {
            title: 'Temperature Celsius'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('graphBase'));

    chart.draw(data, options);
}

function comparison() {

    var data1 = new google.visualization.DataTable();
    data1.addColumn('number', 'X');
    data1.addColumn('number', 'Maximum Temperature');

    ////This needs to be pulled from latest information
    data1.addRows([
        [1, 10],[2, 14],[3, 16],[4, 12],[5, 21],[6, 10],[7, 17],[8, 14],[9, 19],[10, 17],
        [11, 14],[12, 10],[13, 8],[14, 6],[15, 7],[16, 9],[17, 11],[18, 5],[19, 3],[20, -1],
        [21, 1],[22, 4],[23, 4],[24, 7],[25, 9],[26, 10],[27, 9],[28, 8],[29, 7],[30, 11],
        [31, 7]
    ]);

    var options1 = {
        title: 'Comparison Graph',
        hAxis: {
            title: 'Days'
        },
        vAxis: {
            title: 'Temperature Celsius'
        }
    };

    var chart1 = new google.visualization.LineChart(document.getElementById('graphComparison'));

    chart1.draw(data1, options1);
}