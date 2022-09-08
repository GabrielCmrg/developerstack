import { Request, Response } from 'express';
import { Question } from '@prisma/client';
import { Answer } from '@prisma/client';

import { registerNewQuestion, getAllQuestions } from '../services/questionService';
import { addAnswerToQuestion } from '../services/answerService';
import { IQuestionData } from '../types/questionTypes';
import { IAnswerData } from '../types/answerTypes';

export async function createQuestion(req: Request, res: Response) {
  const question: IQuestionData = req.body;
  const createdQuestion: Question = await registerNewQuestion(question);
  return res.status(201).json(createdQuestion);
}

export async function createAnswer(req: Request, res: Response) {
  const answer: IAnswerData = req.body;
  const questionId: number = Number(req.params.id);
  const createdAnswer: Answer = await addAnswerToQuestion(answer, questionId);
  return res.status(201).json(createdAnswer);
}

export async function get(req: Request, res: Response) {
  const questions: { questions: Question[] } = await getAllQuestions();
  return res.status(200).json(questions);
}

export async function getById(req: Request, res: Response) {
  // TODO
}
