# Trivia Challenge

This is a simple quiz application where users can answer a series of true/false questions and receive a score at the end.

## Live demo

See it deployed at https://clever-parfait-918e90.netlify.app/

## Features

* Users can start the quiz by clicking the "Begin" button on the welcome screen.
* The quiz consists of 10 true/false questions.
* Users can select their answer by clicking on the "True" or "False" button for each question.
* After answering all 10 questions, users are shown their final score with the list of the questions and whether the answer was correct or not.
* Users can restart the quiz by clicking the "Play Again?" button on the score screen.

## Technologies Used

* React
* TypeScript
* Zustand for state management
* @tanstack/react-query for API requests
* Tailwind CSS for styling

## Usage

Clone the repository

```bash
git clone https://github.com/revnandi/quiz
```

Change into the project directory

```bash
cd quiz
```

Install dependencies

```bash
yarn install
```

Start the development server

```bash
yarn dev
```

The app should now be running at http://localhost:5173.

## API
The trivia api used is available [here](https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean).


  
## TODO
* Add tests