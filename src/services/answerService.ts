import { Question, Answer } from "@prisma/client";

import { IAnswerData } from "../types/answerTypes";
import { getQuestionById } from '../repositories/questionRepository';
import { createAnswer, AnswerCreationType } from "../repositories/answerRepository";

export async function addAnswerToQuestion(answer: IAnswerData, questionId: number) {
  const questionToBeAnswered: Question | null = await getQuestionById(questionId);
  if (questionToBeAnswered === null) {
    throw { type: 'not_found' };
  }
  const answerCreationObject: AnswerCreationType = { ...answer, questionId };
  const createdAnswer: Answer = await createAnswer(answerCreationObject);
  return createdAnswer;
}
