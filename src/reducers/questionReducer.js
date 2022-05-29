import shuffle from '../utils/shuffle';

export const questionReducer = (state, action) => {
	switch (action.type) {
		case "SET_QUESTION":
			const newState = action.payload.reduce((acc, curr) => {
				const shuffledAnswers = shuffle([
					...curr.incorrect_answers,
					curr.correct_answer
				]);
				return [...acc, {
					category: curr.category,
					question: curr.question,
					difficulty: curr.difficulty,
					correct_answer: curr.correct_answer,
					answers: shuffledAnswers
				}];
			}, []);
			// console.log(newState);
			return newState;
		default:
			return state;
	}
}