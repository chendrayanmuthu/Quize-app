import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { styled } from "styled-components";
import { QuizData } from "./Data";
import { Aws, Bar, Crt, Den, Next, Ques, Res, Wng } from "./Stuled";

export const Que: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };
  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };

  return (
    <Den>
      {showResult ? (
        <>
          <Res>
            <h3>Result</h3>

            <Crt>Toatl Correct:{score} </Crt>
            <Wng>Total wrong:{QuizData.length - score} </Wng>
            <h4>Total NO OF QUESTION :{QuizData.length} </h4>
            <br></br>
            <Button onClick={resetAll}>Try Again</Button>
          </Res>
        </>
      ) : (
        <Bar>
          <Ques>
            <h5>
              <span>{currentQuestion + 1}. </span>
              <span>{QuizData[currentQuestion].question}</span>
            </h5>
          </Ques>
          <hr></hr>
          <Aws>
            {QuizData[currentQuestion].options.map((option, i) => {
              return (
                <Button
                  className={`option-btn ${
                    clickedOption == i + 1 ? "checked" : null
                  }`}
                  key={i}
                  onClick={() => setClickedOption(i + 1)}
                >
                  {option}
                </Button>
              );
            })}
          </Aws>

          <Next>
            <Button onClick={changeQuestion}>Next</Button>
          </Next>
        </Bar>
      )}
    </Den>
  );
};
