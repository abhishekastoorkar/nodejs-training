const app = require('../app')();
const supertest = require('supertest');
const request = supertest(app);

describe('Trainer API', () => {
  it('should fetch all trainers', async () => {
    const res = await request.get('/api/v1.0/trainers');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('trainers');
  });

  it('should show one trainer', async () => {
    const res = await request.get('/api/v1.0/trainers/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('trainer');
  });

  it('should show one trainer information', async () => {
    const res = await request.get('/api/v1.0/trainers/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({
      trainer: {
        id: 1,
        trainer_name: 'steve roger',
        trainer_email: 'steveroger@infomail.com',
        trainer_phone: '020-232432342',
        trainer_address: 'new york USA',
        trainer_photo_url: 'https:aws.s3.image@aws.com',
        is_active: true,
      },
    });
  });

  it('should create a new trainer', async () => {
    const res = await request
      .post('/api/v1.0/trainers')

      .field('name', 'donald trump')
      .field('email', 'donaldtrump@ifomail.com')
      .field('phone', '002-343242324')
      .field('address', 'Washington DC USA')
      .field('status', '1')
      .attach('image', 'tests/trainer.png');

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('trainer');
  });

  it('should update a trainer', async () => {
    const res = await request
      .put('/api/v1.0/trainers/1')
      .field('name', 'steve roger')
      .field('email', 'steveroger@infomail.com')
      .field('phone', '002-3232323')
      .field('address', 'Washington DC USA')
      .field('status', '1')
      .attach('image', 'tests/trainer.png');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({
      trainer: {
        id: 1,
        trainer_name: 'steve roger',
        trainer_email: 'steveroger@infomail.com',
        trainer_phone: '002-3232323',
        trainer_address: 'Washington DC USA',
        trainer_photo_url:
          'https://nodejs-training.s3.amazonaws.com/steve_roger_trainer.png',
        is_active: true,
      },
    });
  });

  it('should delete a trainer', async () => {
    const res = await request.del('/api/v1.0/trainers/1');
    expect(res.statusCode).toEqual(200);
  });

  it('should respond with status code 404 if resource is not found', async () => {
    const res = await request.get(`/api/v1.0/trainers/18`);
    expect(res.statusCode).toEqual(404);
  });

  it('should respond with status code 404 if improper url', async () => {
    const res = await request.get(`/api/v1.0/`);
    expect(res.statusCode).toEqual(404);
  });
});
