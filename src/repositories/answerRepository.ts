import { Answer } from '@prisma/client';

import { prisma } from '../config/database';

export type AnswerCreationType = Omit<Answer, 'id'>;

export async function createAnswer(answerObject: AnswerCreationType) {
  const answer: Answer = await prisma.answer.create({ data: answerObject });
  return answer;
}
