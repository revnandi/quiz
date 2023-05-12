import { useStore } from '../../store';

interface Props {
  numberOfQuestions: number;
}


const ProgressCount = ({ numberOfQuestions }: Props) => {
  const { currentQuestionIndex } = useStore();

  return (
    <div className="w-full my-12 px-4 text-center font-medium">
      <span>{ currentQuestionIndex + 1}</span> / <span>{ numberOfQuestions }</span>
    </div>
  )
};

export default ProgressCount;