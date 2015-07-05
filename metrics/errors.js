'use strict';

module.exports = {
  name: 'enables JavaScript Sentry error metrics',
  startDate: '2015-01-01',
  subjectAttributes: ['uuid', 'env'],
  independentVariables: ['sentryEnabled'],
  eligibilityFunction: function (subject) {
    var sampleRate = subject.env === 'development' ? 1.0 : 0.3

    return !! (subject.env && subject.uuid && this.bernoulliTrial(sampleRate, subject.uuid))
  },
  groupingFunction: function () {
    return {
      sentryEnabled: true
    };
  }
};
