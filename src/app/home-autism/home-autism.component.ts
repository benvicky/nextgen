import { Component } from '@angular/core';

@Component({
  selector: 'app-home-autism',
  templateUrl: './home-autism.component.html',
  styleUrls: ['./home-autism.component.css'],
})
export class HomeAutismComponent {
  userMessage: string = '';
  botResponseMessage: string = '';

  greetings = ['hello', 'hi', 'good morning', 'howdy'];
  servicesQuestions = ['what services do you offer', 'what help do you provide', 'help', 'service', 'services'];
  generalQuestions = ['can you tell me more about...', 'do you have information on...?'];
  responses = {
    greetings: 'Hi there! How can I be of service today?',
    services: 'We offer a range of services like therapeutic programs, family support, and community events. Is there anything specific you\'re interested in?',
    general: 'Sorry, I can\'t quite understand your question. Can you rephrase it?',
  };

  sendMessage() {
    const message = this.userMessage.toLowerCase();
    this.botResponseMessage = '';

    if (this.greetings.includes(message)) {
      this.botResponseMessage = this.responses.greetings;
    } else if (this.servicesQuestions.includes(message)) {
      this.botResponseMessage = this.responses.services;
    } else if (this.generalQuestions.some(q => message.includes(q))) {
      this.botResponseMessage = 'I\'m still learning, but I might have some resources for you! What would you like to know more about?';
    } else {
      this.botResponseMessage = 'Sorry, I need more information to understand your question. Can you tell me more?';
    }

    this.userMessage = '';
  }
}