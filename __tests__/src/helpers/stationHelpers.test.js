import { handleGettingStations } from '../../../src/helpers/stationhelpers'


it('works with async/await', async () => {
    expect.assertions(1);
    const data = await handleGettingStations(4);
    expect(data).toEqual();
});
  
  // async/await can also be used with `.resolves`.
  it('works with async/await and resolves', async () => {
    expect.assertions(1);
    await expect(handleGettingStations(5)).resolves.toEqual();
  });