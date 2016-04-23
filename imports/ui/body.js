import { Template } from 'meteor/templating';

import { Blogs } from '../api/blogs.js';
 
import './body.html';
 
Template.body.helpers({
  blogs() {
    return Blogs.find({});
  },
});