interface Props {
  text: string;
}

const QuestionCard = ({ text }: Props) => {
  return (
    <div className="relative block sm:max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:mx-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1 bg-white rounded-full">
        <svg className=" w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
          <path className="stroke-gray-200 dark:stroke-gray-700" d="M7.9 8.08c0-4.773 7.5-4.773 7.5 0 0 3.409-3.409 2.727-3.409 6.818M12 19.01l.01-.011" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </div>
      <p className="text-lg lg:text-xl font-normal text-gray-700 dark:text-gray-400">{ text }</p>
    </div>
  );
};

export default QuestionCard;