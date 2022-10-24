import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
export const data = {
    labels: labels,
    datasets: [
        {
            label: 'Price In USD',
            data: [66, 66, 777, 888],
            fill: true,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
        },
    ],
}

export const options = {

    scales: {
        x: {

            display: true,
            grid: {
                display: false,
            },
        },
        y: {

            display: true,
            grid: {
                display: false,
            },
        },
    },
}

