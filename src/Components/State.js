import React from 'react';
import { Table } from 'reactstrap';

const State = (props) => {
    return (
        <div>

            <br /><br />
            <h1>Statewise status</h1>
            <br />

            <Table className='table-responsive table-stripped ' >
                <center>
                    <thead style={{ backgroundColor: 'blue', color: 'white' }} >
                        <tr>
                            <td><b>State</b></td>
                            <td><b>Confirmed</b></td>
                            <td><b>Active</b></td>
                            <td><b>Recovered</b></td>
                            <td><b>Deaths</b></td>
                            <td><b>New cases</b></td>
                            <td><b>New recoveries</b></td>
                            <td><b>New deceased</b></td>
                            <td><b>Last Updated</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.states}
                    </tbody>

                </center>
            </Table>

        </div>
    );
}

export default State;
