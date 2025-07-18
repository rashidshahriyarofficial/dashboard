import { ChevronRightIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { ScrollArea } from "../../../../components/ui/scroll-area";

// Define menu item types
interface MenuItem {
  icon: string;
  label: string;
  href?: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  hasNotification?: boolean;
  isNew?: boolean;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const SidebarSection = (): JSX.Element => {
  // Data for homepage section
  const homepageItems: MenuItem[] = [
    { icon: "/component-1-36.svg", label: "E-commerce", isActive: true },
    {
      icon: "/component-1-20.svg",
      label: "Project",
      href: "https://aurora.themewagon.com/dashboard/project",
    },
    {
      icon: "/component-1-21.svg",
      label: "CRM",
      href: "https://aurora.themewagon.com/dashboard/crm",
    },
    {
      icon: "/component-1-47.svg",
      label: "Analytics",
      href: "https://aurora.themewagon.com/dashboard/analytics",
    },
    {
      icon: "/component-1-15.svg",
      label: "HRM",
      href: "https://aurora.themewagon.com/dashboard/hrm",
    },
    {
      icon: "/component-1-19.svg",
      label: "Time Tracker",
      href: "https://aurora.themewagon.com/dashboard/time-tracker",
      isNew: true,
    },
  ];

  // Data for apps section
  const appsItems: MenuItem[] = [
    {
      icon: "/component-1-38.svg",
      label: "E-commerce",
      hasDropdown: true,
      hasNotification: true,
    },
    { icon: "/component-1-21.svg", label: "CRM", hasDropdown: true },
    { icon: "/component-1-67.svg", label: "E-mail", hasDropdown: true },
    { icon: "/component-1-25.svg", label: "Kanban", hasDropdown: true },
    {
      icon: "/component-1-59.svg",
      label: "Chat",
      href: "https://aurora.themewagon.com/apps/chat",
    },
    {
      icon: "/component-1-57.svg",
      label: "Social",
      href: "https://aurora.themewagon.com/apps/social",
    },
    {
      icon: "/component-1-50.svg",
      label: "File manager",
      href: "https://aurora.themewagon.com/file-manager",
      isNew: true,
    },
    {
      icon: "/component-1-22.svg",
      label: "Calendar",
      href: "https://aurora.themewagon.com/apps/calendar",
      isNew: true,
    },
    {
      icon: "/component-1-9.svg",
      label: "Scheduler",
      href: "https://aurora.themewagon.com/apps/scheduler",
      isNew: true,
    },
  ];

  // Data for pages section
  const pagesItems: MenuItem[] = [
    {
      icon: "/component-1-13.svg",
      label: "Starter",
      href: "https://aurora.themewagon.com/pages/starter",
    },
    {
      icon: "/component-1-5.svg",
      label: "Notifications",
      href: "https://aurora.themewagon.com/pages/notifications",
    },
    { icon: "/component-1-32.svg", label: "Events", hasDropdown: true },
    { icon: "/component-1-85.svg", label: "Authentication", hasDropdown: true },
    {
      icon: "/component-1-2.svg",
      label: "Error 404",
      href: "https://aurora.themewagon.com/error/404",
    },
  ];

  // Data for misc section
  const miscItems: MenuItem[] = [
    {
      icon: "/component-1-86.svg",
      label: "Landing",
      href: "https://aurora.themewagon.com/coming-soon",
    },
    {
      icon: "/component-1-54.svg",
      label: "Account",
      href: "https://aurora.themewagon.com/account",
      isNew: true,
    },
    {
      icon: "/component-1-8.svg",
      label: "Pricing",
      hasDropdown: true,
      hasNotification: true,
    },
    {
      icon: "/component-1-81.svg",
      label: "FAQ",
      href: "https://aurora.themewagon.com/faq",
    },
    { icon: "/component-1-68.svg", label: "Multi level", hasDropdown: true },
  ];

  // Data for docs section
  const docsItems: MenuItem[] = [
    { icon: "/component-1-17.svg", label: "Guide", hasDropdown: true },
    { icon: "/component-1-28.svg", label: "Components", hasDropdown: true },
    {
      icon: "/component-1-72.svg",
      label: "Changelog",
      href: "https://aurora.themewagon.com/documentation/changelog",
    },
    {
      icon: "/component-1-70.svg",
      label: "Migration",
      href: "https://aurora.themewagon.com/documentation/migration",
    },
  ];

  // Combine all sections
  const menuSections: MenuSection[] = [
    { title: "HOMEPAGE", items: homepageItems },
    { title: "APPS", items: appsItems },
    { title: "PAGES", items: pagesItems },
    { title: "MISC", items: miscItems },
  ];

  return (
    <aside className="flex flex-col w-[300px] h-full border-r border-[#262d30] bg-aurorathemewagoncomwoodsmoke">
      {/* Logo section */}
      <div className="flex items-center pl-12 pr-6 py-[18.25px]">
        <div className="flex items-center">
          <img
            className="w-[26px] h-10"
            alt="Aurora Logo"
            src="/component-1-10.svg"
          />
          <div className="flex flex-col items-start pl-[5px] pr-2 py-2">
            <a
              className="w-fit mt-[-1.00px] bg-[linear-gradient(141deg,rgba(32,222,153,1)_7%,rgba(125,177,245,1)_28%,rgba(90,158,246,1)_49%,rgba(156,174,184,1)_50%,rgba(156,174,184,1)_88%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-normal text-transparent text-[29.5px] leading-[29.5px] whitespace-nowrap"
              href="https://aurora.themewagon.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="font-medium text-black tracking-[-0.24px]">
                aurora
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <ScrollArea className="flex-1">
        <div className="flex flex-col w-full px-8 py-4 gap-6">
          {/* Render menu sections */}
          {menuSections.map((section, sectionIndex) => (
            <div key={`section-${sectionIndex}`} className="w-full">
              <div className="flex flex-col w-full">
                <div className="pl-4 pr-0 pt-[7.3px] pb-[8.1px]">
                  <div className="font-aurora-themewagon-com-plus-jakarta-sans-bold-upper font-[number:var(--aurora-themewagon-com-plus-jakarta-sans-bold-upper-font-weight)] text-aurorathemewagoncomslate-gray text-[length:var(--aurora-themewagon-com-plus-jakarta-sans-bold-upper-font-size)] tracking-[var(--aurora-themewagon-com-plus-jakarta-sans-bold-upper-letter-spacing)] leading-[var(--aurora-themewagon-com-plus-jakarta-sans-bold-upper-line-height)] [font-style:var(--aurora-themewagon-com-plus-jakarta-sans-bold-upper-font-style)]">
                    {section.title}
                  </div>
                </div>

                {/* Render menu items */}
                <div className="mt-[34px] space-y-[33px]">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={`item-${sectionIndex}-${itemIndex}`}
                      className="w-full flex items-center"
                    >
                      {item.href && !item.hasDropdown ? (
                        <a
                          href={item.href}
                          rel="noopener noreferrer"
                          target="_blank"
                          className={`flex min-w-[180px] items-center px-4 py-[3.5px] w-full rounded-lg ${item.isActive ? "bg-[#0a1b30]" : ""}`}
                        >
                          <div className="inline-flex items-start">
                            <div className="inline-flex min-w-5 items-start pl-0 pr-1.5 py-0">
                              <img
                                className="w-3.5 h-3.5"
                                alt="Icon"
                                src={item.icon}
                              />
                            </div>
                          </div>
                          <div className="flex items-center px-0 py-1 flex-1">
                            <div className="flex flex-col items-start flex-1">
                              <div className="flex-col flex items-start w-full">
                                <span
                                  className={`font-aurora-themewagon-com-semantic-heading-6 font-[number:var(--aurora-themewagon-com-semantic-heading-6-font-weight)] ${item.isActive ? "text-aurorathemewagoncomcornflower-blue" : "text-aurorathemewagoncomcatskill-white"} text-[length:var(--aurora-themewagon-com-semantic-heading-6-font-size)] tracking-[var(--aurora-themewagon-com-semantic-heading-6-letter-spacing)] leading-[var(--aurora-themewagon-com-semantic-heading-6-line-height)] [font-style:var(--aurora-themewagon-com-semantic-heading-6-font-style)]`}
                                >
                                  {item.label}
                                </span>
                                {item.isNew && (
                                  <Badge className="ml-2 px-[4.8px] py-[3px] bg-aurorathemewagoncomtan-hide-15 border-[#f8a25040] text-aurorathemewagoncomrajah font-aurora-themewagon-com-semantic-heading-6-title font-[number:var(--aurora-themewagon-com-semantic-heading-6-title-font-weight)] text-[length:var(--aurora-themewagon-com-semantic-heading-6-title-font-size)] tracking-[var(--aurora-themewagon-com-semantic-heading-6-title-letter-spacing)] leading-[var(--aurora-themewagon-com-semantic-heading-6-title-line-height)] [font-style:var(--aurora-themewagon-com-semantic-heading-6-title-font-style)]">
                                    New
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div
                          className={`flex min-w-[180px] items-center px-4 py-[3.5px] w-full rounded-lg ${item.isActive ? "bg-[#0a1b30]" : ""}`}
                        >
                          <div className="inline-flex items-start">
                            <div className="inline-flex min-w-5 items-start pl-0 pr-1.5 py-0">
                              <img
                                className="w-3.5 h-3.5"
                                alt="Icon"
                                src={item.icon}
                              />
                            </div>
                          </div>
                          <div className="flex items-center justify-between w-full">
                            <div className="flex flex-col items-start px-0 py-1 flex-1">
                              <div className="flex-col flex items-start w-full">
                                <div className="relative w-full">
                                  <span
                                    className={`font-aurora-themewagon-com-semantic-heading-6 font-[number:var(--aurora-themewagon-com-semantic-heading-6-font-weight)] ${item.isActive ? "text-aurorathemewagoncomcornflower-blue" : "text-aurorathemewagoncomcatskill-white"} text-[length:var(--aurora-themewagon-com-semantic-heading-6-font-size)] tracking-[var(--aurora-themewagon-com-semantic-heading-6-letter-spacing)] leading-[var(--aurora-themewagon-com-semantic-heading-6-line-height)] [font-style:var(--aurora-themewagon-com-semantic-heading-6-font-style)]`}
                                  >
                                    {item.label}
                                  </span>
                                  {item.hasNotification && (
                                    <div className="absolute w-2 h-2 top-0.5 left-[81px] bg-aurorathemewagoncomtan-hide rounded" />
                                  )}
                                  {item.isNew && (
                                    <Badge className="ml-2 px-[4.8px] py-[3px] bg-aurorathemewagoncomtan-hide-15 border-[#f8a25040] text-aurorathemewagoncomrajah font-aurora-themewagon-com-semantic-heading-6-title font-[number:var(--aurora-themewagon-com-semantic-heading-6-title-font-weight)] text-[length:var(--aurora-themewagon-com-semantic-heading-6-title-font-size)] tracking-[var(--aurora-themewagon-com-semantic-heading-6-title-letter-spacing)] leading-[var(--aurora-themewagon-com-semantic-heading-6-title-line-height)] [font-style:var(--aurora-themewagon-com-semantic-heading-6-title-font-style)]">
                                      New
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                            {item.hasDropdown && (
                              <img
                                className="w-3 h-3"
                                alt="Dropdown"
                                src="/component-1-6.svg"
                              />
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Docs section with search */}
          <div className="flex flex-col items-start gap-4 pt-[32.8px]">
            <div className="w-full">
              <div className="flex items-center gap-1 pl-3 pr-[39px] py-1.5 w-full rounded-3xl border border-solid border-[#262d30] relative">
                <SearchIcon className="w-4 h-4 text-aurorathemewagoncomgull-gray" />
                <Input
                  className="border-0 bg-transparent h-[18px] px-0 py-[1.4px] text-aurorathemewagoncomgull-gray font-aurora-themewagon-com-plus-jakarta-sans-regular font-[number:var(--aurora-themewagon-com-plus-jakarta-sans-regular-font-weight)] text-[length:var(--aurora-themewagon-com-plus-jakarta-sans-regular-font-size)] tracking-[var(--aurora-themewagon-com-plus-jakarta-sans-regular-letter-spacing)] leading-[var(--aurora-themewagon-com-plus-jakarta-sans-regular-line-height)] [font-style:var(--aurora-themewagon-com-plus-jakarta-sans-regular-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="SearchIcon Docs"
                />
                <div className="absolute top-1 right-3">
                  <ChevronRightIcon className="w-3.5 h-3.5 text-aurorathemewagoncomgull-gray" />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="pl-4 pr-0 pt-[7.3px] pb-[8.1px]">
                <div className="font-aurora-themewagon-com-plus-jakarta-sans-bold-upper font-[number:var(--aurora-themewagon-com-plus-jakarta-sans-bold-upper-font-weight)] text-aurorathemewagoncomslate-gray text-[length:var(--aurora-themewagon-com-plus-jakarta-sans-bold-upper-font-size)] tracking-[var(--aurora-themewagon-com-plus-jakarta-sans-bold-upper-letter-spacing)] leading-[var(--aurora-themewagon-com-plus-jakarta-sans-bold-upper-line-height)] [font-style:var(--aurora-themewagon-com-plus-jakarta-sans-bold-upper-font-style)]">
                  DOCS
                </div>
              </div>

              <div className="mt-[34px] space-y-[33px]">
                {docsItems.map((item, index) => (
                  <div
                    key={`docs-item-${index}`}
                    className="w-full flex items-center"
                  >
                    {item.href && !item.hasDropdown ? (
                      <a
                        href={item.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex min-w-[180px] items-center px-4 py-[3.5px] w-full rounded-lg"
                      >
                        <div className="inline-flex items-start">
                          <div className="inline-flex min-w-5 items-start pl-0 pr-1.5 py-0">
                            <img
                              className="w-3.5 h-3.5"
                              alt="Icon"
                              src={item.icon}
                            />
                          </div>
                        </div>
                        <div className="flex items-center px-0 py-1 flex-1">
                          <div className="flex flex-col items-start flex-1">
                            <div className="flex-col flex items-start w-full">
                              <span className="font-aurora-themewagon-com-semantic-heading-6 font-[number:var(--aurora-themewagon-com-semantic-heading-6-font-weight)] text-aurorathemewagoncomcatskill-white text-[length:var(--aurora-themewagon-com-semantic-heading-6-font-size)] tracking-[var(--aurora-themewagon-com-semantic-heading-6-letter-spacing)] leading-[var(--aurora-themewagon-com-semantic-heading-6-line-height)] [font-style:var(--aurora-themewagon-com-semantic-heading-6-font-style)]">
                                {item.label}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex min-w-[180px] items-center px-4 py-[3.5px] w-full rounded-lg">
                        <div className="inline-flex items-start">
                          <div className="inline-flex min-w-5 items-start pl-0 pr-1.5 py-0">
                            <img
                              className="w-3.5 h-3.5"
                              alt="Icon"
                              src={item.icon}
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div className="flex flex-col items-start px-0 py-1 flex-1">
                            <div className="flex-col flex items-start w-full">
                              <span className="font-aurora-themewagon-com-semantic-heading-6 font-[number:var(--aurora-themewagon-com-semantic-heading-6-font-weight)] text-aurorathemewagoncomcatskill-white text-[length:var(--aurora-themewagon-com-semantic-heading-6-font-size)] tracking-[var(--aurora-themewagon-com-semantic-heading-6-letter-spacing)] leading-[var(--aurora-themewagon-com-semantic-heading-6-line-height)] [font-style:var(--aurora-themewagon-com-semantic-heading-6-font-style)]">
                                {item.label}
                              </span>
                            </div>
                          </div>
                          <img
                            className="w-3 h-3"
                            alt="Dropdown"
                            src="/component-1-6.svg"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* Collapse button */}
      <div className="flex h-14 items-center justify-center border-t border-[#262d30]">
        <Button
          variant="ghost"
          className="flex items-center px-[46px] py-1.5 w-full h-full rounded-none text-aurorathemewagoncomcatskill-white hover:bg-transparent"
        >
          <img
            className="w-3 h-3 mr-1.5"
            alt="Collapse"
            src="/component-1-41.svg"
          />
          <span className="font-medium text-xs leading-[14.4px] [font-family:'Plus_Jakarta_Sans',Helvetica] tracking-[0]">
            Collapse
          </span>
        </Button>
      </div>
    </aside>
  );
};
