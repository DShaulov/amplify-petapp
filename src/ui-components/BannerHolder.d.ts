/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pet } from "../models";
import { FlexProps, ImageProps } from "@aws-amplify/ui-react";
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
export declare type BannerHolderOverridesProps = {
    BannerHolder?: PrimitiveOverrideProps<FlexProps>;
    "Banner 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type BannerHolderProps = React.PropsWithChildren<Partial<FlexProps> & {
    pet?: Pet;
} & {
    overrides?: BannerHolderOverridesProps | undefined | null;
}>;
export default function BannerHolder(props: BannerHolderProps): React.ReactElement;
