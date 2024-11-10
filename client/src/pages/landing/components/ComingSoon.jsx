import React, { useEffect, useState } from "react";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  const fetchCountdown = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/launch/countdown"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch countdown");
      }
      const data = await response.json();
      setTimeLeft({
        days: data.days,
        hours: data.hours,
        mins: data.mins,
        secs: data.secs,
      });
    } catch (error) {
      console.error("Error fetching countdown:", error);
    }
  };

  useEffect(() => {
    // Fetch initial countdown data from the API
    fetchCountdown();

    // Start the client-side countdown
    const countdownInterval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const { days, hours, mins, secs } = prevTimeLeft;

        if (days === 0 && hours === 0 && mins === 0 && secs === 0) {
          clearInterval(countdownInterval);
          return prevTimeLeft;
        }

        if (secs > 0) {
          return { ...prevTimeLeft, secs: secs - 1 };
        } else if (mins > 0) {
          return { ...prevTimeLeft, mins: mins - 1, secs: 59 };
        } else if (hours > 0) {
          return { ...prevTimeLeft, hours: hours - 1, mins: 59, secs: 59 };
        } else if (days > 0) {
          return {
            ...prevTimeLeft,
            days: days - 1,
            hours: 23,
            mins: 59,
            secs: 59,
          };
        }

        return prevTimeLeft;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(countdownInterval);
  }, []);
  return (
    <main className="h-full md:h-max grid grid-cols-1 md:grid-cols-2 px-8 md:px-20 lg:px-28 pt-[4rem]">
      <section className="flex flex-col items-start justify-center">
        <div>
          <span className="uppercase tracking-widest text-lwb_orange font-semibold">
            COMING SOON
          </span>
          <h2 className="text-[35px] md:text-[49px] font-semibold leading-[48px] mt-6 w-full md:w-[70%] mb-10 capitalize">
            We launch fully very soon. Stay tune, Stay Close !!!
          </h2>
        </div>
        <div className="flex items-center justify-center gap-5 w-full md:w-auto">
          <div className="w-max md:w-[108px] h-auto md:h-[100px] flex flex-col items-center justify-center gap-1 shadow-lg bg-[#F5F7FA] text-lwb_black px-6 md:px-0 py-4 md:py-4">
            <span className="text-[19px] md:text-[30px] font-semibold">
              {timeLeft.days}
            </span>
            <span className="text-sm font-semibold">days</span>
          </div>
          <div className="w-max md:w-[108px] h-auto md:h-[100px] flex flex-col items-center justify-center gap-1 shadow-lg bg-[#F5F7FA] text-lwb_black px-6 md:px-0 py-4 md:py-4">
            <span className="text-[19px] md:text-[30px] font-semibold">
              {timeLeft.hours}
            </span>
            <span className="text-sm font-semibold">hours</span>
          </div>
          <div className="w-max md:w-[108px] h-auto md:h-[100px] flex flex-col items-center justify-center gap-1 shadow-lg bg-[#F5F7FA] text-lwb_black px-6 md:px-0 py-4 md:py-4">
            <span className="text-[19px] md:text-[30px] font-semibold">
              {timeLeft.mins}
            </span>
            <span className="text-sm font-semibold">mins</span>
          </div>
          <div className="w-max md:w-[108px] h-auto md:h-[100px] flex flex-col items-center justify-center gap-1 shadow-lg bg-[#F5F7FA] text-lwb_black px-6 md:px-0 py-4 md:py-4">
            <span className="text-[19px] md:text-[30px] font-semibold">
              {timeLeft.secs}
            </span>
            <span className="text-sm font-semibold">secs</span>
          </div>
        </div>
      </section>
      <section className="relative h-full">
        <img
          src="/comingsoon.png"
          alt="Coming Soon"
          className="w-full h-full object-cover animate-pulse"
        />
      </section>
    </main>
  );
};

export default ComingSoon;
