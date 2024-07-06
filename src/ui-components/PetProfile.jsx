/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function PetProfile(props) {
  const { pet, overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="328px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="25px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PetProfile")}
      {...rest}
    >
      <Image
        width="160px"
        height="160px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        border="4px SOLID rgba(191,64,64,1)"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={pet?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Details")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="25px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={pet?.name}
          {...getOverrideProps(overrides, "Name")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Breed: "}${pet?.breed}`}
          {...getOverrideProps(overrides, "Breed")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Age: "}${pet?.age}`}
          {...getOverrideProps(overrides, "Age")}
        ></Text>
      </Flex>
      <Button
        width="174px"
        height="unset"
        shrink="0"
        backgroundColor="rgba(191,64,64,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="View Profile"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
