import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

console.log('🔍 DATABASE CONNECTION TEST');
console.log('============================');

const testConnection = async () => {
    try {
        console.log('📡 Environment Variables Check:');
        console.log('PORT:', process.env.PORT);
        console.log('NODE_ENV:', process.env.NODE_ENV);
        console.log('JWT_SECRET:', process.env.JWT_SECRET ? '✅ Set' : '❌ Missing');
        console.log('TMDB_API_KEY:', process.env.TMDB_API_KEY ? '✅ Set' : '❌ Missing');
        console.log('MONGO_URI:', process.env.MONGO_URI ? '✅ Set' : '❌ Missing');
        
        if (!process.env.MONGO_URI) {
            console.error('❌ MONGO_URI is not set in .env file');
            process.exit(1);
        }
        
        console.log('\n🔗 Connection Details:');
        const maskedUri = process.env.MONGO_URI.replace(/:[^:@]*@/, ':****@');
        console.log('Connection string:', maskedUri);
        
        console.log('\n📡 Attempting to connect to MongoDB...');
        
        // Set connection timeout
        const options = {
            serverSelectionTimeoutMS: 10000, // 10 seconds
            connectTimeoutMS: 10000, // 10 seconds
        };
        
        await mongoose.connect(process.env.MONGO_URI, options);
        console.log('✅ MongoDB connected successfully!');
        
        // Test database operations
        console.log('\n🧪 Testing database operations...');
        const db = mongoose.connection.db;
        const collections = await db.listCollections().toArray();
        console.log('📂 Available collections:', collections.length);
        
        // Test write operation
        const testCollection = db.collection('test');
        await testCollection.insertOne({ test: true, timestamp: new Date() });
        console.log('✅ Write test successful');
        
        // Test read operation
        const testDoc = await testCollection.findOne({ test: true });
        console.log('✅ Read test successful');
        
        // Cleanup
        await testCollection.deleteMany({ test: true });
        console.log('✅ Cleanup successful');
        
        console.log('\n🎉 All database tests passed!');
        await mongoose.disconnect();
        process.exit(0);
        
    } catch (error) {
        console.error('\n❌ MongoDB connection failed!');
        console.error('Error type:', error.constructor.name);
        console.error('Error message:', error.message);
        
        if (error.message.includes('authentication failed')) {
            console.error('\n🔧 Authentication Issue - Possible fixes:');
            console.error('1. Check username/password in MongoDB Atlas');
            console.error('2. Verify database user exists and has proper permissions');
            console.error('3. Check if IP address is whitelisted in Network Access');
        }
        
        if (error.message.includes('ENOTFOUND') || error.message.includes('connection')) {
            console.error('\n🌐 Network Issue - Possible fixes:');
            console.error('1. Check internet connection');
            console.error('2. Verify cluster URL is correct');
            console.error('3. Check firewall settings');
        }
        
        await mongoose.disconnect().catch(() => {});
        process.exit(1);
    }
};

testConnection();