/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NavBarHeaderOverridesProps = {
    NavBarHeader?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32129767076"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    Simplification?: PrimitiveOverrideProps<ViewProps>;
    Vector3878531?: PrimitiveOverrideProps<IconProps>;
    Vector3878532?: PrimitiveOverrideProps<IconProps>;
    Vector3878533?: PrimitiveOverrideProps<IconProps>;
    Vector3878534?: PrimitiveOverrideProps<IconProps>;
    Vector3878535?: PrimitiveOverrideProps<IconProps>;
    Vector3878536?: PrimitiveOverrideProps<IconProps>;
    Vector3878537?: PrimitiveOverrideProps<IconProps>;
    Vector3878538?: PrimitiveOverrideProps<IconProps>;
    Vector3878539?: PrimitiveOverrideProps<IconProps>;
    "Logo Text"?: PrimitiveOverrideProps<IconProps>;
    RegisterDog?: PrimitiveOverrideProps<IconProps>;
    "Frame 32129767081"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    SignButton?: PrimitiveOverrideProps<FlexProps>;
    "Button Icon40371783"?: PrimitiveOverrideProps<IconProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    "Button Icon40371785"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NavBarHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "medium";
} & {
    overrides?: NavBarHeaderOverridesProps | undefined | null;
}>;
export default function NavBarHeader(props: NavBarHeaderProps): React.ReactElement;
