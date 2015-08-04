'use strict';

module.exports = {
  name: 'Is the avatar link visible',
  startDate: '2015-01-01',
  endDate: '2015-08-12',
  subjectAttributes: ['email'],
  independentVariables: ['avatarLinkVisible'],
  eligibilityFunction: function (subject) {
    return true;
  },
  groupingFunction: function (subject) {
    return {
      avatarLinkVisible: /@mozilla\.(?:com|org)$/.test(subject.email)
    };
  },
  conclusion: {
    avatarLinkVisible: true
  }
};
