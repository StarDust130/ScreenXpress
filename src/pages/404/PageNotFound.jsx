import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">
          Oops! It seems like you got lost in the digital wilderness.
        </p>
        <img
          src="https://img.icons8.com/dusk/64/000000/cancel.png"
          alt="Cancel Icon"
          className="mx-auto mb-8"
        />
        <p className="text-lg">Return to safety:</p>
        <a href="/" className="text-blue-500 hover:underline">
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
