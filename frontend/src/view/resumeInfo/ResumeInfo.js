import React from "react";
import AppTabs from "../../components/AppTabs/AppTabs";
import AppCard from "../../styleComp/AppCard";
import ProfileInfo from "../profile/ProfileInfo";

export default function ResumeInfo() {
  const tabs = [
    "Profile",
    "Experience",
    "Education",
    "Skills",
    "Summary",
    "Interests",
    "Photo & Social Links",
  ];
  return (
    <div className="container">
      <div className="row">
        <AppCard>
          <AppTabs tabs={tabs} getActive={(value) => console.log(value)} />
          {/* //Personal profile info */}
          <ProfileInfo />
        </AppCard>
      </div>
    </div>
  );
}
