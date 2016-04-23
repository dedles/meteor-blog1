import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './main.html';
// import './blog.html';

import '../imports/ui/blog.html';

Template.blog.events({
  'submit #blogForm'(event) {
    event.preventDefault();
    const target = event.target;
    const title = target.title.value;
    const body = target.body.value;
    
    Meteor.call('submitPost', title, body);
    
  },
});

