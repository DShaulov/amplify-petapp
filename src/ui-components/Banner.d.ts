/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type BannerOverridesProps = {
    Banner?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Descriptor?: PrimitiveOverrideProps<TextProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    DogPng?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type BannerProps = React.PropsWithChildren<Partial<ViewProps> & {
    src?: String;
} & {
    overrides?: BannerOverridesProps | undefined | null;
}>;
export default function Banner(props: BannerProps): React.ReactElement;
