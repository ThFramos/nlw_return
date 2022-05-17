import { prisma } from "../../prisma";
import { FeedbacksCreateData, FeedbacksRepositories } from "../feedbacks-repositories";

export class PrimaFeedbacksRespository implements FeedbacksRepositories {
  async create({ type, comment, screenshot }: FeedbacksCreateData) {

    const feedback = await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    })

  }

}