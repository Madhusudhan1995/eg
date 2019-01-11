import { walletAddCardRequest } from '../../../src/helpers/walletHelper'


it('works with async/await', async () => {
    expect.assertions(1);
    const data = await walletAddCardRequest(4);
    expect(data).toEqual();
});
  
  // async/await can also be used with `.resolves`.
  it('works with async/await and resolves', async () => {
    expect.assertions(1);
    await expect(walletAddCardRequest(5)).resolves.toEqual();
  });