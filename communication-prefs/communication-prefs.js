'use strict';

module.exports = {
  name: 'Are the communication preferences enabled',
  startDate: '2015-01-01',
  subjectAttributes: ['lang'],
  independentVariables: ['communicationPrefsVisible'],
  eligibilityFunction: function () {
    return true;
  },
  groupingFunction: function (subject) {
    return {
      communicationPrefsVisible: /^en(:?-US)?/.test(subject.lang)
    };
  }
};
