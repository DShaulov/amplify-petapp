/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { ButtonProps, FlexProps, IconProps, ImageProps, SelectFieldProps, StepperFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type RegisterDogFormOverridesProps = {
    RegisterDogForm?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Register Dog"?: PrimitiveOverrideProps<TextProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    ProfileImage?: PrimitiveOverrideProps<ImageProps>;
    UploadImage?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Breed?: PrimitiveOverrideProps<TextFieldProps>;
    Color?: PrimitiveOverrideProps<TextFieldProps>;
    "Age-Gender Frame"?: PrimitiveOverrideProps<FlexProps>;
    Age?: PrimitiveOverrideProps<StepperFieldProps>;
    Gender?: PrimitiveOverrideProps<SelectFieldProps>;
    AboutTextArea?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ErrorMessage?: PrimitiveOverrideProps<FlexProps>;
    "\uD83D\uDD12Icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    frame?: PrimitiveOverrideProps<FlexProps>;
    content?: PrimitiveOverrideProps<FlexProps>;
    heading?: PrimitiveOverrideProps<TextProps>;
    ErrorBody?: PrimitiveOverrideProps<TextProps>;
    "Register Buttons"?: PrimitiveOverrideProps<FlexProps>;
    RegisterBtn?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type RegisterDogFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RegisterDogFormOverridesProps | undefined | null;
}>;
export default function RegisterDogForm(props: RegisterDogFormProps): React.ReactElement;
