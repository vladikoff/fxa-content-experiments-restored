'use strict';

module.exports = {
  name: 'open gmail button is shown or hidden',
  hypothesis: 'providing an open gmail.com is useful for the verification rate',
  startDate: '2015-01-01',
  endDate: '2016-02-01',
  subjectAttributes: ['uniqueUserId', 'isMetricsEnabledValue', 'forceGmailButton', 'email'],
  independentVariables: ['openGmailButton'],
  eligibilityFunction: function (subject) {
    if (subject) {
      if (subject.forceGmailButton === 'true') {
        return true;
      }

      if (subject.forceGmailButton === 'false') {
        return false;
      }

      // if metrics is enabled and subject's email ends with @gmail.com
      if (subject.isMetricsEnabledValue && subject.email && subject.email.indexOf('@gmail.com') > 0) {
        return true;
      }
    }

    return false;
  },
  groupingFunction: function (subject) {
    var BUTTON_CHOICES = ['visible', 'invisible'];
    var choice = this.uniformChoice(BUTTON_CHOICES, subject.uniqueUserId);

    if (subject.forceGmailButton) {
      choice = subject.forceGmailButton;
    }

    return {
      openGmailButton: choice
    };
  }
};
