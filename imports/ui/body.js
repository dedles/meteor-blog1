import { Template } from 'meteor/templating';

import { Blogs } from '../api/blogs.js';

import './blog.js'; 
import './body.html';
 
Template.body.helpers({
  blogs() {
    return Blogs.find({}, {sort: {createdAt: -1}});
  },
  blogCount() {
    return Blogs.find({}).count();
  }
});

Template.body.events({
  'submit #blogForm'(event) {
    event.preventDefault();
    const target = event.target;
    const title = target.title.value;
    const body = target.body.value;
    
    // Meteor.call('submitPost', title, body);
    // title = '';
    // body = '';
    // Insert a blog into the collection
    Blogs.insert({
      title,
      body,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
 
    // Clear form
    target.title.value = '';
    target.body.value = '';

  },
});
