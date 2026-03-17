import { CSSProperties, ElementType, ReactNode } from "react";
import clsx from "clsx";

type BoundedProps = {
    as?: ElementType;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
};

export function Bounded({
    as = "section",
    className,
    children,
    ...restProps
}: BoundedProps) {
    const Comp = as as any;

    return (
        <Comp
            className={clsx(
                "px-4 first:pt-10 md:px-6",
                className
            )}
            {...restProps}
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center">{children}</div>
        </Comp>
    );
}