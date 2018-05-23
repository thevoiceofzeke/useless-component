import { Component, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'top-bar',
  styleUrl: 'top-bar.scss',
  shadow: true,
  host: {
      role: 'toolbar'
  }
})
export class TopBar {

  @Prop({ mutable: true }) background: string;
  @State() toggle: boolean = false;

  // Event listener
  @Listen('buttonClicked')
  trickButtonHandler(event: CustomEvent) {
    this.switchClass();
    console.log(event);
  }

  switchClass() {
    if (this.toggle === true) {
      this.toggle = false;
    } else {
      this.toggle = true;
    }
    this.background = this.toggle ? 'primary' : 'secondary';
  }

  componentWillUpdate() {
    console.log('Component will update and re-render');
  }
  
  /**
   * Template to render
   */
  render() {
    return (
      <div class={this.background}>
          <trick-button></trick-button>
      </div>
    );
  }
}