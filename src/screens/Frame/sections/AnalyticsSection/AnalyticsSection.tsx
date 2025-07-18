import React from "react";

export const AnalyticsSection = (): JSX.Element => {
  return (
    <footer className="flex h-14 items-center justify-between px-10 py-0 w-full bg-aurorathemewagoncombunker">
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1">
          <span className="font-light text-aurorathemewagoncomgull-gray text-xs leading-[19.2px]">
            Thank you for creating with
          </span>
          <strong className="font-aurora-themewagon-com-semantic-strong text-aurorathemewagoncomgull-gray text-xs leading-[19.2px]">
            Aurora
          </strong>
        </div>

        <div className="flex items-center gap-1 ml-1">
          <span className="font-light text-aurorathemewagoncomgull-gray text-xs leading-[19.2px]">
            | 2025 ©
          </span>
          <a
            className="font-light text-aurorathemewagoncomcornflower-blue text-xs leading-[19.2px] hover:underline"
            href="https://themewagon.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            ThemeWagon
          </a>
        </div>
      </div>

      <div className="flex items-center">
        <span className="font-aurora-themewagon-com-plus-jakarta-sans-light text-aurorathemewagoncomgull-gray text-xs leading-[19.2px]">
          v1.3.1
        </span>
      </div>
    </footer>
  );
};
