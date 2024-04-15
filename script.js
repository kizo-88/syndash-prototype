let chartData = [];


let ctx = document.getElementById('simChart').getContext('2d');


let simChart = new Chart(ctx, {
type: 'line',
data: {
labels: [],
datasets: [{
label: 'SIM Values',
data: chartData,
borderColor: 'blue',
fill: false
}]
},
options: {
responsive: true,
maintainAspectRatio: false,
scales: {
x: {
display: true,
title: {
display: true,
text: 'Time'
}
},
y: {
display: true,
title: {
display: true,
text: 'SIM Value'
}
}
}
}
});


function updateGraph() {
const simValue = parseFloat(document.getElementById('sim').value);
chartData.push(simValue);
simChart.data.labels.push(new Date().toLocaleTimeString());
simChart.update();
updateRiskMeter(simValue);
}


function updateRiskMeter(simValue) {
const riskMeterFill = document.getElementById('riskMeterFill');
let fillPercentage = 0;


if (simValue > 85) {
    fillPercentage = 100;
} else if (simValue >= 80 && simValue <= 85) {
    fillPercentage = 50;
} else {
    fillPercentage = 25;
}

riskMeterFill.style.width = fillPercentage + '%';

if (simValue < 80) {
    riskMeterFill.style.backgroundColor = 'red';
    lastAlertTime = new Date().toLocaleString();
    document.getElementById('lastAlertTime').textContent = 'Last Alert Time: ' + lastAlertTime;
} else if (simValue >= 80 && simValue <= 85) {
    riskMeterFill.style.backgroundColor = 'yellow';
} else {
    riskMeterFill.style.backgroundColor = 'green';
}

}