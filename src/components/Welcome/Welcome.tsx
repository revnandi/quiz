import { useStore, QuizStatus } from '../../store';

const WelcomeScreen = () => {
  const { setStatus } = useStore();
  const handleBeginButtonClick = () => {
    setStatus(QuizStatus.Playing);
  };

  return (
    <div className="h-full pt-8">
      <h1 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Trivia Challenge</span></h1>
        <div className="relative top-1/4">
          <div className="text-center">
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">You will be presented with 10 True or False questions.</p>
            <p className="mt-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Can you score 100%?</p>
          </div>
          <button onClick={ handleBeginButtonClick } type="button" className="w-full sm:max-w-md block mt-12 mx-auto text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-base px-6 py-3.5 text-center uppercase">Begin</button>
        </div>
    </div>
  );
};

export default WelcomeScreen;