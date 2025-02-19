const NotFound = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-2 text-lg text-gray-400">Oops! Page not found. It's possible I just haven't built it yet :|</p>
        <a
          href="/"
          className="mt-6 px-6 py-3 text-lg font-semibold text-gray-900 bg-green-400 rounded-lg hover:bg-green-500 transition"
        >
          Go Home
        </a>
      </div>
    );
  }

  export default NotFound;