import { Button, Modal } from 'antd';
import React, { useRef, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player';
import './ListenComponent.scss';

interface OpenProps {
  setIsOpen: (value: boolean) => void;
  onIsOpen: boolean;
  onVideo: string;
}

const ListenComponent = (props: OpenProps) => {
  const [open, setOpen] = useState(false);

  const [playTime, setPlayTime] = useState(0);
  const [play, setPlay] = useState<boolean>(false);

  const formatTime = (time: number) => {
    const date = new Date(time * 1000);
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();
    const second = ('0' + date.getUTCSeconds()).slice(-2);
    if (hour) {
      return `${hour}:${('0' + minute).slice(-2)}:${second}`;
    }
    return `${minute}:${second}`;
  };
  const handleProgress = (state: { playedSeconds: React.SetStateAction<number> }) => {
    setPlayTime(state.playedSeconds);
  };

  const handleCancel = () => {
    setPlay(false);
    props.setIsOpen(false);
  };

  return (
    <div className="listen__page">
      <Modal open={props.onIsOpen} onCancel={handleCancel} className="modal__listen">
        <ReactPlayer
          url={props.onVideo}
          width="330px"
          height="190px"
          playing={play}
          controls
          onProgress={handleProgress}
          style={{ marginTop: -15, marginLeft: -19 }}
        />

        <div className="listen__close" onClick={handleCancel}>
          x
        </div>
      </Modal>
    </div>
  );
};

export default ListenComponent;
