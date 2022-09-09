import { Question, Answer } from "@prisma/client";

import { IAnswerData } from "../types/answerTypes";
import { getQuestionById, QuestionWithAnswers } from '../repositories/questionRepository';
import { createAnswer, AnswerCreationType } from "../repositories/answerRepository";

export async function addAnswerToQuestion(answer: IAnswerData, questionId: number) {
  const questionToBeAnswered: QuestionWithAnswers | null = await getQuestionById(questionId);
  if (questionToBeAnswered === null) {
    throw { type: 'not_found' };
  }
  const answerCreationObject: AnswerCreationType = { ...answer, questionId };
  const createdAnswer: Answer = await createAnswer(answerCreationObject);
  return createdAnswer;
}
