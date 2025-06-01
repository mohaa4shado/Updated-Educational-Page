import React from 'react';
import Countdown from 'react-countdown';

interface TimerProps {
  date: Date;
}

const CountdownTimer: React.FC<TimerProps> = ({ date }) => {
  // Renderer for the countdown
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <span>انتهى الوقت!</span>;
    } else {
      return (
        <div className="challenge-timer">
          <h5 className="text-center mb-3">الوقت المتبقي للتحدي</h5>
          <div className="d-flex justify-content-between">
            <div className="text-center">
              <div className="timer-unit mb-1">{seconds}</div>
              <small>ث</small>
            </div>
            <div className="text-center">
              <div className="timer-unit mb-1">{minutes}</div>
              <small>د</small>
            </div>
            <div className="text-center">
              <div className="timer-unit mb-1">{hours}</div>
              <small>س</small>
            </div>
            <div className="text-center">
              <div className="timer-unit mb-1">{days}</div>
              <small>ي</small>
            </div>
          </div>
        </div>
      );
    }
  };

  return <Countdown date={date} renderer={renderer} />;
};

export default CountdownTimer;