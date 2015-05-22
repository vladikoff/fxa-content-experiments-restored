module.exports = {
  name: 'mailcheck is enable or disabled',
  hypothesis: 'mailcheck will lead to higher confirmation rate of accounts',
  endDate: '2015-11-01',
  subjectAttributes: ['sessionId'],
  independentVariables: ['mailcheckEnabled'],
  eligibilityFunction: function (subject) {
    console.log('eligibilityFunction');
    console.log(subject);
    // a random sampling of 10% of sessions will be in the experiment
    return this.bernoulliTrial(0.1, subject.sessionId)
  },
  groupingFunction: function (subject) {
    console.log('groupingFunction');
    // 50% of participants will see blue, the rest green
    return {
      mailcheckEnabled: this.uniformChoice([false, true], subject.sessionId)
    }
  }
}
