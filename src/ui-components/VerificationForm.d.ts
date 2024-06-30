/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type VerificationFormOverridesProps = {
    VerificationForm?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "We Emailed You"?: PrimitiveOverrideProps<TextProps>;
    "Verification Text Frame"?: PrimitiveOverrideProps<FlexProps>;
    "Your code is on the way. To proceed, enter the code you received. It may take a minute to arrive."?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    Code?: PrimitiveOverrideProps<TextFieldProps>;
    "Error Frame"?: PrimitiveOverrideProps<FlexProps>;
    ErrorMessage?: PrimitiveOverrideProps<TextProps>;
    "Confirm Resend Frame"?: PrimitiveOverrideProps<FlexProps>;
    SignInButton?: PrimitiveOverrideProps<ButtonProps>;
    ResendBtn?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type VerificationFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: VerificationFormOverridesProps | undefined | null;
}>;
export default function VerificationForm(props: VerificationFormProps): React.ReactElement;
