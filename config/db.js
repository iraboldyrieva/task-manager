import mongoose from 'mongoose';

const URI =
    'mongodb+srv://iraboldyrieva:WufzBzxq3iFrbzwg@cluster0.xlse8of.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose
    .connect(URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((e) => {
        console.error(e);
    });
