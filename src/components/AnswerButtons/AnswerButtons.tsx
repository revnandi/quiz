import { useStore, QuizStatus } from '../../store';

const AnswerButtons = () => {
  const { setCurrentQuestionIndex, currentQuestionIndex, setStatus } = useStore();
  const setAnswer = useStore((state) => state.setAnswer);

  const handleAnswerButtonClick = (value: boolean) => {
    setAnswer(currentQuestionIndex, value === true ? 'True' : 'False');

    if(currentQuestionIndex + 1 === 10) {
      setStatus(QuizStatus.Finished);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return(
    <div className="flex flex-col space-y-4 sm:text-center items-center">
      <button
        type="button"
        onClick={ () => handleAnswerButtonClick(true) }
        className="w-full sm:max-w-md text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-6 py-3.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        <svg className="w-5 h-5 mr-2 -ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 13l4 4L19 7" stroke="currentColor"></path>
        </svg>
        True
      </button>
      <button
        type="button"
        onClick={ () => handleAnswerButtonClick(false) }
        className="w-full sm:max-w-md text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-base px-6 py-3.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        <svg className="w-5 h-5 mr-2 -ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="currentColor"></path>
        </svg>
        False
      </button>
    </div>
  )
};

export default AnswerButtons;