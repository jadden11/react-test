import CountUp from "react-countup";
const NumberCounter = () => {
  return (
    <div className="bg-blue-500 text-white py-12">
      <div className="container gap-8 grid grid-cols-2 md:grid-cols-4 font-poppins">
        {/* 1 */}
        <div className="flex flex-col items-center justify-center">
          <p>
            <CountUp
              start={0}
              end={898}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Expert Tutors</p>
        </div>
        {/* 2 */}
        <div className="flex flex-col items-center justify-center">
          <p>
            <CountUp
              end={20000}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Students</p>
        </div>
        {/* 3 */}
        <div className="flex flex-col items-center justify-center">
          <p>
            <CountUp
              end={298}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Online Cource</p>
        </div>
        {/* 4 */}
        <div className="flex flex-col items-center justify-center">
          <p>
            <CountUp
              end={162}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Active Students</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
