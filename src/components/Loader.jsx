import { RotatingLines } from "react-loader-spinner";

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
  }
};

export default Loader;
