import { shallowMount } from '@vue/test-utils';
import Bookmarks from '@/components/Bookmarks.vue';

describe('Bookmarks.vue', () => {
  beforeEach(() => {
    // This is part of the jest mock npm package
    // Otherwise the fetch fails
    fetch.resetMocks();
  });

  it('Decode properly', () => {
    // We don't use the data for testing this method
    // So we return anyting as mock, it doesn't matter
    fetch.mockResponseOnce(JSON.stringify({ data: true }));

    const expected = 'Hello World';
    const result = {
      hasToBeDecoded: true,
      value: window.btoa(unescape(encodeURIComponent(expected))),
    };

    const wrapper = shallowMount(Bookmarks);
    expect(wrapper.vm.decode(result)).toBe(expected);
  });
});
