/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image } from "@aws-amplify/ui-react";
export default function BannerHolder(props) {
  const { pet, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "BannerHolder")}
      {...rest}
    >
      <Image
        width="2617px"
        height="1032px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://amplify-petapp-storage-6f5fa300511cc-staging.s3.eu-north-1.amazonaws.com/public/Banner.png"
        {...getOverrideProps(overrides, "Banner 1")}
      ></Image>
    </Flex>
  );
}
