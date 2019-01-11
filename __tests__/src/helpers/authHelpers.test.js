import { 
  authenticateUser, 
  handleUserDetailsRequest, 
  handleRegisterUser, 
  handleUserLogout } 
  from '../../../src/helpers/authHelpers';


// it('works with async/await', async () => {
//     expect.assertions(0);
//     const data = await authenticateUser(4);
//     expect(data).toEqual();
// });
  
  // async/await can also be used with `.resolves`.
  it('works with async/await and resolves', async () => {
    expect.assertions(1);
    await expect(authenticateUser(5)).toEqual(
                {"_40": 0, 
                "_55": null, 
                "_65": 0, 
                "_72": null
              });
  });

//   it('works with async/await', async () => {
//     expect.assertions(1);
//     const data = await handleUserDetailsRequest(4);
//     expect(data).toEqual();
// });
  
  // async/await can also be used with `.resolves`.
  it('works with async/await and resolves', async () => {
    expect.assertions(1);
    await expect(handleUserDetailsRequest(5)).resolves.toEqual();
  });

//   it('works with async/await', async () => {
//     expect.assertions(0);
//     const data = await handleRegisterUser(4);
//     expect(data).toEqual();
// });
  
  // async/await can also be used with `.resolves`.
  it('works with async/await and resolves', async () => {
    expect.assertions(1);
    await expect(handleRegisterUser(5)).toEqual(
                {"_40": 0, 
                "_55": null, 
                "_65": 0, 
                "_72": null
              });
  });
//   it('works with async/await', async () => {
//     expect.assertions(0);
//     const data = await handleUserLogout(4);
//     expect(data).toEqual();
// });
  
  // // async/await can also be used with `.resolves`.
  // it('works with async/await and resolves', async () => {
  //   expect.assertions(0);
  //   await expect(handleUserLogout(5)).toEqual();
  // });

  

  