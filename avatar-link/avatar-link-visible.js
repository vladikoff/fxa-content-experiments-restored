'use strict';

module.exports = {
  name: 'Is the avatar link visible',
  startDate: '2015-01-01',
  subjectAttributes: ['email'],
  independentVariables: ['avatarLinkVisible'],
  eligibilityFunction: function (subject) {
    return true;
  },
  groupingFunction: function (subject) {
    return {
      avatarLinkVisible: /@mozilla\.com$/.test(subject.email)
    };
  }
};
