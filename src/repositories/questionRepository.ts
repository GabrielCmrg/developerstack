import { IQuestionData } from "../types/questionTypes";
import { prisma } from "../config/database";

export async function createQuestion(question: IQuestionData) {
  const createdQuestion = await prisma.question.create({ data: question });
  return createdQuestion;
}
