/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { ButtonProps, FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type RegisterFormOverridesProps = {
    RegisterForm?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Register Title"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    Username?: PrimitiveOverrideProps<TextFieldProps>;
    Password?: PrimitiveOverrideProps<TextFieldProps>;
    ConfirmPassword?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    "Error Frame"?: PrimitiveOverrideProps<FlexProps>;
    ErrorMessage?: PrimitiveOverrideProps<TextProps>;
    "Register Buttons"?: PrimitiveOverrideProps<FlexProps>;
    SignInButton?: PrimitiveOverrideProps<ButtonProps>;
    "Register Frame"?: PrimitiveOverrideProps<FlexProps>;
    "Already a member?"?: PrimitiveOverrideProps<TextProps>;
    Login?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type RegisterFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RegisterFormOverridesProps | undefined | null;
}>;
export default function RegisterForm(props: RegisterFormProps): React.ReactElement;
