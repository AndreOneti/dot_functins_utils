import { threeDigits, twoDigits, generateUniqueID, log, waitFor } from '../index';

describe('Functions test', () => {

  it('should return is string equal 010', async () => {
    expect(threeDigits(10)).toBe('010');
  });

  it('should return is string equal 1000', async () => {
    expect(threeDigits(1000)).toBe('1000');
  });

  it('should return is string equal 001', async () => {
    expect(threeDigits(1)).toBe('001');
  });

  it('should return is string equal 01', async () => {
    expect(twoDigits(1)).toBe('01');
  });

  it('should return is string equal 11', async () => {
    expect(twoDigits(11)).toBe('11');
  });

  const regex = /(([0-9]|[a-z]){8}-([0-9]|[a-z]){4}-([0-9]|[a-z]){4}-([0-9]|[a-z]){4}-([0-9]|[a-z]){12})/;
  it('should return unique ID', async () => {
    expect(generateUniqueID()).toEqual(expect.stringMatching(regex));
  });

  it("should log message", () => {
    expect(log("Hello", "Debug")).toBe(undefined);
  });

  it("should wait a second", async () => {
    let timeInit = (new Date).getTime();
    let seconds = 10;
    await waitFor(seconds);
    let timeNow = (new Date).getTime();
    expect(timeNow - timeInit).toBeGreaterThanOrEqual(seconds);
    console.log("Time: ", timeNow - timeInit);
  });
});
