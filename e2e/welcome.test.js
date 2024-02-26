/* eslint-disable no-undef */
import {waitFor, expect, element, by} from 'detox';

describe('Welcome screen', () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  it('should display welcome message', async () => {
    await waitFor(element(by.text('Hello Fisrt Test')))
      .toBeVisible()
      .withTimeout(5000);

    // Check if the element with text 'Hello Fisrt Test' is present
    const elementWithText = element(by.text('Hello Fisrt Testr'));
    await expect(elementWithText).toExist();
  });
});
