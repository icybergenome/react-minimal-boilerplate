import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import doIt from './calculator';
import './index.module.scss';

const Form = () => {
  const [output, setOutput] = useState(0);
  const [formData, setFormData] = useState({});
  let operation = '';
  const history = useHistory();

  const updateFormData = event => {
    const data = { ...formData };

    // eslint-disable-next-line default-case
    switch (event.target.name) {
      case 'firstValue':
        data.firstValue = event.target.value;
        break;
      case 'secondValue':
        data.secondValue = event.target.value;
        break;
      case 'arithM':
        data.arithM = event.target.value;
        break;
    }
    setFormData(data);
  };

  const goHome = () => {
    history.push('/');
  };
  const computeData = event => {
    if (!formData.firstValue || !formData.secondValue) {
      const err = 'Please fill the above feilds first!';
      setOutput(err);
      // eslint-disable-next-line no-restricted-globals
    } else if (isNaN(formData.firstValue) || isNaN(formData.secondValue)) {
      const set = 'Please Enter Number in Feilds!';
      setOutput(set);
    } else if (formData.secondValue === '0' && formData.arithM === '/') {
      setOutput('Divisor should not be zero! Please enter correct divisor');
    } else {
      operation = doIt(
        formData.firstValue,
        formData.secondValue,
        formData.arithM,
      );
      setOutput(operation);
    }
    event.preventDefault();
  };

  return (
    <div className="setPosition">
      <form name="myForm" onSubmit={computeData}>
        <button type="button" className="buttonColorBlack" onClick={goHome}>
          Go Home
        </button>
        <h1 className="heading">Calculator!</h1>
        <p>Enter first value:</p>
        <input
          className="fieldDisplay"
          type="text"
          name="firstValue"
          placeholder="First Value"
          onChange={updateFormData}
          value={formData.firstValue}
        />
        <p>Enter second value:</p>
        <input
          className="fieldDisplay"
          type="text"
          name="secondValue"
          placeholder="Second Value"
          onChange={updateFormData}
          value={formData.secondValue}
        />
        <br /> <br />
        <select
          className="selectColor"
          name="arithM"
          onChange={updateFormData}
          value={formData.arithM}
        >
          <option value="">Choose Any One Option!</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <br />
        <br />
        <button type="submit" className="buttonColor">
          <span className="hoverColor">Calculate!</span>
        </button>
        <br /> <br />
        <div className="outputArea"> Output is : {output} </div>
      </form>
    </div>
  );
};

export default Form;
