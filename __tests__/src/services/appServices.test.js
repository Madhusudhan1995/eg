import appServices from '../../../src/services/appService'

it('works with async/await', async () => {
    expect.assertions(1);
    const data = await appServices(4);
    expect(data).toEqual({
                        "_abort": false, 
                        "_raw": [], 
                        "body": "", 
                        "bodyUsed": false, 
                        "headers": {"_headers": {}}, 
                        "ok": true, 
                        "size": 0, 
                        "status": 200, 
                        "statusText": "OK", 
                        "timeout": 0, 
                        "url": undefined});
  });
  
  // async/await can also be used with `.resolves`.
  it('works with async/await and resolves', async () => {
    expect.assertions(1);
    await expect(appServices(5)).resolves.toEqual({
                        "_abort": false, 
                        "_raw": [], 
                        "body": "", 
                        "bodyUsed": false, 
                        "headers": {"_headers": {}}, 
                        "ok": true, 
                        "size": 0, 
                        "status": 200, 
                        "statusText": "OK", 
                        "timeout": 0, 
                        "url": undefined});
  });







// it('async test', async function() {
//     global.fetch = jest.fn().mockImplementation(() => {
//         var url = new Promise ((resolve,reject) => {
//             resolve({
//                 json:function()
//                 {
//                     return { id:1}
//                 }
//             })
//         })
//         return url
//     })
//     const response = await appServices.all()
//     expect(response.id).toBe(1)
// })