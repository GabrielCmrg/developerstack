import { Request, Response } from 'express';

import { registerNewQuestion } from '../services/questionService';
import { IQuestionData } from '../types/questionTypes';

export async function createQuestion(req: Request, res: Response) {
  const question: IQuestionData = req.body;
  const createdQuestion = await registerNewQuestion(question);
  return res.status(201).json(createdQuestion);
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}
