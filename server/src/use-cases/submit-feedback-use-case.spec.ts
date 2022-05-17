import { SubmitFeedbackuseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackuseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('Should be able to submit a feedback', async () => {


    await expect(submitFeedback.execute({
      type: 'Bug',
      comment: 'example comment',
      screenshot: 'data:image/png;base64test.jpg'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('Should not be able to submit feedback without type', async () => {


    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64test.jpg'
    })).rejects.toThrow();
  });

  it('Should not be able to submit feedback without comment', async () => {


    await expect(submitFeedback.execute({
      type: 'Bug',
      comment: '',
      screenshot: 'data:image/png;base64test.jpg'
    })).rejects.toThrow();
  });

  it('Should be able to submit a feedback with a invalid screenshot', async () => {


    await expect(submitFeedback.execute({
      type: 'Bug',
      comment: 'example comment',
      screenshot: 'test.jpg'
    })).rejects.toThrow();
  })
})