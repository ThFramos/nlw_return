import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";
import { FeedBackSuccessStep } from "./Steps/FeedBackSuccessStep";


export const feedBackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada'
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma nuvem'
    }
  }
};

export type FeedBackType = keyof typeof feedBackTypes;

/* 
  Object.entries(feedbackTypes) =>
  [
    ['BUG', {...}],
    ['IDEA', {...}],
    ['OTHER', {...}],
  ]
*/


export function WidgetForm() {
  const [feeBackType, setFeedBackType] = useState<FeedBackType | null>(null);
  const [feedbackSent, setFeedBackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedBackSent(false)
    setFeedBackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedBackSuccessStep onFeedbackRestartrequested={handleRestartFeedback} />
      ) : (
        <>
          {!feeBackType ? (
            <FeedBackTypeStep onFeedBackTypeChanged={setFeedBackType} />

          ) : (
            <FeedBackContentStep
              feedBackType={feeBackType}
              onFeedBackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedBackSent(true)}
            />
          )
          }
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div >
  )
}