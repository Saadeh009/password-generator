export async function GET(request) {
    try {
        const params = new URL(request.url).searchParams;
        const password = params.get("password");
        
        console.log("Password:", password);

        // Your logic here using the password parameter

        let strength = "Unknown";  // Example strength level
        if (password.length < 8) {
          strength = "Weak";
        } else if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/\d/)) {
          strength = "Strong";
        } else {
          strength = "Moderate";
        }
      
        // res.status(200).json({ strength })

        return new Response(strength)
    } catch (error) {
        console.error("Error extracting password:", error);
        return new Response("Error extracting password", { status: 400 });
    }
}