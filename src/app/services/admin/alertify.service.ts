import { Injectable } from '@angular/core';
declare var alertify: any;


@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message: string, options: Partial<AlertifyOptions>) {
    alertify.set('notifier','delay', options.delay);
    alertify.set('notifier','position', options.position);
    var msg = alertify[options.messageType](message);
    if(options.dismissOthers){
      msg.dismissOthers();
    }
  }

  dismiss(){
    alertify.dismissAll();
  }
}

export class AlertifyOptions {
  messageType: MessageType = MessageType.MESSAGE;
  position: Position = Position.BOTTOM_LEFT;
  delay: Number = 3;
  dismissOthers: boolean = false;
}

export enum MessageType {
  ERROR = 'error',
  MESSAGE = 'message',
  NOTIFY = 'notify',
  SUCCESS = 'success',
  WARNING = 'warning'
}

export enum Position {
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  TOP_CENTER = 'top-center',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
  BOTTOM_CENTER = 'bottom-center'
}