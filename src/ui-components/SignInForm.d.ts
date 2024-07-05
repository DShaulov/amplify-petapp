/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { ButtonProps, FlexProps, IconProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type SignInFormOverridesProps = {
    SignInForm?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Sign In"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    Username?: PrimitiveOverrideProps<TextFieldProps>;
    Password?: PrimitiveOverrideProps<TextFieldProps>;
    ErrorMessage?: PrimitiveOverrideProps<FlexProps>;
    "\uD83D\uDD12Icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    frame?: PrimitiveOverrideProps<FlexProps>;
    content?: PrimitiveOverrideProps<FlexProps>;
    heading?: PrimitiveOverrideProps<TextProps>;
    ErrorBody?: PrimitiveOverrideProps<TextProps>;
    "Sign In Button Frame"?: PrimitiveOverrideProps<FlexProps>;
    SignInButton?: PrimitiveOverrideProps<ButtonProps>;
    "Register Frame"?: PrimitiveOverrideProps<FlexProps>;
    "Not a member?"?: PrimitiveOverrideProps<TextProps>;
    "Register now"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SignInFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SignInFormOverridesProps | undefined | null;
}>;
export default function SignInForm(props: SignInFormProps): React.ReactElement;
