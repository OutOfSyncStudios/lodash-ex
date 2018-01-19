const chai = require('chai');

const expect = chai.expect;

describe('lodashExt', () => {
  const __ = require('../');

  it('loads', () => {
    expect(__.name).to.equal('lodash');
  });

  it('.isUnset(null) === true', () => {
    expect(__.isUnset(null)).to.equal(true);
  });

  it('.isUnset(undefined) === true', () => {
    expect(__.isUnset(undefined)).to.equal(true);
  });

  it('.isUnset([]) === false', () => {
    expect(__.isUnset([])).to.equal(false);
  });

  it('.isUnset({}) === false', () => {
    expect(__.isUnset({})).to.equal(false);
  });

  it('.isUnset(false) === false', () => {
    expect(__.isUnset(false)).to.equal(false);
  });

  it('.isUnset(true) === false', () => {
    expect(__.isUnset(true)).to.equal(false);
  });

  it('.hasValue(null) === false', () => {
    expect(__.hasValue(null)).to.equal(false);
  });

  it('.hasValue(undefined) === false', () => {
    expect(__.hasValue(undefined)).to.equal(false);
  });

  it('.hasValue([]) === true', () => {
    expect(__.hasValue([])).to.equal(true);
  });

  it('.hasValue({}) === true', () => {
    expect(__.hasValue({})).to.equal(true);
  });

  it('.hasValue(false) === true', () => {
    expect(__.hasValue(false)).to.equal(true);
  });

  it('.hasValue(true) === true', () => {
    expect(__.hasValue(true)).to.equal(true);
  });

  it('.implies(true, true) === true', () => {
    expect(__.implies(true, true)).to.equal(true);
  });

  it('.implies(true, false) === false', () => {
    expect(__.implies(true, false)).to.equal(false);
  });

  it('.implies(false, true) === true', () => {
    expect(__.implies(false, true)).to.equal(true);
  });

  it('.implies(false, false) === true', () => {
    expect(__.implies(false, false)).to.equal(true);
  });
});
