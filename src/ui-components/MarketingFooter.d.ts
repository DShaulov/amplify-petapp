/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MarketingFooterOverridesProps = {
    MarketingFooter?: PrimitiveOverrideProps<FlexProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    Simplification?: PrimitiveOverrideProps<ViewProps>;
    Vector401825494?: PrimitiveOverrideProps<IconProps>;
    Vector401825495?: PrimitiveOverrideProps<IconProps>;
    Vector401825496?: PrimitiveOverrideProps<IconProps>;
    Vector401825497?: PrimitiveOverrideProps<IconProps>;
    Vector401825498?: PrimitiveOverrideProps<IconProps>;
    Vector401825499?: PrimitiveOverrideProps<IconProps>;
    Vector401825500?: PrimitiveOverrideProps<IconProps>;
    Vector401825501?: PrimitiveOverrideProps<IconProps>;
    Vector401825502?: PrimitiveOverrideProps<IconProps>;
    "Logo Text"?: PrimitiveOverrideProps<IconProps>;
    "\u00A9 2024 Adoptadog"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MarketingFooterProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "medium";
} & {
    overrides?: MarketingFooterOverridesProps | undefined | null;
}>;
export default function MarketingFooter(props: MarketingFooterProps): React.ReactElement;
