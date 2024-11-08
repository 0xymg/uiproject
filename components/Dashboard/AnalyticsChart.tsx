'use client'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import data from '@/data/analytics';

const AnalyticsChart = () => {
    return ( <div className="mt-3">
    
    <Card>
        <CardHeader>
            <CardTitle>Analytics for 2 months</CardTitle>
            <CardDescription>Flights per month</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="w-full h-[300px]">
                <ResponsiveContainer>
                    <LineChart width={1100} height={300} data={data}>
                        <Line type='monotone' dataKey='uv' stroke='#8884d8'/>
                        <Line type='monotone' dataKey='uv' stroke='#8884d8'/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </CardContent>
    </Card>
    
    
    </div> );
}
 
export default AnalyticsChart;