import {handleContactUsRequest} from '../../../src/helpers/contactUsHelper'


it('works with async/await', async () => {
    expect.assertions(1);
    const Body = await handleContactUsRequest(4);
    expect(Body).toEqual(undefined);
  });
  // async/await can also be used with `.resolves`.
  it('works with async/await and resolves', async () => {
    expect.assertions(1);
    await expect(handleContactUsRequest(5)).resolves.toEqual(undefined);
    
  });