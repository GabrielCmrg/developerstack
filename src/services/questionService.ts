import { Question } from '@prisma/client';

import { IQuestionData } from '../types/questionTypes';
import { createQuestion, getQuestions } from '../repositories/questionRepository';

export async function registerNewQuestion(question: IQuestionData) {
  const createdQuestion = await createQuestion(question);
  return createdQuestion;
}

export async function getAllQuestions() {
  const questions: Question[] = await getQuestions();
  return { questions };
}
