import type { FastifyBaseLogger } from "fastify";
import pino from "pino";
import type { Env } from "./env.js";

export function buildLogger(env: Env): FastifyBaseLogger {
  return pino({
    level: env.LOG_LEVEL,
    base: { service: env.SERVICE_NAME }
  }) as unknown as FastifyBaseLogger;
}
