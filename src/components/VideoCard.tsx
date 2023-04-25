import React from "react";
import { AspectRatio, Box, Icon } from "@chakra-ui/react";
import { BsPauseCircle, BsPlayCircle } from "react-icons/bs";

const VideoCard = ({ src }: { src: string }) => {
  const [pause, setPause] = React.useState<boolean>(true);
  const vidRef = React.useRef<any>(null);
  const handlePlay = (isPlay: boolean) => {
    if (isPlay) {
      vidRef.current.play();
      setPause(false);
    } else {
      vidRef.current.pause();
      setPause(true);
    }
  };
  return (
    <AspectRatio maxW="400px" ratio={9 / 16}>
      <Box rounded={"lg"}>
        <video
          ref={vidRef}
          src={src}
          style={{ width: "100%", height: "100%" }}
        />
        {pause ? (
          <Icon
            as={BsPlayCircle}
            onClick={() => {
              handlePlay(true);
            }}
            position={"absolute"}
            w={"3em"}
            h={"3em"}
            color={"whiteAlpha.800"}
          />
        ) : (
          <Icon
            as={BsPauseCircle}
            onClick={() => {
              handlePlay(false);
            }}
            position={"absolute"}
            w={"3em"}
            h={"3em"}
            color={"whiteAlpha.600"}
          />
        )}
      </Box>
    </AspectRatio>
  );
};

export default VideoCard;
