import React from 'react';

const Helpline = () => {
    return (
        <div className='row help'>
            <div className='col-12'>
                <br />
                <img src='./images/plus.png' alt="+" height='50' width='50' />
                <h1><b>Helplines</b></h1>

                <hr />
            </div>
            <div className=' col-12 col-md-6'>
                <br />
                <h2>Contact Numbers</h2>
                <hr />
                <div className='row'>
                    <div className='col-6'>
                        <h5>Central Helpline</h5>
                        <a href="tel:+91-11-23978046">+91-11-23978046</a>
                        <br /><br />
                        <h5>Ambulance</h5>
                        <a href="tel:102">102</a>

                    </div>
                    <div className='col-6'>
                        <h5>Maharashtra Helpline</h5>
                        <a href="tel:020-26127394">020-26127394</a>
                        <br /><br />
                        <h5>Ambulance</h5>
                        <a href="tel:100">100</a>
                    </div>
                </div>

            </div>
            <div className='col-12 col-md-6'>
                <br />
                <h2>Quick Links</h2>
                <hr />
                <div className='row'>
                    <div className='col-6'>
                        <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019'><h4>World Health Organization</h4></a>
                        <br /><br />
                        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"><h4>Your Questions Answered</h4></a>

                    </div>
                    <div className='col-6'>
                        <a href="https://www.mygov.in/covid-19"><h4>Covid-19 Government of India</h4></a>
                        <br /><br />
                        <a href="https://www.covidvisualizer.com/"><h4>Covid-19 Visualizer</h4></a>
                    </div>
                </div>

                <br /><br />


            </div>
            <div className='col-12'><hr /></div>

        </div>
    );
}

export default Helpline;
