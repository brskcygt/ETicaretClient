import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) {}

  showSpinner(spinnerNameType: SpinnerType) {
    this.spinner.show(spinnerNameType);

    setTimeout(() => {
      this.spinner.hide(spinnerNameType);
    }, 500);
  }

  hideSpinner(spinnerNameType: SpinnerType) {
    this.spinner.hide(spinnerNameType);
  }
}

export enum SpinnerType {
  BALL_ATOM = 's1',
  BALL_SCALE = 's2',
  BALL_SPIN_CLOCKWISE_FADE_ROTATING = 's3',
}
