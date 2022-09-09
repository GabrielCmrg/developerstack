import { Question } from '@prisma/client';

import { IQuestionData } from '../types/questionTypes';
import {
  createQuestion,
  getQuestions,
  getQuestionById,
  QuestionWithAnswers
} from '../repositories/questionRepository';

export async function registerNewQuestion(question: IQuestionData) {
  const createdQuestion = await createQuestion(question);
  return createdQuestion;
}

export async function getAllQuestions() {
  const questions: Question[] = await getQuestions();
  return { questions };
}

export async function getQuestionWithAnswers(questionId: number) {
  const question: QuestionWithAnswers | null = await getQuestionById(questionId);
  if (question === null) {
    throw { type: 'not_found' };
  }
  return question;
}
