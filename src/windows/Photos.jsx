import { WindowControls } from "@components";
import { Search } from "lucide-react";
import WindowWrapper from "./../hoc/WindowWrapper";

const Photos = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <Search className="icon" />
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
