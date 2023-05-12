import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export enum QuizStatus {
  Welcome,
  Playing,
  Finished,
}

type Answer = 'True' | 'False';

type QuestionAnswer = {
  questionId: number;
  answer: Answer;
};

interface QuizState {
  status: QuizStatus;
  setStatus: (value: QuizStatus) => void;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  answers: QuestionAnswer[];
  setAnswer: (questionId: number, answer: Answer) => void;
  score: number;
  setScore: (score: number) => void;
  reset: () => void;
}

export const useStore = create<QuizState>()(
  devtools(
    (set) => ({
      status: QuizStatus.Welcome,
      setStatus: (value) => set({ status: value }),
      currentQuestionIndex: 0,
      setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),
      answers: [],
      setAnswer: (questionId, answer) =>
        set((state) => ({
          answers: [
            ...state.answers.filter((answer) => answer.questionId !== questionId),
            { questionId, answer },
          ],
        })),
      score: 0,
      setScore: (score) => set({ score }),
      reset: () => set({
        status: QuizStatus.Welcome,
        currentQuestionIndex: 0,
        answers: [],
        score: 0,
       }),
    }),
    {
      name: 'quiz-storage',
    }
  )
);

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useStore);
}