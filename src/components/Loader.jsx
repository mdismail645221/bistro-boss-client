import { RotatingLines, ThreeDots, BallTriangle } from "react-loader-spinner";

const Loader = ({ type }) => {
  if (type === "loaderOne") {
    return (
      <section className="h-screen flex justify-center items-center w-full">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="red"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </section>
    );
  }else if (type === "threeDots"){
    return (
      <section className="h-screen flex justify-center items-center w-full">
        <ThreeDots
          visible={true}
          height="96"
          width="96"
          color="red"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </section>
    );
  }
  else if (type === "ballTriangle"){
    return (
      <section className="h-screen flex justify-center items-center w-full">
        <BallTriangle
          visible={true}
          height="96"
          width="96"
          color="red"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </section>
    );
  }
};

export default Loader;
