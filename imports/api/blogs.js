import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Blogs = new Mongo.Collection('blogs');

if(Meteor.isServer){
    Meteor.publish('blogs', function blogsPublication(){
        return Blogs.find();
    });
}

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
      const blog = Blogs.findOne(blogId);
        if (blog.owner !== Meteor.userId()) {
            // If the blog is private, make sure only the owner can delete it
            throw new Meteor.Error('not-authorized');
        }
      Blogs.remove(blogId);
  },
})