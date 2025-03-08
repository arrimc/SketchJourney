import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  port: process.env.PORT,
}));
