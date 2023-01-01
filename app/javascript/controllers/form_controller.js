import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  connect() {
    console.debug("connected", this.element); 
  }

  initialize() {
    console.log("initialized"); 
  }

  disconnect() {
    console.log("disconnected"); 
  }
  submit() {
    this.element.requestSubmit(); 
  }

}
