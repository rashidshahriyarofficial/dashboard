import { SearchIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { AnalyticsSection } from "./sections/AnalyticsSection";
import { DashboardSection } from "./sections/DashboardSection/DashboardSection";
import { SidebarSection } from "./sections/SidebarSection/SidebarSection";

export const Frame = (): JSX.Element => {
  // Header icons data
  const headerIcons = [
    { src: "/component-1-64.svg", alt: "Component", hasNotification: false },
    { src: "/component-1-77.svg", alt: "Component", hasNotification: false },
    {
      src: "/component-1-7.svg",
      alt: "Component",
      hasNotification: true,
      notificationColor: "bg-aurorathemewagoncomcabaret",
    },
  ];

  return (
    <div className="flex bg-aurorathemewagoncombunker">
      {/* Sidebar */}
      <aside className="w-[16%] h-[47vh]">
        <SidebarSection />
      </aside>

      {/* Main content */}
      <div className="flex flex-col w-[84%]">
        {/* Header */}
        <header className="h-[83px] border-b border-[#262d30] bg-aurorathemewagoncombunker">
          <div className="flex items-center justify-between h-full px-10 py-[19px]">
            {/* SearchIcon */}
            <div className="w-[364px]">
              <div className="flex items-center bg-[#1b2124] rounded-[20px] pl-4">
                <SearchIcon className="w-5 h-5 text-aurorathemewagoncomgull-gray" />
                <Input
                  className="h-9 border-0 bg-transparent text-sm text-aurorathemewagoncomgull-gray font-normal focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Search"
                />
              </div>
            </div>

            {/* User actions */}
            <div className="flex items-center gap-2">
              {headerIcons.map((icon, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`min-w-9 h-9 p-0 ${index > 0 ? "bg-[#1b2124]" : ""} rounded-[18px]`}
                >
                  <div className="relative">
                    <img className="w-6 h-6" alt={icon.alt} src={icon.src} />
                    {icon.hasNotification && (
                      <div
                        className={`absolute w-2.5 h-2.5 top-[-7px] left-[19px] ${icon.notificationColor} rounded-[5px]`}
                      />
                    )}
                  </div>
                </Button>
              ))}

              {/* User avatar */}
              <div className="flex w-11 h-11 items-center justify-center relative rounded-[22px]">
                <div className="relative">
                  <Avatar className="w-10 h-10 border border-[#06080a] bg-aurorathemewagoncomtrout">
                    <AvatarImage
                      src="/guest.png"
                      alt="User avatar"
                      className="object-cover"
                    />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="absolute w-2.5 h-2.5 top-[29px] left-[29px] bg-aurorathemewagoncomkeppel rounded-[5px]" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Section */}
        <div className="h-[95vh]">
          <DashboardSection />
        </div>

        {/* Analytics Section */}
        <div className="h-[2vh]">
          <AnalyticsSection />
        </div>
      </div>

      {/* Customize button */}
      <div className="absolute w-[114px] h-7 top-[-71px] left-[1853px] bg-[#1b2124] rounded-[8px_8px_0px_0px] border border-solid border-[#262d30] -rotate-90">
        <div className="inline-flex flex-col items-start pt-0 pb-1 px-0 absolute top-1.5 left-[7px]">
          <img
            className="relative w-4 h-4 rotate-90"
            alt="Component"
            src="/component-1-23.svg"
          />
        </div>
        <div className="absolute w-[76px] h-[19px] top-1 left-[27px] font-[number:var(--aurora-themewagon-com-plus-jakarta-sans-semibold-upper-font-weight)] text-aurorathemewagoncommystic text-[length:var(--aurora-themewagon-com-plus-jakarta-sans-semibold-upper-font-size)] text-center leading-[var(--aurora-themewagon-com-plus-jakarta-sans-semibold-upper-line-height)] whitespace-nowrap font-aurora-themewagon-com-plus-jakarta-sans-semibold-upper tracking-[var(--aurora-themewagon-com-plus-jakarta-sans-semibold-upper-letter-spacing)] [font-style:var(--aurora-themewagon-com-plus-jakarta-sans-semibold-upper-font-style)]">
          CUSTOMIZE
        </div>
      </div>
    </div>
  );
};
