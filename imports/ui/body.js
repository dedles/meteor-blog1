import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';
import {ReactiveDict} from 'meteor/reactive-dict';

import { Blogs } from '../api/blogs.js';

import './blog.js'; 
import './body.html';
 
Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('blogs');
});

Template.home.helpers({
  blogs() {
    return Blogs.find({}, {sort: {createdAt: -1}});
  },
  blogCount() {
    return Blogs.find({}).count();
  }
});

Template.home.events({
  'submit #blogForm'(event) {
    event.preventDefault();
    const target = event.target;
    const title = target.title.value;
    const body = target.body.value;
    
    // Insert a blog into the collection
    Meteor.call('blogs.insert', title, body);
 
    // Clear form
    target.title.value = '';
    target.body.value = '';

  },
});
