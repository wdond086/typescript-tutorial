type LooseAutoComplete<T extends string> = T | Omit<string, T>;

type IconSize = LooseAutoComplete<"sm" | "xs">;

interface IconProps {
    size: IconSize;
}

export const Icon = (props: IconProps) => {
    return <></>;
};

const Comp1 = () => {
    return (
        <>
            <Icon size="xs"></Icon>
            <Icon size="something"></Icon>
        </>
    );
};