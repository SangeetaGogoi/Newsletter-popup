import React from 'react';
import './App.css';
import SVGImg from './image/User Avatar.svg';

function App() {
  return (
    <div className='App'>
      <div className='centerDiv'>
        <div className='upperDiv'>
          <h4>
            Creating email <br />
            templates has never
            <br /> been easier.
          </h4>
        </div>
        <div className='lowerDiv'>
          <div className='lowerReviewCon'>
            Receive daily emails on how to best
            create email templates, completely
            free.
          </div>
          <div className='formAndNotif'>
            <form className='form'>
              <input
                className='email'
                type='email'
                placeholder='Email Address'
              />
              <button className='subscribeBtn'>
                Subscribe
              </button>
            </form>
            <div className='notificationCon'>
              No spam, ever. Unsubscribe anytime.
            </div>
          </div>
          <div className='innerReviewCon'>
            <div className='imageContainer'>
              <img
                className='userImg'
                src={SVGImg}
                alt=''
                width='50'
                height='50'
              />
            </div>
            <div className='idCon'>
              <div className='nameCon'>
                Andrew Vickins
              </div>
              <div className='designationCon'>
                Newsletter Designer
              </div>
            </div>
          </div>
          <div className='andrewsReview'>
            "By far one of the best newsletter
            i've ever subscribed to.It is sent
            biweekly and i'm always looking
            forward to their emails."
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
