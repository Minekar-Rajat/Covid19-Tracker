import React from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import { Pie } from 'react-chartjs-2';

const IndiaCard = (props) => {
    return (
        <div className='col-12 col-md-6 '>
            <Card className='shadow-lg card'>
                <CardHeader style={{ color: "darkblue", fontWeight: "bolder" }}><h3>INDIA</h3></CardHeader>
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
                                    <td style={{ color: "blue" }}>{props.indiaData.cases}</td>
                                    <td style={{ color: "green" }}>{props.indiaData.recovered}</td>
                                    <td style={{ color: "red" }}>{props.indiaData.deaths}</td>
                                </tr>
                            </tbody>
                        </center>
                    </Table>
                    <div>

                        <Pie height='250'
                            options={{
                                scales: {
                                    yAxes: [{ display: true }],
                                    xAxes: [{ display: true }]
                                }
                            }

                            }
                            data={{
                                labels: ['Active', 'Recovered', 'Deaths'],
                                datasets:
                                    [
                                        {
                                            label: 'Number of cases',
                                            backgroundColor: ['rgb(100, 149, 237)', 'rgb(127, 255, 0)', 'rgb(238, 77, 77)'],
                                            data: [(props.indiaData.cases - props.indiaData.recovered - props.indiaData.deaths), props.indiaData.recovered, props.indiaData.deaths]
                                        },
                                        {

                                            data: [0],

                                        }
                                    ]
                            }} />
                    </div>

                </CardBody>
            </Card>
        </div>
    );
}

export default IndiaCard;
