import { Assistant } from '../src/core/assistant';

describe('Assistant Class', () => {
    let assistant: Assistant;

    beforeEach(() => {
        assistant = new Assistant();
        assistant.initialize();
    });

    test('should initialize correctly', () => {
        expect(assistant).toBeDefined();
    });

    test('should process command correctly', () => {
        const command = 'test command';
        const result = assistant.processCommand(command);
        expect(result).toBeDefined();
    });

    test('should fetch results correctly', async () => {
        const query = 'example query';
        const results = await assistant.fetchResults(query);
        expect(results).toBeInstanceOf(Array);
    });
});