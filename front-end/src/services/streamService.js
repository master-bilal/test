import { StreamChat } from "stream-chat";

const client = StreamChat.getInstance("1374437"); // استبدل YOUR_API_KEY بالمفتاح الخاص بك

// إعداد قناة جديدة (اختياري)
const channel = client.channel("messaging", "channel-id", {
  members: ["user1", "user2"],
});

await channel.create();
