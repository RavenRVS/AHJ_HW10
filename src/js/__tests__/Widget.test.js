/**
 * @jest-environment jsdom
 */

/* eslint-disable import/extensions */
import Widget from '../Widget';

const widget = new Widget();

test('Is Valid with Space', () => {
  const received = widget.checkValidity('51.50851, -0.1257');
  expect(received).toEqual(['51.50851, -0.1257']);
});

test('Is valid without Space', () => {
  const received = widget.checkValidity('51.50851,0.1257');
  expect(received).toEqual(['51.50851,0.1257']);
});

test('Empty field', () => {
  const received = widget.checkValidity('');
  expect(received).toBe(null);
});

test('Wrong format', () => {
  const received = widget.checkValidity('675667,4883939');
  expect(received).toBe(null);
});

test('Is invalid', () => {
  const received = widget.checkValidity('fgdhhdhd, 34.99393');
  expect(received).toBe(null);
});
