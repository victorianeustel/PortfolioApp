//preload images 
const cacheImages = async (srcArray, setIsLoaded) => {
    const promises = await srcArray.map((src) => {
        return new Promise(function (resolve, reject) {
            const img = new Image();
            
            img.src = src;
            img.onload = resolve();
            img.onerror = reject();
        });
    });
    await Promise.all(promises);

    setIsLoaded(true);
};

export default cacheImages