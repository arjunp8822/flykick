import React from "react";
import { FaSalesforce } from "react-icons/fa";
import adwords from "../assets/companies/adwords.png";
import gmail from "../assets/companies/gmail.png";
import hubspot from "../assets/companies/hubspot.png";
import outlook from "../assets/companies/outlook.png";
import salesforce from "../assets/companies/salesforce.png";
import slack from "../assets/companies/slack.png";
import teams from "../assets/companies/teams.svg";
import zoom from "../assets/companies/zoom.png";

const Integrations = () => {
  return (
    <div>
      <div className="grid grid-cols-4 md:grid-cols-4 gap-8 md:gap-16 items-center place-items-center">
        <img src={adwords} alt="adwords" className="w-8 md:w-16" />
        <img src={gmail} alt="gmail" className="w-8 md:w-16" />
        <img src={hubspot} alt="hubspot" className="w-8 md:w-16" />
        <img src={outlook} alt="outlook" className="w-8 md:w-16" />
        <img src={salesforce} alt="salesforce" className="w-8 md:w-16" />
        <img src={slack} alt="slack" className="w-8 md:w-16" />
        <img src={teams} alt="teams" className="w-8 md:w-16" />
        <img src={zoom} alt="zoom" className="w-8 md:w-16" />
      </div>
    </div>
  );
};

export default Integrations;
