import {handleFaqDataRequest} from '../../../src/helpers/faqhelper'


it('works with async/await', async () => {
    expect.assertions(1);
    const data = await handleFaqDataRequest(4);
    expect(data).toEqual();
});
  
  // async/await can also be used with `.resolves`.
  it('works with async/await and resolves', async () => {
    expect.assertions(1);
    await expect(handleFaqDataRequest(5)).resolves.toEqual(undefined);
  });