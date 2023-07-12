import path from 'path';

import 'dotenv/config';

export const BASE_DIR = path.dirname(path.dirname(__filename));

export const DEBUG = true;

export const MONGO_URI = process.env.MONGO_URI;
