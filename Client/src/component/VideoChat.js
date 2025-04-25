import { VideoCall } from "stream-video";
import { useState, useEffect } from "react";

const VideoChat = () => {
  const [callState, setCallState] = useState("waiting");

  useEffect(() => {
    const startCall = async () => {
      const call = new VideoCall("1374437", "YOUR_CHANNEL_ID");
      call.on("state_changed", (state) => {
        setCallState(state);
      });

      await call.start();
    };

    if (callState === "waiting") {
      startCall();
    }
  }, [callState]);

  return (
    <div>
      {callState === "waiting" && <p>انتظر الطرف الآخر للانضمام...</p>}
      {callState === "in-progress" && <p>المكالمة جارية...</p>}
      {callState === "ended" && <p>انتهت المكالمة.</p>}
    </div>
  );
};

export default VideoChat;
