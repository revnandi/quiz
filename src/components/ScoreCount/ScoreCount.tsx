import { useStore } from '../../store';
import { useQueryClient } from '@tanstack/react-query';

import { Question } from '../Quiz/Quiz';

const ScoreCount = () => {
  const { score } = useStore();
  const queryClient = useQueryClient();
  const questions: Question[] | undefined = queryClient.getQueryData(['questions']);

  return (
    <div className={
      [
        'w-full px-4 mt-4 mb-8 text-center font-bold text-xl',
        score === questions?.length && 'text-green-700',
        score === 0 && 'text-red-700',
      ].join(' ')
      }
    >
      <span>{ score }</span> / <span>{ questions?.length }</span>
    </div>
  )
};

export default ScoreCount;