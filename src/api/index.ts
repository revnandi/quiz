interface questionQueryOptions {
  amount?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export const getQuestions = async (options: questionQueryOptions) => {
  return fetch(`https://opentdb.com/api.php?type=boolean&amount=${options.amount}&difficulty=${options.difficulty}`)
    .then(response => response.json())
    .then(data => data.results)
    .catch(error => console.error(error));
};