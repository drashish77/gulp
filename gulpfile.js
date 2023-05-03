import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

export default (async () => {
    await imagemin(['input/*.{jpg,jpeg,png}'], {
        destination: 'output',
        plugins: [
            imageminWebp({ quality: 60 })
        ]
    });

    console.log('Images optimized');
})

