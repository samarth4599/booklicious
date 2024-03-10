import {EScreenState} from '../../types/enums';

export interface IContentView {
  state: EScreenState;
  onRetry: () => void;
  children: React.ReactNode;
}
