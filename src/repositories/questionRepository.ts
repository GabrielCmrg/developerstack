import { Question } from "@prisma/client";

import { IQuestionData } from "../types/questionTypes";
import { IAnswerData } from "../types/answerTypes";
import { prisma } from "../config/database";

export interface QuestionWithAnswers extends Question {
  answers: IAnswerData[];
}

export async function createQuestion(question: IQuestionData) {
  const createdQuestion = await prisma.question.create({ data: question });
  return createdQuestion;
}

export async function getQuestionById(questionId: number) {
  const question: QuestionWithAnswers | null = await prisma.question.findUnique({
    where: { id: questionId },
    include: {
      answers: {
        select: {
          answeredBy: true,
          answer: true,
        }
      }
    }
  });
  return question;
}

export async function getQuestions() {
  const questions: Question[] = await prisma.question.findMany();
  return questions;
}
