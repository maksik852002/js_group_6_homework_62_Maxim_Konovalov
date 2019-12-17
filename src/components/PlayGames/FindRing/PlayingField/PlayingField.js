import React from 'react';
import './PlayingField.css'

const PlayingField = props => (
  <div className="playingField mt-4">{props.children}</div>
);

export default PlayingField;