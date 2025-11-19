import * as React from "react";
import { useMediaQuery } from "./use-media-query";
import { DeviceContext } from "@/services/providers/DeviceProvider";

const MOBILE_BREAKPOINT = 1024;

export function useIsMobile() {
    const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const isMobileFromServer = React.useContext(DeviceContext);

    // server side hydrated to avoid UI flickering
    return isMobileFromServer || isMobile;
}

export const DesktopView: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const isMobile = useIsMobile();

    if (isMobile) return null;

    return children;
};

export const MobileView: React.FC<React.PropsWithChildren> = ({ children }) => {
    const isMobile = useIsMobile();

    if (!isMobile) return null;

    return children;
};
