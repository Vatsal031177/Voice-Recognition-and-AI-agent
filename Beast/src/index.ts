import { Assistant } from './core/assistant';
import { Manager } from './core/manager';
import { Runner } from './core/runner';
import { WebConnector } from './connectors/webConnector';
import { SearchConnector } from './connectors/searchConnector';

// Initialize the assistant
const assistant = new Assistant();
const manager = new Manager();
const runner = new Runner();

// Set up connectors
const webConnector = new WebConnector();
const searchConnector = new SearchConnector();

// Main function to start the assistant
async function main() {
    await assistant.initialize();
    manager.loadPlugins();
    runner.run();
}

// Execute the main function
main().catch(error => {
    console.error('Error starting the assistant:', error);
});