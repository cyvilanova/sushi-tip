import Component from '@ember/component';

export default Component.extend({
  total: 0,

  actions: {
    setTotal(value) {
      console.log(value);
      this.set('total', value);
    }
  }
});
