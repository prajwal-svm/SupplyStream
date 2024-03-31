function parseJwt(token) {
    if (!token) {
        return null;
    }
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

export { parseJwt };