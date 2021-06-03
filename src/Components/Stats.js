import React, { useState, useEffect } from 'react';

import LineGraph from './LineGraph';
import State from './State';
import WorldCard from './WorldCard';
import IndiaCard from './IndiaCard';

const wobj = { cases: 0, deaths: 0, recovered: 0 };

const stObj = {
    cases_time_series: [{
        date: "2020-01-30",
        totalconfirmed: 1,
        totaldeceased: 0,
        totalrecovered: 0
    }],

    statewise: [
        {
            active: 0,
            confirmed: 0,
            deaths: 0,
            deltaconfirmed: 0,
            deltadeaths: 0,
            deltarecovered: 0,
            lastupdatedtime: "-",
            recovered: 0,
            state: "-",
        }
    ]



}


const Stat = () => {

    const [stateData, setStateData] = useState(stObj);
    const [worldData, setWorldData] = useState(wobj);
    const [indiaData, setIndiaData] = useState(wobj);

    async function getDataforStates() {
        const response = await fetch('https://api.covid19india.org/data.json');
        const data = response.json();
        return data;
    }

    async function getWorldData() {
        const response = await fetch("https://coronavirus-19-api.herokuapp.com/all");
        const data = response.json();
        return data;
    }

    async function getIndiaData() {
        const response = await fetch("https://coronavirus-19-api.herokuapp.com/countries/India");
        const data = response.json();
        return data;
    }




    useEffect(() => {
        getWorldData().then((data) => {
            setWorldData(data);
        });

        getIndiaData().then((data) => {
            setIndiaData(data);
        });
        getDataforStates().then(data => {
            setStateData(data);

        });
    });




    const states = stateData.statewise.map((state) => {
        if (state.state === 'Total') {
            return (
                <tr style={{ backgroundColor: "rgb(233, 229, 176)" }} className='border shadow-sm'>
                    <td><b>{state.state}</b></td>
                    <td><b>{state.confirmed}</b></td>
                    <td><b>{state.active}</b></td>
                    <td><b>{state.recovered}</b></td>
                    <td><b>{state.deaths}</b></td>
                    <td><b style={{ color: 'red' }}>{"+" + state.deltaconfirmed}</b></td>
                    <td><b style={{ color: 'blue' }}>{"+" + state.deltarecovered}</b></td>
                    <td><b style={{ color: 'red' }}>{"+" + state.deltadeaths}</b></td>
                    <td><b>{state.lastupdatedtime}</b></td>
                </tr>
            );
        }
        else if (state.state === 'State Unassigned') {
            return (
                <td></td>
            );
        }
        else {

            return (
                <tr className='border shadow-sm'>
                    <td><b>{state.state}</b></td>
                    <td><b>{state.confirmed}</b></td>
                    <td><b>{state.active}</b></td>
                    <td><b>{state.recovered}</b></td>
                    <td><b>{state.deaths}</b></td>
                    <td><b style={{ color: 'red' }}>{"+" + state.deltaconfirmed}</b></td>
                    <td><b style={{ color: 'blue' }}>{"+" + state.deltarecovered}</b></td>
                    <td><b style={{ color: 'red' }}>{"+" + state.deltadeaths}</b></td>
                    <td><b>{state.lastupdatedtime}</b></td>
                </tr>
            );
        }
    });

    return (


        <div className='ft-style'>
            <h1 className='ft-style'><img src='./images/corona.png' alt='Corona' className='img-fluid' /> Coronavirus Live</h1>
            <hr />
            <br />

            <div className='row '>

                <WorldCard worldData={worldData} />
                <IndiaCard indiaData={indiaData} />

            </div>
            <State states={states} />
            <LineGraph stateData={stateData} />
            <br /><br /><br /><br />
        </div>
    );
}

export default Stat;
