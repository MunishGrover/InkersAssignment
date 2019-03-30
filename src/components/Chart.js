import React,{Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';


class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels: ['13','45','23','41','34','54'],
                datasets: [{
                    label: 'Bar Graph',
                    data: [13, 45, 23, 41, 34, 54],
                    backgroundColor: [
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(153, 102, 255)',
                        'rgba(255, 159, 64)',

                    ]}]
            },
            piechartData:{
                labels: ['25', '35', '40'],
                datasets: [{
                    label: 'Bar Graph',
                    data: [25, 35, 40],
                    backgroundColor: [
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',


                    ]}]
            }
        }
    }

    render(){
    return(
        <div className="chart">
            <Bar
                data={this.state.chartData}
                height={"50vh"}
            />
            <h1>Pie Chart</h1>
                <Pie
                data={this.state.piechartData}
                height={"50vh"}
            />
        </div>
    )
}
}
export default Chart;