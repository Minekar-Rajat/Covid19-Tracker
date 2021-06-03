import React from 'react';

const Symptom = () => {
    return (
        <div>
            <h1>Major Symptoms</h1>
            <hr />
            <br />
            <div className='row mx-3'>
                <div className='col-12 col-md-6'>
                    <div className='row'>
                        <div className='col-12 text-left'>
                            <h2>Common Symptoms</h2>
                            <hr />
                        </div>
                        <div className='col-12 col-md-6'>
                            <img src='./anime/fever.gif' alt='fever' className='img-fluid' />

                        </div>
                        <div className='col-12 col-md-6 text-left'>
                            <br />
                            <h2><b>Fever</b></h2>
                            <hr />
                            <br />
                            <p>Fever is one of the common symptoms of COVID-19. We have observed that many of the patients show this symptom but also some patients are COVID-19 positive even when they don't show any symptoms.</p>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6 '>
                            <img src='./anime/tired.gif' alt='tired' className='img-fluid' />

                        </div>
                        <div className='col-12 col-md-6 text-left'>
                            <br />
                            <h2><b>Tired</b></h2>
                            <hr />
                            <br />
                            <p>Tiredness is also one of the common symptoms of COVID-19.Patients feels tired , but also some patients are COVID-19 positive even if no symptoms are shown. The immunity power is more important during the treatment of this viral disease.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <img src='./anime/dry cough.gif' alt='drycough' className='img-fluid' />

                        </div>
                        <div className='col-12 col-md-6 text-left'>
                            <br />
                            <h2><b>Dry Cough</b></h2>
                            <hr />
                            <br />
                            <p>COVID-19 virus attacks on the respiratory path. Many patients showed up with symptoms of dry cough and others like fever , tiredness. People having dry cough and the other similar symptoms may tests positive for Covid19.</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='row'>
                        <div className='col-12 text-left'>
                            <h2>Some people may experience</h2>
                            <hr />
                        </div>
                        <div className='col-12 col-md-6'>
                            <img src='./anime/virus.gif' alt='virus' className='img-fluid' />

                        </div>
                        <div className='col-12 col-md-6'>
                            <br />
                            <h3>aches and pains</h3>
                            <hr /><br />
                            <h3>runny nose</h3>
                            <hr /><br />
                            <h3>sore throat</h3>
                            <hr /><br />
                            <h3>diarrhoea</h3>
                            <hr /><br />
                            <h3>nasal congestion</h3>
                            <hr /><br />
                        </div>
                        <div className='col-12 text-left'>
                            <hr />
                            <h3><b>On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.</b></h3>
                        </div>
                        <div className='col-12 text-left'>
                            <br /><br /><br />
                            <hr />
                            <h3><b>People with mild symptoms who are otherwise healthy should self-isolate. Seek medical attention if you have a fever, a cough, and difficulty breathing. Call ahead</b></h3>
                            <br /><br /><br />
                            <hr />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Symptom;
