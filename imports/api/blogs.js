import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Blogs = new Mongo.Collection('blogs');

Meteor.methods({
  'blogs.insert'(title, body ){
      check(title, String);
      check(body, String);
      
    //   ensure user is logged in before creating a blogs
    if (! Meteor.userId()){
        throw new Meteor.Error('not-authorized');
    }
    
    Blogs.insert({
        title,
        body,
        createdAt: new Date(), // current time
        owner: Meteor.userId(),
        username: Meteor.user().username,
    });
  },
  'blogs.remove'(blogId){
      check(blogId, String);
      Blogs.remove(blogId);
  },
})