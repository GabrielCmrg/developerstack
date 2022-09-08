import { IQuestionData } from '../types/questionTypes';
import { createQuestion } from '../repositories/questionRepository';

export async function registerNewQuestion(question: IQuestionData) {
  const createdQuestion = await createQuestion(question);
  return createdQuestion;
}
