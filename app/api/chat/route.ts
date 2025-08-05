import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a helpful fitness assistant." },
                    { role: "user", content: message },
                ],
                temperature: 0.7,
            }),
        });


        const data = await openaiRes.json();
        console.log("🔍 OpenAI raw response:", JSON.stringify(data, null, 2));

        const reply = data.choices?.[0]?.message?.content;

        if (!reply) {
            return NextResponse.json({ response: "Sorry, no valid reply from OpenAI." });
        }

        return NextResponse.json({ response: reply });
    } catch (err) {
        console.error("❌ OpenAI error:", err);
        return NextResponse.json({ response: "Error talking to OpenAI." });
    }
}

