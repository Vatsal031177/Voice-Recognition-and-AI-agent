import { Assistant } from './core/assistant';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const assistant = new Assistant();

const promptUser = () => {
    rl.question('Enter a command: ', async (command) => {
        try {
            const result = await assistant.processCommand(command);
            console.log('Result:', result);
        } catch (error) {
            console.error('Error processing command:', error);
        }
        promptUser();
    });
};

const initializeCLI = async () => {
    await assistant.initialize();
    console.log('Assistant is ready. You can start entering commands.');
    promptUser();
};

initializeCLI();