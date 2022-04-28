import "../App.css";
import { useState } from "react";

function Quiz() {
  const questions = [
    {
      question: "Which one of the below answers is NOT a Scrum event?",
      answers: [
        { id: 1, choice: "Sprint Planning", correct: false },
        { id: 2, choice: "Product Backlog", correct: true },
        { id: 3, choice: "Sprint Review", correct: false },
        { id: 4, choice: "Daily Scrum", correct: false },
      ],
    },
    {
      question: "What is the purpose of Sprint Retrospective meeting?",
      answers: [
        { id: 1, choice: "To improve the way ST work", correct: true },
        { id: 2, choice: "To update Product Backlog", correct: false },
        {
          id: 3,
          choice: "Define the work that must be completed",
          correct: false,
        },
        { id: 4, choice: "To talk about future projects", correct: false },
      ],
    },
    {
      question: "Which member of Scrum team buids product increment?",
      answers: [
        { id: 1, choice: "Development Team (DT)", correct: true },
        { id: 2, choice: "Product Owner (PO)", correct: false },
        { id: 3, choice: "Scrum Master (SM)", correct: false },
        { id: 4, choice: "All of the answers are correct", correct: false },
      ],
    },
    {
      question: "Velocity is ...",
      answers: [
        {
          id: 1,
          choice: "a Scrum team member",
          correct: false,
        },
        {
          id: 2,
          choice:
            "a sum of completely finished user stories points (calculated at the end of each sprint)",
          correct: true,
        },
        {
          id: 3,
          choice:
            "an estimation of number days for the team to complete the project without interruptions",
          correct: false,
        },
        {
          id: 4,
          choice:
            "a relative estimation of the effort required to implement a certain user story",
          correct: false,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [activeButton, setActiveButton] = useState("");
  const [score, setScore] = useState(0);

  const addAnswer = (correct) => {
    if (correct === true) {
      setScore(score + 1);
    }
  };

  const nextQuestion = currentQuestion + 1;

  const nexQuestionChoice = () => {
    if (nextQuestion <= questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      return null;
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <main className="info-container quiz-page">
      <section className="questions-card">
        {nextQuestion === questions.length + 1 ? (
          <article>
            <p className="question-title">
              You answered {score} out of {questions.length} questions!
            </p>
            <button className="restart-button" onClick={refreshPage}>
              Click to restart!
            </button>
          </article>
        ) : (
          <>
            <article>
              <div className="question-title">
                {questions[currentQuestion].question}
              </div>
              <article className="answers-questions">
                {questions[currentQuestion].answers.map((answerOption) => {
                  return (
                    <button
                      key={answerOption.id}
                      onClick={() => {
                        addAnswer(answerOption.correct);
                        setActiveButton(answerOption.choice);
                      }}
                      style={{
                        backgroundColor:
                          activeButton === answerOption.choice ? "green" : "",
                      }}
                    >
                      {answerOption.choice}
                    </button>
                  );
                })}
              </article>
              <button className="next-question" onClick={nexQuestionChoice}>
                Next
              </button>
              <article>
                  <p className="question-count">
                    Question {currentQuestion + 1}/{questions.length}
                  </p>
              </article>
            </article>
          </>
        )}
      </section>
    </main>
  );
}

export default Quiz;
