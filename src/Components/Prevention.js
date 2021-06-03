import React from 'react';

const Prevention = () => {
    return (
        <div className='pb-5'>
            <h1>Prevention Measures</h1>
            <hr />
            <br />
            <div className='row mx-3'>
                <div className='col-12 col-md-6'>
                    <div className='row'>
                        <div className='col-12 text-left'>
                            <h2>Fundamental Preventions</h2>
                            <hr />
                        </div>
                        <div className='col-12 col-md-6 mt-3' >
                            <img src='./anime/stayHome.gif' alt='stayhome' className='img-fluid' />
                        </div>
                        <div className='col-12 col-md-6 text-left mt-3'>

                            <h2><b>Stay Home</b></h2>
                            <hr />
                            <br />
                            <p>Stay home if you feel unwell. Stay safe at home , don't go out unless it is really importanat.Even if you have to go out , take all the necessary precations.</p>
                        </div>

                        <div className='col-12 col-md-6 mt-3' >
                            <img src='./anime/distance.gif' alt='distance' className='img-fluid' />
                        </div>
                        <div className='col-12 col-md-6 text-left mt-3'>

                            <h2><b>Keep a Safe Distance</b></h2>
                            <hr />
                            <br />
                            <p>Maintain a safe distance from anyone who is coughing or sneezing.Follow the all rules of social distancing provided by Gov. while going outside for any reasons.</p>
                        </div>

                        <div className='col-12 col-md-6 mt-3' >
                            <img src='./anime/washHands.gif' alt='washhands' className='img-fluid' />
                        </div>
                        <div className='col-12 col-md-6 text-left mt-3'>

                            <h2><b>Wash Hands Often</b></h2>
                            <hr />
                            <br />
                            <p>Clean your hands often. Use soap and water, or an alcohol-based hand rub for cleaning. Don’t touch your eyes, nose or mouth.</p>
                        </div>

                        <div className='col-12 col-md-6 mt-3' >
                            <img src='./anime/cover.gif' alt='covercough' className='img-fluid' />
                        </div>
                        <div className='col-12 col-md-6 text-left mt-3'>

                            <h2><b>Cover Your Cough</b></h2>
                            <hr />
                            <br />
                            <p>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.Tell others to do same.</p>
                        </div>

                        <div className='col-12 col-md-6 mt-3' >
                            <img src='./anime/helpline.gif' alt='helpline' className='img-fluid' />
                        </div>
                        <div className='col-12 col-md-6 text-left mt-3'>

                            <h2><b>Sick ? Call the <a href='/helpline'>Helpline</a></b></h2>
                            <hr />
                            <br />
                            <p>If you have a fever, a cough, and difficulty breathing, seek medical attention. Call in advance. Follow the directions of your local health authority.</p>
                        </div>



                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='row'>
                        <div className='col-12 text-left'>
                            <h2>Things You Should Do</h2>
                            <hr />
                        </div>
                        <div className='col-12 '>
                            <img src='./anime/phone.gif' alt='cleanphone' width='400' className='img-fluid py-2 ' />
                            <br />
                            <h3><b>Clean Your Phone</b></h3>
                            <hr />
                        </div>
                        <div className='col-12 '>
                            <img src='./anime/mask.gif' alt='mask' width='400' className='img-fluid py-2' />
                            <br />
                            <h3><b>Use Masks as per need</b></h3>
                            <hr />
                        </div>
                        <div className='col-12 '>
                            <img src='./anime/hobby.gif' alt='hobby' width='400' className='img-fluid py-2' />
                            <br />
                            <h3><b>Cultivate Hobbies</b></h3>
                            <hr />
                        </div>
                        <div className='col-12 '>
                            <img src='./anime/learn.gif' alt='learn' width='400' className='img-fluid py-2 ' />
                            <br />
                            <h3><b>Learn New Things</b></h3>
                            <hr />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prevention;
