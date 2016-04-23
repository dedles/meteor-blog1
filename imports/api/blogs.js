// import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Blogs = new Mongo.Collection('blogs');

// Meteor.methods({
//     'submitPost'(title, body){
//         console.log(title);
//         console.log(body);
//         Blogs.insert({title: title, body: body});      
//     }
// })