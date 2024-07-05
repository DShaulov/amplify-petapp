/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function PetsAvailableTitle(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="2617px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="12px 466px 12px 466px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PetsAvailableTitle")}
      {...rest}
    >
      <Text
        fontFamily="Rubik"
        fontSize="64px"
        fontWeight="400"
        color="rgba(40,60,64,1)"
        lineHeight="74.5px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="4.01px"
        width="2619px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Dogs Available For Adoption:"
        {...getOverrideProps(overrides, "AvailableDog")}
      ></Text>
    </Flex>
  );
}
