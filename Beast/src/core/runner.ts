export class Runner {
    run(task: () => void): void {
        console.log("Starting the task...");
        task();
        console.log("Task completed.");
    }

    stop(): void {
        console.log("Stopping the runner...");
        // Logic to stop the runner if needed
    }
}