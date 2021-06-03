import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <center>

                <h3>Social Hub(GOI)</h3>
                <hr />
                <br /><br />
                <div className='row'>
                    <div className='col-4 col-sm-4 col-md-2'>
                        <a href="https://api.whatsapp.com/send?phone=919013353535&text=Hi&source=&data=&app_absent=" target='_blank' rel='noreferrer' title='Whatsapp'><i className='fa fa-whatsapp p-2' id='icon'></i></a>
                    </div>
                    <div className='col-4 col-sm-4 col-md-2'>
                        <a href="https://www.facebook.com/MyGovIndia/" target='_blank' rel='noreferrer' title='Facebook'><i className='fab fa-facebook p-2' id="icon"></i></a>
                    </div>
                    <div className='col-4 col-sm-4 col-md-2'>
                        <a href="https://www.messenger.com/t/MyGovIndia" target='_blank' rel='noreferrer' title='Messenger'><i className='fab fa-facebook-messenger p-2' id="icon"></i></a>
                    </div>
                    <div className='col-4 col-sm-4 col-md-2'>
                        <a href="https://www.instagram.com/mygovindia/" target='_blank' rel='noreferrer' title='Instagram'><i className='fab fa-instagram p-2' id='icon'></i></a>
                    </div>
                    <div className='col-4 col-sm-4 col-md-2'>
                        <a href="https://t.me/MyGovCoronaNewsdesk" target='_blank' rel='noreferrer' title='Telegram'><i className="fab fa-telegram p-2" id='icon'></i></a>
                    </div>
                    <div className='col-4 col-sm-4 col-md-2'>
                        <a href="https://twitter.com/mygovindia" target='_blank' rel='noreferrer' title='Twitter'><i className='fab fa-twitter p-2 rounded-circle' id='icon'></i></a>
                    </div>
                </div>
                <br /><br />
                <h3>Made With Care <i className='fa fa-heart'></i></h3>
                <br /><br />
            </center>
        </div>
    );
}

export default Footer;
