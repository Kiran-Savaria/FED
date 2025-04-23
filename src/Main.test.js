import { initializeTimes, updateTimes } from "./components/Main";


describe('Booking Times Reducer Logic', () => {
    test('initializeTimes should return correct default times', () => {
        const result = initializeTimes();
        expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
      });

  test('updateTimes should return the correct times for given date', () => {
    const stateBefore = ['17:00', '18:00'];
    const action = { type: 'update_times', date: '2025-05-01' };
    const result = updateTimes(stateBefore, action);

    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
  });

  test('updateTimes should return previous state if action type is unknown', () => {
    const prevState = ['17:00', '18:00'];
    const action = { type: 'unknown_action' };
    const result = updateTimes(prevState, action);

    expect(result).toBe(prevState); // same reference
  });
});
