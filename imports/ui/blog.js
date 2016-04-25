import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


import './blog.html';

Template.blog.events({
//   'click .toggle-checked'() {
//     // Set the checked property to the opposite of its current value
//     Tasks.update(this._id, {
//       $set: { checked: ! this.checked },
//     });
//   },
  'click .delete'() {
    Meteor.call('blogs.remove', this._id);
  },
});
