import { useEffect, useState } from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";
import Navbar from "./components/Navbar";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, mins, secs });
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <main className="h-full md:h-[75vh] grid grid-cols-1 md:grid-cols-2 px-8 md:px-20 lg:px-28 pt-[4rem]">
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
            className="w-full h-full object-cover"
          />
          <div className="p-8 bg-gray-100 bg-opacity-90 rounded-t-md shadow-md static md:absolute bottom-0 w-full h-max md:h-[30%] flex flex-col items-start justify-center">
            <h2 className="text-lg font-semibold text-gray-700 mb-7 text-center pl-8">
              Get Notified When We Launch
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row items-center justify-start w-full gap-4 px-0 md:px-8"
            >
              <div className="relative w-full md:w-[70%] h-[56px] flex items-center justify-start">
                <HiOutlineEnvelope className="absolute left-3 inset-y-0 my-auto text-gray-400" />
                <input
                  type="email"
                  className="p-2 pl-10 border border-gray-300 w-full h-full"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-lwb_orange text-white p-2 hover:bg-lwb_orange/80 duration-150 ease-in transition-all w-full md:w-[30%] h-[56px]"
              >
                Subscribe
              </button>
              {status === "loading" && (
                <p className="mt-2 text-blue-600">Submitting...</p>
              )}
              {status === "success" && (
                <p className="mt-2 text-green-600">Thanks for subscribing!</p>
              )}
              {status === "error" && (
                <p className="mt-2 text-red-600">
                  Something went wrong. Try again.
                </p>
              )}
            </form>
            <p className="mt-4 pl-10 text-lwb_gray/60 text-sm md:text-base">
              *Don't worry we will not spam you 😀{" "}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
