import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer-mail-adapater.ts/nodemailer-mail.adapter';
import { PrimaFeedbacksRespository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackuseCase } from './use-cases/submit-feedback-use-case';


export const routes = express.Router();


routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksrepository = new PrimaFeedbacksRespository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();
  const submitFeedbackuseCase = new SubmitFeedbackuseCase(prismaFeedbacksrepository, nodemailerMailAdapter)

  await submitFeedbackuseCase.execute({
    type,
    comment,
    screenshot
  })




  return res.status(201).send();

})