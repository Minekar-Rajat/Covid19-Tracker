import React from 'react';
import { Line } from 'react-chartjs-2';

const LineGraph = (props) => {

    var larray = [];
    props.stateData.cases_time_series.forEach((daily) => {
        larray.push((daily.date));
    });

    var darray = [];
    props.stateData.cases_time_series.forEach((daily) => {
        darray.push((daily.totalconfirmed - daily.totaldeceased - daily.totalrecovered));
    });

    var rarray = [];
    props.stateData.cases_time_series.forEach((daily) => {
        rarray.push((daily.totalrecovered));
    });

    var tarray = [];
    props.stateData.cases_time_series.forEach((daily) => {
        tarray.push((daily.totalconfirmed));
    });


    const data = {
        labels: larray,
        datasets: [
            {
                label: "Active Cases",
                data: darray,
                fill: true,
                backgroundColor: "rgba(25, 27, 149, 0.2)"
            },
            {
                label: "Recovered Cases",
                data: rarray,
                fill: true,
                backgroundColor: "rgba(0,128,0,0.5)"
            },
            {
                label: "Total Cases",
                data: tarray,
                fill: true,
                backgroundColor: "rgba(255,0,0,0.2)"
            },

        ]
    }


    return (
        <div>
            <br /><br />
            <h1>INDIA</h1>
            <br />
            <div className='row'>
                <div className='col-12 col-sm-10 col-md-8 offset-md-2 offset-sm-1'>
                    <Line height={250} data={data} />
                </div>
            </div>

        </div>
    );
}

export default LineGraph;
