const { app } = require('./index');
const request = require('supertest');

test('get /', async () => {
    const res = await request(app).get('/');
    console.log(res);

    expect(res.status).toBe(200);
    expect(res.text).toEqual('Hello World!');
});

test('get /test', async () => {
    const res = await request(app).get('/test');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ hello: 'world' });
});
