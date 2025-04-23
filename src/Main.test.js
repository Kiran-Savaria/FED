import { initializeTimes, updateTimes } from './components/Main';
import { fetchAPI } from './api'; // wherever fetchAPI is located

jest.mock('./api'); // mock the module

describe('Booking Times Reducers', () => {
  beforeEach(() => {
    // Reset mocks before each test
    fetchAPI.mockClear();
  });

  test('initializeTimes should return correct default times', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockReturnValue(mockTimes); // mock return for today’s date

    const result = initializeTimes();
    expect(result).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledTimes(1);
  });

  test('updateTimes should return updated times based on action date', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    const testDate = '2023-12-31';

    fetchAPI.mockReturnValue(mockTimes);

    const action = { type: 'update_times', date: testDate };
    const result = updateTimes([], action);

    expect(result).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledWith(testDate);
  });
});
