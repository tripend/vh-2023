import React, { useState } from 'react';
import { Button, InputNumber, Space, Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import styles from '../styles/style.module.css';  // Import the styles

interface RatingInputProps {
  label?: string;
  min?: number;
  max?: number;
  checkboxLabel?: string;
}

const RatingInput: React.FC<RatingInputProps> = ({ label = "Rating", min = 1, max = 5, checkboxLabel = "NA" }) => {
  const [value, setValue] = useState<string | number | null>('0');
  const [isChecked, setIsChecked] = useState(false);

  const onChange = (e: CheckboxChangeEvent) => {
    setIsChecked(e.target.checked);
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <Space className={styles.ratingInputContainer}>
      <p style={{ width: '150px', display: 'inline-block' }}>
        {label}
       </p>
      <InputNumber min={min} max={max} value={value} onChange={setValue} />
      <Checkbox checked={isChecked} onChange={onChange}>{checkboxLabel}</Checkbox>
      <Button
        type="primary"
        onClick={() => {
          setValue(0);
          setIsChecked(false);
        }}
      >
        Reset
      </Button>
    </Space>
  );
};

export default RatingInput;
