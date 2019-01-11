import {handleHomeDataRequest} from '../../../src/helpers/homeHelpers'


it('works with async/await', async () => {
    expect.assertions(1);
    const data = await handleHomeDataRequest(4);
    expect(data).toEqual();
});
  
  // async/await can also be used with `.resolves`.
  it('works with async/await and resolves', async () => {
    expect.assertions(1);
    await expect(handleHomeDataRequest(5)).resolves.toEqual(undefined);
  });