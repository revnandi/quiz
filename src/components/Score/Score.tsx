import { useEffect } from 'react';
import { useStore } from '../../store';
import { useQueryClient } from '@tanstack/react-query';
import ScoreCount from '../ScoreCount';
import parse from 'html-react-parser';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import { Question } from '../Quiz/Quiz';

const ScoreScreen = () => {
  const { width, height } = useWindowSize();
  const { answers, score, setScore, reset } = useStore();
  const queryClient = useQueryClient();
  const questions: Question[] | undefined = queryClient.getQueryData(['questions']);

  useEffect(() => {
    const calculatedScore = answers.reduce(
      (count, answer, index) =>
        answer.answer === questions?.[index].correct_answer ? count + 1 : count,
      0
    );
    setScore(calculatedScore);
  }, [answers, questions, setScore]);

  const handlePlayAgainclick = () => {
    queryClient.removeQueries()
    reset();
  };
  
  return (
    <div className="h-full pt-8">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">You Scored</h5>
      <ScoreCount/>
      <div className="pb-12">
        {
          questions?.map((question: Question, index: number) => {
            return (
              <div
                className={
                  [
                    'flex flex-col w-full sm:max-w-3xl mx-auto space-x-4 p-2 mb-4 rounded-lg',
                    question.correct_answer === answers[index].answer ? 'text-green-700 dark:text-green-600 bg-green-100' : 'text-red-700 dark:text-red-600 bg-red-100'
                  ].join(' ')
                }
                key={ question.question }
              >
                <div className="flex space-x-4">
                  { 
                    question.correct_answer === answers[index].answer ?
                      <svg className="w-6 h-6 mt-0.5 flex-shrink-0" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                        <path stroke="currentColor" d="M7 12.5l3 3 7-7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    :
                      <svg className="w-6 h-6 mt-0.5 flex-shrink-0" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                        <path stroke="currentColor" d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                  }
                  <div>
                    <p className="mb-2 sm:mb-4">{ parse(question.question) }</p>
                    <p className="w-full">Correct Answer: <strong>{ question.correct_answer }</strong></p>
                    <p className="w-full">Your Answer: <strong>{ answers[index].answer }</strong></p>
                  </div>
                </div>
              </div>
            )
          })
        }
        <button onClick={ handlePlayAgainclick } type="button" className="block mx-auto mt-8 mb-4 w-full sm:max-w-md text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Play Again?</button>
        { score === 10 &&
          <Confetti
            width={ width - 32 }
            height={ height - 32 }
            recycle={ false }
            numberOfPieces={ 400 }
          />
        }
      </div>
    </div>
  )
};

export default ScoreScreen;