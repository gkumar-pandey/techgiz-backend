import app from './src/app';
import { connectDB } from './src/config/db';
import { ENV } from './src/config/env';

const start = async () => {
    await connectDB();
    app.listen(ENV.PORT, () => {
        console.log(`🚀 Server running on port ${ENV.PORT}`);
    });
};

start();