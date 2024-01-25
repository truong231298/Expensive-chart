import logo from "/images/logo.svg"
import { Bar } from 'react-chartjs-2';
// import datas from './data.json'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function App() {
  const datas = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "",
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        backgroundColor: "hsl(10, 79%, 65%)",
        borderColor: "rgba(75,192,192,1)",
        hoverBackgroundColor: 'hsl(186, 34%, 60%)',
        borderWidth: 1
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false
        
      },
      
    },
  }

  return (
    <main className="min-h-screen flex justify-center items-center bg-Cream">
      <section className="flex flex-col p-4 gap-4">
        <div className="flex flex-row justify-between items-center w-96 bg-Softred p-4 rounded-lg">
          <div>
            <h1 className="text-Cream">My balance</h1>
            <span className="text-Cream text-2xl text-semibold">$921.48</span>
          </div>
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col gap-2 p-4 bg-Verypaleorange rounded-lg">
          <h1 className="text-2xl font-semibold">Spending - last 7 days</h1>
          <Bar data={datas}
            options={options} />
          <hr />
          <div className="flex flex-col">
            <h1 className="text-Cream font-bold">Total this month</h1>
            <div className="flex flex-row justify-between">
              <span className="text-2xl font-semibold text-Darkbrown">$478.33</span>
              <div className="flex flex-col">
                <span className="font-bold">+2.4%</span>
                <p className="text-Cream">from last month</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}