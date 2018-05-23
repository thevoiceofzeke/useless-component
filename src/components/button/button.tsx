import { Component, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'trick-button',
  styleUrl: 'button.scss',
  shadow: true,
  host: {
      role: 'button'
  }
})
export class TrickButton {

  // Events
  @Event() buttonClicked: EventEmitter;

  // Local methods
  buttonClickHandler(event: UIEvent) {
    console.log('emitting event');
    this.buttonClicked.emit(event);
  }
  
  /**
   * Template to render
   */
  render() {
    return (
      <button onClick={ (event: UIEvent) => this.buttonClickHandler(event) }>
        Do a trick
      </button>
    );
  }
}