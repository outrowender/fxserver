onNet('ev', () => {
    const user = (global as any).source

    emitNet('ev', user, { isMechanic: true });
});
