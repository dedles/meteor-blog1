import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


import './blog.html';



Template.blog.helpers({
  isOwner(){
    return this.owner === Meteor.userId();
  }
})





Template.blog.events({
  'click .delete'() {
    Meteor.call('blogs.remove', this._id);
  },
});
