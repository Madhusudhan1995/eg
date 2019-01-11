import { handleWalletCardsRequest } from '../../../src/helpers/walletCardsHelper'


it('works with async/await', async () => {
    expect.assertions(1);
    const data = await handleWalletCardsRequest(4);
    expect(data).toEqual();
});
  
  // async/await can also be used with `.resolves`.
  it('works with async/await and resolves', async () => {
    expect.assertions(1);
    await expect(handleWalletCardsRequest(5)).resolves.toEqual();
  });