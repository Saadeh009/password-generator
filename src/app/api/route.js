export async function GET(request) {
    try {
        const params = new URL(request.url).searchParams;
        const password = params.get("password");
        
        console.log("Password:", password);

        // Your logic here using the password parameter

        return new Response("Password received successfully");
    } catch (error) {
        console.error("Error extracting password:", error);
        return new Response("Error extracting password", { status: 400 });
    }
}