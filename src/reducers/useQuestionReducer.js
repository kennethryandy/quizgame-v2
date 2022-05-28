import { useReducer } from "react";
import shuffle from '../utils/shuffle';

const reducer = (state, action) => {
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
			console.log(newState);
			return state;
		default:
			return state;
	}
}

const useQuestionReducer = () => {
	const [state, dispatch] = useReducer(reducer, []);

	return [state, dispatch];
}

export default useQuestionReducer;