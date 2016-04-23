import { Template } from 'meteor/templating';

import { Blogs } from '../api/blogs.js';

import './blog.html';

Template.blog.events({
//   'click .toggle-checked'() {
//     // Set the checked property to the opposite of its current value
//     Tasks.update(this._id, {
//       $set: { checked: ! this.checked },
//     });
//   },
  'click .delete'() {
    Tasks.remove(this._id);
  },
});
