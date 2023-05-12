
import ScoreScreen from './components/Score';
import QuizScreen from './components/Quiz';
import WelcomeScreen from './components/Welcome';
import { useStore } from './store';

interface StrategyMap {
  [status: number]: React.FC;
}

const statusStrategy: StrategyMap = {
  0: WelcomeScreen,
  1: QuizScreen,
  2: ScoreScreen,
};

const App = () => {
  const { status } = useStore();

  const ActiveScreen = statusStrategy[status];

  return (
    <div className="container h-full mx-auto px-4">
      <ActiveScreen/>
    </div>
  )
}

export default App
