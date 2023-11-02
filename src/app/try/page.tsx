import React from "react";
import Sidebar from "@/components/Sidebar";
import ButtonGallery from "@/components/ButtonGallery";

const Try = () => {

  return (
    <div className="border flex flex-row justify-around p-10">
      <div className="w-1/5">
        <Sidebar></Sidebar>
      </div>
      <div className="w-4/5">
        <ButtonGallery></ButtonGallery>
      </div>
    </div>
  );
};

export default Try;
