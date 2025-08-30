//step 1 rfce ✅
//step 2 return box ✅
//step 3 button back ✅
//step 4 make components
// step 4-1 common info (name, email, github) 
// step 4-2 skill img (list > img)
// step 4-3 primary project list with link
// step 4-4 sns link list with link
// step 4-5 ...
//step 5 import components ✅
//step 6 style components 
import React from "react";
import BackButton from "@/components/Button/BackButton";
import CommonInfo from "../../../components/info/CommonInfo";
import ProjectList from "../../../components/info/ProjectList";
import SkillInfo from "../../../components/info/SkillInfo";
import SnsList from "../../../components/info/SnsList";
import { getInfo } from "@/API/service";

export const dynamic = "force-dynamic";

function Info() {
  getInfo().then(data => console.log('info', data));
  
  return (
    <div>
      <img
        className="h-80 w-100 object-contain"
        src="../../../public/my-notion-face-portrait.png"
        alt="me-image"
      />
      <CommonInfo />
      <ProjectList />
      <SkillInfo />
      <SnsList />
      <BackButton>close</BackButton>
    </div>
  );
}

export default Info;
