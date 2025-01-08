function startScanner() {
    const video = document.getElementById('qr-video');
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then((stream) => {
            video.srcObject = stream;
            video.play();
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            setInterval(() => {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height);
                if (code) {
                    alert(`QR Code Detected: ${code.data}`);
                    loadARModel(code.data);
                }
            }, 1000);
        })
        .catch(err => console.error('Camera permission denied!', err));
}

function loadARModel(modelUrl) {
    alert(`Loading 3D Model from: ${modelUrl}`);
    document.querySelector('a-box').setAttribute('gltf-model', modelUrl);
}
