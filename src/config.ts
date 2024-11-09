import dotenv from 'dotenv';
dotenv.config();

export const BOT_PREFIX: string[] = process.env.BOT_PREFIX ? process.env.BOT_PREFIX.split(',') : [];
export const BOT_TOKEN: string = process.env.BOT_TOKEN || '';
export const OWNER_IDS: string[] = process.env.OWNER_IDS ? process.env.OWNER_IDS.split(',') : [];