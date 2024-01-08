import {useState} from 'react';

interface InputTextProps {
  labelTitle?: string;
  labelStyle?: string;
  type?: string;
  containerStyle?: string;
  defaultValue?: string;
  placeholder?: string;
  updateFormValue?: (val: any) => void;
  updateType?: string;
}

function InputText({
  labelTitle,
  labelStyle,
  type,
  containerStyle,
  defaultValue,
  placeholder,
  updateFormValue,
  updateType,
}: InputTextProps) {
  const [value, setValue] = useState(defaultValue);

  const updateInputValue = (val: any) => {
    setValue(val);
    updateFormValue?.({updateType, value: val});
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={'label-text text-base-content ' + labelStyle}>
          {labelTitle}
        </span>
      </label>
      <input
        type={type || 'text'}
        value={value}
        placeholder={placeholder || ''}
        onChange={e => updateInputValue(e.target.value)}
        className="input  input-bordered w-full "
      />
    </div>
  );
}

export default InputText;
