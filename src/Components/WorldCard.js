import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardHeader, CardBody, Table } from 'reactstrap';

const WorldCard = (props) => {

    return (
        <div className='col-12 col-md-6 '>
            <Card className='shadow-lg card' >
                <CardHeader style={{ color: "darkblue", fontWeight: "bolder" }}><h3>GLOBAL</h3></CardHeader>
                <CardBody>

                    <Table className='table-responsive' striped>
                        <center>
                            <thead>
                                <tr>
                                    <td><h5><b>Total Cases</b></h5></td>
                                    <td><h5><b>Recovered Cases</b></h5></td>
                                    <td><h5><b>Total Deaths</b></h5></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ color: "blue" }}>{props.worldData.cases}</td>
                                    <td style={{ color: "green" }}>{props.worldData.recovered}</td>
                                    <td style={{ color: "red" }}>{props.worldData.deaths}</td>
                                </tr>
                            </tbody>
                        </center>
                    </Table>
                    <div>
                        <Bar height='250'
                            data={{
                                labels: ['Total Confirmed', 'Recovered', 'Deaths'],
                                datasets: [{
                                    label: 'Number of cases',
                                    backgroundColor: ['rgb(100, 149, 237)', 'rgb(127, 255, 0)', 'rgb(238, 77, 77)'],
                                    data: [props.worldData.cases, props.worldData.recovered, props.worldData.deaths]
                                }]
                            }} />
                    </div>

                </CardBody>
            </Card>
        </div>
    );
}

export default WorldCard;
