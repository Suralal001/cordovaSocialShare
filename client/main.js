import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

Template.hello.events({
  'click button'(event, instance) {
    event.preventDefault();
    if (Meteor.isCordova) {
      var message = 'This is the message I';
      var subject = 'A subject for my message';
      var image = 'https://pedlar.co/pedlar.png';
      var link = 'https://pedlar.co';
      window.plugins.socialsharing.share(
        message,
        subject,
        image,
        link
      );
    }
  }
});