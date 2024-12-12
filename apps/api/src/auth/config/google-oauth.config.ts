import { registerAs } from "@nestjs/config";

export default registerAs("google0Auth",()=>({
    clientD: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
}))