import { Component } from '@angular/core';
import * as hfc from 'fabric-client/index';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
  constructor() {

  }
  private hehe() {
    client = new hfc();
  }
}
var client = null; 
