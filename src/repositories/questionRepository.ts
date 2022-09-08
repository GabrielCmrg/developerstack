import { Question } from "@prisma/client";

import { IQuestionData } from "../types/questionTypes";
import { prisma } from "../config/database";

export async function createQuestion(question: IQuestionData) {
  const createdQuestion = await prisma.question.create({ data: question });
  return createdQuestion;
}

export async function getQuestionById(questionId: number) {
  const question: Question | null = await prisma.question.findUnique({
    where: { id: questionId }
  });
  return question;
}

export async function getQuestions() {
  const questions: Question[] = await prisma.question.findMany();
  return questions;
}
