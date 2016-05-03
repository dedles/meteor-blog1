import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './blog.html';

Template.blog.helpers({
  isOwner(){
    return this.owner === Meteor.userId();
  },
  formattedTime(){
    return this.createdAt.toDateString(); 
  }
});

// Have blog textarea fit the size of its value
Template.blog.onRendered(function(){
  $(".blog-input").height( $(".blog-input")[0].scrollHeight)
});


Template.blog.events({
  'click .delete'(event) {
    event.preventDefault();
    var confirm = window.confirm("Delete this blog post?");
    if(confirm){
      Meteor.call('blogs.remove', this._id);
    }
  },
  'keyup [name=blogTitleEdit]': function(event){
    var documentId = this._id;
    var titleValue = $(event.target).val();
    Meteor.call('blogs.updateTitle', this._id, titleValue );
    // Todos.update({ _id: documentId }, {$set: { name: todoItem }});
  },
  'keyup [name=blogBodyEdit]': function(event){
    var documentId = this._id;
    var bodyValue = $(event.target).val();
    Meteor.call('blogs.updateBody', this._id, bodyValue);
    // Todos.update({ _id: documentId }, {$set: { name: todoItem }});
  }
});
