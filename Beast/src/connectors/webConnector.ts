export class WebConnector {
    async fetchData(url: string): Promise<any> {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        return await response.json();
    }

    parseResponse(data: any): any {
        // Implement parsing logic based on the expected structure of the data
        return data; // Modify this as needed to return the desired format
    }
}