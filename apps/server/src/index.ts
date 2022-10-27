import { randomUUID } from "crypto";
import Fastify from "fastify";

const server = Fastify({ logger: true, genReqId: () => randomUUID() });

server.get("/health", (_, res) => {
  res.status(200);
  res.send();
  return;
});

server.get("/mock", (_, __) => {
  return { email: "example@email.com", name: "John Doe" };
});

async function start() {
  try {
    await server.listen({ port: 8080 });
    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;

    server.log.info(`server listening on ${address}:${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

start();
