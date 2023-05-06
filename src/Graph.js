import React from 'react'
import ApexCharts from 'apexcharts';
import './Card.css'

const Graph = () => {
    const options = {
        series: [
            {
                name: 'Total Plays',
                data: [20, 40, 20, 30, 50, 40, 60]
            },
            {
                name: 'Unique Plays',
                data: [10, 30, 10, 20, 40, 30, 50],
            }
        ],
        legend: {
            show: false
        },
        chart: {
            type: 'line',
            height: 250,
            toolbar: {
                show: false,
            },
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.5
            },
        },
        stroke: {
            curve: 'smooth'
        },
        tooltip: {
            style: {
                color: "#fff",
                background: 'black'
            },
            x: {
                show: false
            }
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            labels: {
                style: {
                    colors: "#FFFFFF",
                    fontSize: "13px",
                    fontFamily: "Poppins",
                    fontWeight: 100,
                    cssClass: "apexcharts-xaxis-label",
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                offsetX: -15,
                style: {
                    colors: "#FFFFFF",
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    fontWeight: 100,
                }
            },
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: true,
                }
            },
            yaxis: {
                lines: {
                    show: true,
                }
            }
        },
    };

    React.useEffect(() => {
        const chart = new ApexCharts(document.querySelector("#revenueMap"), options);
        chart.render();
        return () => {
            chart.destroy();
        };
    }, []);
    return (
        <div id="revenueMap" style={{ width: "100%" }}></div>
    );
}

export default Graph