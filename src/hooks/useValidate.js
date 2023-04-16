import { useState } from 'react';

const useValidate = (validate) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validate(enteredValue);
    const hasError = !isValid && isTouched;

    const onChange = (e) => {
        setEnteredValue(e.target.value);
        setIsTouched(false);
    };

    const onBlur = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isValid,
        hasError,
        onChange,
        onBlur,
        reset,
    };
};

export default useValidate;
