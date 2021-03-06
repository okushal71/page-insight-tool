import React from "react";
import styled from "styled-components";
import "../styles/circle.css";

const ScorePercantileWrapper = styled.div`
  border-radius: 30px;

  p.title {
    margin-bottom: 0.8rem;
  }

  .score-category {
    margin-top: 1rem;
    .label {
      display: inline-block;
      padding: 0rem 1rem;
      line-height: 1.3;
      text-align: center;
      font-size: 0.8rem;

      .label-circle {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
    }
  }
`;

const ScorePercantile = ({ score }) => {
  //Score value converted to integer percentage
  score = Math.ceil(score * 100);

  // To generate performance label - slow, average, fast
  const generateLabel = (label, color) => {
    return (
      <div className="label">
        <div className="label-circle" style={{ backgroundColor: color }}></div>
        <p>{label}</p>
      </div>
    );
  };

  // Returns color for the score
  const getColor = () => {
    if (score >= 0 && score <= 49) return "red";
    if (score >= 50 && score < 90) return "orange";
    return "green";
  };

  return (
    <ScorePercantileWrapper>
      <p className="title">
        <strong>Performance Score:</strong> {score}
      </p>
      <div className={`c100 p${score} center`}>
        <span>{score}</span>
        <div className="slice">
          <div className="bar" style={{ borderColor: `${getColor()}` }}></div>
          <div className="fill" style={{ borderColor: `${getColor()}` }}></div>
        </div>
      </div>
      <div className="score-category">
        {generateLabel("Slow", "red")}
        {generateLabel("Average", "orange")}
        {generateLabel("Fast", "green")}
        <p>See more about performance score at google</p>
      </div>
    </ScorePercantileWrapper>
  );
};

export default ScorePercantile;
