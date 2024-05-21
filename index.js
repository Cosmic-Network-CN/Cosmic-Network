import express from 'express';
import http from 'node:http';
import { createBareServer } from '@tomphttp/bare-server-node';
import cors from 'cors';
import path from "path"; 
import { hostname } from "node:os"

const server = http.createServer();
const app = express(server);
const __dirname = process.cwd();
const bareServer = createBareServer('/bare/');
const PORT = 5505;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cors());


app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/public/index.html'));
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/public/index.html'));
});

app.get('/devs', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/public/developers&partners.html'));
});

app.get('/settings', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/public/settings.html'));
});

app.get('/roadmap', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/public/roadmap.html'));
});

app.get('/games', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/public/games.html'));
});

app.get('/discord', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/public/discord.html'));
});

server.on('request', (req, res) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeRequest(req, res)
    } else {
        app(req, res)
    }
})

server.on('upgrade', (req, socket, head) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeUpgrade(req, socket, head)
    } else {
        socket.end()
    }
})

server.on('listening', () => {
    const address = server.address();

    console.log("Listening on:");
    console.log(`\thttp://localhost:${address.port}`);
    console.log(`\thttp://${hostname()}:${address.port}`);
    console.log(
        `\thttp://${address.family === "IPv6" ? `[${address.address}]` : address.address
        }:${address.port}`
    );
})

server.listen({ port: PORT, })

// https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
    console.log("SIGTERM signal received: closing HTTP server");
    server.close();
    bareServer.close();
    process.exit(0);
}
