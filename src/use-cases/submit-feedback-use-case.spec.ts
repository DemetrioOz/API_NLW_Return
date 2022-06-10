import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// spies = espiões

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  {
    create: async () => {},
  },
  { sendMail: async () => {} }
);

describe("Submit feedback", () => {
  it("should be able to submit feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "data:image/png;base64.jpg",
      })
    ).resolves.not.toThrow();

    // expect(createFeedbackSpy).toHaveBeenCalled();
    // expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "example comment",
        screenshot: "data:image/png;base64.jpg",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64.jpg",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "tah tudo bugadoooo",
        screenshot: "as.jpg",
      })
    ).rejects.toThrow();
  });
});
