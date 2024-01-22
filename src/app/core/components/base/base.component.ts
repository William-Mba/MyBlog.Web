import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscriber } from '@core/interfaces/subscriber';

@Component({
  template: ''
})

export abstract class BaseComponent implements OnDestroy, OnInit, OnChanges {

  private _subscribers: Subscriber[] = [];

  abstract ngOnInit(): void

  ngOnDestroy(): void {
    this._subscribers.map(s => s.subscription.unsubscribe());
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._subscribers.forEach((s)=>{
      s.notify(changes)
    })
  }

  subscribe(subscriber: Subscriber){
    this._subscribers.push(subscriber);
  }

  unSubscribe(subscriber: Subscriber){
    const sub = this._subscribers.filter(s => s.event === subscriber.event &&
      s.subscription === subscriber.subscription);
    sub.forEach(s=> s.subscription.unsubscribe());
  }
}