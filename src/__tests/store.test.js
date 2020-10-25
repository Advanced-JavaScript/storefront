import reducer, {setActive} from '../store/categories';

it('should have initial state', () => {
  const state = reducer(undefined, {});
  expect(state.activeCategory.name).toBe('Electronics products');
  expect(state.activeCategory.displayName).toBe('Electronics');
});

it('should have be able to swap categories', () => {
  const state = reducer(undefined, setActive('food'));
  expect(state.activeCategory.name).toBe('Food products');
  expect(state.activeCategory.displayName).toBe('Food');

});
