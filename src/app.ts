import fastify from "fastify"
import {PrismaClient} from "../generated/prisma/client.ts"


export const app = fastify()
const prisma = new PrismaClient()