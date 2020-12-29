import { ReactNode, CSSProperties, SyntheticEvent } from 'react';

export interface ITestDialogPropTypes {
  className?: string;
  style?: CSSProperties;
  mask?: boolean;
  children?: any;
  onClose?: (e: SyntheticEvent) => any;
  visible?: boolean;
  title?: ReactNode;
}
