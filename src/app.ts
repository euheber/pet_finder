import fastify from "fastify"
import {PrismaClient} from "../generated/prisma/client.ts"
import { PrismaPg } from "@prisma/adapter-pg"
import { env } from "./.env/index.ts"


const connectionString = `${env.DATABASE_URL}`
const adapter = new PrismaPg({connectionString})

export const app = fastify()

const prisma = new PrismaClient({adapter})

export {prisma}