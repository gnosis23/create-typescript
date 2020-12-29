import React, {useState} from 'react';
import CSSMotion from 'rc-motion';
import './index.css';
import {ITestDialogPropTypes} from "./ITestDialogPropTypes";

export interface SuccessResult {
  err_code: number;
  err_msg: string;
  result: object;
}

export interface ITestDialogProps extends ITestDialogPropTypes {
  onSuccess?: (result: SuccessResult) => void;
}

export default function TestDialog(props: ITestDialogProps) {
  const { visible, title, onClose, onSuccess } = props;
  const [value, setValue] = useState({
    err_code: 0,
    err_msg: '',
    result: {}
  });

  const handleClick = () => {
    onSuccess && onSuccess(value);
  };

  const handleUpdate = () => {
    setValue({
      err_code: 1,
      err_msg: '',
      result: { failed: true }
    });
  };

  return (
    <div className="test-dialog">
      <CSSMotion
        key="mask"
        visible={visible}
        motionName="test-dialog-fade"
      >
        {({ className: motionClassName, style: motionStyle }) => (
          <div style={motionStyle} className={`dialog-mask ${motionClassName}`} onClick={onClose} />
        )}
      </CSSMotion>
      <CSSMotion
        key="content"
        visible={visible}
        motionName="test-dialog-fade"
      >
        {({ className: motionClassName, style: motionStyle }) => (
          <div style={motionStyle} className={`dialog-wrap ${motionClassName}`}>
            <div className="dialog-header">{title}</div>
            <button onClick={handleClick}>gaga</button>
            <button onClick={handleUpdate}>Update</button>
          </div>
        )}
      </CSSMotion>
    </div>
  )
}
