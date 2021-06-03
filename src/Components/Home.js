import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Helpline from './Helpline';
import Prevention from './Prevention';
import Stat from './Stats';
import Symptom from './Symptom';

const Home = () => {
    return (
        <div className='home'>
            <br /><br />
            <div>
                <center>

                    <Switch>
                        <Route component={Stat} path='/stat' />
                        <Route component={Symptom} path='/symptom' />
                        <Route component={Prevention} path='/prevention' />
                        <Route component={Helpline} path='/helpline' />
                        <Redirect to='/stat' />
                    </Switch>



                </center>
            </div>
        </div>
    );
}

export default Home;
