
// Export ActionTypes Constant
export const types = {
  INCREMENT: 'INCREMENT'
};

/**
 * Action that triggers the increment of the current counter value.
 */
export function increment() {
  return {
    type: types.INCREMENT
  };
}