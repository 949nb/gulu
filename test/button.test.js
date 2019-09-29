import Vue from 'vue';
import Button from '../src/button';

const { expect } = chai;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Button', () => {
  it('存在.', () => {
    expect(Button).to.be.ok;
  });
});
