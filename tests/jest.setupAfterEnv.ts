import '@testing-library/jest-dom';

jest.mock('@/scripts/Api/getApiKey', () => {
  return {
    getApiKey: () => '',
  };
});

jest.mock('@/isStorybook', () => {
  return {
    isStorybook: () => false,
  };
});