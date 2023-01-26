let chartLabels = [];
var chartValues = [];

// Now we set the values from the oldest to the newest
let chartValuesLength = $(".chart-list_item-value").length;
for (let i = chartValuesLength - 1; i >= 0; i--) {
    chartValues.push($(".chart-list_item-value").eq(i).text());
    if (i >= 3) {
        $(".chart-list_item-value").eq(i).closest(".chart-list_item").css("display", "none");
    }
}

// First we configure how the value will be displayed
$('.chart-list_item-value').each(function () {
    let valueFormat = parseFloat($(this).text()).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    $(this).html(valueFormat);
});

// Now we set the labels from the oldest to the newest
let chartDatesLength = $(".chart-list_item-date").length;
for (let i = chartDatesLength - 1; i >= 0; i--) {
    chartLabels.push($(".chart-list_item-date").eq(i).text());
}

document.addEventListener("DOMContentLoaded", function () {
    new Chart("myChart", {
        type: "line",
        data: {
            labels: chartLabels,
            datasets: [{
                label: '',
                data: chartValues,
                fill: true,
                borderColor: 'rgba(108, 134, 176, 1)',
                backgroundColor: 'rgba(108, 134, 176, 0.2)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    display: false
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                zoom: {
                    pan: {
                        enabled: true,
                        mode: 'x'
                    },
                    zoom: {
                        wheel: {
                            enabled: true,
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: 'x',
                    }
                }
            }
        }
    });
});