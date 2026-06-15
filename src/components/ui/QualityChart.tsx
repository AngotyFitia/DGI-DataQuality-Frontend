import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,} from "recharts";
import { qualityData } from "../../data/dashboardData";
  
  export default function QualityChart() {
    return (
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={qualityData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />  
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#2563EB" strokeWidth={2}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }