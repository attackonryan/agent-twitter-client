import fetch from 'node-fetch'
import { HttpsProxyAgent } from 'https-proxy-agent';

const proxyUrl = process.env['PROXY_URL'];

export const nodeFetch = (...params: Parameters<typeof fetch>) => {
    const [url, options] = params || []
    return fetch(url, {
        ...options,
        // add proxy agent if PROXY_URL is provided
        agent: proxyUrl ? new HttpsProxyAgent(proxyUrl) : undefined
    });
}
