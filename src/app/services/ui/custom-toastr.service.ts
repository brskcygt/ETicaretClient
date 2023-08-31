import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }
  message(message: string, title: string, options: Partial<ToastrOptions>): void {
    this.toastr[options.messageType](message, title,{
      positionClass:options.position
    })
  }
}

export class ToastrOptions {
  messageType: ToastrMessageType;
  position: ToastrPosition;
}

export enum ToastrMessageType {
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error"
}

export enum ToastrPosition {
  TOP_RIGHT = "toast-top-right",
  TOP_LEFT = "toast-top-left",
  TOP_CENTER = "toast-top-center",
  TOP_FULL_WIDTH = "toast-top-full-width",
  BOTTOM_RIGHT = "toast-bottom-right",
  BOTTOM_LEFT = "toast-bottom-left",
  BOTTOM_CENTER = "toast-bottom-center",
  BOTTOM_FULL_WIDTH = "toast-bottom-full-width"
}